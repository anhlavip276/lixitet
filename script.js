function openGift(boxNumber) {
    // Tạo số tiền ngẫu nhiên từ 100.000 đến 1.000.000
    const money = Math.floor(Math.random() * 90000) + 10000;

    // Hiển thị thông báo bằng alert
    alert(`Bạn đã được Kim Anh lì xì số tiền: ${money.toLocaleString()} VND`);

    // Vô hiệu hóa các hộp quà sau khi chọn
    disableAllBoxes();
}

function disableAllBoxes() {
    // Lấy tất cả các hộp quà và vô hiệu hóa chúng
    const boxes = document.querySelectorAll('.gift-box');
    boxes.forEach(box => {
        box.classList.add('disabled');
        box.setAttribute('onclick', '');  // Vô hiệu hóa sự kiện click
    });
}
