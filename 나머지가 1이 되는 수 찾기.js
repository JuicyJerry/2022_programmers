function solution(n) {
    for (let i = 2; i <= 1000000; i++) {
        if (n % i === 1) return i;
    }
}