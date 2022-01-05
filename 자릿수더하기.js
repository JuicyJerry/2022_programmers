function solution(n)  {
    let splitNumber = String(n).split('');
    let splitNumberSum = splitNumber.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    return splitNumberSum;
}