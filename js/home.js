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

historyBtn.addEventListener('click', () => toggleActive(historyBtn));



// blog

const blogSection = document.getElementById('blog-section');
const blogButton = document.getElementById('blog-btn');
const homeButton = document.getElementById('home-btn');
document.getElementById('blog-btn').addEventListener('click', function(){
    blogSection.style.display = 'block';
    donationSection.style.display = 'none';
    blogButton.style.display = 'none';
    homeButton.style.display = 'block'
    console.log(blogSection, donationSection, blogButton, homeButton);
});
document.getElementById('home-btn').addEventListener('click', function(){
    blogSection.style.display = 'none';
    donationSection.style.display = 'block';
    blogButton.style.display = 'block';
    homeButton.style.display = 'none'
    console.log(blogSection, donationSection, blogButton, homeButton);
});


// donation amount 1

document.getElementById('donate-now-btn')
.addEventListener('click', function(event){
    event.preventDefault();


    const donateAmount = document.getElementById('donation-input-1').value;
    const donateMoney = parseFloat(donateAmount);
    console.log(donateAmount);

    if(donateAmount >= 0){
       const balance = document.getElementById('donation-amount').innerText;
       const balanceNumber = parseFloat(balance);

       const newBalance = balanceNumber + donateMoney;

       document.getElementById('donation-amount').innerText = newBalance;
    
    }
    else{
        alert('Insufficient balance');
            
    }
    
});


// donation amount 2

document.getElementById('donate-now-btn-2')
.addEventListener('click', function(event){
    event.preventDefault();


    const donateAmounts = document.getElementById('donation-input-2').value;
    const donatesMoney = parseFloat(donateAmounts);
    console.log(donateAmounts);

    if(donateAmounts >= 0){
       const balances = document.getElementById('donation-amount-2').innerText;
       const balanceNumbers = parseFloat(balances);

       const newBalances = balanceNumbers + donatesMoney;

       document.getElementById('donation-amount-2').innerText = newBalances;
    
    }
    else{
        alert('Insufficient balance');
            
    }
    
});


// donation amount 3

document.getElementById('donate-now-btn')
.addEventListener('click', function(event){
    event.preventDefault();


    const donatesAmount = document.getElementById('donation-input-3').value;
    const donateMonies = parseFloat(donatesAmount);
    console.log(donatesAmount);

    if(donatesAmount >= 0){
       const balanced = document.getElementById('donation-amount-3').innerText;
       const balancedNumber = parseFloat(balanced);

       const newBalanced = balancedNumber + donateMonies;

       document.getElementById('donation-amount-3').innerText = newBalanced;
    
    }
    else{
        alert('Insufficient balance');
            
    }
    // if(donateAmount > accountBalance){
    //     alert('Insufficient balance');
    //     return;
    // }
});

// const donateNowBtns = document.querySelectorAll('.donate-now-btn');
// let accountBalance = 500;

// donateNowBtns.forEach(button => {
//     button.addEventListener('click', (e) => {
//         const cardNumber = e.target.getAttribute('data-card');
//         const inputField = document.getElementById(`donation-input-${cardNumber}`);
//         const donationAmount = parseFloat(inputField.value);
//         const donationElement = e.target.parentElement.querySelector('.donation-amount');
//     })
// })
