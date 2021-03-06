import React, { Suspense, useEffect } from 'react';
import ReactGA from 'react-ga';
import global from './types';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ScrollReset } from './Atomic/Molecules/ScrollReset';
import { Urls } from './utils/urls';
import Loading from './Atomic/Pages/Loading/Loading.component';
import Error from './Atomic/Pages/Error/Error.component';

const Homepage = React.lazy(() => {
  return Promise.all([
    import('./Atomic/Pages/Homepage/Homepage.component'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});

const CrownClothing = React.lazy(() => {
  return Promise.all([
    import('./Atomic/Pages/CrownClothing/Crown-clothing.component'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});

const Natours = React.lazy(() => {
  return Promise.all([
    import('./Atomic/Pages/Natours/Natours.component'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});

const About = React.lazy(() => {
  return Promise.all([
    import('./Atomic/Pages/About/About.component'),
    new Promise((resolve) => setTimeout(resolve, 1500)),
  ]).then(([moduleExports]) => moduleExports);
});

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    if (!window.GA_INITALIZED) {
      ReactGA.initialize('UA-73960020-1');
      window.GA_INITALIZED = true;
    }
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}

function App() {
  usePageViews();
  return (
    <div className='app'>
      <ScrollReset>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              path={Urls.mainNavigation.homepage}
              exact
              component={Homepage}
            />
            <Route
              path={Urls.caseStudys.crownClothing}
              exact
              component={CrownClothing}
            />
            <Route path={Urls.caseStudys.natours} exact component={Natours} />
            <Route path={Urls.mainNavigation.about} exact component={About} />
            <Route component={Error} />
          </Switch>
        </Suspense>
      </ScrollReset>
    </div>
  );
}

export default App;
