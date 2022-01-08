// 어렵다



/*
function solution(n) {
        1은 소수가 아니므로 먼저 처리
        짝수는 소수가 아니므로 false 처리. (단, 2는 짝수이면서 유일한 소수이므로 예외처리 필요)
        2 ~ N제곱근까지 나눠본 후 하나라도 나눠떨어지는 것이 존재하면 false
        N제곱근까지 나눴음에도 나눠떨어지지 않는 경우 소수
    
        let answer = [];
        if (n === 1) return 0;
        if (n > 1) answer.push(2); 
        
        for (let i = 3; i < n + 1; i++) {
            if (i % 2 !== 0 && !Number.isInteger(Math.sqrt(i))) answer.push(i);
        }       
        // console.log(answer);
        return answer.length;
        
    }

*/