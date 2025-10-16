// Função para simular o conteúdo do PDF (acessível de qualquer lugar)
function simularRelatorio(tipo) {
    let titulo = "";
    let conteudo = "";

    switch (tipo) {
        case 'boletim':
            titulo = "Boletim Mensal de Operações - Agosto 2025";
            conteudo = "Foco: Desarticulação de 8 células de Orcrims em 4 estados do Nordeste. Resultado: 45 prisões e 285 operações integradas (FICCO). O sucesso da operação 'Sentinela' reforça a eficácia da ação coordenada de inteligência. Taxa de sucesso: 92% das metas operacionais alcançadas.";
            break;
        case 'financeiro':
            titulo = "Relatório Financeiro - 2º Trimestre 2025";
            conteudo = "Detalhe: Bloqueio judicial de R$ 980 milhões em ativos (imóveis, veículos de luxo e contas bancárias). Total de confiscos no trimestre: R$ 3.2 BILHÕES. O Eixo Financeiro está 64% da meta anual de R$ 5.0 Bi. Principais desafios: Celeridade na alienação dos bens.";
            break;
        case 'fronteiras':
            titulo = "Resumo de Apreensões em Fronteiras - 2025";
            conteudo = "Total Anual: 15.500 KG de substâncias ilícitas apreendidas. Destaque: 65% das apreensões ocorreram em portos (Eixo 1). Tendência: Houve uma redução de 3% nas apreensões no último mês, indicando possível desvio de rotas ou aumento na discrição. Plano de Ação: Reforço na tecnologia de escaneamento em áreas críticas.";
            break;
        default:
            titulo = "Relatório Não Encontrado";
            conteudo = "O resumo para este relatório não está disponível.";
    }

    // Exibe o conteúdo de forma acessível
    alert(`== ${titulo} ==\n\nResumo:\n${conteudo}\n\n[Este é um resumo simulado. Em um site real, esta ação abriria um documento PDF completo.]`);
}


