import { httpsCallable, type HttpsCallable } from 'firebase/functions';
import { useState } from 'react';
import { message } from 'antd';
import { getFunctions } from 'firebase/functions';
import { CheckOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { validateEmail } from '../utils/utils';

const Waitlist = () => {
  const { t } = useTranslation();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [messageApi, contextHolder] = message.useMessage();

  const toggleInputVisible = () => setIsInputVisible((inputVisible: boolean) => !inputVisible);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onInputSubmit = async () => {
    if (!email) return messageApi.error(t('home.emailRequired'));
    if (!validateEmail(email)) return messageApi.error(t('home.invalidEmail'));

    const functions = getFunctions();
    const callableAddEmailToWaitlist: HttpsCallable<
      { email: string; location: string },
      { success: boolean; message: string }
    > = httpsCallable(functions, 'addEmailToWaitlist');
    const { data } = await callableAddEmailToWaitlist({
      email,
      location: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    if (data.success) {
      await messageApi.success(t('home.emailSuccessfullyAdded'));
      toggleInputVisible();
    } else messageApi.error(data.message);
  };

  return isInputVisible ? (
    <div className="flex items-center gap-3 xl:w-1/2">
      {contextHolder}
      <Input
        type="text"
        placeholder={t('home.inputPlaceholder')}
        value={email}
        onChange={onInputChange}
        size="large"
      />
      <Button
        type="primary"
        className="self-center"
        size="large"
        shape="circle"
        onClick={onInputSubmit}
        icon={<CheckOutlined />}
      />
    </div>
  ) : (
    <Button
      type="primary"
      className="self-center xl:w-1/2"
      size="large"
      onClick={toggleInputVisible}
    >
      <span className="px-5 font-semibold uppercase">{t('home.buttonText')}</span>
    </Button>
  );
};

export default Waitlist;
