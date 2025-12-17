import React, { useLayoutEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '@site/src/css/custom.css';

export default function Home() {
  // Efeito para esconder a navbar apenas na homepage
  useLayoutEffect(() => {
    const cls = 'hide-navbar-page';
    document.body.classList.add(cls);
    return () => document.body.classList.remove(cls);
  }, []);

  return (
    <Layout 
      title="NOSSO Rent a Car Premium" 
      description="Aluguer de luxo e conforto em Portugal. Frota moderna e serviço 24/7 sem taxas ocultas."
    >
      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">
            NOSSO Rent a Car | A sua liberdade de conduzir
          </h1>
          <p className="hero__subtitle">
            Frota moderna, atendimento premium e suporte 24/7.
          </p>
          <div className="hero__buttons">
            <Link className="button button--primary" to="/info/instalacao">
              Começar Agora
            </Link>
          </div>
        </div>
      </header>

      <main className="container margin-vert--lg">
        
        {/* PORQUE ESCOLHER */}
        <section className="margin-vert--xl">
          <h2 className="text--center">Por que escolher o serviço NOSSO?</h2>
          <div className="features">
            <div className="feature">
              <h3>Frota de Última Geração</h3>
              <p>Só alugamos modelos novos, equipados com o máximo de segurança e tecnologia para garantir o seu conforto e tranquilidade.</p>
            </div>
            <div className="feature">
              <h3>Transparência Total</h3>
              <p>Preço garantido. Sem surpresas, sem taxas ocultas. O valor da reserva é o valor final.</p>
            </div>
            <div className="feature">
              <h3>Suporte 24/7</h3>
              <p>Precisa de assistência? A nossa equipa premium está disponível 24 horas por dia em qualquer ponto de Portugal.</p>
            </div>
          </div>
        </section>

        <hr className="margin-vert--xl" />

        {/* FROTA */}
        <section className="margin-vert--xl">
          <h2 className="text--center">Descubra a Nossa Frota</h2>    
          <div className="categories-grid">
            <div className="category-card">
              <h3>Compacto & Eficiente</h3>
              <p>Ideal para a cidade. Fácil de estacionar e super económico, perfeito para explorar sem preocupações.</p>
            </div>
            <div className="category-card">
              <h3>Família & Conforto</h3>
              <p>SUVs espaçosos com grande bagageira. Conforto e segurança para longas viagens em família.</p>
            </div>
            <div className="category-card">
              <h3>Luxo & Exclusividade</h3>
              <p>Modelos premium topo de gama, desde elétricos desportivos a sedãs executivos.</p>
            </div>
          </div>
        </section>

        <hr className="margin-vert--xl" />

        {/* PLANOS E TABELA */}
        <section className="margin-vert--xl">
          <h2 className="text--center">Planos de Desconto por Duração</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Duração do Aluguer</th>
                  <th>Desconto Aplicado</th>
                  <th>Ideal para</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3–7 dias</td>
                  <td>10%</td>
                  <td>Fins de Semana Prolongados</td>
                </tr>
                <tr>
                  <td>8–14 dias</td>
                  <td>20%</td>
                  <td>Férias de Verão ou Viagens de Negócios</td>
                </tr>
                <tr>
                  <td>15+ dias</td>
                  <td>30%</td>
                  <td>Estadias Longas / Aluguer Mensal</td>
                </tr>
              </tbody>
            </table>
            
            <div className="table-button-wrapper">
              
            <Link className="button button--primary" to="/docs/info/instalação">
                Ver Frota & Reservar Agora
              </Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}