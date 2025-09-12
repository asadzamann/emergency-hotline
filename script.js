document.getElementById('clearCallHistory').addEventListener('click', clearCallHistory);

function clearCallHistory() {
    document.getElementById('selectedContainer').innerHTML = '';
}

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
        const info = getInfo(id);

        const showText = 'Service name: ' + info.serviceName + '\n' + 'Service number: ' + info.number;
        alert(showText);
    })


    callHistory(id);
}


function coinUse(id) {
    let count = 0;
    let callCost = 20;
    const callBtn = document.getElementById(id);
    const coinValue = document.getElementsByClassName('coinValue');

    callBtn.addEventListener('click', function () {
        count++;
        for (let value of coinValue) {
            coinValueNumber = parseInt(value.innerText);
            const newCoinValue = coinValueNumber - callCost;
            if (newCoinValue < 20) {
                alert('Insufficient Balance');
                return;
            }

            value.innerText = newCoinValue;
        }
    })

}


function getInfo(id) {
    const callBtn = document.getElementById(id);
    const parentCard = callBtn.closest('.parent-card');

    if (!parentCard) return;

    const serviceName = parentCard.querySelector('.service-name').innerText;
    const number = parentCard.querySelector('.number').innerText;
    return { serviceName, number }

}

function callHistory(id) {

    const callHistoryContainer = document.getElementById('selectedContainer');
    const callBtn = document.getElementById(id);
    callBtn.addEventListener('click', function () {
        const info = getInfo(id);
        const createElement = document.createElement('button');
        createElement.classList.add('btn', 'flex', '!justify-between', '!p-7')
        createElement.innerHTML = `
    
                        <div class="text-start">
                            ${info.serviceName} <br>
                            <p class="text-gray-500">${info.number}</p>
                        </div>
                        <div class="badge badge-sm">${new Date().toLocaleTimeString()}</div>
                 
    `
        callHistoryContainer.appendChild(createElement);
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


