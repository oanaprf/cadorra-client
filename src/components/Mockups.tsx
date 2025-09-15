import { useTranslation } from 'react-i18next';
import { ImgMockups } from '../assets';

const Mockups = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-30 flex w-fit flex-col self-end px-8 text-[clamp(1.5rem,4vw,5rem)] font-bold md:mt-70 md:px-50 xl:px-80">
        <span>{t('home.mockupsTitleRow1')}</span>
        <span>{t('home.mockupsTitleRow2')}</span>
      </div>

      <img src={ImgMockups} alt="mockup" className="-mt-25 mb-30 md:-mt-80 xl:-mt-120" />
    </>
  );
};

export default Mockups;
