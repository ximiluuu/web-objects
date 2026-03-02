// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    const thumbs = document.querySelectorAll('.thumb li');
    const infoSliders = document.querySelectorAll('.info-slider');
    const items = document.querySelectorAll('.item');
    let currentIndex = 0;
    let autoPlayInterval;
    const autoPlayDelay = 2000; // 5秒自动切换

    // 初始化轮播图
    function initSlider() {
        // 设置第一个为激活状态
        items[0].classList.add('active');
        thumbs[0].classList.add('selected');
        
        // 设置自动播放
        startAutoPlay();
        
        // 鼠标悬停时暂停自动播放
        const container = document.querySelector('.container1');
        container.addEventListener('mouseenter', pauseAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }

    // 切换到指定索引的幻灯片
    function goToSlide(index) {
        // 边界检查
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;
        
        // 更新当前索引
        currentIndex = index;
        
        // 更新缩略图选中状态
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('selected', i === index);
        });
        
        // 更新幻灯片激活状态
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // 更新信息滑动器位置
        infoSliders.forEach(slider => {
            slider.style.transform = `translateY(${index * -100}%)`;
        });
    }

    // 下一张幻灯片
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // 上一张幻灯片
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // 开始自动播放
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    // 暂停自动播放
    function pauseAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 为缩略图添加点击事件
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            pauseAutoPlay();
            goToSlide(index);
            startAutoPlay();
        });
    });

    // 初始化轮播图
    initSlider();
});

/*滚动*/
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }else{
            entry.target.classList.remove("active");
        }
    });
});

const hiddenElements = document.querySelectorAll(".flag");
hiddenElements.forEach((e1) => observer.observe(e1));