function solution(price, money, count) {
    let fakeArr = new Array(count).fill(0);
    let total = fakeArr.map((el, idx) => {
        return price * (idx + 1);
    }).reduce((acc, cur) => acc + cur, 0);

    if (money > total) return 0;
    return total - money;
}