function checkThat (what) {
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
    }
}

function process(input, regex) {
    var match = $(`.${input}`).val().match(regex) ? true : false;
    var $warning = `.${input}.warning`;
    if(!match){
        $($warning).addClass('visible');
    } else {
        $($warning).removeClass('visible')
    }
}

/**
 * - if all inputs insertions are good, enable submit
 * - clean all input
 */

/**
 * if input
 */
 function submit () {
     $('input').val('');
 }