let currentIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.indicators li');

        function moveSlide(direction) {
            currentIndex = direction === 1 ? (currentIndex + 1) % slides.length : (currentIndex - 1 + slides.length) % slides.length;
            changeSlide(currentIndex);
        }

        function changeSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }

        // 自动播放
        setInterval(() => {
            moveSlide(1);
        }, 3000);

        // 点击指示器切换
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                changeSlide(index);
            });
        });