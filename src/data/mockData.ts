import { 
  Course, 
  ProjectSquad, 
  CommunityEvent, 
  CommunityTopic, 
  GalleryProject, 
  Article, 
  StoreItem, 
  FAQItem, 
  StepJourney 
} from '../types';

export const JOURNEY_STEPS: StepJourney[] = [
  {
    id: 'step-01',
    stepNumber: '01',
    shortTitle: 'Cadastro',
    title: 'Tudo começa pelo seu perfil.',
    lead: 'ETAPA 01 / 05',
    description: 'Depois de criar sua conta, você configura as informações que ajudam outras pessoas a conhecer suas áreas de interesse. Com seu perfil pronto, você pode navegar pelos projetos da comunidade.',
    actionHint: 'O perfil é seu ponto de partida; não é necessário ter uma equipe formada para começar.',
    checklist: [
      'Selecione suas tecnologias de foco (React, Node, Python, Figma, etc.)',
      'Defina sua disponibilidade semanal de horas para squad',
      'Conecte suas contas do GitHub e LinkedIn',
      'Acesse imediatamente o servidor exclusivo do Discord'
    ]
  },
  {
    id: 'step-02',
    stepNumber: '02',
    shortTitle: 'Escolha do projeto',
    title: 'Encontre o projeto que combina com você.',
    lead: 'ETAPA 02 / 05',
    description: 'Navegue pelo catálogo de iniciativas em aberto. Filtre por tecnologias desejadas, estágio de formação ou explore ideias originais da comunidade Focus esperando por execução.',
    actionHint: 'Você escolhe projetos alinhados aos seus objetivos reais de evolução técnica.',
    checklist: [
      'Filtros por stack e área (Front-end, Back-end, UI/UX, QA, Dados)',
      'Visualização transparente do escopo do MVP',
      'Detalhamento do nível de complexidade e prazo estimado',
      'Candidatura com um clique na vaga de seu interesse'
    ]
  },
  {
    id: 'step-03',
    stepNumber: '03',
    shortTitle: 'Formação da equipe',
    title: 'Reúna o squad e alinhe o escopo.',
    lead: 'ETAPA 03 / 05',
    description: 'Assim que as vagas principais são preenchidas, o canal privado do seu time é liberado no Discord com guia de kickoff, boas práticas e definição dos primeiros passos.',
    actionHint: 'Trabalho em equipe de verdade: papéis claros e suporte contínuo.',
    checklist: [
      'Canal de voz e texto exclusivo para reuniões do time',
      'Nomeação do ponto focal do projeto (Tech Lead ou Scrum)',
      'Definição da stack oficial e divisão de tarefas no Kanban',
      'Cronograma inicial de 4 a 8 semanas'
    ]
  },
  {
    id: 'step-04',
    stepNumber: '04',
    shortTitle: 'Desenvolvimento',
    title: 'Construa com Git Flow e boas práticas.',
    lead: 'ETAPA 04 / 05',
    description: 'A proposta vai além do código: você pratica branches separadas, commits semânticos, abertura de Pull Requests detalhados e revisão de código com os colegas de time.',
    actionHint: 'Simulação idêntica ao ambiente corporativo de tecnologia moderno.',
    checklist: [
      'Padronização de Git Flow e branches com convenção clara',
      'Code review obrigatório antes de cada merge',
      'Dailies rápidas e reuniões semanais de alinhamento',
      'Apoio de mentores seniores da Focus Academy'
    ]
  },
  {
    id: 'step-05',
    stepNumber: '05',
    shortTitle: 'Conclusão',
    title: 'Apresente sua entrega e registre a conquista.',
    lead: 'ETAPA 05 / 05',
    description: 'Ao finalizar o MVP, o projeto é publicado na Galeria oficial da comunidade e o time é convidado a apresentar a solução no Demo Day com registro de contribuição.',
    actionHint: 'Histórico tangível de entrega para alavancar sua carreira.',
    checklist: [
      'Deploy em produção acessível para recrutadores e comunidade',
      'Repositório no GitHub documentado com README impecável',
      'Apresentação ao vivo de 10 minutos no Demo Day',
      'Registro permanente de participação no portfólio Focus'
    ]
  }
];

