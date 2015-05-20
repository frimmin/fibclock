


/*
Basic second counter below... needs self-adjusting 
checks of actual time instead of CPU clock.



*/
setInterval(
  (function() {
   var d = new Date();	
   var readout = document.getElementById('readout');    
    readout.textContent = d.toLocaleTimeString();
  }), 1000);