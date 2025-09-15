import { useTranslation } from 'react-i18next';

const PrivacyPolicyTooltip = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t('home.tooltipTextRow1')}</div>
      <div>
        <span>{t('home.tooltipTextRow2')}</span>
        <a className="">{t('home.tooltipTextRow3')}</a>
      </div>
    </div>
  );
};

export default PrivacyPolicyTooltip;
