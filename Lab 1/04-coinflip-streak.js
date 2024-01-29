let cf;

do {
    cf = Math.round(Math.random());
    if (cf) {
        document.write("Heads<br>");
    } else {
        document.write("Tails");
    }
} while (cf);
