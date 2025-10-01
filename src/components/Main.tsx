import { useTranslation } from 'react-i18next';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { SvgSingleGift } from '../assets';
import { Waitlist, PrivacyPolicyTooltip } from './index';
import useIsMobile from '../utils/useIsMobile';

const Main = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col-reverse items-center gap-5 px-6 py-30 md:flex-row md:gap-20 md:px-10 2xl:px-50">
      <div className="flex flex-col items-center gap-5 md:w-2/3">
        <h2 className="text-center text-[clamp(2rem,4vw,5rem)] leading-none font-bold">
          {t('home.title')}
        </h2>
        <p className="text-center text-[clamp(1.125rem,1.5vw,3rem)] font-light">
          {t('home.description')}
        </p>

        <div className="flex w-full items-center justify-center gap-2">
          <Waitlist />
          <Tooltip title={<PrivacyPolicyTooltip />} placement={isMobile ? 'bottom' : 'right'}>
            <InfoCircleOutlined className="text-md" style={{ color: '#ffffff99' }} />
          </Tooltip>
        </div>
      </div>
      <SvgSingleGift className="floating h-1/2 w-1/2" />
    </div>
  );
};

export default Main;
