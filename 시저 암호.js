function solution(s, n) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {       
        arr.push(s[i].charCodeAt());
    }
    
    for (let i = 0; i < s.length; i++) {
        if (arr[i] >= 65 && arr[i] <= 90) {
            arr[i] = arr[i] + n > 90 ? (arr[i] + n - 26) : (arr[i] + n);
        } else if (arr[i] >= 97 && arr[i] <= 122) {
            arr[i] = arr[i] + n > 122 ? (arr[i] + n - 26) : (arr[i] + n);
        } 
    }

    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (arr[i] === 32) answer += ' ';
        else answer += String.fromCharCode(arr[i]);
    }
    return answer;
    
}


/*
function solution(s, n) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {       
        arr.push(s[i].charCodeAt());
    }
    console.log(arr);
    
    for (let i = 0; i < s.length; i++) {
        if (arr[i] === ' ') arr[i] += ' ';
        else if (arr[i] + n > 122) arr[i] = ((arr[i] + n) - 26);
        else arr[i] += n;
    }
    console.log(arr);
    
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (arr[i] === 36) answer += ' ';
        else answer += String.fromCharCode(arr[i]);
    }
    console.log(answer);
    return answer;
    
}

*/