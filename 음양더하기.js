function solution(absolutes, signs) {
    let answer = 0;
    
    signs.map((el, idx) => {
        if (el) answer += absolutes[idx];
        else answer -= absolutes[idx];
    })    
    return answer;
}