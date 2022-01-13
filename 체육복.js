function solution(n, lost, reserve) {
    let result = new Array(n).fill(1);
    console.log(result);
    
    
    for (let i = 0; i < lost.length; i++) {
        result[lost[i] - 1] -= 1; 
    }
    console.log(result);
    
    
    for (let i = 0; i < reserve.length; i++) {
        result[reserve[i] - 1] += 1;
    }
    console.log(result);
    
    
    for (let i = 0; i < n - 1; i++) {
        if (result[i] === 0 && result[i+1] === 2 || result[i] === 2 && result[i+1] === 0) {
            result[i] = 1;
            result[i+1] = 1;
        }
    }
    console.log(result);
    
    
    let answer = 0;
    for (let i = 0; i < n; i++) {
        if (result[i] >= 1) {
            answer += 1;
        }
    }
    return answer;


    // 참조 : https://velog.io/@hadam/JS-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B2%B4%EC%9C%A1%EB%B3%B5
}





/*
#2
function solution(n, lost, reserve) {
    let arr = [];
    
    for (let i = 1; i <= n; i++) {
        if (lost.indexOf(i) >= 0) continue;
        else arr.push(i);
    }
    // console.log(arr);
    
    for (let i = 0; i < arr.length; i++) {
        if (reserve.indexOf(arr[i]) >= 0) {
            arr.splice(i, 1);
            i -= 1;
        }
    }
    // console.log(arr);
        
    let cnt = arr.length;
    // console.log(cnt);
    
    for (let i = 0; i < lost.length; i++) {
        let target = lost[i] - 1;
        let targetScreen = reserve.indexOf(target);
        // console.log('targetScreen: ', targetScreen);
        
        if (targetScreen >= 0) cnt++;
    }
    // console.log(cnt, cnt + reserve.length);
    
    return cnt + reserve.length;
}
*/


/*
#1
function solution(n, lost, reserve) {
    // reserve 또는 lost가 아닌 학생과 학생 수 구하기
    let students = [];
    for (let i = 0; i < n; i++) {
        students.push(i + 1);
    }
    
    for (let i = 0; i < students.length; i++) {
        let checkLost = lost.indexOf(students[i]);
        
        if (checkLost >= 0) {
            students.splice(i, 1);
            i -= 1;
        }
    }    
    
    
    for (let i = 0; i < students.length; i++) {
        let checkReserve = reserve.indexOf(students[i]);
        
        if (checkReserve >= 0) {
            students.splice(i, 1);
            i -= 1;
        }
    }
    let cnt = students.length;
    // console.log(students, cnt);
    
    
    // lost 기준으로 lost element 이전 element가 reserve인지 확인
    for (let i = 0; i < lost.length; i++) {
        let target = lost[i] - 1;
        let checkTarget = reserve.indexOf(target);
        // console.log(checkTarget);   
        
        if (checkTarget >= 0) {
            // console.log('gotya')
            cnt++;
        }
    }
    let ans = cnt + reserve.length;
    // console.log(cnt + reserve.length);
    
    return ans;
    
}

*/