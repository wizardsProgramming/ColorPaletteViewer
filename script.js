class ColorPalette {
    constructor(name, colors) {
        this.name = name; // Palette name
        this.colors = colors; // Array of six color CSS values
    }

    getName() {
        return this.name;
    }

    getColors() {
        return this.colors;
    }
}

// Define 30 color palettes
const palettes = {

palette34: new ColorPalette("Victorian Night", ["#6A0DAD", "#000000", "#B22222", "#FF4500", "#FFD700", "#8B4513"]),
palette35: new ColorPalette("Alchemy Gold", ["#FFD700", "#4B0082", "#8B4513", "#C0C0C0", "#FF6347", "#800000"]),
palette36: new ColorPalette("Wicked Forest", ["#006400", "#228B22", "#8A2BE2", "#3A3A3A", "#B22222", "#D2691E"]),
palette37: new ColorPalette("Shadowed Heart", ["#8B0000", "#2F4F4F", "#000000", "#4B0082", "#B22222", "#FF6347"]),
palette38: new ColorPalette("Enchanted Ember", ["#FF4500", "#8B0000", "#D2691E", "#6A0DAD", "#B22222", "#C0C0C0"]),
palette39: new ColorPalette("Haunted Moon", ["#2F4F4F", "#B22222", "#FFD700", "#6A0DAD", "#000000", "#9B30FF"]),
palette40: new ColorPalette("Crimson Steampunk", ["#800000", "#6A0DAD", "#C0C0C0", "#8B4513", "#FFD700", "#B22222"]),
palette41: new ColorPalette("Sorcerer’s Dream", ["#4B0082", "#8A2BE2", "#9B30FF", "#FFD700", "#800000", "#D2691E"]),
palette42: new ColorPalette("Phantom Steel", ["#2F4F4F", "#808080", "#8B0000", "#B22222", "#FF6347", "#C0C0C0"]),
palette43: new ColorPalette("Mystic Ember", ["#6A0DAD", "#FF4500", "#FF6347", "#8B4513", "#D2691E", "#C0C0C0"]),
palette44: new ColorPalette("Vampires Kiss", ["#800000", "#B22222", "#4B0082", "#6A0DAD", "#FF6347", "#000000"]),
palette45: new ColorPalette("Eternal Twilight", ["#2F4F4F", "#FF4500", "#8B0000", "#D2691E", "#4B0082", "#FF6347"]),
palette46: new ColorPalette("Steampunk Rust", ["#8B4513", "#A52A2A", "#B8860B", "#4B0082", "#FFD700", "#C0C0C0"]),
palette47: new ColorPalette("Witchcraft Ritual", ["#000000", "#2F4F4F", "#9B30FF", "#8B0000", "#A52A2A", "#C0C0C0"]),
palette48: new ColorPalette("Burnt Autumn", ["#FF6347", "#B22222", "#8B4513", "#FF8C00", "#D2691E", "#C0C0C0"]),
palette49: new ColorPalette("Cursed Shadows", ["#2F4F4F", "#6A0DAD", "#B22222", "#9B30FF", "#FF4500", "#000000"]),
palette50: new ColorPalette("Gothic Moon", ["#000000", "#8B0000", "#6A0DAD", "#FF6347", "#B22222", "#C0C0C0"]),


};

// Get button elements
const buttons = document.querySelectorAll(".palette-button");

// Get color div elements
const colorDivs = document.querySelectorAll(".color");

// Get the palette name display
const paletteNameDisplay = document.getElementById("selected-palette-name");

// Get the Get CSS button
const getCssButton = document.getElementById("get-css");

// Get the CSS output textarea
const cssOutputTextarea = document.getElementById("css-textarea");

// Function to update color display
function updateColorDisplay(palette) {
    const colors = palette.getColors();
    colorDivs.forEach((div, index) => {
        div.style.backgroundColor = colors[index];
    });

    // Update the palette name display
    paletteNameDisplay.textContent = palette.getName();
}

// Function to generate CSS from the selected palette
function generateCss(palette) {
    const colors = palette.getColors();
    let css = `/* CSS for ${palette.getName()} Palette */\n`;

    colors.forEach((color, index) => {
        css += `.color${index + 1} {\n  background-color: ${color};\n}\n\n`;
    });

    return css;
}

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const paletteId = button.getAttribute("data-palette");
        const selectedPalette = palettes[paletteId];
        updateColorDisplay(selectedPalette);
        const demoSection = document.getElementById('color-display');
        demoSection.scrollIntoView({behavior: "smooth"});
    });
});



// Function to generate the CSS and copy to clipboard
getCssButton.addEventListener("click", () => {
    // Generate the CSS based on the current colors
    let cssString = "";
    colorDivs.forEach((div, index) => {
        const color = div.style.backgroundColor;
        cssString += `.color${index + 1} { background-color: ${color}; }\n`;
    });

    // Output the CSS to the textarea
    cssOutputTextarea.value = cssString;

    // Copy the CSS to clipboard
    navigator.clipboard.writeText(cssString).then(() => {
        // Alert the user that it's copied
        alert("Copied!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

