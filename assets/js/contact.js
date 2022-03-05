// function taking from EmailJS for sending user thank you email 


// gets these objests and sends an email to sudoku master
function emailUser(para){
    let obj = {
        fromUser: document.getElementById('c-name').value,
        toUser: 'Sudoku Master',
        message: document.getElementById('user-msg'),
    };

    emailjs.send('gmail', 'template_b7f648f', obj).then(function(respond){
        console.log('success', respond.status);
    });
}