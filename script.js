let money = +prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

let expences1 = prompt("Введите обязательную статью расходов в этом месяце");
let expences2 = prompt("Во сколько обойдется?");
const appData = {
    "бюджет" : money,
    "данные времени" : date,
    expence : {
        expences1 : expences2
    },
    optionalExpenses : "",
    income : [],
    savings : false
}
let oneDayBudg = money/30;
alert(oneDayBudg);