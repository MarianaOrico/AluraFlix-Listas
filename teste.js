var listaFilmes = []
// indice                0            1             2 

//adicionando novos elementos 
listaFilmes.push();

// indice 4
listaFilmes.push();
listaFilmes.push();

console.log(listaFilmes.length);

// document.write("<h1>" + listaFilmes[0] + "</h1>");
// document.write("<h1>" + listaFilmes[1] + "</h1>");
//document.write("<h1>" + listaFilmes[2] + "</h1>");
// document.write("<h1>" + listaFilmes[3] + "</h1>");

//  valor inicial,   condição,    expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<h1>" + listaFilmes[indice] + "</h1>");

}

// Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos... Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while. Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente. Criar um campo e botão para adicionar a imagem pela tela, e não direto no código.

var listaFilmes = ["https://img.betaseries.com/TbQEJK43MtrteV-_Mc39A4B3Cag=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffilms%2Faffiches%2Foriginal%2F5914.jpg", "https://i.ytimg.com/vi/WwW1nqV3pI0/movieposter_en.jpg", "https://br.web.img3.acsta.net/pictures/14/04/17/16/57/109988.jpg", "https://i0.wp.com/1.bp.blogspot.com/-JlnnqZaUydE/XZ58TBCmodI/AAAAAAAAPJU/7ccMAevQr4kFWOo1FpfLoo2fueTcsZ8RwCEwYBhgL/s1600/fb283d5c01356ca0c9d91a034f95a026.jpg?ssl=1", "https://br.web.img3.acsta.net/pictures/210/530/21053062_20131025204305591.jpg", "https://br.web.img3.acsta.net/medias/nmedia/18/97/04/04/20504443.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
        elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

