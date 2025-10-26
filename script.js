// Lấy phần tử
const textBox = document.getElementById('textBox');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const overlay = document.getElementById('overlay');
const flower = document.getElementById('flower');
const mainScreen = document.getElementById('mainScreen');

// Hiệu ứng ban đầu
window.onload = () => {
    setTimeout(() => {
        textBox.style.animationPlayState = 'running';
    }, 500);
};

// Tạo thông báo
function showMessage(text, callback) {
    overlay.innerHTML = `<div class="message">${text}</div>`;
    overlay.classList.add('show');

    setTimeout(() => {
        overlay.classList.remove('show');
        setTimeout(callback, 500);
    }, 2500);
}

// Reset về ban đầu
function reset() {
    flower.classList.remove('show');
    overlay.innerHTML = '';
    textBox.style.opacity = '0';
    setTimeout(() => {
        textBox.style.opacity = '1';
    }, 100);
}

// Xử lý nút "Bé Chưa"
btnNo.addEventListener('click', () => {
    showMessage("Bé yêu đi ăn đi nè", reset);
});

// Xử lý nút "Bé Ăn Rồi"
btnYes.addEventListener('click', () => {
    showMessage("Bé yêu của anh giỏi quá vậy ta thưởng cho bé nè", () => {
        flower.classList.add('show');
    });
});