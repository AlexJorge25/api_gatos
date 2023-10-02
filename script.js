async function trocarImagem() {
    var dados = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
    var response = await dados.json()
    if (response && response.length >= 0) {
        var container = document.getElementById('container');
        container.innerHTML = ''
        for (var i = 0; i < response.length; i++) {
            var imagem = document.createElement("img");
            imagem.classList.add("imagem")
            const imageUrl = response[i].url;
            imagem.src = imageUrl;
            container.appendChild(imagem);
        }
    }
}