export const INITIAL_SQUADS_PREVIEW: ProjectSquad[] = [
  {
    id: 'proj-1',
    title: 'Sistema de agendamento',
    status: 'EM FORMAÇÃO',
    description: 'Uma aplicação web desenvolvida por um squad multidisciplinar para gestão de horários e reservas.',
    stack: ['Front-end', 'Back-end'],
    openRoles: [
      { role: 'Front-end React', count: 1 },
      { role: 'Back-end Node', count: 1 }
    ],
    currentMembers: 2,
    totalSlots: 4,
    leader: 'Camila Rocha',
    stage: 'Alinhamento de Escopo',
    durationWeeks: 6,
    deliverables: ['Design no Figma', 'API RESTful', 'Interface responsiva', 'Deploy em Cloud']
  },
  {
    id: 'proj-2',
    title: 'Painel de indicadores',
    status: 'EM DESENVOLVIMENTO',
    description: 'Organização, tratamento e visualização de informações analíticas para tomadas de decisão rápidas.',
    stack: ['Dados', 'Interfaces', 'Next.js', 'PostgreSQL'],
    openRoles: [
      { role: 'Engenheiro de Dados', count: 1 }
    ],
    currentMembers: 4,
    totalSlots: 4,
    leader: 'Lucas Martins',
    stage: 'Sprint 2 de 4',
    durationWeeks: 8,
    deliverables: ['Pipeline ETL', 'Dashboard interativo', 'Métricas em tempo real', 'Documentação']
  },
  {
    id: 'proj-3',
    title: 'Plataforma de Mentorias Dev',
    status: 'EM FORMAÇÃO',
    description: 'Espaço colaborativo para conexão 1:1 entre desenvolvedores seniores e iniciantes em transição de carreira.',
    stack: ['TypeScript', 'Tailwind', 'Express', 'Prisma'],
    openRoles: [
      { role: 'UI/UX Designer', count: 1 },
      { role: 'QA Tester', count: 1 }
    ],
    currentMembers: 3,
    totalSlots: 5,
    leader: 'Beatriz Lima',
    stage: 'Recrutamento de Squad',
    durationWeeks: 5,
    deliverables: ['Wireframes', 'Autenticação OAuth', 'Sistema de Avaliações', 'Testes e2e']
  }
];

