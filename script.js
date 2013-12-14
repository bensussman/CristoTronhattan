var trs = 214;
var tds = 95;
var avenues = {
    0:true,
    4:true,
    9:true,
    18:true,
    28:true,
    37:true,
    47:true,
    57:true,
    62:true,
    68:true,
    73:true,
    79:true,
    86:true,
    94:true,
    101:true};
function isStreet(row){
    return row % 3 == 0;
}
function isAvenue(col) {
    return avenues[col]; 
}

document.write("<table id='map' border='1px'>");
for (var i =0 ; i < trs; i++) {
    if (isStreet(i)) {
        document.write("<tr class=\"street\">");
    } else {
        document.write("<tr>");
    }

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
