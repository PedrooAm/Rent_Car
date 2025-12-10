import React, { useLayoutEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '@site/src/css/custom.css';

export default function Home() {
    useLayoutEffect(() => {
        const cls = 'hide-navbar-page';
        document.body.classList.add(cls);
        return () => document.body.classList.remove(cls);
    }, []);

    return (
        <Layout title="NOSSO Rent a Car" description="Alugue carros novos com preços justos — serviço 24/7 e sem taxas ocultas.">
            <main className="container margin-vert--lg">
                <h1 className="hero__title">NOSSO Rent a Car —  A sua liberdade de conduzir</h1>
                <p className="hero__subtitle">Frota moderna, atendimento premium e suporte 24/7.</p>

                <hr />

                <section>
                    <h2>Por que escolher a NOSSO Rent a Car?</h2>
                    <ul>
                        <li>Frota nova e </li>
                        <li>Preço transparente (sem taxas ocultas)</li>
                        <li>Reservas rápidas online</li>
                        <li>Seguro disponível</li>
                        <li>Retirada em várias localidades</li>
                    </ul>
                </section>

                <hr />

                <section>
                    <h2>Categorias</h2>
                    <h3>Econômico</h3>
                    <p>Baixo consumo, ideal para cidade.</p>
                    <h3>Conforto</h3>
                    <p>SUVs e sedãs para família e viagens.</p>
                    <h3>Premium</h3>
                    <p>Carros de alto padrão para ocasiões especiais.</p>
                </section>

                <hr />

                <section>
                    <h2>Promoções</h2>
                    <table>
                        <thead>
                            <tr><th>Duração</th><th>Desconto</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>3–7 dias</td><td>10%</td></tr>
                            <tr><td>8–14 dias</td><td>20%</td></tr>
                            <tr><td>15+ dias</td><td>30%</td></tr>
                        </tbody>
                    </table>
                </section>

                <hr />

                <Link className="button button--primary" to="/reservar">Reservar agora</Link>

                <hr />

                <section>
                    <h2>Contato</h2>
                    <p>Telefone: (11) 98765-4321</p>
                    <p>Email: contato@nosso-rentacar.com.br</p>
                </section>
            </main>
        </Layout>
    );
}