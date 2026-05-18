// ====== SONARQUBE TEST FILE (INTENTIONALLY BAD CODE) ======

// unused variable (code smell)
var unusedVar = 10;

// bad practice: using var instead of let/const
var userName = "Ahmed";
var userAge = 20;

// function with bugs
function calculateTotal(price, tax) {
    let total = price + tax;

    // bug: possible string concatenation issue
    total = total + "100";

    return total;
}

// duplicate logic (code smell)
function add(a, b) {
    return a + b;
}

function sum(a, b) {
    return a + b;
}

// nested complexity (code smell)
function checkUser(user) {
    if (user) {
        if (user.age) {
            if (user.age > 18) {
                if (user.active) {
                    console.log("Active adult user");
                } else {
                    console.log("Inactive adult user");
                }
            } else {
                console.log("Underage user");
            }
        }
    }
}

// insecure / bad practice (eval usage)
function runCode(code) {
    return eval(code);
}

// possible null bug
function printName(user) {
    console.log(user.name.toUpperCase());
}

// magic numbers (code smell)
function getDiscount(price) {
    return price * 0.15;
}

// dead code (never used function)
function unusedFunction() {
    let x = 5;
    let y = 10;
    return x * y;
}

// duplicate condition issue
function test(value) {
    if (value == 1) {
        console.log("One");
    } else if (value == 1) {
        console.log("Still one");
    }
}

// empty catch block (bad practice)
try {
    let x = undefinedVariable;
} catch (e) {
}

// long function (code smell)
function hugeFunction() {
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;
    let f = 6;
    let g = 7;
    let h = 8;
    let i = 9;
    let j = 10;

    console.log(a + b + c + d + e + f + g + h + i + j);
}

// logic bug
function isEven(num) {
    if (num % 2 = 0) {
        return true;
    }
    return false;
}

// missing return path
function getStatus(user) {
    if (user.active) {
        return "active";
    }
}
