const classes = ['laranja', 'verde', 'roxo'];

function alterarFavicon(classe) {
    const link = document.querySelector("link[rel*='icon']");
    link.href = `/assets/image/favicon-${classe}.ico`;
}

function adicionarClasseAleatoria() {
    const classeAleatoria = classes[Math.floor(Math.random() * classes.length)];
    console.log("A classe aleatória escolhida foi " + classeAleatoria + "!");
    document.body.classList.add(classeAleatoria);

    alterarFavicon(classeAleatoria);

    const headerObject = document.getElementById('headerObject');

    headerObject.addEventListener('load', function () {
        const doc = headerObject.contentDocument || headerObject.contentWindow.document;

        if (doc) {
            console.log("Header encontrado.");
            doc.body.classList.add(classeAleatoria);
        } else {
            console.log("Header não encontrado.");
        }
    });
}

adicionarClasseAleatoria();