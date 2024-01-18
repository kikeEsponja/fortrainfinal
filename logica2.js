var texto = document.getElementById("frase");

const frases = ['Descubre el paradigma de la gestión empresarial con Fortrain. Velocidad, adaptabilidad y excelencia en cada detalle.',
 'Haz de la complejidad algo del pasado. Ofrecemos soluciones personalizadas para un futuro empresarial impecable.',
 'En el mundo empresarial, la excelencia no es una opción, es una necesidad. SOLUCIONES TECH proporciona las herramientas para alcanzarla.'
];

function aleatoria(){
    return frases[Math.floor(Math.random() * frases.length)];
}

function actualizarFrase(){
    texto.style.opacity = 0;
    setTimeout(function(){
        texto.innerHTML = aleatoria();
        texto.style.opacity = 1;
    }, 500)
}

actualizarFrase();

setInterval(actualizarFrase, 5000);