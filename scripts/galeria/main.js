let imagens = [];
const requisicao = 'https://phcorrea-hash.github.io/Imagens1.json';
getBuscarImagens();

async function getBuscarImagens() {
    const res = await fetch(requisicao);
    imagens = await res.json();
    exibirImagens(imagens);
}







