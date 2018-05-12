'use strict';
(function (){
    const entryForm = document.querySelector('.new-entry');

    const onSubmit = function(evt) {
        evt.preventDefault();
    };

    entryForm.addEventListener('submit', onSubmit)

})();