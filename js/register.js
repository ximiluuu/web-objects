document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');
    const signInButton = document.querySelector('#signIn');
    const signUpButton = document.querySelector('#signUp');
    const signupForm = document.querySelector('#signupForm');
    const signInForm = document.querySelector('#signInForm');

    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!validateSignUp()) {
            return;
        }
        // 如果需要提交表单，可以在这里处理
        console.log('注册成功');
    });

    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!validateSignIn()) {
            return;
        }
        // 如果需要提交表单，可以在这里处理
        console.log('登录成功');
    });
});

function validateSignUp() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '') {
        alert('用户名不能为空');
        return false;
    } else if (password === '') {
        alert('密码不能为空');
        return false;
    } else if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return false;
    }
    return true;
}

function validateSignIn() {
    var username = document.getElementById('signInUsername').value;
    var password = document.getElementById('signInPassword').value;

    if (username === '') {
        alert('用户名不能为空');
        return false;
    } else if (password === '') {
        alert('密码不能为空');
        return false;
    }
    return true;
}