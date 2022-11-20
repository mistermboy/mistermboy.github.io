window.onload = function(){
    window.addEventListener('mousemove', function(e) {
        var xPos = e.pageX;
        var yPos = e.pageY;
        let leftPupil = document.getElementById('leftPupil');
        let rightPupil = document.getElementById('rightPupil');
        
        let top  = (yPos/10)+'px';
        if(xPos>900)xPos=900
        if(xPos<300)xPos=300
        let left = (xPos/10) - 90 +'px';

        leftPupil.style.top = top
        rightPupil.style.top = top
        leftPupil.style.left= left
        rightPupil.style.left= left
    
    
      });
}