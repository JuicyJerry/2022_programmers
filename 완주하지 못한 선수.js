function solution(participant, completion) {
    let cnt = {};
    for (let p of participant) {
        cnt[p] = 0;
    }
    // console.log(cnt);
    
    for (let p of participant) {
        cnt[p] += 1;
        // console.log(p, cnt);
    }
    
    // console.log('!');
    
    for (let c of completion) {
        cnt[c] -= 1;
        // console.log(c, cnt);
    }
    
    for (let c in cnt) {
       if (cnt[c] === 1) return c;
    }
}


/*
    효율성 미통과
    function solution(participant, completion) {
    let pLen = participant.length;
    let cLen = completion.length;
    let ans = [];
    
    for (let i = 0; i < cLen; i++) {
        let find = participant.indexOf(completion[i])
        if (find >= 0) participant.splice(find, 1);
    }
    return participant[0];
}

*/