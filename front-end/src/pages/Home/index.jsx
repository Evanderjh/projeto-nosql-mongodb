import React, { Suspense } from 'react';

import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
const Card = React.lazy(() => import('../../componentes/Card'));

const Home = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="container"><h3 className="m-5">Carregando...</h3></div>}>
                <Card />
            </Suspense>
            <Footer />
        </>
    );
}

export default Home;
