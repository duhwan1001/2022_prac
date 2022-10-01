
// 2개의 정수를 전달하면 그 합을 리턴하는 함수
function add(n1, n2) {
    var result = n1 + n2;
    var triple = result * 3;
    var double = result * 2;

    var ex = {
        t : triple,
        d : double
    };
    
    return ex;
}

console.log(add(5, 3));

// 2개의 정수를 전달하면 그 곱을 출력하는 함수
function multi(n1, n2) { // return이 없는 void 함수
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

multi(2, 4);

