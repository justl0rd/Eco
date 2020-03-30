$(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    function valEl(el) {

        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                country: {
                    required: true
                }
            },


            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize(),
                    })
                    .always(function(response) {
                        setTimeout(function() {
                            $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function() {
                            $('#overlay').fadeIn();
                            $form.trigger('reset');
                            $('input').removeClass('valid');
                        }, 1100);
                        setTimeout(function() {
                            $('#overlay').fadeOut();
                        }, 2500);

                    });
                }
            });
    }

    $('.js-form').each(function() {
        valEl($(this));
    });
});
