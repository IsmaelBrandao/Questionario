const questions = [
  {
    question: "1. Qual é o principal objetivo do processo 'Desenvolver o Termo de Abertura do Projeto' no gerenciamento da integração?",
    options: [
      "A) Formalizar o encerramento de etapas anteriores e liberar recursos.",
      "B) Definir critérios para monitorar o cronograma do projeto.",
      "C) Autorizar formalmente a existência do projeto e conceder autoridade ao gerente.",
      "D) Listar todos os stakeholders e suas expectativas detalhadas.",
      "E) Aprovar o orçamento definitivo e alinhar recursos financeiros."
    ],
    answer: 2
  },
  {
    question: "2. Em relação ao gerenciamento de escopo, qual é a diferença crucial entre 'Coletar Requisitos' e 'Definir o Escopo'?",
    options: [
      "A) Coletar Requisitos é feito somente pelos stakeholders, enquanto Definir o Escopo é feito apenas pela equipe técnica.",
      "B) Coletar Requisitos documenta necessidades em alto nível; Definir o Escopo detalha limites, entregas e critérios de aceitação.",
      "C) Coletar Requisitos cria a EAP; Definir o Escopo aprova o cronograma.",
      "D) Coletar Requisitos envolve análises financeiras; Definir o Escopo envolve testes de qualidade.",
      "E) Coletar Requisitos sucede a Definir o Escopo no ciclo de vida do projeto."
    ],
    answer: 1
  },
  {
    question: "3. Qual instrumento do gerenciamento do escopo serve para decompor o trabalho em componentes menores e garantir uma visão estruturada do que deve ser entregue?",
    options: [
      "A) Declaração do Escopo de Alto Nível.",
      "B) EAP (Estrutura Analítica do Projeto).",
      "C) Registro das Partes Interessadas.",
      "D) Matriz RACI de atividades.",
      "E) Diagrama de Rede do Cronograma."
    ],
    answer: 1
  },
  {
    question: "4. No gerenciamento do cronograma, qual dos seguintes itens NÃO faz parte do processo 'Desenvolver o Cronograma'?",
    options: [
      "A) Análise de sequência de atividades.",
      "B) Estimativa de durações.",
      "C) Análise de caminhos críticos sem restrições de recursos.",
      "D) Documentação dos requisitos de qualidade.",
      "E) Alocação de datas de início e término."
    ],
    answer: 3
  },
  {
    question: "5. O método do Caminho Crítico (CPM) é usado para:",
    options: [
      "A) Determinar a sequência de aprovações pelos stakeholders.",
      "B) Calcular o custo total do projeto com base em recursos alocados.",
      "C) Estimar a duração mínima do projeto e identificar atividades sem folga.",
      "D) Realizar análise qualitativa de riscos.",
      "E) Priorizar requisitos de qualidade para testes."
    ],
    answer: 2
  },
  {
    question: "6. Sobre compressão de cronograma, marque a alternativa INCORRETA:",
    options: [
      "A) Crashing envolve adicionar recursos para reduzir a duração das atividades críticas.",
      "B) Fast Tracking executa atividades em paralelo, mesmo que originalmente sequenciais.",
      "C) Paralelismo e Crashing são sinônimos no PMBOK.",
      "D) A compressão não pode reduzir o escopo do projeto.",
      "E) A escolha entre Crash e Fast Track requer análise de custo-benefício."
    ],
    answer: 2
  },
  {
    question: "7. No gerenciamento de custos, a 'Linha de Base dos Custos' refere-se a:",
    options: [
      "A) Conjunto inicial de estimativas antes do planejamento detalhado.",
      "B) Orçamento aprovado a ser usado como referência para monitoramento e controle.",
      "C) Valor final dos custos reais ao término do projeto.",
      "D) Reserva de contingência para riscos financeiros.",
      "E) Média aritmética entre estimativas otimista e pessimista."
    ],
    answer: 1
  },
  {
    question: "8. Qual das técnicas abaixo é mais adequada para estimativas de custo quando há pouca informação disponível (alto grau de incerteza)?",
    options: [
      "A) Estimativa Paramétrica baseada em métricas históricas.",
      "B) Estimativa Análoga usando projetos semelhantes.",
      "C) Técnica de Três Pontos com distribuição Beta.",
      "D) Estimativa Bottom-up detalhada por pacote de trabalho.",
      "E) Cálculo de cadastro de materiais (Bill of Materials)."
    ],
    answer: 1
  },
  {
    question: "9. Ao planejar o gerenciamento da qualidade, qual das opções faz parte de uma Análise de Dados típica nessa área?",
    options: [
      "A) Brainstorming de riscos novos.",
      "B) Análise de Pareto para identificar os defeitos mais frequentes.",
      "C) Diagrama de Rede para definir sequência de atividades.",
      "D) Estimativa de custo de capital.",
      "E) Matriz RACI para papéis e responsabilidades."
    ],
    answer: 1
  },
  {
    question: "10. Em 'Controlar a Qualidade', qual ferramenta é usada para verificar se uma entrega atende às especificações estabelecidas?",
    options: [
      "A) Lista de Verificação (Checklists).",
      "B) Diagrama de Gantt.",
      "C) Análise SWOT.",
      "D) Curva S de custos.",
      "E) EAP (Estrutura Analítica do Projeto)."
    ],
    answer: 0
  },
  {
    question: "11. Quando falamos em 'Gerenciar Recursos', o que caracteriza o processo 'Desenvolver a Equipe'?",
    options: [
      "A) Alocação física de equipamentos no canteiro de obras.",
      "B) Avaliação do desempenho financeiro da equipe.",
      "C) Melhoria de competências, interação e motivação da equipe.",
      "D) Realizar auditorias internas de qualidade.",
      "E) Gerenciar comunicação com stakeholders externos."
    ],
    answer: 2
  },
  {
    question: "12. Qual é o principal benefício de planejar o gerenciamento das comunicações no início do projeto?",
    options: [
      "A) Eliminar totalmente os conflitos culturais.",
      "B) Garantir que todas as partes interessadas recebam a informação certa na hora certa.",
      "C) Reduzir custos de aquisição de recursos físicos.",
      "D) Acelerar o fechamento do projeto.",
      "E) Interromper o fluxo de mudanças não aprovadas."
    ],
    answer: 1
  },
  {
    question: "13. No processo 'Monitorar as Comunicações', espera-se que o gerente de projeto:",
    options: [
      "A) Atualize a EAP com base em novas solicitações de mudança.",
      "B) Verifique se as necessidades de informação dos stakeholders estão sendo atendidas.",
      "C) Defina o orçamento final do projeto.",
      "D) Identifique riscos negativos do cronograma.",
      "E) Realize testes de qualidade nos entregáveis."
    ],
    answer: 1
  },
  {
    question: "14. Sobre gerenciamento de riscos, qual das alternativas descreve corretamente um 'Risco Geral do Projeto'?",
    options: [
      "A) Um evento isolado que afeta apenas um pacote de trabalho.",
      "B) A soma das incertezas que podem impactar objetivos de forma global no projeto.",
      "C) Um risco que foi transferido a um fornecedor externo.",
      "D) Um problema técnico específico do software usado.",
      "E) Uma oportunidade positiva de economia de custos."
    ],
    answer: 1
  },
  {
    question: "15. Qual das estratégias abaixo corresponde a 'Mitigar' um risco negativo?",
    options: [
      "A) Aguardar o risco ocorrer e depois corrigi-lo.",
      "B) Passar o risco a um terceiro mediante pagamento de prêmio.",
      "C) Implementar ações para reduzir a probabilidade ou impacto caso aconteça.",
      "D) Registrar o risco e não tomar nenhuma ação até novas informações.",
      "E) Escalar a autoridade ao patrocinador sem planejar ações."
    ],
    answer: 2
  },
  {
    question: "16. Quando se planeja o gerenciamento dos custos, definir limites de controle significa:",
    options: [
      "A) Estabelecer o preço máximo de cada recurso no mercado.",
      "B) Definir o percentual de variação tolerável antes de exigir ação corretiva.",
      "C) Ajustar o cronograma para reduzir custos ao fim do projeto.",
      "D) Verificar a qualidade mínima exigida para materiais.",
      "E) Criar uma EAP de custos por fase do projeto."
    ],
    answer: 1
  },
  {
    question: "17. No processo ‘Controlar os Recursos’, qual a principal atividade?",
    options: [
      "A) Conduzir sessões de brainstorming para novos requisitos.",
      "B) Garantir que recursos físicos e humanos estejam disponíveis conforme planejado.",
      "C) Elaborar a Declaração de Escopo detalhada.",
      "D) Realizar auditoria de contratos de aquisição.",
      "E) Validar entregas junto ao cliente."
    ],
    answer: 1
  },
  {
    question: "18. Em ‘Planejar o Gerenciamento da Qualidade’, qual ferramenta/ferramenta NÃO pertence especificamente a esse processo?",
    options: [
      "A) Técnicas de Benchmarking.",
      "B) Custo da Qualidade (COQ).",
      "C) Ferramentas de Controle Estatístico de Processo (CEP).",
      "D) Diagramas de Afinidades.",
      "E) Testes de desempenho de código-fonte."
    ],
    answer: 4
  },
  {
    question: "19. No contexto do gerenciamento da integração, o que faz o processo ‘Realizar o Controle Integrado de Mudanças’?",
    options: [
      "A) Agendar todas as reuniões de status semanais.",
      "B) Monitorar somente a linha de base de cronograma.",
      "C) Revisar, aprovar ou rejeitar solicitações de mudança em entregas e planos e comunicar decisões.",
      "D) Garantir que o orçamento do projeto nunca seja alterado.",
      "E) Encerrar contratos com fornecedores."
    ],
    answer: 2
  },
  {
    question: "20. Qual é a sequência correta dos grupos de processos do gerenciamento de projetos, do início ao fim?",
    options: [
      "A) Planejar → Iniciar → Executar → Monitorar e Controlar → Encerrar",
      "B) Iniciar → Planejar → Executar → Monitorar e Controlar → Encerrar",
      "C) Iniciar → Executar → Planejar → Monitorar e Controlar → Encerrar",
      "D) Planejar → Executar → Monitorar e Controlar → Iniciar → Encerrar",
      "E) Iniciar → Planejar → Monitorar e Controlar → Executar → Encerrar"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;

const questionEl  = document.getElementById("question");
const optionsEl   = document.getElementById("options");
const submitBtn   = document.getElementById("submitBtn");
const nextBtn     = document.getElementById("nextBtn");
const resultEl    = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  selectedAnswer = null;
  submitBtn.disabled = true;
  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";

  q.options.forEach((opt, index) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.addEventListener("click", () => selectOption(li, index));
    optionsEl.appendChild(li);
  });
}

function selectOption(li, index) {

  const allLis = document.querySelectorAll("#options li");
  allLis.forEach(el => el.classList.remove("selected"));

  li.classList.add("selected");
  selectedAnswer = index;
  submitBtn.disabled = false;
}

submitBtn.addEventListener("click", () => {
  if (selectedAnswer === null) return;

  const q = questions[currentQuestion];
  const allLis = document.querySelectorAll("#options li");

  allLis.forEach(el => {
    el.style.pointerEvents = "none";
  });

  if (selectedAnswer === q.answer) {
    allLis[selectedAnswer].classList.add("correct");
    score++;
  } else {
    allLis[selectedAnswer].classList.add("incorrect");
    allLis[q.answer].classList.add("correct");
  }

  submitBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    resultEl.style.display = "block";
    resultEl.textContent = `Você acertou ${score} de ${questions.length} questões.`;
  }
});

loadQuestion();