export const ALL_COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Arquitetura Front-end Moderna com React & Next.js',
    category: 'Frontend',
    level: 'Intermediário',
    duration: '24 horas',
    instructor: 'Renato Silveira (Staff Engineer)',
    description: 'Aprenda a estruturar aplicações front-end escaláveis, com componentização limpa, Server Components, gerenciamento de estado e deploy automatizado.',
    topics: [
      'Arquitetura em camadas e Design Systems com Tailwind',
      'Server Components vs Client Components',
      'Estratégias de Cache e Otimização de Performance',
      'Testes de integração com Vitest e React Testing Library'
    ],
    enrolledStudents: 1420,
    rating: 4.9,
    featured: true
  },
  {
    id: 'course-2',
    title: 'Construção de APIs Resilientes em Node.js & TypeScript',
    category: 'Backend',
    level: 'Intermediário',
    duration: '28 horas',
    instructor: 'Diego Alcantara (Tech Lead)',
    description: 'Domine a criação de serviços backend profissionais: Clean Architecture, injeção de dependências, validação de esquemas, ORM e observabilidade.',
    topics: [
      'Princípios SOLID e Clean Architecture prática',
      'Modelagem relacional e migrations com Prisma/Drizzle',
      'Autenticação JWT, Refresh Tokens e autorização RBAC',
      'Dockerização de microsserviços e mensageria'
    ],
    enrolledStudents: 1890,
    rating: 4.95,
    featured: true
  },
  {
    id: 'course-4',
    title: 'UI/UX Design para Engenheiros de Software',
    category: 'UI/UX',
    level: 'Iniciante',
    duration: '16 horas',
    instructor: 'Mariana Duarte (Head of Product Design)',
    description: 'Entenda como pensar interfaces a partir do usuário: hierarquia visual, tipografia funcional, acessibilidade WCAG e criação de componentes no Figma.',
    topics: [
      'Fundamentos de design visual e grid de 8pt',
      'Criação de Design Tokens e bibliotecas de componentes',
      'Acessibilidade digital (WCAG 2.1 AA na prática)',
      'Handoff eficiente entre designers e desenvolvedores'
    ],
    enrolledStudents: 980,
    rating: 4.85
  },
  {
    id: 'course-5',
    title: 'Segurança de Aplicações Web & AppSec na Prática',
    category: 'Cibersegurança',
    level: 'Intermediário',
    duration: '20 horas',
    instructor: 'Felipe Vasconcelos (Security Architect)',
    description: 'Proteja aplicações modernas contra vulnerabilidades críticas: OWASP Top 10, autenticação segura, proteção de APIs e revisão de código focada em segurança.',
    topics: [
      'Prevenção prática contra vulnerabilidades OWASP Top 10',
      'Gestão segura de segredos, tokens e sessões',
      'Hardening de APIs, CORS, CSP e Rate Limiting',
      'Análise de dependências e automação de segurança no pipeline'
    ],
    enrolledStudents: 740,
    rating: 4.92
  },
  {
    id: 'course-6',
    title: 'Fundamentos de Cibersegurança & Defesa em Nuvem',
    category: 'Cibersegurança',
    level: 'Iniciante',
    duration: '22 horas',
    instructor: 'Guilherme Sampaio (Cybersecurity Specialist)',
    description: 'Domine os pilares da segurança da informação, criptografia aplicada, análise de ameaças, controle de acesso e resposta a incidentes em ambientes modernos.',
    topics: [
      'Fundamentos de redes seguras, criptografia e protocolos TLS',
      'Modelagem de ameaças e arquitetura Zero Trust',
      'Monitoramento de logs, detecção de anomalias e SIEM',
      'Boas práticas de proteção de dados e conformidade LGPD'
    ],
    enrolledStudents: 1120,
    rating: 4.87
  }
];

export const ALL_PROJECTS: ProjectSquad[] = [
  ...INITIAL_SQUADS_PREVIEW,
  {
    id: 'proj-4',
    title: 'Focus Hub - Plataforma de Vagas Tech',
    status: 'EM FORMAÇÃO',
    description: 'Plataforma aberta para curadoria de vagas de estágio e júnior, com filtros de senioridade e verificação comunitária de salários.',
    stack: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
    openRoles: [
      { role: 'Front-end Developer', count: 1 },
      { role: 'Product Manager', count: 1 }
    ],
    currentMembers: 3,
    totalSlots: 5,
    leader: 'Rafael Santana',
    stage: 'Abertura de Inscrições',
    durationWeeks: 6,
    deliverables: ['Painel de vagas', 'Sistema de submissão', 'Filtros em tempo real', 'Mailing semanal']
  },
  {
    id: 'proj-5',
    title: 'CodeReviewer Bot para Discord',
    status: 'EM DESENVOLVIMENTO',
    description: 'Bot inteligente que monitora repositórios do GitHub e notifica squads no Discord sobre PRs abertos, merges e reviews pendentes.',
    stack: ['Python', 'Discord.py', 'GitHub REST API', 'Docker'],
    openRoles: [
      { role: 'DevOps / Infra', count: 1 }
    ],
    currentMembers: 3,
    totalSlots: 4,
    leader: 'Vinicius Costa',
    stage: 'Implementação de Webhooks',
    durationWeeks: 4,
    deliverables: ['Bot interativo', 'Dashboard de comandos', 'Logs de auditoria', 'Deploy contínuo']
  },
  {
    id: 'proj-6',
    title: 'Finanças Comunitárias Open Source',
    status: 'CONCLUÍDO',
    description: 'App para gestão financeira de coletivos, repúblicas e pequenos projetos, com divisão automática de contas e relatórios em PDF.',
    stack: ['TypeScript', 'Vue 3', 'Fastify', 'SQLite'],
    openRoles: [],
    currentMembers: 5,
    totalSlots: 5,
    leader: 'Juliana Paes',
    stage: 'Entregue com Sucesso no Demo Day #04',
    durationWeeks: 8,
    deliverables: ['App web em produção', 'Mais de 2.000 usuários ativos', 'Código 100% open source', 'Apresentação no YouTube']
  }
];

