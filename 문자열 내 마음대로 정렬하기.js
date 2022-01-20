function solution(strings, n) {
    let answer = strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    return answer;
  }

/*
function solution(strings, n) {
    let arr = [];
    for (let i = 0; i < strings.length; i++) {
        arr[i] = strings[i][n];
    }
    
    let sortedArr = arr.sort();
    // console.log('sortedArr: ', sortedArr);
    
    let check = ((t) => sortedArr.indexOf(t) !== sortedArr.lastIndexOf(t));
    let repeatedWord = sortedArr.map((el) => check(el));
    let repeatedWordBool = sortedArr.map((el) => check(el)).filter((el) => el === true);
    // console.log('repeatedWord: ' + repeatedWord);
    

    let answer = [];
    if (repeatedWordBool.length) { // 중복
        
        let repeatedWordArr = [];
        for (let i = 0; i < repeatedWord.length; i++) {
            if (repeatedWord[i] === true) answer.push(strings[i]);
                // console.log('repeatedWordArr: ', repeatedWordArr.sort());
        }
        
        answer = answer.sort();
        // console.log('answer: ', answer, repeatedWord);
        
        for (let i = 0; i < repeatedWord.length; i++) {
            if (repeatedWord[i] === false) {
                answer[i] = strings[i];
            }
        }
        
        // console.log('answer: ', answer);
        return answer;
        
    } else {
        let sortedStr = [];

        for (let j = 0; j < sortedArr.length; j++) {
            for (let i = 0; i < sortedArr.length; i++) {
                // console.log(i, strings[i],strings[i][n], sortedArr[j]);
                
                if (strings[i][n] === sortedArr[j]) {
                    // console.log('!!!!', strings[i]);
                    sortedStr.push(strings[i]);
                }
            }   
        
        }
        // console.log(sortedArr, sortedStr)
        return sortedStr;
    }
       
}


*/