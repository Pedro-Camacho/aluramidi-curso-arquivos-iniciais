function tocaSom(idElementoAudio){
    const elemento=document.querySelector(idElementoAudio);
    if(elemento!=null && elemento.localName==='audio'){
        elemento.play();
    }else{
        console.log(`Elemento não existe ou seletor invalido ${elemento.localName} `)
    }
}

const listaTeclas=document.querySelectorAll('.tecla');

for(contador=0;contador<listaTeclas.length;contador++){
    const tecla=listaTeclas[contador];
    const instrumento=tecla.classList[1];
    const idAudio=`#som_${instrumento}`;
    tecla.onclick=function(){
        tocaSom(idAudio)        
    }
    tecla.onkeydown = function(evento){
        if(evento.code==='Space' ){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }
}