export const ALL_EVENTS: CommunityEvent[] = [
  {
    id: 'event-1',
    title: 'Focus Hackathon 2026: Soluções para o Futuro do Trabalho',
    type: 'Hackathon',
    date: '24 e 25 de Outubro, 2026',
    time: '09:00 às 20:00 (BRT)',
    location: 'Discord Focus + Transmissão ao Vivo',
    speaker: 'Banca de Mentores e Tech Leads de Grandes Empresas',
    speakerRole: 'Jurados e Facilitadores',
    description: '48 horas de imersão intensa. Monte ou junte-se a um squad relâmpago para desenvolver uma solução real com mentoria ao vivo e premiações em dinheiro e mentorias.',
    registeredCount: 382,
    maxCapacity: 500,
    isRegistered: false
  },
  {
    id: 'event-2',
    title: 'Demo Day #08: Apresentação Oficial dos Squads',
    type: 'Demo Day',
    date: '12 de Novembro, 2026',
    time: '19:30 às 21:30 (BRT)',
    location: 'Palco Principal do Discord Focus',
    speaker: 'Squads Formados na Focus Academy',
    speakerRole: 'Desenvolvedores e Designers da Comunidade',
    description: 'Venha assistir às apresentações finais dos squads que construíram seus MVPs nos últimos 2 meses. Demonstração de arquitetura, desafios enfrentados e código ao vivo.',
    registeredCount: 215,
    maxCapacity: 400,
    isRegistered: true
  },
  {
    id: 'event-3',
    title: 'Workshop: Dominando Pull Requests e Code Reviews que Impressionam',
    type: 'Workshop',
    date: '04 de Novembro, 2026',
    time: '19:00 às 21:00 (BRT)',
    location: 'Sala Interativa Focus Academy',
    speaker: 'Camila Fernandes',
    speakerRole: 'Senior Principal Engineer @ FinTech Global',
    description: 'Exercícios práticos de como redigir descrições de PR claras, revisar código com empatia técnica, usar conventional commits e acelerar merges de qualidade.',
    registeredCount: 164,
    maxCapacity: 200,
    isRegistered: false
  },
  {
    id: 'event-4',
    title: 'Tech Talk: Do Portfólio Solo ao Primeiro Emprego em Squad',
    type: 'Tech Talk',
    date: '19 de Novembro, 2026',
    time: '20:00 às 21:15 (BRT)',
    location: 'Auditório Online Focus',
    speaker: 'Thiago Barreto & Julia Nogueira',
    speakerRole: 'Recrutadores Técnicos & Alumni Focus',
    description: 'O que os líderes técnicos realmente avaliam em entrevistas? Como transformar sua experiência de squad na Focus Academy em argumentos decisivos na contratação.',
    registeredCount: 290,
    maxCapacity: 350,
    isRegistered: false
  }
];

export const ALL_COMMUNITY_TOPICS: CommunityTopic[] = [
  {
    id: 'topic-1',
    title: 'Qual a melhor estratégia para gerenciar variáveis de ambiente em squads?',
    author: 'Gabriel Nunes',
    authorAvatar: 'GN',
    category: 'Dúvidas',
    repliesCount: 18,
    likesCount: 34,
    timeAgo: 'há 2 horas',
    solved: true
  },
  {
    id: 'topic-2',
    title: '[Showcase] Lançamos o MVP do Finanças Comunitárias! Venham testar',
    author: 'Juliana Paes',
    authorAvatar: 'JP',
    category: 'Showcase',
    repliesCount: 42,
    likesCount: 97,
    timeAgo: 'há 5 horas'
  },
  {
    id: 'topic-3',
    title: 'Estamos buscando 1 Designer UI/UX para squad de saúde preventiva',
    author: 'Arthur Brandão',
    authorAvatar: 'AB',
    category: 'Vagas de Squad',
    repliesCount: 7,
    likesCount: 15,
    timeAgo: 'há 1 dia'
  },
  {
    id: 'topic-4',
    title: 'Guia definitivo de Conventional Commits para quem está começando em equipe',
    author: 'Mariana Duarte',
    authorAvatar: 'MD',
    category: 'Dicas',
    repliesCount: 29,
    likesCount: 120,
    timeAgo: 'há 3 dias',
    solved: true
  }
];

