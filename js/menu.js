
window.onload = function()
{
    /* CZĘŚĆ ODPOWIADAJĄCA ZA MENU */
   
    var menu = document.getElementById("menuMain");
    
    menu.addEventListener("mouseover", zmianaTla);
    menu.addEventListener("mouseout", powrotTla);
    
    function zmianaTla()
    {
        var zmiana1 = document.getElementById("menuMain");
        zmiana1.classList.add("menuMainBackground");
    }

    function powrotTla()
    {
        var zmiana = document.getElementById("menuMain");
        zmiana.classList.remove("menuMainBackground");
    }
    
    
    
    /* CZĘŚĆ ODPOWIADAJĄCA ZA OŚ CZASU */
    
    var pointer = document.getElementById("point");
  
    pointer.addEventListener("click", zmianaRozmiaru);
    pointer.addEventListener("click", pokazText);
    
    function zmianaRozmiaru()
    {
        var osCzasu = document.getElementById("timeLine");
    
        osCzasu.setAttribute("id", "timeLineExpand");       // Zastąpienie nowymi właściwościami z CSS
        pointer.setAttribute("id", "pointActive");
        
        var wrap = document.getElementById("timeLineWrapper2");
        
        wrap.style.left = "100px";      // Przejście diva z osią czasu na lewo przy kliknięciu.
    }
    
    function pokazText()
    {
        var sekcja = document.getElementById("section1");
        
         sekcja.setAttribute("id", "section1After");
         $('#section1After').fadeOut(0);
         $('#section1After').fadeIn(800);
    }
    
    
};



