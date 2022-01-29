function solution(nums) {
    /*
      1. 순열 조합을 만든다
      2. 각 조합의 합을 구한다
      3. 소수의 개수를 구한다
    */
    const combinations = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i + 1; j < nums.length; j++) {
            
            for (let p = j + 1; p < nums.length; p++) {
                // console.log("index: ", i, j, p);
                // console.log("sum: ", sum, nums[i], nums[j], nums[p]);
                sum = sum + nums[i] + nums[j] + nums[p];
                combinations.push(sum);
                sum = 0;
            }
        }
    }
    
    const maxSum = nums.sort((a, b) => b - a).splice(0, 3).reduce((acc, cur) => acc + cur, 0);
    // console.log("combinations: ", combinations, "maxSum: ", maxSum);
    const arr = new Array(maxSum + 1).fill(1);
    // console.log(arr);
    
    for (let i = 2; i * i <= maxSum; i+=1) {
        if (arr[i]) {
            for (let j = i * i; j <= maxSum; j += i) {
               // console.log(i, j);
                arr[j] = 0;
            }       
        }
        
    }
    arr.splice(0, 2, 0, 0);
    // console.log(arr);        
    const primeNums = [];
    for (let i = 0; i < combinations.length; i++) {
        if (arr[combinations[i]] === 1) primeNums.push(combinations[i]);
    }    
    // console.log(primeNums);
    return primeNums.length;
}