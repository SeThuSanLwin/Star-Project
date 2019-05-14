for ( var x = 1 ; x <= 100 ; x++ ) {
        document.write ("<p>" + x + "</p>");
    if ( x % 3 == 0 ) {
        document.write ("<p>Fizz</p>")
}
    if ( x % 5 == 0 ) {
        document.write ("<p>Buzz</p>")
    }
    if ( x % 3 == 0 && x % 5 == 0 ) {
        document.write ("<p>FizzBuzz</p>")
    }
    else {
        document.write ("<p>$x</p>")
    }
}