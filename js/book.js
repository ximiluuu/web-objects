document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.classList.add('shake');
        });
        icon.addEventListener('mouseleave', function () {
            this.classList.remove('shake');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const ticketInfoLink = document.getElementById('ticketInfo');
    const closeModal = document.getElementById('closeModal');

    // 当点击“订票须知”链接时，显示模态框
    ticketInfoLink.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止链接的默认行为
        modal.style.display = 'block'; // 显示模态框
    });

    // 当点击关闭按钮时，隐藏模态框
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // 隐藏模态框
    });

    // 当点击模态框外部时，也隐藏模态框
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});