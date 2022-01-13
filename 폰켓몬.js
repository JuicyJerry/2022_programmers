function solution(nums) {
    let answer = [];
    let max = nums.length / 2;
    
    for (let i = 0; i < nums.length; i++) {
        // console.log('before :', answer, nums[i]);
        if (answer.length < max && !answer.includes(nums[i])) {
            answer.push(nums[i]);
            // console.log('after :', answer, nums[i]);
        }
        
        // console.log('\n');
    }
    return answer.length;
}


/*
function solution(nums) {
    const graph = {};
    for (let i = 0; i < nums.length; i++) {
        if (graph[nums[i]] === undefined) graph[nums[i]] = [];
    }
    console.log(graph);
    
     for (let i = 0; i < nums.length; i++) {
        graph[nums[i]].push(nums[i]);
    }   
    console.log(graph);
    
    const dfs = (graph, startNode) => {
        let needVisitStack = [];
        let visitedQueue = [];
        
        needVisitStack.push(startNode);
        
        while (needVisitStack.length !== 0) {
            const node = needVisitStack.pop();
            
            if (!visitedQueue.includes(node)) {
                visitedQueue.push(node);
                needVisitStack = [...needVisitStack, ...graph[node]];
            }
        }
        
        return visitedQueue;
    }
    
    
    for (let t = 0; t < nums.length; t++) {
        console.log(dfs(graph, nums[t]));
    }
    
    
    
    
}

*/