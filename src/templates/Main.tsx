import { ReactNode } from 'react';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="overflow-hidden antialiased">
    {props.meta}

    <div className="font-serif">
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  </div>
);

export { Main };
