function heartCount() {
    let count = 0;
    const heartButtons = document.getElementsByClassName('heartBtn');
    const heartValue = document.getElementsByClassName('heartValue');

    for (const button of heartButtons) {
        button.addEventListener('click', function () {
            count++;
            for (let value of heartValue) {
                value.innerText = count;
            }
        })
    }

}

function showAlert(id) {
    const callBtn = document.getElementById(id);
    callBtn.addEventListener('click', function () {
        const parentCard = this.closest('.parent-card');

        if (!parentCard) return;

        const serviceName = parentCard.querySelector('.service-name').innerText;
        const number = parentCard.querySelector('.number').innerText;
        const showText = 'Service name: ' + serviceName + '\n' + 'Service number: ' + number;
        alert(showText);
    })

}


function coinUse(id){
     let count = 0;
     let callCost = 20;
    const callBtn = document.getElementById(id);
    const coinValue = document.getElementsByClassName('coinValue');

   callBtn.addEventListener('click', function () {
            count++;
            for (let value of coinValue) {
                coinValueNumber = parseInt(value.innerText);
                const newCoinValue = coinValueNumber - callCost;
                if(newCoinValue < 20){
                    alert('Insufficient Balance');
                    return;
                }
                
                value.innerText = newCoinValue;
            }
        })

}

coinUse('callNational');
coinUse('callPolice');
coinUse('callFire');
coinUse('callAmbulance');
coinUse('callWoman');
coinUse('callAnti');
coinUse('callElectricity');
coinUse('callBrac');
coinUse('callRailway');

heartCount();

showAlert('callNational');
showAlert('callPolice');
showAlert('callFire');
showAlert('callAmbulance');
showAlert('callWoman');
showAlert('callAnti');
showAlert('callElectricity');
showAlert('callBrac');
showAlert('callRailway');


