function solution(s) {
    let ans = '';
    let len = s.length;
    
    if (len % 2 === 0) {
        ans += s[len / 2 - 1];
        ans += s[len / 2];
    } else {
        // console.log('홀수', s[Math.floor(len / 2)]);
        ans += s[Math.floor(len / 2)];
    }
    // console.log(ans);
    return ans;
    
}