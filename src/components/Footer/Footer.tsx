import { useTranslation } from 'react-i18next';
import { InstagramOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

import UnsubscribePopover from './UnsubscribePopover';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 flex flex-col items-center gap-3 px-5 pb-5 md:px-60">
      <div className="flex items-center gap-2">
        <span className="text-white-80 font-light">{t('home.socialsLabel')}</span>
        <InstagramOutlined className="text-2xl" />
        <Popover placement="top" content={<UnsubscribePopover />} trigger="click" destroyOnHidden>
          <span className="text-white-80 ml-5 cursor-pointer text-sm font-light underline">
            {t('home.unsubscribeLabel')}
          </span>
        </Popover>
      </div>
      <span className="text-white-50 text-[clamp(1rem,1vw,1.5rem)] font-light">
        {t('home.footerTitle')}
      </span>
    </div>
  );
};

export default Footer;
