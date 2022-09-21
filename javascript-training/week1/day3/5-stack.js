const fn1 = () => {
    let x = 10;
    return fn2();
}

const fn2 = () => {
    return fn3();
}

const fn3 = () => {
    return 'a'
}

console.log(fn1());