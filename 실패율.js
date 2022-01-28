


/*

#1 
function solution(N, stages) {
    // 각 stage의 유저 수
    const obj = {};
    stages.map((el, idx) => {
        const cntStages = stages.filter((t) => t === el).length;
        obj[el] = cntStages;
    })
    console.log(obj)
    
    // 각 state의 실패율 
    const objProperties = Object.keys(obj);
    const objValues = Object.values(obj);
    console.log(objProperties, objValues);
    
    const nums = {};
    const failurePercentage = objProperties.map((el, idx) => {
        for (let num in objValues) {
            // console.log(nums[el]);
            if (nums[el] === undefined) nums[el] = 0;
            if (el >= num) {                
                nums[el] += 1;
                console.log('check');
            }
        }
        // console.log(nums);
        return nums;
    })
    console.log(failurePercentage)
//     for (let value in obj) {
//         console.log(obj[value]);
        
//     }
    
//     const failurePercentage = objProperties.map((el, idx) => {
        
//         // if (obj[el])
//     })
    
    
    
    // 실패율을 기준으로 정렬
    
    
    
    
    
    
}



#2 

*/