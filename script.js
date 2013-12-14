var trs = 100;
var tds = 100;
function isAvenue(col)
{
    return col % 2 == 0 
}

document.write("<table id='map' border='1px'>");
for (var i =0 ; i < trs; i++) {
    document.write("<tr>");
    for (var x =0 ; x < tds; x++) {
        if (isAvenue(x)) {
            document.write("<td class=\"avenue\"></td>");
        } else {
            document.write("<td></td>");
        }
    } 
    document.write("</tr>");
}
document.write("</table>");
