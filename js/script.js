const boi = document.querySelector(".boi");
const grill = document.querySelector(".grill");
const nuvens = document.querySelector(".nuvens"); 

const pulo = () => {
    boi.classList.add('pulo'); //adiciona a classe da imagem do boi, mas quando carregada finaliza o pulo
    // setTimeout(função, tempo) - tempo é aquele colocado na animação de pulo
    setTimeout(() => {
        boi.classList.remove("pulo"); // remove a classe para adicionar novamente quando quiser
    }, 500);
}
//const Verifica_jogo = setInterval(função, tempo); verificar se encostou e perdeu

    const verifica_jogo_loop = setInterval(()=>{
    const pos_grill = grill.offsetLeft;    

    const pos_nuvem = Number(window.getComputedStyle(nuvens).left.replace("px", "")); //troca do elemento style bottom por 0 px
    const pos_balao = Number(window.getComputedStyle(balao).left.replace("px", ""));
    const pos_boi = Number(window.getComputedStyle(boi).bottom.replace("px", ""));    
    
    //  function start_game(){}      
    
    if(pos_grill <= 130 && pos_grill > 0 && pos_boi < 78){ // entrou aqui, o jogo termina
        grill.style.animation = "none";
        grill.style.left = `${pos_grill}px` // animação do grill parar quando o boi encostar nela        
        //nuvens.style.animation = "none"; // sem animação
        nuvens.style.left = `${pos_nuvem}px`; // animação da nuvem parar quando o jogo termina
        balao.style.left = `${pos_balao}px`;
        boi.style.animation = "none"; // boi parar exatamente no local onde tocar o grill
        boi.style.bottom = `${pos_boi}px`
        boi.src = "./img/carne_assada2.png"; // mudar a imagem do boi correndo para o boi assado       
        boi.style.width = "60px"; // modificando as propriedades da imagem
        boi.style.marginLeft = "60px";
        boi.style.marginTop = "40px";         
    
        clearInterval(verifica_jogo_loop); // sair do loop quando o jogo acaba
    }
}, 10)
document.addEventListener("keydown", pulo); // implementar uma tecla específica para o disparo do evento



