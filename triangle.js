function starpyramid(rows) {
    for (let i = 0; i < rows; i++) {
        var output = "<br>";
        for (let j = 0; j < rows - i; j++) output += '&nbsp';
        for (let k = 0; k <= i; k++) output += '*&nbsp';
        document.write(output);
    }
}
var input = parseInt(prompt());
starpyramid(input);