t = 0
var sct = document.getElementById('test_cumber');
showSlides(t);
function previousSlide() {
    showSlides(t -= 1); 
}
function nextSlide() {
    showSlides(t += 1);
}
function showSlides(t) {
    sct.classList.remove("test_cumber_0","test_cumber_1","test_cumber_2");
    sct.classList.add("test_cumber_"+t);
}