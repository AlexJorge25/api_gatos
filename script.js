// Função para criar e exibir 10 imagens de gatos diferentes
function trocarImagem() {
    // Faz uma única requisição para a API "The Cat API" para obter 10 imagens de gatos diferentes
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
    .then((dados) => dados.json())
    .then((response) => {
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
        })
        .catch((erro) => console.log(erro));
}
