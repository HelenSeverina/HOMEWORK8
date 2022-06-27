// Task 1
function upperCase(text) {
    if (text.match(/^[A-Z]/)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character ");
    }
}

upperCase('regexp');
upperCase('RegExp');

// Task 2
function checkEmail(email) {
    let regex = /^([A-Za-z0-9_\.-]+)@([a-z]+)\.([a-z]{2,6})$/;
        console.log(regex.test(email));
}

checkEmail("Qmail2@gmail.com");
checkEmail("123.11@check.co");
checkEmail("bgbg.check.com");
checkEmail("ffss444ddd@check.com");

// Task 3
let regex = /d(b+)(d)/i;

let str = "cdbBdbsbz";
console.log(str.match(regex));

// Task 4
function swapText(text) {
    let regex = /\s/;
    let arr = text.split(regex);
    console.log(arr[1] + ', ' + arr[0]);
}

swapText('Java Script');

// Task 5
function validCard(card) {
    let regex = /\d{4}-\d{4}-\d{4}-\d{4}/;
    if (card.match(regex)) {
        console.log('Validation sucсessful');
    } else {
        console.log('Validation is failed');
    }
}

validCard('5168-2258-4586-1235');
validCard('4787 2251 4586 1235');
validCard('472-2258-4586-1235');
validCard('47!/-2258-4586-1235');

// Task 6
function checkEmail(email) {
    let regexp = /^(?!_)^(?!-)[A-Za-z0-9_-{0,1}]+@([a-z]+)\.([a-z]{2,6})$/
    if (email.match(regexp)) {
        console.log('Email is correct!');
    } else {
        console.log('Email is not correct!');
    }
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");
checkEmail("my_ma--il@gmail.com");

// Task 7
function checkLogin(login) {
    let regex = /^[A-Za-z][\w\.{}\w]{2,10}$/;
    let numRegexp = /\d\.{0,1}\d*/g;

    console.log(regex.test(login));
    console.log(`${login.match(numRegexp)}`);
}

checkLogin("ee1.1ret3");
checkLogin('ee1*1ret3');