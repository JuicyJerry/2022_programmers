function solution(n, m) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(n, m), lcm(n, m)];
}

/*
function solution(n, m) {
    let arr1 = [1];
    let t = 2;
    while (t <= n) {
        // console.log(t, n);
        
        if (n % t === 0) {
            arr1.push(t);
            n = n / t;
        } else {
            t++;
        }
    }
    // console.log(arr1);
    
    let arr2 = [1];
    t = 2;
    while (t <= m) {
        // console.log(m, t);
        
        if (m % t === 0) {
            arr2.push(t);
            m = m / t;
            t = 2;
            // console.log(m, t);
        } else {
            t++;
        }
        
    }
    console.log(arr1, arr2);
    
    // 최대공약수
    let gcd = [];
    let copyArr = arr1.slice();

    for (let i = 0; i < arr2.length; i++) {
        let t = arr2[i];
        
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === t) {
                gcd.push(arr1[j]);
                arr1.splice(j, 1);
            }
            
        }
    }
    
        // 최소공배수
    let leftNums = arr1.concat(arr2);
    console.log(leftNums);
    
    for (let i = 0; i < gcd.length; i++) {
        console.log(i, ' ', gcd[i]);
        let common = leftNums.indexOf(gcd[i]);
        console.log(common);
        if (common >= 0) {
            leftNums.splice(common, 1);
            console.log('got ya', leftNums, i);
        }
        
    }
    console.log('al: ', copyArr, arr2, leftNums);
    
    if (gcd.length > 1) gcd = gcd[gcd.length - 1];
    else gcd = gcd[0];
    console.log(gcd);
    
    let lcm = gcd;
    for (let i = 0; i < leftNums.length; i++) {
        lcm *= leftNums[i];
    }
    console.log(lcm);
    
    return [gcd, lcm];
}

*/