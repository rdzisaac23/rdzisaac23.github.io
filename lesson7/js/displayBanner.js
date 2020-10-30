function displayBanner() {
    //check if its saturday and display else hide
    const date = new Date();
    const today = date.getDay();
    const element = document.getElementById("banner");
    if (today == 5) {
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");
    }
}
