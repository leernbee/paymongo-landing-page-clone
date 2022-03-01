import Hero from '@/components/Hero/Hero';
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
      </>
    </Main>
  );
};

export default Index;
