function solution(array, commands) {
    let answer = commands.map((el) => {
        let findNum = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1];
        return findNum;
    })    
    return answer;
    
}