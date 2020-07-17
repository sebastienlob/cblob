document.writeln('hello world!');

var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession',
];
 for (i = 0; i < properties.length; i += 1){
     document.writeln(properties[i] + ':' + 
            another_stooge[properties[i]]);
 }