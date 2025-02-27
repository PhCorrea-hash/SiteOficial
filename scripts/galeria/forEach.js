const galeriaLista = document.getElementById("galeria-lista");
const galeriaPrincipal = document.getElementById("galeria-principal");
const opacidade = document.getElementById("opacidade");
const body = document.querySelector(".corpo");
let galeriaPrincipalImg = document.querySelector(".galeria-principal-img");
let imagensId = [];
let verificar = null;

console.log(galeriaPrincipal);


function exibirImagens(listaDeImagens) {
    listaDeImagens.forEach(imagem => {
        galeriaLista.innerHTML += `
            <li class="galeria-item">
                <img id= "${imagem.id}" class="galeria-img" src="./assets/imgs/${imagem.imagem}" alt="${imagem.alt}">
                 <div class="galeria-img-descricao">
                    <h3 class="galeria-img-descricao-titulo">${imagem.titulo}</h3>
                    <p class="galeria-img-descricao-texto">${imagem.descricao}</p>
                    <p class="galeria-img-descricao-tamanho">${imagem.tamanho1}px X ${imagem.tamanho2}px</p>
                </div>
            </li>
            `;
            imagensId.push(imagem.id);
            console.log(imagensId);   
    });
};

const div = document.createElement("div");
const imagem = document.createElement("img");
const h2 = document.createElement("h2");
const p = document.createElement("p");

galeriaLista.addEventListener("click", (element) => {
    if (galeriaPrincipal.classList.contains("vazio")) {
        let id = element.target.id;
        console.log(id);
        
        let objeto = imagens[id];
        console.log(objeto);

        galeriaPrincipal.style.display = "flex";

        
        imagem.classList.add("galeria-principal-img");
        imagem.src = `./assets/imgs/${objeto.imagem}`;

        
        div.classList.add("galeria-principal-texto");

        
        h2.classList.add("galeria-principal-titulo");
        h2.innerText = `${objeto.titulo}`;

        
        p.classList.add("galeria-principal-descricao");
        p.innerText = `${objeto.descricao}`;

        div.appendChild(h2);
        div.appendChild(p);

        galeriaPrincipal.appendChild(imagem);
        galeriaPrincipal.appendChild(div);
        
        opacidade.classList.add("opacidade");
        galeriaPrincipal.classList.remove("vazio");
        
        
    } else {
        
    }
    
});


galeriaPrincipal.addEventListener("click", () => {
    div.remove();
    imagem.remove();

    console.log("cheio");

    galeriaPrincipal.style.display = "none";
   
    galeriaPrincipal.classList.add("vazio");
    opacidade.classList.remove("opacidade");
})
