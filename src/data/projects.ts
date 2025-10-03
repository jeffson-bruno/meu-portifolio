import { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "construloc",
    name: "Construloc (Aluguel de Equipamentos)",
    description:
      "Sistema de locação com cadastro de clientes, contratos, financeiro e dashboards (Laravel + Vue/Blade).",
    technologies: ["PHP", "Laravel", "Vue.js", "Blade", "Tailwind CSS", "MySQL"],
    images: [
      {src: "/img/construloc-admin.png", alt: "Tela Inicial do Construloc"},
      { src: "/imgs/projetos/construloc-dashboard-admin.png", alt: "" },
      { src: "/imgs/projetos/construloc-operator.png", alt: "" },
      { src: "/imgs/projetos/construloc-admin.png", alt: "" },
      { src: "/imgs/projetos/construloc-start-rental.png", alt: "" },
    ],
    liveUrl: "https://construloc.online/login",
    extra: {
      credentials: {
        admin:   { user: "admin@construloc.com",    pass: "818181" },
        operador:{ user: "operador@construloc.com", pass: "919191" },
      },
    },
  },
  // ===== BitClin v1 =====
  {
    slug: "bitclin-v1",
  name: "BitClin v1 (Gestão de Clínica)",
  description:
    "Versão aberta: agendamentos, pacientes, prontuário e rotinas clínicas. Código disponível para estudo.",
  summary:
    "O **BitClin v1** centraliza o fluxo básico de uma clínica: cadastro de pacientes, agenda médica, registros (anamnese, receitas, atestados, exames) e geração de histórico clínico. Foco em simplicidade e estudo do stack Laravel + Vue.",
  highlights: [
    "Agenda com preço de consulta e status do atendimento",
    "Cadastro e gestão de pacientes (dados pessoais e clínicos)",
    "Prontuário com anamnese, receitas, atestados e pedidos de exames",
    "Receituário com conteúdo detalhado e histórico de emissões",
    "Exames: cadastro, dias/turnos e marcação por paciente",
    "Exportação/geração de PDF (histórico clínico)",
    "Stack: Laravel + Blade/Vue + Tailwind + MySQL",
  ],
    technologies: ["PHP", "Laravel", "Vue.js", "Blade", "Tailwind CSS", "MySQL"],
    images: [
      { src: "/imgs/projetos/bitclin-v1-inicial.png", alt: "" },
      { src: "/imgs/projetos/Pagina-de-Login.png", alt: "" },
      { src: "/imgs/projetos/Dasboard-admin.png", alt: "" },
      { src: "/imgs/projetos/Cadastro-pacientes.png", alt: "" },
      { src: "/imgs/projetos/Cadastro-pacientes-2.png", alt: "" },
      { src: "/imgs/projetos/cadastro-usuarios.png", alt: "" },
      { src: "/imgs/projetos/cadastro-exames.png", alt: "" },
      { src: "/imgs/projetos/agenda-medica.png", alt: "" },
      { src: "/imgs/projetos/financeiro.png", alt: "" },
    ],
    repoUrl: "https://github.com/jeffson-bruno/bitclin.git",
  },

  // ===== SellFlow =====
  {
   slug: "SellFlow",
  name: "Sistema de Vendas (simples)",
  description:
    "CRUD de produtos/clientes, registro de vendas e parcelamento básico. Ideal para estudo/portfólio.",
  summary:
    "**SellFlow** é um mini-ERP de vendas com cadastro de produtos e clientes, formas de pagamento e registro de vendas com parcelamento. Inclui dashboard com totais (vendas, produtos, faturamento) para visão rápida.",
  highlights: [
    "Dashboard: total de vendas, total de produtos e faturamento acumulado",
    "CRUD de Produtos (cadastrar/editar/excluir) na mesma página",
    "CRUD de Clientes (nome, e-mail, telefone)",
    "Formas de pagamento (criar/editar/excluir)",
    "Vendas: seleção de produtos, quantidades e subtotal automático",
    "Parcelas: quantidade, data da primeira parcela e edição de datas",
    "Escolha do cliente e forma de pagamento na venda",
    "Stack: Laravel + Blade + Tailwind + MySQL",
  ],
    technologies: ["PHP", "Laravel", "Blade", "MySQL"],
    images: [
      { src: "/imgs/projetos/Benner.png", alt: "" },
      { src: "/imgs/projetos/Login.png", alt: "" },
      { src: "/imgs/projetos/cadastro-usuario.png", alt: "" },
      { src: "/imgs/projetos/dashboard.png", alt: "" },
      { src: "/imgs/projetos/cadastro-produtos.png", alt: "" },
      { src: "/imgs/projetos/lista-clientes.png", alt: "" },
      { src: "/imgs/projetos/cadastro-formas-de-pagamento.png", alt: "" },
      { src: "/imgs/projetos/lista-vendas.png", alt: "" },
      { src: "/imgs/projetos/pagina-vendas.png", alt: "" },
    ],
    repoUrl: "https://github.com/jeffson-bruno/SellFlow.git",
  },
];