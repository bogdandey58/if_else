// ============ task #1 + #2 ============ //

document.getElementById('maxNumIs').onclick = maxNumIs;

function maxNumIs() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (num1 > num2) {
        var p = document.getElementById('maxNumIs');
        p.innerHTML = 'First number is bigger';
    } else if (num1 < num2) {
        var p = document.getElementById('maxNumIs');
        p.innerHTML = 'Second number is bigger';
    } else if (num1 == '' && num2 == '') {
        alert('enter a number');
    } else {
        var p = document.getElementById('maxNumIs');
        p.innerHTML = 'Numbers are equal';
    }
}

// ============ task #3 ============ //

document.getElementById('entrance').onclick = entrance;

function entrance() {
    var num3 = document.getElementById('num3').value;

    if (num3 >= 1 && num3 <= 20) {
        alert('Your apartment in the 1st entrance');
    } else if (num3 >= 21 && num3 <= 48) {
        alert('Your apartment in the 2nd entrance');
    } else if (num3 >= 49 && num3 <= 90) {
        alert('Your apartment in the 3rd entrance');
    } else {
        alert('Enter apartment number ...');
    }
}

// ============ task #4 ============ //

document.getElementById('login').onclick = login;

function login() {

    var log = document.getElementById('log').value;
    var pass = document.getElementById('pass').value;

    if (log == 'ivan' && pass == '334455') {
        alert('Hello Ivan');
    } else if (log == 'alex' && pass == '777') {
        alert('Hello Alex');
    } else if (log == 'petr' && pass == 'b5678') {
        alert('Hello Petr');
    } else {
        alert('Wrong password or login');
    }
}

// ============ task #5 ============ //

document.getElementById('prntCtrl').onclick = prntCtrl;

function prntCtrl() {
    var age = document.getElementById('age').value;

    if (age >= 16) {
        alert('Wellcome');
    } else if (age > 0 && age < 16) {
        alert('Come when you turn 16 ...');
    } else {
        alert('enter your age ...')
    }
}

// ============ task #6 ============ //

document.getElementById('exp').onclick = exp;

function exp() {
    var expAge = document.getElementById('expAge').value;

    if (expAge == '' || expAge < 0) {
        alert('Enter your age !');
    } else if (expAge >= 0 && expAge < 3) {
        alert('Your surcharge is 0%');
    } else if (expAge >= 3 && expAge < 10) {
        alert('Your surcharge is 10%');
    } else if (expAge >= 10 && expAge < 30) {
        alert('Your surcharge is 20%');
    } else if (expAge >= 30) {
        alert('Your surcharge is 30%');
    }
}