export const ALL_GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'gal-1',
    title: 'Ateliê Digital — E-books de Artesanato',
    squadName: 'Front-End • Voluntários Focus',
    description: 'Plataforma digital voltada para e-books de artesanato (Crochê, Bordado, Cerâmica e Papelaria), com busca interativa, alternância de tema claro/escuro e carrinho de compras.',
    metrics: 'Interface responsiva em produção na Vercel com catálogo interativo',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Responsivo', 'Vercel'],
    deliveredDate: 'Outubro 2026',
    demoUrl: 'https://atelie-digital.vercel.app/',
    githubUrl: 'https://www.linkedin.com/in/daniellebbraga',
    linkedinUrl: 'https://www.linkedin.com/in/daniellebbraga',
    starsCount: 148,
    upvoted: true,
    team: [
      { name: 'Voluntários Focus', role: 'Front-End Development' },
      { name: 'Equipe UI/UX', role: 'Design & Experiência' }
    ]
  },
  {
    id: 'gal-2',
    title: 'EducaPlay — Plataforma de Cursos',
    squadName: 'Front-End • Voluntários Focus',
    description: 'Vitrine interativa de cursos online com filtragem dinâmica por áreas (Programação & Tech, Design & UX/UI, Marketing e Produtividade), busca em tempo real, dark mode e carrinho.',
    metrics: 'Filtros dinâmicos de catálogo e gerenciamento de carrinho em tempo real',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Filtros Dinâmicos', 'Dark Mode', 'Vercel'],
    deliveredDate: 'Outubro 2026',
    demoUrl: 'https://cursos-educa-play.vercel.app/',
    githubUrl: 'https://www.linkedin.com/in/jonathan-laureano-lima',
    linkedinUrl: 'https://www.linkedin.com/in/jonathan-laureano-lima',
    starsCount: 215,
    upvoted: false,
    team: [
      { name: 'Voluntários Focus', role: 'Front-End Development' },
      { name: 'Equipe de Produto', role: 'Arquitetura de Interface' }
    ]
  },
  {
    id: 'gal-3',
    title: 'Bruno Importados — E-commerce Esportivo',
    squadName: 'Front-End • Voluntários Focus',
    description: 'E-commerce completo de camisas de times e seleções, com carrossel de promoções, busca inteligente de produtos, vitrine categorizada e tema escuro nativo.',
    metrics: 'Experiência completa de loja virtual com alta performance e design moderno',
    tags: ['Front-End', 'E-commerce', 'JavaScript', 'CSS Responsivo', 'Vercel'],
    deliveredDate: 'Outubro 2026',
    demoUrl: 'https://e-commerce-bruno-importados.vercel.app/',
    githubUrl: 'https://www.linkedin.com/in/joseluizneto/',
    linkedinUrl: 'https://www.linkedin.com/in/joseluizneto/',
    starsCount: 184,
    upvoted: false,
    team: [
      { name: 'Voluntários Focus', role: 'Front-End Development' },
      { name: 'Equipe UI/UX', role: 'E-commerce Design' }
    ]
  },
  {
    id: 'gal-4',
    title: 'Lume Livros — Histórias que Ficam',
    squadName: 'Front-End • Voluntários Focus',
    description: 'Livraria digital interativa desenvolvida para descobrir novas leituras, com exploração de catálogo de livros, alternância de tema claro/escuro e carrinho dinâmico.',
    metrics: 'Interface editorial responsiva publicada na Netlify',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Acessibilidade', 'Netlify'],
    deliveredDate: 'Outubro 2026',
    demoUrl: 'https://lume-livros-lcsf.netlify.app/',
    githubUrl: 'https://www.linkedin.com/in/lucasfernandes-dev/',
    linkedinUrl: 'https://www.linkedin.com/in/lucasfernandes-dev/',
    starsCount: 162,
    upvoted: false,
    team: [
      { name: 'Voluntários Focus', role: 'Front-End Development' },
      { name: 'Equipe Editorial UI', role: 'Design & Experiência' }
    ]
  },
  {
    id: 'gal-5',
    title: 'Loja Digital — Vitrine de Infoprodutos',
    squadName: 'Front-End • Voluntários Focus',
    description: 'E-commerce digital de cursos, e-books e templates com filtragem rápida por categorias, pesquisa em tempo real, modo escuro e gerenciamento de carrinho.',
    metrics: 'Catálogo dinâmico com filtros instantâneos e deploy na Vercel',
    tags: ['Front-End', 'JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    deliveredDate: 'Outubro 2026',
    demoUrl: 'https://e-commerce-digital-mu.vercel.app/',
    githubUrl: 'https://www.linkedin.com/in/thamires-dfranca/',
    linkedinUrl: 'https://www.linkedin.com/in/thamires-dfranca/',
    starsCount: 175,
    upvoted: false,
    team: [
      { name: 'Voluntários Focus', role: 'Front-End Development' },
      { name: 'Equipe de Produto', role: 'UI & Interatividade' }
    ]
  }
];

