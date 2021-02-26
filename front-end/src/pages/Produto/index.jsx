import React, { Suspense } from 'react';

import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
const Categoria = React.lazy(() => import('../../componentes/Categoria'));
const Vitrine = React.lazy(() => import('../../componentes/Vitrine'));

const Produto = () => {
    return (
        <>
            <Header />
            <main className="container">
                <h1 className="mt-4">Produtos</h1>
                <hr />
                <div className="row">
                    <Suspense fallback={<h3 className="mr-5 my-3">Carregando...</h3>}>
                        <Categoria />
                    </Suspense>
                    <Suspense fallback={<h3 className="ml-5 my-3">Carregando...</h3>}>
                        <Vitrine />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Produto;
