import { useTranslation } from 'react-i18next';
import { SvgEnjoy, SvgShare, SvgWishlist } from '../../assets';
import StepComponent from './Step';

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center gap-15 px-5 py-10 md:py-20 xl:px-60 xl:py-40">
      <h2 className="text-center text-[clamp(2rem,4vw,5rem)] leading-none font-bold md:text-left">
        {t('home.stepsTitle')}
      </h2>
      <div className="flex flex-col justify-center gap-10">
        <StepComponent
          number={1}
          title={t('home.steps.0.title')}
          description={t('home.steps.0.description')}
          Svg={SvgWishlist}
        />
        <StepComponent
          number={2}
          title={t('home.steps.1.title')}
          description={t('home.steps.1.description')}
          Svg={SvgShare}
          reverse
        />
        <StepComponent
          number={3}
          title={t('home.steps.2.title')}
          description={t('home.steps.2.description')}
          Svg={SvgEnjoy}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
