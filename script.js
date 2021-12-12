let numeroSecreto = Math.trunc(Math.random()*20)+1;
let puntaje = 10;
let maximoPuntaje = 0;

/* funciones utilizadas debajo */
function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

/* juego*/
document.querySelector('.check').addEventListener('click', function(e){
    e.preventDefault(); //p/evitar que se actualice al hacer click en Probar //
    /* querySelector busca en html todo lo que tenga la clase check*/
    const numeroIngresado = Number (document.querySelector('.guess').value);
    console.log(numeroIngresado);

    if(!numeroIngresado){ /*no ingresó n° */
        displayMessage('No ingresaste ningún número.');
    }
    else if (numeroIngresado===numeroSecreto){ /*ingresó n° y es= al n° secreto */
        displayMessage('Win!');
        document.querySelector('.number').textContent = numeroSecreto;
        document.querySelector('.result').style.backgroundColor = '#60b347';

        if(puntaje > maximoPuntaje){
            maximoPuntaje = puntaje;
            document.querySelector('.highscore').textContent=maximoPuntaje;
        }
    }
    else { /*ingresó n° y es != al n° secreto */
        if (puntaje > 1){
            if (numeroIngresado>numeroSecreto){
                displayMessage('Pista: N° muy alto.')
            }
            else{
                displayMessage('Pista: N° muy bajo.')
            }
            puntaje--;
            document.querySelector('.score').textContent = puntaje;
        }
        else{
            displayMessage('Gamer Over');
            document.querySelector('.score').textContent=0;
            document.querySelector('.result').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = numeroSecreto;
        }
    }
    
})

document.querySelector('.again').addEventListener('click', function(){
    puntaje = 10;
    numeroSecreto=Math.trunc(Math.random() * 20 + 1);

    displayMessage('Ingresar un número...');
    document.querySelector('.score').textContent = puntaje;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    // .guess llamo una clase del html //

    document.querySelector('.result').style.backgroundColor = '#011801';
    // #container llamo un id del html //
})