import { httpsCallable, type HttpsCallable } from 'firebase/functions';
import { useState } from 'react';
import { message } from 'antd';
import { getFunctions } from 'firebase/functions';
import { CheckOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { validateEmail } from '../../utils/utils';

const UnsubscribePopover = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [messageApi, contextHolder] = message.useMessage();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onInputSubmit = async () => {
    if (!email) return messageApi.error(t('home.emailRequired'));
    if (!validateEmail(email)) return messageApi.error(t('home.invalidEmail'));

    const functions = getFunctions();
    const callableAddEmailToWaitlist: HttpsCallable<
      { email: string },
      { success: boolean; message: string }
    > = httpsCallable(functions, 'unsubscribeEmailFromWaitlist');
    const { data } = await callableAddEmailToWaitlist({ email });
    if (data.success) {
      await messageApi.success(t('home.emailSuccessfullyUnsubscribed'));
      setEmail('');
    } else messageApi.error(data.message);
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="text-white">{t('home.unsubscribeDescription')}</span>
      <div className="flex gap-5">
        {contextHolder}
        <Input
          type="text"
          placeholder={t('home.inputPlaceholder')}
          value={email}
          onChange={onInputChange}
        />
        <Button
          type="primary"
          className="self-center"
          shape="circle"
          onClick={onInputSubmit}
          icon={<CheckOutlined />}
        />
      </div>
    </div>
  );
};

export default UnsubscribePopover;
