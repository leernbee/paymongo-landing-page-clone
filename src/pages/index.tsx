import Hero from '@/components/Hero/Hero';
import Partners from '@/components/Partners/Partners';
import TabbedFeatures from '@/components/TabbedFeatures/TabbedFeatures';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Simplifying payments for the modern business | Paymongo"
          description="Paymongo website clone"
        />
      }
    >
      <>
        <Hero />
        <Partners />
        <TabbedFeatures />
      </>
    </Main>
  );
};

export default Index;
