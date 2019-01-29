/* Handle changements and actions to do */
function checkThat (what, e) {
    var regex;
    switch (what) {
        /* 5-12 alphanumeric, any case */
        case 'username':
            regex = new RegExp ('[a-z]{5,12}','gi');
            process(what, regex)
            break;

        /* alphanumeric, @ and .com or .fr */
        case 'email':
            regex = new RegExp('[a-z0-9]+@[a-z]+.(com|fr)$','gi');
            process(what, regex)
            break;

        /* 10 digits ( Europe ) */
        case 'phone':
            regex = new RegExp('^[0-9]{10}$','g');
            process(what, regex)
            break;

        /* 5 and more alphanumeric */
        case 'password':
            regex = new RegExp('[a-z0-9]{5,}','gi');
            process(what, regex)
            break;
        default:
            validateForm(e);
    }
}


/**
 * Process x input to:
 *      - check the user input
 *      - handle error messages
 */
function process(input, regex) {
    var match = $(`.${input}`).val().match(regex) ? true : false;
    var $warning = `.${input}.warning`;
    if(!match){
        $($warning).addClass('visible');
    } else {
        $($warning).removeClass('visible').addClass('valid');
    }
}


/**
 * ValidateForm:
 *      - by showing the submit button disable or enable
 *      - if all inputs are valid ( with class .valid )
 */
 function validateForm(e){
    var that = $(e.target)[0].className;
    if($('.valid').length !== $('input').length){
        $('button').addClass('disable').attr('disabled', 'disabled').html(`Can't submit`);
    } else {
        $('button').removeClass('disable').removeAttr('disabled').html('Submit');

        /* Handle cases once valid and then modify input --> back to button disabled */
        if($('.visible').length !== 0){
            $(`.${that}`).removeClass('valid');
            $('button').addClass('disable').attr('disabled', 'disabled').html(`Can't submit`);
        }
    }
 }

 function submit () {
    $('input').val('');
}