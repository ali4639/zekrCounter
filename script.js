window.onload = function(){
  
    let counterBtn = document.querySelector('.counterBtn');
    let resetBtn = document.querySelector('.resetBtn');
    let showLcd = document.querySelector('.lcd');
    let savedCount = localStorage.getItem('lastCount'); //Gets the latest count from local storage.

    counterBtn.addEventListener('click', increase);
    resetBtn.addEventListener('click', resetLcd);
  
    if(savedCount){
        showLcd.innerText = savedCount;
    }else{
        showLcd.innerText = 0;
    }

    function increase(){
        let getLcdValue = showLcd.innerHTML;
        let lcdValue = Number(getLcdValue);

        if(lcdValue < 99999){
          lcdValue++;
        }else{
          lcdValue = 'ERROR';
        }

        showLcd.innerText = lcdValue;
        localStorage.setItem('lastCount',lcdValue); //The last count is saved in local storage.
    }

    function resetLcd(){
        showLcd.innerText = 0;
        localStorage.setItem('lastCount',0);        //When the reset button is clicked                                                    
    }
 }