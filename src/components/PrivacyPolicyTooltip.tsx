import { useTranslation } from 'react-i18next';

const PrivacyPolicyTooltip = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t('home.tooltipTextRow1')}</div>
      <div>
        <span>{t('home.tooltipTextRow2')}</span>
        <a
          href="/privacy-policy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {t('home.tooltipTextRow3')}
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicyTooltip;
