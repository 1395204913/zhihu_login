var odivs = document.getElementsByClassName('nav');
var ocontents = document.getElementsByClassName('content')
// 转换时让各输入框回到初始状态
var oinputs = document.getElementsByTagName('input');
var osvg = document.getElementsByClassName('show')
// console.log(osvg)
// console.log(oinputs);
// 免密码登录与密码登录的转换
function toggle(param) {
    if (param == 1) {
        // nav样式改变
        odivs[0].className = "nav nav_active"
        odivs[1].className = "nav"
        ocontents[0].className = "content"
        ocontents[1].className = "content hidden"
        // 状态初始化
        oinputs[0].placeholder = "手机号"
        oinputs[1].placeholder = "输入6位短信验证码"
        oinputs[0].className = oinputs[1].className = "inputText"
    } else if (param == 2) {
        // nav样式改变
        odivs[1].className = "nav nav_active"
        odivs[0].className = "nav"
        ocontents[1].className = "content"
        ocontents[0].className = "content hidden"
        // 状态初始化
        oinputs[2].placeholder = "手机号"
        oinputs[3].placeholder = "密码"
        oinputs[2].className = oinputs[3].className = "inputText"
    } else {
        if (ocontents[2].className == "content") {
            odivs[0].className = "nav "
            odivs[1].className = "nav nav_active"
            ocontents[0].className = "content hidden"
            ocontents[1].className = "content "
            ocontents[2].className = "content hidden"
        } else {
            odivs[0].className = "nav hidden"
            odivs[1].className = "nav hidden"
            ocontents[0].className = "content hidden"
            ocontents[1].className = "content hidden"
            ocontents[2].className = "content"
        }

    }
}

function myblur({
    msg,
    index
}) {
    let temp = document.getElementsByClassName('inputText')[index]
    // console.log(index,msg)
    if (temp.value.length < 1 || temp.value == "") {
        temp.placeholder = msg
        temp.className = "inputText inputChange"
    }
    // 即使转换，两输入框的手机号也保持一致
    else if (index == 0) {
        document.getElementsByClassName('inputText')[2].value = temp.value
    } else if (index == 2) {
        document.getElementsByClassName('inputText')[0].value = temp.value
    }

}

function changeShow() {
    if (osvg[1].classList.contains('hidden')) {
        osvg[1].classList.remove('hidden')
        osvg[0].classList.add('hidden')
        oinputs[3].type = 'text'
    } else {
        osvg[0].classList.remove('hidden')
        osvg[1].classList.add('hidden')
        oinputs[3].type = 'password'
    }



}