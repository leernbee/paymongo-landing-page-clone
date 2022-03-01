import { ReactNode } from 'react';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    {props.meta}

    <div>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  </div>
);

export { Main };
