function solution(answers) {
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt = [0, 0, 0];
    let len = answers.length;
    
    // 각 학생이 맞춘 개수 구하기
    for (let i = 0; i < len; i++) {
        // console.log(i % len, answers[i], p1[i % len], p2[i % len], p3[i % len]);
        if (answers[i] === p1[i % p1.length]) cnt[0]++;
        if (answers[i] === p2[i % p2.length]) cnt[1]++;
        if (answers[i] === p3[i % p3.length]) cnt[2]++;
    }

    // 가장 큰 점수 구하기
    let higherScore = Math.max(...cnt);
    let higherUser = [];
    // console.log(cnt, higherScore);
    
    // 모두 0점일 경우
    if (higherScore === 0) return [1, 2, 3];
    else { 
        // 최고점과 동일한 사용자를 찾기
        for (let i = 0; i < cnt.length; i++) {
            if (cnt[i] === higherScore) higherUser.push(i + 1);
        }
        // console.log(higherScore, higherUser);

        return higherUser.sort();        
    }
    
}