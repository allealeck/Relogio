// dom

const hora = document.querySelector('#hora');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');
const calendario = document.querySelector('#data')
const fundo = document.querySelector('body');
const mesage = document.querySelector('#saudacao');
const semana = document.querySelector('#semana');

const relogio = setInterval(()=>{

    let sistema = new Date();
    let hr = sistema.getHours();
    let min = sistema.getMinutes();
    let seg = sistema.getSeconds();
    let dataHoje  = sistema.toLocaleDateString('pt-br');
    let dia = sistema.getDay();
    let mensagem;
    let semanaData;
    


    if(hr<10){
        hr = "0" + hr;
    }
    if(min<10){
        min = "0" + min;
    }
    if(seg<10){
        seg = "0" + seg;
    }
    if(hr>=18 || hr<5){
        fundo.classList.add('darkmode');
    }else{
        fundo.classList.remove('darkmode');
    }

    if(hr>=5 || hr<12){
        mesage.textContent = "Bom Dia, hoje eh";
    }
    else if(hr>=12 || hr<18){
        mesage.textContent = "Boa Tarde, hoje eh";
    }
    else{
        mesage.textContent = "Boa Noite, hoje eh";
    }

    if(dia == 0){
        semana.textContent = "Domingo";
    }
    else if(dia == 1){
        semana.textContent = "Segunda";
    }
    else if(dia == 2){
        semana.textContent = "Terca";
    }
    else if(dia == 3){
        semana.textContent = "Quarta";
    }
    else if(dia == 4){
        semana.textContent = "Quinta";
    }
    else if(dia == 5){
        semana.textContent = "Sexta";
    }
    else if(dia == 6){
        semana.textContent = "Sabado";
    }

    hora.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    calendario.textContent = dataHoje;
   

}, 1000);

// eventos




// função