document.addEventListener('DOMContentLoaded', () => {
    // Dados dos Eixos Estratégicos
    const dadosEixos = {
        Fin: { titulo: "Eixo Financeiro: Descapitalização", progresso: 85, status: "Alto Impacto", detalhes: ["Aceleração do confisco de bens bloqueados (R$ 500 milhões pendentes).", "Criação do Comitê Interagências para rastreamento de criptomoedas.", "Treinamento de 400 agentes em Lavagem de Dinheiro 2.0."] },
        Int: { titulo: "Eixo de Inteligência e Integração", progresso: 90, status: "Concluído (Fase I)", detalhes: ["Plataforma SINARM integrada com 22 estados.", "Implantação de Centros de Comando e Controle (C3) em 5 capitais.", "Protocolos de Cooperação Internacional atualizados."] },
        Jus: { titulo: "Eixo de Justiça Criminal e Penal", progresso: 55, status: "Risco Moderado", detalhes: ["Revisão da Lei de Execução Penal em andamento (30% concluída).", "Construção de novo Presídio de Segurança Máxima (Fase de Licitação).", "Ações de celeridade processual em casos de Orcrims."] },
        Soc: { titulo: "Eixo Social e Prevenção", progresso: 70, status: "Progresso Constante", detalhes: ["Expansão do PRONASCI em 10 novas comunidades.", "Criação de 18.500 vagas em cursos de capacitação.", "Implementação de Programas de Evasão Escolar em Zonas de Risco."] }
    };

    // Dados de KPIs (com status e tendência)
    const dadosKpis = [
        { id: 'kpi-financeiro', valorAtual: 3.2, meta: 5.0, status: 'atencao', tendencia: 'up' }, 
        { id: 'kpi-operacoes', valorAtual: 285, meta: 250, status: 'otimo', tendencia: 'up' },
        { id: 'kpi-fronteiras', valorAtual: 15500, meta: 20000, status: 'atencao', tendencia: 'down' }
    ];

    // Dados para o Glossário/FAQ
    const dadosFaq = [
        { termo: "FICCO", definicao: "Força Integrada de Combate ao Crime Organizado. São equipes conjuntas das polícias Federal, Civil e Militar para ações estratégicas." },
        { termo: "Orcrims", definicao: "Organizações Criminosas. É o termo técnico para facções e grupos criminosos de grande porte." },
        { termo: "Descapitalização", definicao: "Estratégia para apreender e bloquear bens (dinheiro, imóveis, veículos) obtidos ilegalmente, retirando a base financeira das facções." },
        { termo: "SINARM", definicao: "Sistema Nacional de Armas. Plataforma de rastreamento e controle de armas de fogo no país." }
    ];

    const painelConteudo = document.getElementById('painel-conteudo');
    const btnsEixo = document.querySelectorAll('.btn-eixo');
    const dataAtualizacao = document.getElementById('data-atualizacao');
    const faqConteudo = document.getElementById('faq-conteudo');

    // Funções de Renderização
    
    function renderizarFaq() {
        const htmlFaq = dadosFaq.map(item => `
            <div class="faq-item">
                <h4>${item.termo}</h4>
                <p>${item.definicao}</p>
            </div>
        `).join('');
        faqConteudo.innerHTML = htmlFaq;
    }

    // Função que renderiza o conteúdo detalhado de cada Eixo
    function renderizarPainel(eixo) {
        const dados = dadosEixos[eixo];
        const corProgresso = dados.progresso >= 80 ? '#2e7d32' : dados.progresso >= 60 ? '#ffb300' : '#c62828';
        
        // Adicionamos 'role="region" aria-live="polite"' para acessibilidade (leitores de tela)
        const htmlDetalhe = `
            <div class="eixo-header" role="region" aria-live="polite">
                <h3>${dados.titulo}</h3>
                <p class="status-eixo">Status: <strong>${dados.status}</strong></p>
            </div>
            <div class="progresso-eixo">
                <p>Progresso da Implementação:</p>
                <div class="barra-principal-progresso" style="width: ${dados.progresso}%; background-color: ${corProgresso};">
                    ${dados.progresso}%
                </div>
            </div>
            <h4>Ações Prioritárias:</h4>
            <ul>${dados.detalhes.map(item => `<li>${item}</li>`).join('')}</ul>
        `;
        painelConteudo.innerHTML = htmlDetalhe;
    }

    // Aplica o Status de Cor e a Tendência nos KPIs (Melhorado para acessibilidade)
    function colorirKpis() {
        dadosKpis.forEach(kpi => {
            const card = document.getElementById(kpi.id);
            const metaSpan = card ? card.querySelector('.kpi-meta') : null;
            
            let textoAcessivelTendencia = '';
            if (kpi.tendencia === 'up') {
                textoAcessivelTendencia = 'Aumento de desempenho. ';
            } else if (kpi.tendencia === 'down') {
                textoAcessivelTendencia = 'Redução de desempenho. ';
            } else if (kpi.tendencia === 'neutral') {
                textoAcessivelTendencia = 'Desempenho estável. ';
            }

            if (card) {
                card.setAttribute('data-status', kpi.status);
            }
            if (metaSpan && kpi.tendencia) {
                metaSpan.setAttribute('data-tendencia', kpi.tendencia);
                
                // Adiciona um span visualmente escondido, mas lido pelo leitor de tela
                metaSpan.innerHTML = `
                    <span class="visually-hidden">${textoAcessivelTendencia}</span>
                    ${metaSpan.innerHTML}`;
            }
        });
    }

    // Inicialização
    dataAtualizacao.textContent = new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    
    colorirKpis(); 
    
    // Configuração inicial do ARIA para os botões de filtro
    btnsEixo.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', 'painel-conteudo');
    });
    
    // Definir o botão ativo inicial como expandido
    const btnAtivoInicial = document.querySelector('.btn-ativo');
    if (btnAtivoInicial) {
        btnAtivoInicial.setAttribute('aria-expanded', 'true');
    }
    
    renderizarPainel('Fin'); 
    renderizarFaq(); 

    // Event Listeners dos Eixos (Atualizado para lidar com ARIA)
    btnsEixo.forEach(btn => {
        btn.addEventListener('click', function () {
            // 1. Remove classes e ARIA de todos
            btnsEixo.forEach(b => {
                b.classList.remove('btn-ativo');
                b.setAttribute('aria-expanded', 'false');
            });
            // 2. Adiciona classes e ARIA ao botão clicado
            this.classList.add('btn-ativo');
            this.setAttribute('aria-expanded', 'true');
            
            // 3. Renderiza o conteúdo
            renderizarPainel(this.getAttribute('data-eixo'));
        });
    });

    // Lógica do Alerta
    const alertaBox = document.getElementById('alerta-box-info');
    const alertaMensagem = document.getElementById('alerta-mensagem');
    const btnDetalheAlerta = document.getElementById('btn-detalhe-alerta');
    
    btnDetalheAlerta.textContent = "Ver Relatório Completo";
    btnDetalheAlerta.style.display = 'none'; 

    if (dadosEixos.Jus.progresso < 60 && dadosEixos.Fin.progresso > 80) {
        alertaBox.classList.add('risco-alto');
        alertaMensagem.innerHTML = `<i class="fas fa-bell"></i> ALERTA TÁTICO: Aumento da Resistência em Pontos Chave. Coordenar reforço imediato nas áreas de fronteira (Eixo 1).`;
        btnDetalheAlerta.style.display = 'inline-block';
        btnDetalheAlerta.addEventListener('click', () => alert("Relatório de Crise: Registro de 3 incidentes coordenados de fuga em presídios e bloqueio de rodovias. Ação de resposta: Força Tarefa acionada."));
    } else {
        alertaBox.classList.add('risco-baixo');
        alertaMensagem.innerHTML = `<i class="fas fa-check-circle"></i> Status Operacional: Estável. Progresso geral dos Eixos OK.`;
    }

    // =======================================================
    // LÓGICA DOS BOTÕES DE ACESSIBILIDADE DE TELA
    // =======================================================

    // Dark Mode
    const btnDark = document.getElementById('btn-toggle-dark');
    btnDark.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
    
    // Modo Daltônico
    const btnDaltonismo = document.getElementById('btn-toggle-daltonismo');
    btnDaltonismo.addEventListener('click', () => {
        document.body.classList.toggle('mode-daltonismo');
        
        if (document.body.classList.contains('mode-daltonismo')) {
            document.body.classList.remove('mode-alto-contraste'); // Remove o Alto Contraste
            btnDaltonismo.textContent = 'Modo Daltônico (ATIVO)';
            document.getElementById('btn-toggle-alto-contraste').textContent = 'Alto Contraste';
            alert('Modo Daltônico ativado. As cores e padrões de fundo foram ajustados para melhor distinguibilidade.');
        } else {
            btnDaltonismo.textContent = 'Modo Daltônico';
        }
    });

    // Modo Alto Contraste
    const btnContraste = document.getElementById('btn-toggle-alto-contraste');
    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('mode-alto-contraste');
        
        if (document.body.classList.contains('mode-alto-contraste')) {
            document.body.classList.remove('mode-daltonismo'); // Remove o Daltônico
            btnContraste.textContent = 'Alto Contraste (ATIVO)';
            document.getElementById('btn-toggle-daltonismo').textContent = 'Modo Daltônico';
            alert('Modo de Alto Contraste ativado. O esquema de cores foi alterado para preto e amarelo vibrante.');
        } else {
            btnContraste.textContent = 'Alto Contraste';
        }
    });
    
    // **A lógica do botão de Surdos/Libras foi removida, pois o VLibras é integrado diretamente no HTML.**
    
    // =======================================================
    // Gráfico de Barras (Gráfico de Progresso)
    // =======================================================
    const ctxKpis = document.getElementById('graficoKpis').getContext('2d');
    new Chart(ctxKpis, {
        type: 'bar',
        data: {
            labels: ['Financeiro', 'Inteligência', 'Justiça', 'Social'],
            datasets: [{
                label: 'Progresso (%)',
                data: [dadosEixos.Fin.progresso, dadosEixos.Int.progresso, dadosEixos.Jus.progresso, dadosEixos.Soc.progresso],
                backgroundColor: ['#2e7d32', '#1565c0', '#ffb300', '#0d47a1']
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } } }
    });
});