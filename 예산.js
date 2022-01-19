function solution(d, budget) {
    let result = 0
    let i = 0;
    d = d.sort((a, b) => a - b);
    
    while(result<=budget) {
        result = result + d[i];
        i++;
    }

    return i-1;
}



/*
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((acc = 0, cur, idx) => {
        // console.log(acc, cur, idx);
        
        if (acc > budget) return idx - 1;
        if (idx === d.length - 1) return d.length;
        return acc + cur;
    });
}
*/