import React, { Suspense } from 'react';

import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
const CardLojas = React.lazy(() => import('../../componentes/CardLojas'));

const Loja = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<h3 className="mr-5">Carregando...</h3>}>
                <CardLojas />
            </Suspense>
            <Footer />
        </>
    );
}

export default Loja;
