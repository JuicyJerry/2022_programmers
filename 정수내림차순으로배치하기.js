function solution(n) {
    /*
        n을 문자열로 바꾼다.
        n을 하나씩 나눠준다 (split)
        배열 안에 담긴 값들을 정수로 바꿔준다(for문, Number, parseInt)
        배열에 담긴 값들을 내림차순으로 정렬한다(sort 함수식 및 클로저, b - a)
        배열에 담긴 값들을 다시 문자로 바꿔준다(for문, String)
        배열에 담긴 값들을 문자열로 합쳐준다(join)
        문자열 n을 정수로 변환한다.
        n을 반환한다.
    */
    // let splitNums = String(n).split('').forEach((el) => parseInt(el, 10));
    let splitNums = String(n).split('');
    for (let i = 0; i < splitNums.length; i++) splitNums[i] = parseInt((splitNums[i]));
    splitNums.sort(function(a, b) {
        return b - a;                
    })
    for (let i = 0; i < splitNums.length; i++) splitNums[i] = String((splitNums[i]));
    splitNums = splitNums.join('');
    return parseInt(splitNums, 10);
}

