$(document).ready(function () {
    $('.tabs').tabs();
    let truncate = $('.click-truncate');
    truncate.click(() => {
        truncate.removeClass('truncate');
        truncate.removeClass('click-truncate');
    });


    let isChecked, checked, checkbox, age;
    age = $('#age');
    checked = $('input[name=age]').is(':checked');
    checkbox = $('input[name=age]');
    console.log(checkbox.val());

    checkbox.click(() => {
        console.log(age);
        if (checked) {
            age.css('display', 'none');
        }
        else {
            age.css('display', 'block');
        }
    });

});