export default {
    loginBtn: 'enter',
    access: 'Acess',
    seeMore: 'See more',
    send: 'Enviar',
    seeNewsFromRegion: 'Veja as notícias da sua região',
    appNewsTitle: 'Jornal Olha Aqui!!!',
    date: param => `Data: ${param}`,
    lawSource: param => `Fonte: ${param}`,
    homeNewTitle: 'Notícias Condomínios',
    homeNewSubtitle:
        'Um jornal virtual para anunciantes e notícias sobre condomínios',
    juriTitle: 'Jurisprudência',
    juriSubtitle:
        'Veja as regras, leis, punições e outras informações de legislação do seu condomínio',
    contactTitle: 'Contato',
    contactSubtitle:
        'Entre em contato, tire dúvidas, veja como anunciar ou faça sugestões',
    form: {
        contact: [
            {identifier: 'name', label: 'nome *', type: 'text'},
            {identifier: 'surname', label: 'sobrenome', type: 'text'},
            {identifier: 'email', label: 'email *', type: 'email'},
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
                'Divulgue anúncios e notícias exclusivas para sua comunidade',
            btn: 'Entre em contato',
            imgPath:
                'https://imagens.usp.br/wp-content/uploads/Cidade_S%C3%A3o-Paulo_291-16_foto-Cec%C3%ADlia-Bastos-01.jpg',
        },
        announce: {
            title: 'Notícias e Anúncios em um só lugar!!!',
            content:
                'Anuncie e publique suas matérias em um único lugar! Participe de nossa comunidade online para divulgar anúncios e compartilhar notícias com um público amplo e engajado. Fique por dentro das últimas novidades do mercado e mantenha-se conectado.',
            btn: 'Anuncie aqui',
        },
        announceSector: {
            title: 'Veja os Anúncios do setores que mais te interessam',
            btns: ['Condomínio', 'Condominio'],
        },
    },
    sideMenu: [
        ['Home', 'Inicio'],
        // ["Ads", "Anúncios"],
        ['News', 'Notícias '],
        // ["Administrative", "Administrativo"],
        ['BS', 'Olha aqui, Acontece BS'],
        ['Jurisprudence', 'Jurisprudência'],
        ['Contact', 'Contato'],
    ],
};
