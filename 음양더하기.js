function solution(abs, signs) {
    let total = 0;
    let sum = abs.filter((el, idx) => {
        if (signs[idx] === true) total += el;
        else total -= el;
    })
    // console.log(total, sum);
    return total;
}

function solution(abs, signs) {
    return abs.reduce((acc, cur, idx) => signs[idx] === true ? acc + cur : acc - cur , 0);
    
}

// function solution(absolutes, signs) {
//     let answer = 0;
    
//     signs.map((el, idx) => {
//         if (el) answer += absolutes[idx];
//         else answer -= absolutes[idx];
//     })    
//     return answer;
// }