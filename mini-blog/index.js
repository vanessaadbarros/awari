const articles = [
    {
      title: "New Advances in Climate Change Mitigation Strategies",
      text: "Cientistas em todo o mundo estão desenvolvendo novas tecnologias para mitigar os efeitos das mudanças climáticas. As inovações incluem a captura de carbono e fontes de energia renovável mais eficientes. Especialistas acreditam que essas medidas são cruciais para reduzir as emissões de gases de efeito estufa e limitar o aquecimento global a 1,5°C.",
      author: "Dr. Amanda Silva",
      tags: ["Science", "World"],
      publishedTime: "10:30 AM",
      comments: 120
    },
    {
      title: "Government Introduces New Sports Initiative for Youth",
      text: "O governo anunciou um novo programa esportivo para jovens em idade escolar, com o objetivo de promover a saúde e o bem-estar. O programa incluirá várias disciplinas esportivas e treinamento especializado, visando descobrir novos talentos.",
      author: "John Carter",
      tags: ["Sports", "Local"],
      publishedTime: "1:45 PM",
      comments: 75
    },
    {
      title: "Local Weather Conditions Worsen as Storm Approaches",
      text: "Uma forte tempestade está se aproximando da costa, e as autoridades emitiram avisos de enchentes para várias áreas. Moradores estão sendo aconselhados a se prepararem para possíveis interrupções de energia e a se manterem em segurança.",
      author: "Maria Ferreira",
      tags: ["Weather", "Local"],
      publishedTime: "8:00 AM",
      comments: 230
    },
    {
      title: "Breakthrough in Renewable Energy Storage",
      text: "Pesquisadores revelaram uma nova tecnologia de armazenamento de energia renovável que promete aumentar a eficiência das baterias solares e eólicas. Esta inovação pode ser um grande passo para a independência energética sustentável.",
      author: "Dr. Ricardo Martins",
      tags: ["Science", "World"],
      publishedTime: "11:15 AM",
      comments: 180
    },
    {
      title: "World Leaders Meet to Discuss Global Security",
      text: "Líderes mundiais se reuniram hoje para discutir as ameaças à segurança global, com foco em conflitos regionais e terrorismo. As discussões também abordaram a cooperação internacional em matéria de inteligência e cibersegurança.",
      author: "Emily Roberts",
      tags: ["Politics", "World"],
      publishedTime: "2:00 PM",
      comments: 300
    },
    {
      title: "New Study Reveals Effects of Pollution on Marine Life",
      text: "Um estudo recente destacou os impactos devastadores da poluição nos oceanos, especialmente em relação à vida marinha. As conclusões indicam que, sem ação imediata, muitas espécies podem estar em risco de extinção.",
      author: "Dr. Jorge Lima",
      tags: ["Science", "World"],
      publishedTime: "9:45 AM",
      comments: 210
    },
    {
      title: "Local Sports Team Wins Regional Championship",
      text: "O time de futebol local conquistou o campeonato regional após uma emocionante partida contra seus rivais. A vitória foi celebrada por toda a comunidade, que compareceu em peso para apoiar a equipe.",
      author: "Lucas Souza",
      tags: ["Sports", "Local"],
      publishedTime: "6:00 PM",
      comments: 150
    },
    {
      title: "Government Approves New Environmental Regulations",
      text: "O governo aprovou novas regulamentações ambientais destinadas a reduzir a poluição industrial e proteger os recursos naturais. As novas leis serão implementadas nos próximos meses e incluem medidas rigorosas para garantir a conformidade.",
      author: "Ana Costa",
      tags: ["Politics", "Local"],
      publishedTime: "4:30 PM",
      comments: 90
    },
    {
      title: "International Space Station Celebrates 25 Years",
      text: "A Estação Espacial Internacional celebra 25 anos de operação contínua no espaço. Durante esse tempo, a ISS tem sido um centro de pesquisa científica de importância global, contribuindo para avanços em várias áreas.",
      author: "Dr. Laura Mendes",
      tags: ["Science", "World"],
      publishedTime: "3:00 PM",
      comments: 200
    },
    {
      title: "Heavy Rain Causes Flooding in Downtown Area",
      text: "Fortes chuvas causaram inundações significativas na área central da cidade, resultando em danos a propriedades e interrupções no tráfego. As autoridades estão trabalhando para desobstruir as vias e ajudar os afetados.",
      author: "Felipe Moreira",
      tags: ["Weather", "Local"],
      publishedTime: "7:00 AM",
      comments: 190
    }
];

const newsSection = document.getElementById('news');

window.addEventListener("DOMContentLoaded", function(){
    displayArticles(news);
});



function displayArticles(news){
    let blogNews = articles.map(function(article){
        return `
        <article>
            <header>
                <h1><a href="item.html">${article.title}</a></h1>
            </header>
            <img src="https://picsum.photos/600/300/?${article.tags}" alt="${article.title}">
            <p>${article.text}</p>
            <footer>
            <span class="author">${article.author}</span>
            <span class="tags"><a href="index.html">#local</a> <a href="index.html">#life</a></span>
            <span class="date">${article.publishedTime}</span>
            <a class="comments" href="item.html#comments">${article.comments}</a>
            </footer>
        </article>`
    });
    blogNews = blogNews.join("");
    newsSection.innerHTML = blogNews;
    console.log(blogNews);
};