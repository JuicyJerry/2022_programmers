function solution(numbers) {
    let answer = 0;
    
    for (let i = 0; i < 10; i++) {
        let check = numbers.indexOf(i);
        if (check < 0) answer += i;
    }
    return answer;
    
    
    
}