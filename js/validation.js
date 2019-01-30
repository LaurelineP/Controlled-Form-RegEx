/* Handle inputs changements and actions to do */
/**
 * RegExp pattern:
 *      - username: 3-12 alphanumeric, any case,
 *      - email: (name) @ (domain) . (extension 2-8) . (optionnal extension 2-8),
 *      - phone: 10-11 digits
 *      - pwd: 5 and more alphanumeric
 */
function checkThat (what, e) {
    const regex = {
        username : new RegExp (/[a-z0-9]{3,12}/gi),
        email : new RegExp(/^[a-z\d\.-]+@[a-z]{2,8}\.[a-z]{2,3}(\.[a-z]{2,3})?$/gi),
        phone : new RegExp(/^\d{10,11}$/),
        password : new RegExp(/[a-z0-9]{5,}/gi),
    };
    what !== 'form' ? process( what, regex[what] ) : enableForm(e);
}

/**
 * Process x input to:
 *      - check the user input
 *      - handle error messages
 */
function process(input, regex) {
    let match = $(`.${input}`).val().match(regex) ? true : false;
    let $warning = `.${input}.warning`;
    if(!match){
        $($warning).addClass('visible');
    } else {
        $($warning).removeClass('visible').addClass('valid');
    }
}


/**
 * Enable form:
 *      - by showing the submit button disable or enable
 *      - if all inputs are valid ( with class .valid )
 */
 function enableForm(e){
    let target = $(e.target)[0].className;
    if($('.valid').length !== $('input').length){
        $('button')
            .addClass('disable')
            .attr('disabled', 'disabled')
            .html(`Can't submit`);
    } else {
        $('button')
            .removeClass('disable')
            .removeAttr('disabled')
            .html('Submit');

        /* Handle cases once valid and then modify input --> back to button disabled */
        if($('.visible').length !== 0){
            $(`.${target}`).removeClass('valid');
            $('button')
                .addClass('disable')
                .attr('disabled', 'disabled')
                .html(`Can't submit`);
        }
    }
 }

 function submit() {
    let username = $('.username').val();
    $('.username-text').html(username);
    $('input').val('');
    $('.modal').css('display', 'block');
}

function closeModal() {
    $('.modal').css('display', 'none');
}