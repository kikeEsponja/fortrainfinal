var texto = document.getElementById("frase");

const frases = ['No te conformes con lo común, elige la excelencia. Nuestra Software Factory redefine los estándares del desarrollo de software.',
 ' La agilidad, calidad y creatividad convergen en nuestra Software Factory. Tu proyecto merece lo mejor, ¿estás listo para brillar en el mundo digital?',
 'Desbloquea el potencial completo de tu visión digital. Nuestra Software Factory es la llave que abre las puertas a la excelencia tecnológica'
];

function aleatoria(){
    return frases[Math.floor(Math.random() * frases.length)];
}

function actualizarFrase(){
    texto.style.opacity = 0;
    setTimeout(function(){
        texto.innerHTML = aleatoria();
        texto.style.opacity = 1;
    }, 500);
}

actualizarFrase();

setInterval(actualizarFrase, 5000);