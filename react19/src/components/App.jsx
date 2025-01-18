import React, { Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';

// const Section = lazy(() => import('remoteApp/SectionComponent'));
// const Nav = lazy(() => import('remoteApp/NavComponent'));

const Section = React.lazy(() => import('remoteApp/AllComponents').then(module => ({ default: module.Section })));
const Nav = React.lazy(() => import('remoteApp/AllComponents').then(module => ({ default: module.Nav })));
const AppComp = lazy(() => import('newApp/AppComp').catch(() => ({ default: () => <div>Failed to load MainContent</div> })));


const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={'Loading...'}>
                <Nav />
                <Section />
                <AppComp />
            </Suspense>
            <Footer />
        </>
     );
}
 
export default App;