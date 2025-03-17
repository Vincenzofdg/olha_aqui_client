export default {
    website: 'https://olhaaquicondominios.com.br',
    weHaveRecived: 'Ja recebemos sua mensagem e logo entraremos em contato',
    loginBtn: 'entrar',
    access: 'Acessar',
    seeMore: 'Ver mais',
    send: 'Enviar',
    all: 'todos',
    getInTouch: 'Entrar em contato',
    seeNewsFromRegion: 'Veja as notícias da sua região',
    appNewsTitle: 'Jornal Olha Aqui!!!',
    date: param => `Data: ${param}`,
    lawSource: param => `Fonte: ${param}`,
    homeNewTitle: 'Notícias & Destaques',
    homeNewSubtitle:
        'Um jornal virtual para anunciantes e notícias sobre condomínios',
    homeNewSlide: 'Deslize para o lado',
    juriTitle: 'Jurisprudência',
    juriSubtitle:
        'Veja as regras, leis, punições e outras informações de legislação do seu condomínio',
    contactTitle: 'Contato',
    contactSubtitle:
        'Entre em contato, tire dúvidas, veja como anunciar ou faça sugestões',
    eventsTitle: 'Olha aqui Eventos',
    eventsSubtitle: 'Veja os eventos que estão acontecendo na região',
    notEvents: 'Nenhum evento disponível.',
    adsTitle: 'Anúncios',
    adsSubtitle: 'Confira os anúncios abaixo',
    notAds: 'Não há anúncios disponíveis.',
    noLaws: 'Não há leis disponíveis.',
    notNews: 'Não há notícias disponíveis.',
    form: {
        contact: [
            {identifier: 'name', label: 'nome *', type: 'text'},
            {identifier: 'surname', label: 'sobrenome', type: 'text'},
            {identifier: 'email', label: 'email *', type: 'email'},
            {identifier: 'phone', label: 'telefone *', type: 'phone'},
            {
                identifier: 'description',
                label: 'escreva sua mensagem *',
                type: 'longText',
            },
        ],
    },
    card: {
        contact: {
            content:
                'Anúncios e notícias exclusivas para sua comunidade de condominios',
            btn: 'Entre em contato',
            imgPath:
                'https://imagens.usp.br/wp-content/uploads/Cidade_S%C3%A3o-Paulo_291-16_foto-Cec%C3%ADlia-Bastos-01.jpg',
        },
        announce: {
            title: 'Notícias e Anúncios em um só App!',
            content:
                'Anuncie e publique suas matérias em um único lugar! Participe de nossa comunidade online para divulgar anúncios e compartilhar notícias com um público amplo e engajado. Fique por dentro das últimas novidades do mercado e mantenha-se conectado.',
            btn: 'Anuncie aqui',
        },
        announceSector: {
            title: 'Veja os Anúncios que mais te interessam',
            btns: ['Condomínio', 'Moradores'],
        },
    },
    sideMenu: [
        ['Home', 'Inicio'],
        ['Ads', 'Anúncios'],
        ['News', 'Notícias '],
        // ["Administrative", "Administrativo"],
        // ["BS", "Eventos"],
        ['Jurisprudence', 'Jurisprudência'],
        ['Contact', 'Contato'],
    ],
};
