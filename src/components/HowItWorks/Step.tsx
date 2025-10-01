import useIsMobile from '../../utils/useIsMobile';
import useIntersectionObserver from '../../utils/useIntersectionObserver';

interface StepProps {
  number: number;
  title: string;
  description: string;
  Svg: React.ElementType;
  reverse?: boolean;
}

const Step = ({ number, title, description, Svg, reverse }: StepProps) => {
  const isMobile = useIsMobile();
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <div
      className={`flex items-center md:gap-20 ${reverse && 'flex-col md:flex-row-reverse'} flex-col-reverse md:flex-row`}
    >
      <div className="flex items-center gap-3">
        {!isMobile && (
          <span className="text-white-50 font-[Montserrat] text-8xl font-bold">{number}.</span>
        )}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-2xl font-bold md:text-3xl">{title}</span>
          <p className="text-lg leading-[1.125] font-light">{description}</p>
        </div>
      </div>
      <Svg ref={ref} className={`h-2/3 w-2/3 ${isIntersecting ? 'svg-animated' : 'svg-initial'}`} />
    </div>
  );
};

export default Step;
