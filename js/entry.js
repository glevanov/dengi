'use strict';
(function (){
    const entryForm = document.querySelector('.entry');
    const entryFormInput = entryForm.querySelector('input');
    const recent = document.querySelector('.recent');
    const totalField = document.querySelector('.total');

    const initialAmount = window.data.total.value;

    let entryArray = [];

    const onSubmit = function (evt) {
        evt.preventDefault();

        getEntryFromInput();
        purgeRecent();
        renderRecent();
        updateTotalValue();
        renderTotalValue();

        entryFormInput.value = '';
    };

    const CreateEntry = function (amount, currency = '₽') {
      this.amount = amount;
      this.currency = currency;
    };

    const getEntryFromInput = function () {
        const userInput = parseFloat(entryFormInput.value);
        if (userInput) {
            entryArray.push(new CreateEntry(userInput));
        }
    };

    const purgeRecent = function () {
        while (recent.firstChild) {
            recent.removeChild(recent.firstChild);
        }

    };

    const renderRecent = function () {
        const fragment = document.createDocumentFragment();
        entryArray.forEach(function (it) {
            const element = document.createElement('li');
            element.textContent = `${it.currency} ${it.amount}`;
            fragment.appendChild(element);
        });
        recent.appendChild(fragment);
    };

    const calculateTotal = function () {
        return entryArray.reduce(function (sum, it) {
            return sum + it.amount;
        }, initialAmount);
    };

    const updateTotalValue = function () {
        window.data.total.value = calculateTotal();
    };

    const renderTotalValue = function () {
        totalField.textContent = `${window.data.total.currency} ${window.data.total.value}`
    };

    entryForm.addEventListener('submit', onSubmit)

})();