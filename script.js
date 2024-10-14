// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate a random color (hexadecimal)
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Add event listener to the button
    changeColorBtn.addEventListener('click', function() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor; // Change color of the box
    });
});
