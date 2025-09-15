import { useTranslation } from 'react-i18next';
import { InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20 flex flex-col items-center gap-3 px-5 pb-5 md:px-60">
      <div className="flex gap-2">
        <span className="text-white-80 font-light">{t('home.socialsLabel')}</span>
        <InstagramOutlined className="text-2xl" />
      </div>
      <span className="text-white-50 text-[clamp(1rem,1vw,1.5rem)] font-light">
        {t('home.footerTitle')}
      </span>
    </div>
  );
};

export default Footer;
