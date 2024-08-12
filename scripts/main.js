function printBox(width, height) {
    let boxContainer = document.getElementById('box');

    // Create a <pre> element for preserving whitespace and formatting
   
    
    // Start constructing the box as a string
    let boxString = '';

    // Create the top of the box
    let top = " " + "_".repeat(width) + "\n";
    boxString += top;

    // Create the sides of the box
    for (let i = 0; i < height; i++) {
        let side = "|" + " ".repeat(width) + "|\n";
        boxString += side;
    }

    // Create the bottom of the box
    let bottom = "|" + "_".repeat(width) + "|";
    boxString += bottom;

   
}

// Example usage:
printBox(10, 4);
