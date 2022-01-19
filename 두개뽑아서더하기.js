function solution(numbers) {
    const temp = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // console.log(i, j);
            temp.push(numbers[i] + numbers[j]);
        }
    }
    // console.log(temp);
    const answer = [...new Set(temp)];
    // console.log(answer);
    return answer.sort((a, b) => a - b);
}


/*
function solution(numbers) {
    let combinations = [];
    
    for (let j = 0; j < numbers.length; j++) {
        
        for (let i = 0; i < numbers.length; i++) {
            // console.log(j, i, String(numbers[j]) + String(numbers[i]));
            combinations.push(String(numbers[j]) + String(numbers[i]));
        
        }
    }    
    
    // combinations = combinations.slice().sort((a, b) => a.localeCompare(b));
    // console.log(combinations.slice().map((el) => Number(el)).sort((a, b) => a - b));
    // combinations = combinations.slice().filter((el) => el[0] !== el[1]).map((el) => Number(el)).sort((a, b) => a - b);
    combinations = combinations.slice().map((el) => Number(el)).sort((a, b) => a - b);
    // console.log(combinations);

    const set = new Set(combinations);
    let uniqueArr = [...set];
    console.log(uniqueArr);
    
    let answer = uniqueArr.map((el) => {
        el = String(el).split('');
        // console.log(el);
        
        let sum = Number(el[0]) + Number(el[1]);   
        // console.log(sum);
        return sum;
    })
    console.log(answer);
    
    let answerSet = new Set(answer);
    let returnSet = [...answerSet];
    return returnSet;
    
}


*/