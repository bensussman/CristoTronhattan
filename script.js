var trs = 225;
var tds = 100;
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
function isAvenue(col) {
    return avenues[col]; 
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
