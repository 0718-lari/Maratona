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

    function renderizarPainel(eixo) {
        const dados = dadosEixos[eixo];
        const corProgresso = dados.progresso >= 80 ? '#2e7d32' : dados.progresso >= 60 ? '#ffb300' : '#c62828';
        const htmlDetalhe = `
            <div class="eixo-header">
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

    // Aplica o Status de Cor e a Tendência nos KPIs
    function colorirKpis() {
        dadosKpis.forEach(kpi => {
            const card = document.getElementById(kpi.id);
            const metaSpan = card ? card.querySelector('.kpi-meta') : null;

            if (card) {
                card.setAttribute('data-status', kpi.status);
            }
            if (metaSpan && kpi.tendencia) {
                metaSpan.setAttribute('data-tendencia', kpi.tendencia);
            }
        });
    }

    // Inicialização
    dataAtualizacao.textContent = new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    
    colorirKpis(); 
    renderizarPainel('Fin'); 
    renderizarFaq(); 

    // Event Listeners dos Eixos
    btnsEixo.forEach(btn => {
        btn.addEventListener('click', function () {
            btnsEixo.forEach(b => b.classList.remove('btn-ativo'));
            this.classList.add('btn-ativo');
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

    // Dark Mode
    const btnDark = document.getElementById('btn-toggle-dark');
    btnDark.addEventListener('click', () => document.body.classList.toggle('dark-mode'));

    // Gráfico de Barras (Gráfico de Progresso)
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