function convertToRGB(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null;
}

export default function CustomiseColor() {
    const updateValue = (key, val) => document.body.style.setProperty(key, val);

    return (
        <div className="customise-div">
            <h3>Color</h3>
            <input 
              id="color-wheel"
              type="color"
              onChange={(e) => {
                const newColor = e.target.value;
                const { r, g, b } = convertToRGB(newColor);
                const colorBrightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) > 127.5;
                
                updateValue("--cv-header-bg-color", newColor);
                updateValue("--cv-text-color", colorBrightness ? "black" : "white");
              }}
            />
        </div>
    );
}