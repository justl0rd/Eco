$(document).ready(function() {
    const messagesContent = {};
    if (lang === 'uk') {
        messagesContent.empty = "Поле обов'язкове для заповнення";
        messagesContent.tel = "Телефон може містити символи + - ()";
        messagesContent.email = "Невірний формат E-mail";
        
    } else {
        messagesContent.empty = "Поле обязательно для заполнения";
        messagesContent.tel = "Телефон может содержать символы + - ()";
        messagesContent.email = "Неверный формат E-mail";
    }
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
            messages: {
                tel: {
                    required: messagesContent.empty,
                    regex: messagesContent.tel,
                },
                name: {
                    required: messagesContent.empty,
                },
                email: {
                    required: messagesContent.empty,
                    email: messagesContent.email,
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
