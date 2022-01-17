function solution(n) {
    let three = parseInt(n.toString(3).split('').reverse().join(''), 3);
    return three;
}