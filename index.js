function fontsize() {
    const currentFontSize = document.getElementById('changeFontSize').style.fontSize;

    if (currentFontSize == "16px") {
        document.getElementById('changeFontSize').style.fontSize = "20px";

    } else if (currentFontSize == "20px") {
        document.getElementById('changeFontSize').style.fontSize = "24px";

    } else if (currentFontSize == "24px") {
        document.getElementById('changeFontSize').style.fontSize = "28px";

    } else if (currentFontSize == "28px") {
        document.getElementById('changeFontSize').style.fontSize = "32px";

    } else {
        document.getElementById('changeFontSize').style.fontSize = "20px";
    }
}