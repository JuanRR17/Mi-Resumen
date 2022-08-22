
function cambBoxShadow(type){
    let seleccion=document.getElementById(type);
    let texto;
    texto=seleccion.options[seleccion.selectedIndex].text;
    
    let patron1=/simple/;
    let patron2=/multiple/;
    let patron3=/interior/;
    let patron4=/transparente/;
    
   if(patron1.test(texto)){
    valor='30px 10px 20px #777';
    }
    if(patron2.test(texto)){
        valor='30px 10px 20px red, -30px -10px 20px blue';
        }
    if(patron3.test(texto)){
        valor='inset 0 0 20px blue';
    }
    if(patron4.test(texto)){
        valor='30px 30px 30px rgba(255,0,0,0.3)';
    }

    document.documentElement.style.setProperty('--bs',valor);
    document.getElementById('bxshdw').value=valor;
}
function cambBox(type){
    let valor=document.getElementById(type).value;
    document.documentElement.style.setProperty('--bs',valor);
}