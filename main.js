window.onload = function(){

    let animationBtn = document.getElementById('activateAnimation');
    animationBtn.addEventListener("click", function(){
        let lSquares = document.getElementsByClassName('l-square');
        let counter = 0;
        Object.keys(lSquares).map(s=>{
            lSquares[s].classList.add('l-square-animate')
            lSquares[s].style.animationDelay = counter+"s";
            counter+=0.3;
        })
        counter = 0;
        let rSquares = document.getElementsByClassName('r-square');
        Object.keys(rSquares).map(s=>{
            rSquares[s].classList.add('r-square-animate')
            rSquares[s].style.animationDelay = counter+"s";
            counter+=0.3;
        })
  
    });

}