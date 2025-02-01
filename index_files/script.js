
// Verification for login
const loginData = getCookie('sessionid');
if (loginData) {
    if (loginData != 'yns640')
        window.location.replace('./login');
} else
    window.location.replace('./login');

// Unix time format function
function formatUnixTimestamp(unixMs) {
    const date = new Date(unixMs);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(',', '');
}

// For checking plural days
function pluralSuffix(count) {
    return count !== 1 ? 's' : '';
}
// Generating current time
const currentDeviceTime = new Date().getTime(),
    dayDuration = 86400000;
let activatedCardFound = false;

// Check days left
function findDays(time) {
    let timeDifference = time - currentDeviceTime;
    let daysLeft = 1;
    while (timeDifference >= dayDuration) {
        daysLeft++;
        timeDifference -= dayDuration;
    }
    return daysLeft;
}
function getNextParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('next');
}

// Fetching current index
const nextData = getNextParam();
let scrollIndex = 12;
if (nextData) {
    const nextGap = parseInt(nextData);
    scrollIndex = (nextGap*12);
    if(nextGap > 1){
        document.getElementById('backToHome').classList.remove('disabled');
    }
}
if(userData.length > 12){
    const olderData = document.getElementById('myOlderData');
    olderData.classList.remove('disabled');
    olderData.dataset.href = '?next='+((scrollIndex/12)+1);
}
renderButtons();

// Manageing user data
const cardsHolder = document.getElementById('cardsHolder');
let totalDurationPurchased = 0;
let cardExpires = 0;
for (let index = scrollIndex - 1, counter = 1; counter <= 12; index--, counter++) {
    const element = userData[index];
    if (!element)
        continue;
    const expiryTime = element[5] + (element[6] * dayDuration);
    // Determining the banner type
    let bannerDisplayText = { main: '', secondary: '' }, isExpired = false, isCurrent = false;;
    if (currentDeviceTime < expiryTime) {
        if (activatedCardFound) {
            bannerDisplayText.main = 'PURCHASED EXTRA';
            bannerDisplayText.secondary = '+' + element[6] + ' day' + pluralSuffix(element[6]) + ' for future';
            totalDurationPurchased += element[6];
        } else {
            const daysRemaining = findDays(expiryTime);
            bannerDisplayText.main = 'ACTIVATED';
            bannerDisplayText.secondary = daysRemaining + ' day' + pluralSuffix(daysRemaining) + ' remaining...';
            totalDurationPurchased += daysRemaining;
            isCurrent = true;
        }
        activatedCardFound = true;
    } else {
        bannerDisplayText.main = 'EXPIRED';
        isExpired = true;
    }
    cardsHolder.innerHTML = `
    <div class="card">
        <!-- Heading -->
        <div class="heading">
            <span>Package</span>
            <span>${internetSpeed[element[0]]}</span>
        </div>

        <!-- Green label -->
        <div class="bannerText ${isExpired ? 'expired' : 'valid'}">
            <p class="bannerPara">${bannerDisplayText.main}</p>
            <p class="bannerStatus${isExpired ? ' disabled' : ''}">${bannerDisplayText.secondary}</p>
        </div>

        <!-- Card details -->
        <div class="cardInfos">
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Paid Amound:</p>
                <p class="infoValue">${element[1]} PKR</p>
            </div>
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Balance:</p>
                <p class="infoValue">${element[2]} PKR</p>
            </div>
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Payment Method:</p>
                <p class="infoValue">${paymentMethod[element[3]]}</p>
            </div>
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Transaction Id:</p>
                <p class="infoValue">${element[4] ? element[4] : element[5]}</p>
            </div>
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Activation Date:</p>
                <p class="infoValue">${formatUnixTimestamp(element[5])}</p>
            </div>
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Expiry Date:</p>
                <p class="infoValue">${formatUnixTimestamp(isCurrent ? expiryTime : (currentDeviceTime + (totalDurationPurchased * dayDuration)))}</p>
            </div>
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Validity Duration:</p>
                <p class="infoValue">(${element[6]} days)</p>
            </div>
            <!-- Info set -->
            <div class="infoSet">
                <p class="infoPoint">Recipt:</p>
                <p class="infoValue">${element[5]}</p>
            </div>
        </div>
    </div>
`+cardsHolder.innerHTML;
}
