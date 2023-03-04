const fullNewsArea = document.getElementById('contsctsGroup');
const a = document.getElementById('a');
const b = document.getElementById('vk_group');
const c = document.getElementById('vk_groups');
const fullNewsButton = document.getElementById('rostelecom');
fullNewsArea.style.display = "none";
let isShow = false;
fullNewsButton.addEventListener('click', function() {
    if (isShow) {
        isShow = false;
        fullNewsArea.style.display = "none";
    } else {
        isShow = true;
        fullNewsArea.style.display = "block";
    }
});