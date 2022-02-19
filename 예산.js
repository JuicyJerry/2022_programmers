function solution(d, budget) {
    d.sort((a, b) => a - b);
    let cnt = 0;
    let sum = 0;

    for (let i = 0; sum <= budget; i++) {

        sum += d[i];
        if (sum > budget) {
            return i;
        }
        cnt++;
    }

    return cnt - 1;
}





/*
#1
    while (true) {
        if (ans > budget) {
            ans = idx - 1;
            break;
        } else if (ans === budget) {
            ans = idx;
            break;
        }d
        ans += d[idx];    
        idx += 1;
    }
    
    return ans;

    // #2
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((acc = 0, cur, idx) => {
        // console.log(acc, cur, idx);
        
        if (acc > budget) return idx - 1;
        if (idx === d.length - 1) return d.length;
        return acc + cur;
    });
}
*/