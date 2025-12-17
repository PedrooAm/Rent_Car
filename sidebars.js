// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
   
    {
      type: 'category',
      label: 'Sobre Nós',
      items: [
        'about/quem-somos',
        'about/missao-visao',
        'about/historia',
      ],
    },
    {
      type: 'category',
      label: 'Frotas',
      items: [
        'frota/carros-economicos',
        'frota/carros-premium',
        'frota/carrinhas-utilitarios',
        'frota/especificacoes',
      ],
    },
    {
      type: 'category',
      label: 'Serviços',
      items: [
        'servicos/aluguel-diario',
        'servicos/aluguel-mensal',
        'servicos/seguro-viagem',
        'servicos/entrega-domicilio',
      ],
    },
    {
      type: 'category',
      label: 'Promoções',
      items: [
        'promocoes/desconto-corporativo',
      ],
    },
    {
      type: 'category',
      label: 'Informações',
      items: [
        'info/precos',
        'info/documentos-necessarios',
        'info/politica-cancelamento',
        'info/faq',
      ],
    },
  ],
};

export default sidebars;
