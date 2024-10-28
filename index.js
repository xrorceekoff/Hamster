
let myEarnspam = document.getElementById("earn");
let myCoins = document.getElementById("coins");

function myEarn() {
    myCoins.innerText = Number(myCoins.innerText)+2777;
    if(myEarnspam.innerText<=7497){
        
        myEarnspam.innerText = Number(myEarnspam.innerText)+14;
        }else if(myEarnspam.innerText>=7480){
            myEarnspam.innerText = 7500;
            }
            
            localStorage.setItem('coin', myCoins.innerText);
            localStorage.setItem('raketa', myEarnspam.innerText);
            }
            
            
            function minus(){
                let myH1 = document.createElement("h1");
                myH1.innerText = "+14";
                localStorage.setItem('coin', myCoins.innerText);
                
                let myDiv = document.getElementById('important');
                myDiv.appendChild(myH1);
                myH1.style.cssText = `
    
        
    margin-left: 100px;         
    margin-top: -50px;
        position: absolute;
        color: white;
        animation: moveUp;
        animation-duration: 1s;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
    `;

    // Add keyframes for animation
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes moveUp {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-250%);
                color: transparent;
                

            }
        }
    `, styleSheet.cssRules.length);
    myH1.addEventListener('animationend', function() {
        myH1.remove();
    });
    
    if(myEarnspam.innerText>=14){
        myEarnspam.innerText  = Number(myEarnspam.innerText)-14;
        myCoins.innerText = Number(myCoins.innerText)+14;
    }
    if(myEarnspam.innerText<=14)
     {
      myH1.innerText = ''
    }
    localStorage.setItem('raketa', myEarnspam.innerText);
}
setInterval(myEarn, 1000);





 myCoins.innerText = localStorage.getItem('coin');
 myEarnspam.innerText = localStorage.getItem('raketa');