export const ALL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Por que programar em squad acelera 5x mais sua carreira do que tutoriais solo',
    excerpt: 'Compreenda a virada de chave cognitiva que acontece quando você é obrigado a comunicar decisões técnicas, revisar código alheio e negociar escopos reais.',
    readTime: '6 min de leitura',
    date: '10 de Outubro, 2026',
    category: 'Carreira Tech',
    author: 'Rodrigo Medeiros',
    authorRole: 'Head de Aprendizagem @ Focus Tech',
    claps: 340,
    tags: ['Squads', 'Carreira', 'Hard Skills', 'Comunicação'],
    content: [
      'O maior gap de quem estuda tecnologia não é a sintaxe de uma linguagem, mas a dinâmica de trabalho em time. No mercado real, 80% do tempo de um desenvolvedor é dedicado a ler código existente, debater arquitetura e sincronizar integrações.',
      'Quando você constrói projetos sozinho, você nunca lida com merge conflicts dolorosos, nem com especificações ambíguas de um colega de equipe. Trabalhar em squad remove o verniz idealizado e prepara você para o ritmo real das empresas modernas.',
      'Na Focus Academy, todos os squads adotam cerimônias enxutas, revisão mútua e definição de pronto. O resultado é que nossos participantes chegam às entrevistas técnicas com histórias concretas de superação e entrega.'
    ]
  },
  {
    id: 'art-2',
    title: 'Guia Prático de Git Flow: Da criação da branch ao merge sem desespero',
    excerpt: 'Um passo a passo visual e direto ao ponto para organizar branches de feature, sincronizar alterações com develop e garantir um histórico limpo.',
    readTime: '8 min de leitura',
    date: '02 de Outubro, 2026',
    category: 'Engenharia',
    author: 'Larissa Moura',
    authorRole: 'DevOps Lead @ Focus Academy',
    claps: 512,
    tags: ['Git', 'Git Flow', 'Boas Práticas', 'GitHub'],
    content: [
      'Quantas vezes você já ficou paralisado ao ver a mensagem "CONFLICT (content): Merge conflict in file.ts"? Entender Git Flow é a vacina contra essa ansiedade.',
      'O segredo está em manter a branch principal intocável, isolar novas funcionalidades em branches com nomes padronizados (ex: feature/autenticacao-jwt) e realizar rebase frequente com a branch de integração.',
      'Nunca empurre código quebrado para a branch principal. O Pull Request é o tribunal amigável onde seu time se ajuda a entregar software cada vez mais resiliente.'
    ]
  },
  {
    id: 'art-3',
    title: 'Como redigir Pull Requests que seus colegas vão adorar revisar',
    excerpt: 'Descubra os 4 elementos essenciais de uma boa descrição de PR: o contexto do problema, a solução escolhida, prints de validação e checklist de testes.',
    readTime: '5 min de leitura',
    date: '25 de Setembro, 2026',
    category: 'Boas Práticas',
    author: 'Camila Fernandes',
    authorRole: 'Senior Principal Engineer',
    claps: 289,
    tags: ['Code Review', 'Qualidade', 'Produtividade'],
    content: [
      'Um Pull Request sem descrição é um convite à demora e à frustração. Quem revisa não deve ter que adivinhar a motivação por trás de uma alteração de 20 arquivos.',
      'Ao abrir um PR, responda a três perguntas simples: O que foi feito? Por que foi feito dessa maneira? Como quem revisa pode testar manualmente o resultado?',
      'Adicionar capturas de tela ou GIFs curtos de interfaces demonstra respeito pelo tempo do revisor e reduz o ciclo de aprovação pela metade.'
    ]
  }
];

