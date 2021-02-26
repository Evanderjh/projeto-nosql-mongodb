import React, { Suspense } from 'react';

import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
const MeiosDeContato = React.lazy(() => import('../../componentes/MeiosDeContato'));
const CardComentario = React.lazy(() => import('../../componentes/CardComentario'));

const Contato = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="container"><h3 className="m-5">Carregando...</h3></div>}>
                <MeiosDeContato />
            </Suspense>
            <Suspense fallback={<div className="container"><h3 className="m-5">Carregando...</h3></div>}>
                <CardComentario />
            </Suspense>
            <Footer />
        </>
    );
}

export default Contato;
