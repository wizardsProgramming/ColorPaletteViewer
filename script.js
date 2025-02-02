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
    palette1: new ColorPalette("Sunset Vibes", ["#FF5733", "#FF8D1A", "#FFBD33", "#75FF33", "#33FF57", "#33FF8D"]),
    palette2: new ColorPalette("Ocean Breeze", ["#003366", "#006699", "#0099CC", "#00B2FF", "#00CCFF", "#99CCFF"]),
    palette3: new ColorPalette("Autumn Leaves", ["#8B0000", "#B22222", "#FF4500", "#FFD700", "#32CD32", "#8A2BE2"]),
    palette4: new ColorPalette("Spring Meadow", ["#A8D08D", "#C9E4B8", "#9B9D6E", "#F0D000", "#FF8A00", "#D98B4C"]),
    palette5: new ColorPalette("Purple Haze", ["#800080", "#9B30FF", "#D8B6FF", "#9F5F9F", "#4B0082", "#6A0DAD"]),
    palette6: new ColorPalette("Candy Crush", ["#F78FB3", "#F7A8B8", "#F6C0A8", "#D8A5A5", "#F5C3C0", "#F9B7B3"]),
    palette7: new ColorPalette("Retro Summer", ["#FFD700", "#FF6347", "#FF4500", "#00FF00", "#1E90FF", "#FFD700"]),
    palette8: new ColorPalette("Electric Wave", ["#00FFFF", "#7B68EE", "#8A2BE2", "#DC143C", "#00BFFF", "#FF1493"]),
    palette9: new ColorPalette("Tropical Paradise", ["#FFD700", "#FF6347", "#FF4500", "#D2691E", "#7FFF00", "#B0E0E6"]),
    palette10: new ColorPalette("Moody Blues", ["#00008B", "#1E90FF", "#87CEEB", "#4682B4", "#5F9EA0", "#B0C4DE"]),
    palette11: new ColorPalette("Lemonade Stand", ["#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#FF4081", "#FF4081"]),
    palette12: new ColorPalette("Minty Fresh", ["#98FB98", "#00FF7F", "#ADFF2F", "#228B22", "#006400", "#7CFC00"]),
    palette13: new ColorPalette("Fireplace", ["#FF4500", "#B22222", "#DC143C", "#8B0000", "#A52A2A", "#D2691E"]),
    palette14: new ColorPalette("Tangerine Dream", ["#FF6347", "#FF8C00", "#FFD700", "#D2691E", "#FF4500", "#FF7F50"]),
    palette15: new ColorPalette("Starry Night", ["#191970", "#000080", "#4169E1", "#B0C4DE", "#87CEEB", "#00BFFF"]),
    palette16: new ColorPalette("Ice Queen", ["#ADD8E6", "#B0E0E6", "#00BFFF", "#4682B4", "#5F9EA0", "#6495ED"]),
    palette17: new ColorPalette("Autumn Harvest", ["#C71585", "#FF1493", "#FF6347", "#D2691E", "#B8860B", "#FF4500"]),
    palette18: new ColorPalette("Sunrise Bliss", ["#FF7F50", "#FF4500", "#FFD700", "#FF8C00", "#D2691E", "#F0E68C"]),
    palette19: new ColorPalette("Earth Tones", ["#8B4513", "#A0522D", "#D2691E", "#BC8F8F", "#C0C0C0", "#D3D3D3"]),
    palette20: new ColorPalette("Electric Sunset", ["#FF1493", "#FF69B4", "#FF6347", "#FF4500", "#FFD700", "#FF8C00"]),
    palette21: new ColorPalette("Pink Paradise", ["#FF69B4", "#FFC0CB", "#FFB6C1", "#F8BBD0", "#F5F5F5", "#C71585"]),
    palette22: new ColorPalette("Mint Chocolate Chip", ["#2E8B57", "#98FB98", "#F0FFF0", "#006400", "#228B22", "#8B4513"]),
    palette23: new ColorPalette("Citrus Burst", ["#FF8C00", "#FF6347", "#FFD700", "#FFA500", "#FF4500", "#F0E68C"]),
    palette24: new ColorPalette("Berry Blossom", ["#800080", "#9B30FF", "#D8B6FF", "#DA70D6", "#9400D3", "#9932CC"]),
    palette25: new ColorPalette("Ocean Depths", ["#191970", "#000080", "#4682B4", "#5F9EA0", "#B0C4DE", "#00BFFF"]),
    palette26: new ColorPalette("Golden Hour", ["#FF8C00", "#FFD700", "#FF6347", "#FF4500", "#FF7F50", "#FF1493"]),
    palette27: new ColorPalette("Pine Forest", ["#228B22", "#006400", "#7CFC00", "#32CD32", "#ADFF2F", "#00FF7F"]),
    palette28: new ColorPalette("Cobalt Sky", ["#0000CD", "#1E90FF", "#4169E1", "#87CEEB", "#4682B4", "#B0C4DE"]),
    palette29: new ColorPalette("Burnt Ember", ["#8B0000", "#B22222", "#D2691E", "#FF4500", "#FF6347", "#FF7F50"]),
    palette30: new ColorPalette("Rising Phoenix", ["#FF4500", "#DC143C", "#FF6347", "#FFD700", "#D2691E", "#B22222"])
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