export const ALL_STORE_ITEMS: StoreItem[] = [
  {
    id: 'store-1',
    name: 'Moletom Oficial Focus Squad Heavyweight',
    priceBrl: 219.00,
    focusCoins: 1200,
    category: 'Vestuário',
    description: 'Moletom canguru premium com algodão penteado 3 cabos, capuz forrado e bordado sutil "Build in Squad" no peito. Feito para devs que viram noites codando.',
    inStock: true,
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Mais Desejado'
  },
  {
    id: 'store-2',
    name: 'Camiseta Focus Tech "Clean Code / Clean Squad"',
    priceBrl: 89.90,
    focusCoins: 500,
    category: 'Vestuário',
    description: 'Camiseta unissex 100% algodão sustentável, estampa silk screen de alta durabilidade com tipografia editorial minimalista.',
    inStock: true,
    sizes: ['PP', 'P', 'M', 'G', 'GG', 'XGG'],
    badge: 'Lançamento'
  },
  {
    id: 'store-3',
    name: 'Deskmat Pro Focus Academy (900x400mm)',
    priceBrl: 119.00,
    focusCoins: 650,
    category: 'Hardware',
    description: 'Mousepad gigante com base de borracha natural antiderrapante, bordas costuradas e estampa sutil dos atalhos de Git Flow e comandos essenciais.',
    inStock: true,
    badge: 'Edição Limitada'
  },
  {
    id: 'store-4',
    name: 'Caneca Térmica Cerâmica Focus "Commit Early, Push Often"',
    priceBrl: 64.90,
    focusCoins: 380,
    category: 'Acessórios',
    description: 'Caneca preta fosca com acabamento acetinado de 350ml. Mantém o café quente durante sprints intensas.',
    inStock: true
  },
  {
    id: 'store-5',
    name: 'Pack com 12 Adesivos Holográficos Focus Tech',
    priceBrl: 29.90,
    focusCoins: 150,
    category: 'Acessórios',
    description: 'Coleção de stickers vinílicos resistentes à água para personalizar seu laptop com orgulho de pertencer à comunidade.',
    inStock: true
  },
  {
    id: 'store-6',
    name: 'Voucher Mentoria 1:1 de Carreira com Tech Lead (45 min)',
    priceBrl: 0,
    focusCoins: 2000,
    category: 'Benefícios',
    description: 'Sessão individual exclusiva com um líder técnico do ecossistema Focus para revisão detalhada de currículo, portfólio de squad e simulação de entrevista técnica.',
    inStock: true,
    badge: 'Resgate Exclusivo por Mérito'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'Preciso ter experiência profissional para participar?',
    answer: 'Não. A Focus Academy foi feita justamente para quem quer ganhar experiência prática em projetos colaborativos. Se você tem a base teórica ou já construiu projetos solo, os squads são o espaço ideal para vivenciar o ritmo real de equipe.'
  },
  {
    question: 'Qual a diferença entre Focus e projeto?',
    answer: 'A Focus é a comunidade e ecossistema de colaboração. Ela se torna um Projeto ativo assim que atinge os requisitos mínimos de escopo e abre vagas para formação do squad.'
  },
  {
    question: 'Como funciona o Git Flow na prática na Focus?',
    answer: 'O Git Flow na Focus é o modelo de colaboração profissional adotado pelos squads: cada funcionalidade ganha uma branch dedicada, commits semânticos, abertura de Pull Request detalhado e code review obrigatório entre os colegas antes da integração à branch principal.'
  },
  {
    question: 'Quando um projeto começa a ser desenvolvido?',
    answer: 'Assim que as vagas essenciais do squad forem preenchidas (ex.: front-end, back-end e design) e a equipe realizar o alinhamento inicial de escopo e cronograma no Discord oficial.'
  },
  {
    question: 'Como funciona o encerramento de um projeto?',
    answer: 'O encerramento ocorre com a entrega do MVP funcional no repositório oficial, apresentação no Demo Day da comunidade e arquivamento do histórico com emissão dos registros de contribuição para cada membro.'
  },
  {
    question: 'Os projetos são apenas de programação?',
    answer: 'Não. Os squads são multidisciplinares! Precisamos de Product Managers, Designers UI/UX, QA Testers, Redatores e Especialistas de Dados para que a experiência simule uma equipe de tecnologia real.'
  },
  {
    question: 'Já existe integração com GitHub ou emissão de certificados?',
    answer: 'Atualmente a integração é feita com os repositórios públicos dos squads. A sincronização automática via app e a emissão automatizada de certificados com hash verificável estão em nossa trilha de roadmap futuro.'
  },
  {
    question: 'É obrigatório criar meu próprio projeto?',
    answer: 'Não. Você pode escolher entrar como membro em qualquer projeto com vagas abertas (Caminho A) ou submeter uma proposta original quando quiser liderar uma iniciativa na Focus (Caminho B).'
  }
];

