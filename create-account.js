function createAccount(pin, amount) {
    return {
        checkBalance(enteredPin) {
            if (enteredPin === pin) {
                return `$${amount}`;
            } else {
                return "Invalid PIN.";
            }
        },

        withdraw(enteredPin, withdrawalAmount) {
            if (enteredPin === pin) {
                if (withdrawalAmount <= amount) {
                    amount -= withdrawalAmount;
                    return `Withdrew ${withdrawalAmount}. New balance: ${amount}.`;
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            };
        },

        deposit(enteredPin, depositAmount) {
            if (enteredPin === pin) {
                amount += depositAmount;
                return `Deposited ${depositAmount}. New balance: ${amount}.`;
            }
        },

        changePin(enteredPin, newPin) {
            if (enteredPin === pin) {
                pin = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN.";
            }
        },

    };
};

module.exports = { createAccount };
