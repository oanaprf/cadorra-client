import useIncreaseVisitCount from './utils/useIncreaseVisitCount';
import { HowItWorks, Footer, Mockups } from './components';
import Main from './components/Main';

const App = () => {
  useIncreaseVisitCount();

  return (
    <div className="flex min-h-screen min-w-screen flex-col overflow-x-hidden bg-[radial-gradient(circle_at_12%_8%,_#6DCFCC_0%,_#B8A4F3_23%,_#E3BAE3_47%,_#6DCFCC_69%,_#94C0E4_88%,_#6DCFCC_100%)] md:pt-3">
      <h1 className="px-5 text-[clamp(3rem,3.5vw,5rem)] font-normal md:px-20">Cadorra</h1>
      <Main />
      <Mockups />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default App;
