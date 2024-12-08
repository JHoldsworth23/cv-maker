export default function CustomiseFont() {

    function changeFont(fontType) {
        const font = fontType === "serif" ? 
          "Garamond, serif" : fontType === "sans" ? 
          "Inter, sans-serif" : "monospace";

        document.body.style.setProperty("--cv-font", font);
    }

    return (
        <div className="customise-div">
            <h3>Font Style</h3>
            <div className="font-buttons">
                <button
                  className="font-btn"
                  onClick={() => changeFont("sans")}
                >
                    <span className="font-test">Aa</span>
                    Sans
                </button>
                <button
                  className="font-btn"
                  onClick={() => changeFont("serif")}
                >
                    <span className="font-test serif">Aa</span>
                    Serif
                </button>
                <button
                  className="font-btn"
                  onClick={() => changeFont("monospace")}
                >
                    <span className="font-test mono">Aa</span>
                    Mono
                </button>
            </div>
        </div>
    );
}