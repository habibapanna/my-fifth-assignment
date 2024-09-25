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
    console.log(historyBtn)
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
       const currentBalance = document.getElementById('account-balance').innerText; 
       const balanceNumber = parseFloat(balance);
       const currentNumber = parseFloat(currentBalance);

       const newBalance = balanceNumber + donateMoney;
       const newNumber = currentNumber - newBalance;

       document.getElementById('donation-amount').innerText = newBalance;
       document.getElementById('account-balance').innerText = newNumber;
    
    }
    else{
        alert('Insufficient balance');
    }
    



const historyItem = document.createElement('div');
historyItem.className = 
"bg-white p-3 rounded-lg border shadow";

historyItem.innerHTML = `
<p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
<p class="text-xl font-bold">Donate for Flood at Noakhali: $${donateAmount}</p>
`;

const historyList = document.getElementById('history-section');

historyList.insertBefore(historyItem, historyList.firstChild);


});



// // donation amount 2

// document.getElementById('donate-now-btn-2')
// .addEventListener('click', function(event){
//     event.preventDefault();


//     const donateAmounts = document.getElementById('donation-input-2').value;
//     const donatesMoney = parseFloat(donateAmounts);
//     console.log(donateAmounts);

//     if(donateAmounts >= 0){
//        const balances = document.getElementById('donation-amount-2').innerText;
//        const currentBalances = document.getElementById('account-balance').innerText; 
//        const balanceNumbers = parseFloat(balances);
//        const currentNumbers = parseFloat(currentBalances);

//        const newBalances = balanceNumbers + donatesMoney;
//        const newNumbers = currentNumbers - newBalances;

//        document.getElementById('donation-amount-2').innerText = newBalances;
//        document.getElementById('account-balance').innerText = newNumbers;
    
//     }
//     else{
//         alert('Insufficient balance');
            
//     }
    
// });


// // donation amount 3

// document.getElementById('donate-now-btn')
// .addEventListener('click', function(event){
//     event.preventDefault();


//     const donatedAmount = document.getElementById('donation-input-3').value;
//     const donateMonies = parseFloat(donatedAmount);
//     console.log(donatedAmount);

//     if(donatedAmount >= 0){
//        const balanced = document.getElementById('donation-amount-3').innerText;
//        const balancedNumber = parseFloat(balanced);
//        const currentBalance = document.getElementById('account-balance').innerText; 
//        const currentNumber = parseFloat(currentBalance);
       
//        const newBalanced = balancedNumber + donateMonies;
//        const newNumber = currentNumber - newBalanced;

//        document.getElementById('donation-amount-3').innerText = newBalanced;
//        document.getElementById('account-balance').innerText = newNumber;

//     }
//     else{
//         alert('Insufficient balance');
            
//     }
    
// });


// transaction



// function addTransactionToHistory(amount, cardName){
//     const historySection = document.getElementById('history-section');
//     const transactionTime = new Date().toLocaleString();
//     const newHistoryEntry = DocumentTimeline.createElement('div');
//     newHistoryEntry.innerHTML = `
//     <p>Donation of $${amount} to ${cardName} on ${transactionTime}<p>`;
//     historySection.appendChild(newHistoryEntry);
// }



// const historyItem = document.createElement('div');
// historyItem.className = 
// "bg-white p-3 rounded-lg border-1-2 border-indigo-500";

// historyItem.innerHTML = `
// <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
// <p class="text-xs text-gray-500">Donate: $${donateAmount.toFixed(4)}</p>
// `;







