function solution(n, arr1, arr2) {
  const tMap = new Array(n);
  for (let i = 0; i < n; i++) {
    tMap[i] = new Array(n).fill("");
  }
  // console.log(tMap);

  arr1 = arr1.map((el) => el.toString(2));
  arr2 = arr2.map((el) => el.toString(2));
  // console.log(arr1, arr2);

  arr1 = arr1.map((el) => el.toString(2).split(""));
  arr2 = arr2.map((el) => el.toString(2).split(""));
  // console.log(arr1, arr2);

  for (let i = 0; i < n; i++) {
    if (arr1[i].length < n) {
      for (let j = 0; j < n - arr1[i].length; j++) {
        arr1[i].unshift('0');
      }
    }
    // console.log(arr1[i]);     
    // console.log(arr2[i].length);

    if (arr2[i].length < n) {
      for (let j = 0; j < n - arr2[i].length + 1; j++) {
        console.log(j);
        arr2[i].unshift('0');
      }
    }
    console.log(arr2[i]);

    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "1") arr1[i][j] = "#";
      else if (arr1[i][j] === "0") arr1[i][j] = "";
    }

  }

  for (let i = 0; i < n; i++) {
    if (arr2[i].length < n) {
      for (let j = 0; j < n - arr2[i].length; j++) {
        arr2[i].unshift('0');
      }
    }
    // console.log(arr2[i]);     

    for (let j = 0; j < n; j++) {
      if (arr2[i][j] === "1") arr2[i][j] = "#";
      else if (arr2[i][j] === "0") arr2[i][j] = "";
    }

  }

  // console.log(arr1, arr2);

  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "#" || arr2[i][j] === "#") {
        tMap[i][j] = "#";
      } else if (arr1[i][j] === "" && arr2[i][j] === "") {
        tMap[i][j] = "";
      }
    }
    console.log(tMap[i]);

    for (let j = 0; j < n; j++) {
      if (tMap[i][j] === "") {
        temp += " ";
      } else {
        temp += "#";
      }
    }
    console.log("temp : ", temp);

    tMap[i] = temp;
  }
  console.log(tMap);

}