const galeriaLista = document.querySelector(".galeria-lista");
const listaDeImagens = [];

listaDeImagens.forEach(imagem => {
    galeriaLista.innerHTML += `
        <li class="galeria-item">
            <img class="galeria-img" src="${img-src}" alt="${img-alt}">
             <div class="galeria-img-descricao">
                <h3 class="galeria-img-descricao-titulo">${img-titulo}</h3>
                <p class="galeria-img-descricao-texto">${img-descricao}</p>
                <p class="galeria-img-descricao-tamanho">${img-tamanho1}px X ${img-tamanho2}px</p>
            </div>
        </li>
        `;
});
