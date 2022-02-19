function solution(numbers) {
    numbers.sort((a, b) => a - b);
    let sum = 0;

    for (let i = 1; i <= 9; i++) {
        let check = numbers.indexOf(i);
        if (check === -1) sum += i;
    }
    return sum;
}