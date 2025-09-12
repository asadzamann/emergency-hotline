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


getAlert('callNational');
getAlert('callPolice');
getAlert('callFire');
getAlert('callAmbulance');
getAlert('callWoman');
getAlert('callAnti');
getAlert('callElectricity');
getAlert('callBrac');
getAlert('callRailway');

function getAlert(id) {
    const callBtn = document.getElementById(id);
    callBtn.addEventListener('click', function () {
        const parentCard = this.closest('.parent-card');
        const serviceName = parentCard.querySelector('.service-name').innerText;
        const number = parentCard.querySelector('.number').innerText;
        const showText = 'Service name: ' + serviceName + '\n' + 'Service number: ' + number;
        alert(showText);
    })

}