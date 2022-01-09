function solution(arr, divisor) {
    let answer = arr.filter((el) => el % divisor === 0);
    // console.log(answer);
    if (answer.length === 0) return [-1];
    return answer.sort((a, b) => a - b);
}