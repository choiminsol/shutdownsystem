function showNewTimeDisplay() {
    newTimeDisplay.style.display = 'flex';
    setTimeout(() => {
        firstImage.style.display = 'block';
        firstImage.classList.add('show');
    }, 500);
    setTimeout(() => {
        secondImage.style.display = 'block';
        secondImage.classList.add('show');
    }, 1000);
    setTimeout(() => {
        thirdImage.style.display = 'block';
        thirdImage.classList.add('show');
    }, 1500);
    setTimeout(() => {
        // 모든 이미지가 표시된 후 페이지 높이 변경
        document.body.style.height = '6000px'; // 높이를 6000px로 변경
        document.body.style.overflow = 'visible'; // 스크롤 허용
    }, 2000); // 이미지가 모두 표시된 후 추가 대기 시간
}
