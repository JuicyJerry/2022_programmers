function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}


/*
function solution(s) {
    let lowerCase = [];
    let upperCase = [];
    
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt() >= 97) {
            lowerCase.push(s[i]);
        } else {
            upperCase.push(s[i]);
        }
    }
    // console.log(lowerCase, upperCase);
    lowerCase.sort((a, b) => -1); // bcdefgZ
    upperCase.sort((a, b) => -1);
    let answer = lowerCase.concat(upperCase).join('');
    console.log(answer);
    return answer;
}

*/