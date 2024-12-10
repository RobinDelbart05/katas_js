function isEven(n) {
    console.log(n);

    if (n === 0) return true;
    return isEven(n - 2);
}

console.log(isEven(10));
