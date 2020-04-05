$('a.goto').bind('click.smoothscroll',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});


const messagesContainer = document.getElementById('catalog');
const messageModal = document.getElementById('message');
let messageModalContent = document.getElementById('message__content');

function popUpMessage () {
    messagesContainer.addEventListener('click', el => {
        target = el.target;
        if (target.classList.contains('catalog__more-btn') ) {
            messageModal.classList.add('active');
            let content = target.parentElement.querySelector('.hide-text').cloneNode(true);
            messageModalContent.appendChild(content); 

        }
    })
}

function popUpCloseListener () {
    const popUpCloseBtn = document.getElementById('message__close');

    popUpCloseBtn.addEventListener('click', () => {
        messageModalContent.innerHTML= '';
        messageModal.classList.remove('active')
    })
}

popUpMessage();
popUpCloseListener();