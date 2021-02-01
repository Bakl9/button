let swithcMode = document.getElementById("swithcMode");

swithcMode.onclick = function () {
    let theme = document.getElementById('theme');

    if (theme.getAttribute("href") == 'light-mode.css') {
        
    } else {
        theme.href = 'dark-mode.css';
    } if (theme.getAttribute("href") == 'dark-mode.css') {

    } else {
        theme.href = 'light-mode.css';
    }

}