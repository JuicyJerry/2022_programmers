function solution(n) {
    let t = 2;
    if (n === 1) return 4;
    
    while (true) {
        if (t * t === n) return Math.pow(t + 1, 2);
        else if (t > n / 2) return -1;
        else t++;
    }


}