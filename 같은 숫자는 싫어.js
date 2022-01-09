function solution(arr) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) answer.push(arr[i]);
        else {
            if (answer[answer.length - 1] === arr[i]) continue;
            answer.push(arr[i]);
        }
    }
    // console.log(answer);
    return answer;
    
}