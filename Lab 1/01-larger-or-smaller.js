var a = parseInt(prompt("Enter the first number"), 10);
var b = parseInt(prompt("Enter the second number"), 10);
if (a > b) {
    document.write("The larger number is " + a);
} else if (b > a) {
    document.write("The larger number is " + b);
} else {
    document.write("Numbers are equal");
}
