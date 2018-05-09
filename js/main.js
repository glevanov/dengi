'use strict';
(function () {
    const totalField = document.querySelector('.total');

    totalField.textContent = `${window.data.total.currency} ${window.data.total.value}`
})();