function solution(a, b) {
    let lenArr = [a.length, b.length];
    let minLength = Math.min(...lenArr);
    let answer = 0;
    
    for (let i = 0; i < minLength; i++) {
        answer += (a[i] * b[i])    
    }
    // console.log(answer);
    return answer;
}