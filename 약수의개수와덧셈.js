function solution(left, right) {
    let numbers = [];
    let answer = 0;
    
    // left to right
    for (let i = left; i <= right; i++) {
        // 약수 개수 구하기
        let arr = [];
        let t = 1;
        while (t <= i) {
            if (i % t === 0) arr.push(t);
            t++;
        }
        numbers.push(arr.length);
        arr = [];
    }
    
    // 개수에 따른 가감
    for (let i = left; i <= right; i++) {
        if (numbers[i - left] % 2 === 0) answer += i;
        else if (numbers[i - left] % 2 !== 0) answer -= i; 
    }
    // 반환
    return answer;
}