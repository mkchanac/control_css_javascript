/****************************************** 
*   compoundInterest.js
*   This generate the table in web page
*   by javascript
*
****************************************** */

function generateTable(form){
    var amount;   // accumulated value for each year
    var rate;       // interest rate
    var years;      // total years
    var interest;   // interest earned each year
    var table;      // compound interest table
    var year = 1;   // the year being calculated

    amount = form.elements["deposit"].valueAsNumber;
    rate = form.elements["rate"].valueAsNumber;
    years = form.elements["years"].valueAsNumber;

    table = "<table><tr><th>Year</th><th>Starting Value</th><th>Interest Earned</th><th>Ending Value</th></tr>";

    while(year <= years){
        table += "<tr><td>" + year + "</td>";
        table += "<td>$" + amount.toFixed(2) + "</td>";
        interest = amount * rate / 100;
        table += "<td>$" + interest.toFixed(2) + "</td>";
        amount += interest;
        table += "<td>$" + amount.toFixed(2) + "</td></tr>";
        year++;
    }

    table += "</table>";
    document.getElementById("result").innerHTML = table;

}