export const PLATFORM_PILLARS = [
  {
    number: '01',
    category: 'PROJETOS',
    title: 'Catálogo e Projetos Focus',
    description: 'Explore propostas de outros participantes ou transforme uma ideia sugerida em um projeto próprio.'
  },
  {
    number: '02',
    category: 'PESSOAS',
    title: 'Equipes por interesse',
    description: 'Monte squads com diferentes perfis de atuação, de desenvolvimento a design e qualidade.'
  },
  {
    number: '03',
    category: 'ACOMPANHAMENTO',
    title: 'Etapas bem definidas',
    description: 'Os projetos passam por formação, desenvolvimento ativo e conclusão, conforme a evolução do time.'
  },
  {
    number: '04',
    category: 'COMUNICAÇÃO',
    title: 'Integração com Discord',
    description: 'Recursos de integração ajudam a organizar os espaços de comunicação ligados a projetos e participantes.'
  },
  {
    number: '05',
    category: 'HISTÓRICO',
    title: 'Registros de participação',
    description: 'Na conclusão, a plataforma gera evidências por integrante, preservando a experiência de cada pessoa.'
  },
  {
    number: '06',
    category: 'APRENDIZADO',
    title: 'Colaboração na prática',
    description: 'Desenvolva habilidades técnicas e de colaboração em projetos de front-end, back-end, mobile, dados, design, QA e outras áreas de tecnologia.'
  }
];

export const GIT_FLOW_STEPS = [
  {
    number: '01',
    title: 'Troca de conhecimentos',
    desc: 'Compartilhe experiências, aprenda com outras pessoas e descubra novas formas de resolver problemas.',
  },
  {
    number: '02',
    title: 'Desenvolvimento colaborativo',
    desc: 'Trabalhe em equipe, contribua com diferentes etapas de um projeto e conheça outras perspectivas da tecnologia.',
  },
  {
    number: '03',
    title: 'Experiência prática',
    desc: 'Aplique seus conhecimentos em desafios e projetos que aproximam o aprendizado das experiências do mercado de tecnologia.',
  },
  {
    number: '04',
    title: 'Evolução profissional',
    desc: 'Desenvolva habilidades técnicas, comunicação, organização e colaboração enquanto constrói sua trajetória na área.',
  }
];

