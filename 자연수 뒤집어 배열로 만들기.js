function solution(n) {
    /*
        자연수 n을 문자로 바꾼다. 
        바꾼 n을 쪼개 배열안으로 넣어준다 (split)
        배열안의 문자들을 정수로 바꿔준다 (forEach, for)
        배열을 내림차순으로 정렬한다 (sort - closure)
        배열을 반환한다
    */
    
    // let answer =  String(n).split('').sort((a, b) => b - a);
    // for (let i = 0; i < answer.length; i++) answer[i] = parseInt(answer[i], 10);
    let answer = String(n).split('').reverse();
    for (let i = 0; i < answer.length; i++) answer[i] = parseInt(answer[i], 10);
    console.log(answer);
    return answer;    
}