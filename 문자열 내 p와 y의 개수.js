function solution(s){
    let word = s.split('').map((el) => el.toUpperCase()).filter((el) => el === 'P' || el === 'Y');
    
    let pCnt = 0;
    let yCnt = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'P') pCnt++;
        else yCnt++;
    }
    
    if (pCnt === yCnt) return true;
    return false;

}