// 滚动显示

// 创建IntersectionObserver实例
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            const boxContents = entry.target.querySelectorAll('.box-content');
            boxContents.forEach((content, index) => {
                // 根据元素的自定义属性data-index来依次延迟显示，实现依次出现的效果
                setTimeout(() => {
                    content.style.opacity = 1;
                    // content.style.right = '0'; // 改变right属性，使其从右侧滑入到正常位置
                }, index * 200); // 这里设置每个元素显示间隔为200毫秒
            });
            // observer.unobserve(entry.target); // 元素全部显示后停止观察该父元素
        }
    });
},{
    threshold: 0.3 // 设置元素进入视口50%时触发回调
});

// 获取所有要应用动画效果的元素
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    observer.observe(box); // 开始监听每个元素
});

// 创建IntersectionObserver实例
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//             const boxContents = entry.target.querySelectorAll('.box-content');
//             boxContents.forEach((content, index) => {
//                 // 根据元素的自定义属性data-index来依次延迟显示，实现依次出现的效果
//                 setTimeout(() => {
//                     content.style.opacity = 1;
//                 }, index * 200); // 这里设置每个元素显示间隔为200毫秒
//             });
//             // observer.unobserve(entry.target); // 元素全部显示后停止观察该父元素
//         }
//     });
// },{
//     threshold: 0.3 // 设置元素进入视口30%时触发回调
// });

// // 获取所有要应用动画效果的元素
// const boxes = document.querySelectorAll('.box');
// boxes.forEach((box) => {
//     observer.observe(box); // 开始监听每个元素
// });


