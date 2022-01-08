function solution(arr1, arr2) {
    let answer = [];
    
    for (let j = 0; j < arr1.length; j++) {
        let microAnswer = [];

            for (let i = 0; i < arr1[j].length; i++) {
                microAnswer.push(arr1[j][i] + arr2[j][i])
            }
            answer.push(microAnswer);
    } 
    return answer;

}


/* 
try
#1
function solution(arr1, arr2) {
    let len = arr1[0].length;
    let answer = [];
    let microAnswer = [];
    
    if (len > 1) {
        for (let j = 0; j < len; j++) {

            for (let i = 0; i < len; i++) {
                // console.log(j, i);
                // console.log(arr1[j][i] + arr2[j][i])
                microAnswer.push(arr1[j][i] + arr2[j][i])
                // console.log('\n')
            }
            answer.push(microAnswer);
            microAnswer = [];
        }
    } else {
        for (let i = 0; i < len + 1; i++) {
            answer.push([parseInt(arr1[i], 10) + parseInt(arr2[i], 10)]);
        }
    }
    // console.log(answer);
    return answer;

}

#2
function solution(arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let t = [];
        
        for (let j = 0; j < arr1[i].length; j++) {
            console.log(i, j, arr1[i][j], arr2[i][j]);
            t.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(t);
    }
    
    return answer;

}



*/