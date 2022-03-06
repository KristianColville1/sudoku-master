// function taking from EmailJS for sending sudoku master email https://www.emailjs.com/docs/tutorial/creating-contact-form/

const sendEmailBtn = document.getElementById('contact-btn');

document.getElementById('contact-form').addEventListener('submit', function (event){
    event.preventDefault();
    emailjs.init('JBCmNL6wutFtO1NM7');
    sendEmailBtn.value = 'Sending...';

    emailjs.sendForm('service_5c7vg0b', 'template_dz7rfjt', this)
    .then(function() {
        console.log('SUCCESS!');
        displayThanks();
    }, function(error) {
        console.log('FAILED...', error);
    });
});


// hides contact form and displays thank you message on success

function displayThanks(){
    let form = document.getElementById('contact-form');
    let thanks = document.getElementById('thank-you-msg');
    form.classList.add('hidden');
    thanks.classList.remove('hidden');
}