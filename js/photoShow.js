
// 轮播图

// 自动轮播效果
let _direction = true;
let _move = () => {
    let lists = document.querySelectorAll('.item');
    if (_direction) {
        document.querySelector('#slide').appendChild(lists[0]);
    } else {
        document.querySelector('#slide').prepend(lists[lists.length - 1]);
    }
}
let timer = setInterval(_move, 3000);
// 鼠标移入不动，移出轮播
document.querySelector('.show').addEventListener('mouseover', () => {
    clearInterval(timer);
})
document.querySelector('.show').addEventListener('mouseout', () => {
    timer = setInterval(_move, 3000);
})
// 普通轮播效果(按钮控制)
document.querySelectorAll('.s_button')[1].onclick = () => {
    _direction = true;
    _move();
    // let lists = document.querySelectorAll('.item');
    // document.querySelector('#slide').appendChild(lists[0]);
}
document.querySelectorAll('.s_button')[0].onclick = () => {
    _direction = false;
    _move();
    // let lists = document.querySelectorAll('.item');
    // document.querySelector('#slide').prepend(lists[lists.length - 1]);
}

