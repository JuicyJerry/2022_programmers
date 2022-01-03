function solution(x, n) {
    let answer = [];
    
    `
    x 시작
    x씩 
    n번씩 증가 
    list에 추가
    출력
    `
    let number = x;
    for (let t = 0; t < n; t = t + 1) {
        answer.push(number);
        number += x;
    }
    return answer;    
 
}