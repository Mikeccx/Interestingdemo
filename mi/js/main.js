function hide(e) {
    e.firstElementChild.style.display = "none"
}
function display(e) {
    e.firstElementChild.style.display = "block"
}
function hidecart(e) {
    e.children[1].style.display = "none"
}
function displaycart(e) {
    e.children[1].style.display = "block"
}
window.onscroll = function (e) {
    let elementop = document.getElementsByClassName('content')[0].offsetTop  //offsetTop返回当前元素相对于其 offsetParent 元素的顶部的距离。
    //  console.log(document.getElementsByClassName('content-top-center')[0].offsetTop)
    //  console.log(document.getElementsByTagName('body')[0])
    let scrolltop = document.documentElement.scrollTop || document.body.scrollTop  //滚动距离
    let banner = document.getElementsByClassName('content-top-center')[0]
    console.log(banner.className);
    // console.log(document.documentElement.scrollTop || document.body.scrollTop)
    if (scrolltop - elementop >= 0) {
        console.log('fixed')
        banner.className = "content-top-center fixed"  //修改样式
    }
    else {
        console.log('relative')
        banner.className = "content-top-center relative"  //修改


    }

}
