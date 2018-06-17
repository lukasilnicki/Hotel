
var el = document.getElementById("timeLineWrapper");

el.onload = function()
{
  var pointer = document.getElementById("point");
  
  pointer.addEventListener("click", zmianaRozmiaru);
  
};

function zmianaRozmiaru()
{
    var osCzasu = document.getElementById("timeLine");
    
    osCzasu.style.height = "150px";
    osCzasu.style.top = "25px";
}


