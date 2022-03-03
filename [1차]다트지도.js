function solution(dartResult) {
    
    /*
        3번의 기회
        각 0~10점
        S / D / T 영역 : 점수 ** 1 / 점수 ** 2 / 점수 ** 3
        
        옵션 
        * : 스타상 - 직전 점수의 각 2배 + 중첩 가능 
        # : 아차상 - 해당 점수 마이너스화 + 스타상과 중첩시 동일하게 적용
        '' : 없는 경우도 존재한다
        
        => 0~10 정수 + S/D/T/''*''/# 문자열 의 총 점수를 반환
    */
    
    let answer = 0;
    let cnt = 0;
    let eachScore = [];
    let numbers = '012345679';
        
    dartResult.split('').reduce((acc, cur, idx) => {
        // console.log('acc :   ' + acc, ',  cur :   ' + cur, ',  idx :   ' + idx, ', \\  ' + Number(cur), typeof Number(cur));
        
        let check = numbers.indexOf(cur);
        console.log(check, typeof check);
    
        if (check < 10 && check !== -1 && check !== NaN) {
            eachScore.push(cur);
            cnt += 1;
        } 
        //else if (typeof cur === 'string' && cur === 'S') {
//             eachScore[idx - 1] =  eachScore[idx - 1] ** 1;
            
//         }  else if (typeof cur === 'string' && cur === 'D') {
//             eachScore[idx - 1] =  eachScore[idx - 1] ** 2;
            
//         } else if (typeof cur === 'string' && cur === 'T') {
//             eachScore[idx - 1] =  eachScore[idx - 1] ** 3;
            
//         } else if (typeof cur === 'string' && cur === '*') {
//             eachScore.map((el, idx) => {
//                 if (idx + 1 <= cnt) el *= 2;
//             })
            
//         } else if (typeof cur === 'string' && cur === '#') {
//             eachScore.map((el, idx) => {
//                 if (idx + 1 <= cnt) el *= (-1);
//             })
//         } 
        

    }, 0);
    

    
}