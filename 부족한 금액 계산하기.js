function solution(price, money, count) {
    
    for (let i = 1; i <= count; i++) {
        money = money - (i * price);
        // console.log(money, i, price, (i * price));
    }
    // console.log(money);
    
    if (money <= 0) return money * -1; 
    return 0;
}