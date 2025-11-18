function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return Math.trunc(x / y); }
function mod(x, y) { return x % y; }

function andFunc(x, y) { return x && y; }
function orFunc(x, y) { return x || y; }
function notFunc(x) { return !x; }

function greaterThan(x, y) { return x > y; }
function lessEqual(x, y) { return x <= y; }
function equal(x, y) { return x === y; }


const a = 5, b = 3, c = 7, d = 4, e = 2, f = 10;
const x = true, y = false, z = true, isAdmin = false;

const expected1 = (a + b * c) > (d - e) && x || y;

const actual1 = orFunc(
    andFunc(
        greaterThan(
            add(a, multiply(b, c)),
            subtract(d, e)
        ),
        x
    ),
    y
);
console.log("1)", expected1, actual1);

const expected2 = (a - b) * (c + d) <= e && z && !x;
const actual2 = andFunc(
    andFunc(
        lessEqual(
            multiply(
                subtract(a, b),
                add(c, d)
            ),
            e
        ),
        z
    ),
    notFunc(x)
);
console.log("2)", expected2, actual2);

const expected3 = (a + b + c) % d === 0 || (f > e && isAdmin);
const actual3 = orFunc(
    equal(
        mod(
            add(add(a, b), c),
            d
        ),
        0
    ),
    andFunc(
        greaterThan(f, e),
        isAdmin
    )
);
console.log("3)", expected3, actual3);

const expected4 = !(x || y) && (a * a > b * c);
const actual4 = andFunc(
    notFunc(
        orFunc(x, y)
    ),
    greaterThan(
        multiply(a, a),
        multiply(b, c)
    )
);
console.log("4)", expected4, actual4);