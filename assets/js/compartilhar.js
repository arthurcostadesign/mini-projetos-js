const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Precisa de algum trabalho de design gráfico? Faça um orçamento clicando neste link:',
            url: window.location.href,
        })
            .then(() => console.log('Compartilhamento realizado com sucesso'))
            .catch(error => console.error('Erro ao compartilhar:', error));
    } else {
        console.error('Recurso de compartilhamento não suportado pelo navegador');
    }
});