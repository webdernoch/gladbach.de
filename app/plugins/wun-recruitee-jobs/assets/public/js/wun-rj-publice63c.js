jQuery(document).ready(function($) {
    /**
     * Disable WPCF7 button while it's submitting
     * Stops duplicate enquiries coming through
     */
    document.addEventListener( 'wpcf7submit', function( event ) {

        // find only disbaled submit buttons
        let button = $('.page-template-wun-rj-application-form-template form.wpcf7-form button[type=submit]');
        // grab the old value
        let old_value = button.attr('data-value');

        // enable the button
        button.prop('disabled', false);

        // put the old value back in
        button.text(old_value);

    }, false );

    $('.page-template-wun-rj-application-form-template form.wpcf7-form').on('submit',function() {

        let form = $(this);
        let button = form.find('button[type=submit]');
        let current_val = button.text();

        // store the current value so we can reset it later
        button.attr('data-value', current_val);

        // disable the button
        button.prop("disabled", true);

        // tell the user what's happening
        button.text("Sending, please wait...");

    });
});