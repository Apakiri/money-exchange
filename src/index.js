// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var les_zerro = {

    }
    var more_than_oHthousand = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }
    if (currency <= 0)
        return les_zerro;
    if (currency >= 10000)
        return more_than_oHthousand;
    else {
        var arr_coins_value = [50, 25, 10, 5, 1];
        var arr_coins_number = [];
        var arr_coins_name = ['H', 'Q', 'D', 'N', 'P'];
        for (var i = 0; i < arr_coins_value.length; ++i) {
            if (currency / arr_coins_value[i] > 0) {
                arr_coins_number[i] = parseInt(currency / arr_coins_value[i]);
                currency = currency % arr_coins_value[i];
            } else {
                arr_coins_number[i] = 0;
            }
        }
    }
    var exchange_money = {};
    for (var i = 0; i < arr_coins_value.length; ++i) {
        if (arr_coins_number[i] == 0)
            continue;
        exchange_money[arr_coins_name[i]]  = arr_coins_number[i];
    }

    return exchange_money;
}


