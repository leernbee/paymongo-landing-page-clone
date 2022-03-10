import Businesses from '@/components/Businesses/Businesses';
import Demo from '@/components/Demo/Demo';
import Ecosystem from '@/components/Ecosystem/Ecosystem';
import Hero from '@/components/Hero/Hero';
import Metrics from '@/components/Metrics/Metrics';
import Partners from '@/components/Partners/Partners';
import TabbedFeatures from '@/components/TabbedFeatures/TabbedFeatures';
import Testimonials from '@/components/Testimonials/Testimonials';
import Tools from '@/components/Tools/Tools';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="For educational purpose only"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <>
        <Hero />
        <Partners />
        <TabbedFeatures />
        <Tools />
        <Businesses />
        <Testimonials />
        <Demo />
        <Metrics />
        <Ecosystem />
      </>
    </Main>
  );
};

export default Index;
