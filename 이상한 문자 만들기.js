function solution(s) {
    let answer = '';
    s = s.split(' ');
    console.log(s);
    
    for (let i = 0; i < s.length; i++) {
        
        for (let j = 0; j < s[i].length; j++) {
            if (j % 2 === 0) answer += s[i][j].toUpperCase();
            else answer += s[i][j].toLowerCase();
        }
        if (i === s.length - 1) break;
        answer += ' ';
    }
    console.log(answer);
    return answer;
}