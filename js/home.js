const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

document.getElementById('donation-btn').addEventListener('click', function () {
    donationSection.style.display = 'block';
    historySection.style.display = 'none';
    console.log(donationSection, historySection);
});


document.getElementById('history-btn').addEventListener('click', function () {
    donationSection.style.display = 'none';
    historySection.style.display = 'block';
    console.log(donationSection, historySection);
});

// toggle
const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

function toggleActive(button){
    button.classList.toggle('active');
    donationBtn.style.backgroundColor = 'white'
    historyBtn.style.backgroundColor = '#B4F461'
    console.log(historyBtn, donationBtn)
}
donationBtn.addEventListener('click', () => toggleActive(historyBtn));
historyBtn.addEventListener('click', () => toggleActive(historyBtn));


const donateNowBtns = document.querySelectorAll('.donate-now-btn');
let accountBalance = 500;

donateNowBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        const cardNumber = e.target.getAttribute('data-card');
        const inputField = document.getElementById(`donation-input-${cardNumber}`);
        const donationAmount = parseFloat(inputField.value);
        const donationElement = e.target.parentElement.querySelector('.donation-amount');
    })
})
