//making of update function ()  to update the balance in javascript 

function updateBalance() {
    document.getElementById('balance').innerText = `Balance: $${balance}`;
}


let balance = 1000;

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount < 0) {
        showMessage('Invalid amount. Please enter a non-negative number.');
        return;
    }

    if (amount > balance) {
        showMessage('Insufficient funds.');
        return;
    }

    balance -= amount;
    updateBalance();
    showMessage(`Withdrawal successful. New balance: $${balance}`);
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount < 0) {
        showMessage('Invalid amount. Please enter a non-negative number.');
        return;
    }

    balance += amount;
    updateBalance();
    showMessage(`Deposit successful. New balance: $${balance}`);
}

function transfer() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount < 0) {
        showMessage('Invalid amount. Please enter a non-negative number.');
        return;
    }

    if (amount > balance) {
        showMessage('Insufficient funds.');
        return;
    }

    balance -= amount;
    updateBalance();
    showMessage(`Transfer successful. New balance: $${balance}`);
}

function checkBalance() {
    showMessage(`Current balance: $${balance}`);
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}

function updateBalance() {
    document.getElementById('balance').innerText = `Balance: $${balance}`;
}