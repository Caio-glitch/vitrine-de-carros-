let listaCarros = [
    {
        "nome":"Maserati Alfieri",
        "img":  "img/Maserati Alfieri .jpeg",
        "descricao": " O Maserati Alfieri é a personificação do luxo, desempenho e design italiano, um carro que promete emocionar tanto os entusiastas de automóveis quanto os amantes da alta tecnologia."
    },
    {
        "nome": "McLaren 570S",
        "img":  "img/McLaren 570S .jpeg",
        "descricao":  "O McLaren 570S é um superesportivo leve e potente, equipado com um motor V8 3.8 biturbo de 570 cv , capaz de acelerar de 0 a 100 km/h em 3,2 segundos e atingir 328 km/h" 
    },
    {
        "nome": "Mercedes-AMG GT 4",
        "img": "img/Mercedes-AMG GT 4.jpeg",
        "descricao": "Um Mercedes-AMG GT 4 Portas Coupé combina luxo, esportividade e tecnologia em um design agressivo e aerodinâmico. Com motores potentes, incluindo um V8 biturbo de mais de 600 cv , aceleração de 0 a 100 km/h em cerca de 3 segundos ."
    },
    {
        "nome": "Lamborghini Huracán",
        "img":  "img/Lamborghini Huracán.jpeg",
        "descricao": "O Lamborghini Huracán é muito mais do que um carro; é uma experiência. Com seu design agressivo, desempenho excepcional e tecnologia avançada, ele é a personificação do espírito Lamborghini. Seja nas ruas ou na pista, o Huracán oferece uma condução emocionante e inesquecível, consolidando-se como um dos superesportivos mais desejados do mundo. Para quem busca emoção, desempenho e exclusividade, o Huracán é a escolha definitiva."
    },
    {
        "nome": "Rolls-Royce Ghost",
        "img":  "img/Rolls-Royce Ghost .jpeg",
        "descricao": "O Rolls-Royce Ghost é muito mais do que um carro; é uma declaração de status e um símbolo de sucesso. Com seu design elegante, interior luxuoso e desempenho suave, ele oferece uma experiência de condução incomparável, focada no conforto e na tranquilidade. Para quem busca o ápice do luxo automotivo, o Ghost é a escolha definitiva, representando o melhor da tradição e da inovação da Rolls-Royce. Seja como motorista ou passageiro, o Ghost proporciona uma viagem que é tão especial quanto o destino."
    },
    {
        "nome": "Bugatti Chiron",
        "img":  "img/bugatti3.jpeg",
        "descricao": "O Bugatti Chiron é muito mais do que um carro; é uma obra-prima da engenharia e um símbolo de excelência. Com seu design impressionante, desempenho excepcional e luxo incomparável, ele representa o ápice da tecnologia automotiva e do artesanato de alta qualidade. Para quem busca o melhor em termos de velocidade, luxo e exclusividade, o Chiron é a escolha definitiva. Ele não é apenas um carro; é uma lenda sobre rodas."
    }
]

listaCarros.map((carro, posicao) => {
   let cardCarro = document.getElementById("cards");
   cardCarro.innerHTML += `
                <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>    
   ` 
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    //aciona o modal
    new bootstrap.Modal('#zoomImg').show();

}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-sun-fill"></i>`;
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
    }
}

