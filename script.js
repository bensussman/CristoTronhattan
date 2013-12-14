var trs = 34;
var tds = 12;

document.write("<table id='map'>");
for (var i =0 ; i < trs; i++) {
    document.write("<tr>");
    for (var x =0 ; x < tds; x++) {
        document.write("<td>"+x+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");