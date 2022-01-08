function solution(s) {
    if (s.length !== 4) return false;
    let t = s.split('');
    for (let i = 0; i < s.length; i++) {
        if(isNaN(t[i]) === true) return false;
        if(parseInt(t[i], 10) === false) return false;
        
    }
    return true;
    
}




/*
function solution(s) {
    let t = parseInt(s, 10);
    // console.log(Number.isInteger(t));
    if (s.length === 4 || s.length === 6) {
        if (Number.isInteger(t)) return true;
    }
    return false;
    
}
*/