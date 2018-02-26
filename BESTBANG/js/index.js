
$(function () {

    // 页面打开显示背景色是蓝色
    $("#index .third-yuan>ul>li:first-child .liCon").addClass("active");
    //navtop的hover
    $(".nav li").hover(function () {
        var index=$(this).index();
        navHover(index)
    },function () {
    });

    // 三屏的hover
    $("#index .third-yuan>ul>li .liCon").hover(function () {
        $(this).addClass("active").parent("li").siblings().children(".liCon").removeClass("active");
    },function () {
    })

    //六屏页面打开选中第一个
    $("#index .sixth-con-right li:first-child").addClass("active");
    $("#index .sixth-con-left li:first-child").css("opacity","1");

    //六屏 hover
    $("#index .sixth-con-right li").hover(function () {
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#index .sixth-con-left li").eq(index).css("opacity","1").siblings().css("opacity","0");
    });

//监听页面滚动到一定高度显示导航的背景色
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 600) {
            $(".header").css("background","#7ecef4");
            $(".navBox").css("background","#7ecef4");
            $(".humbuger .div").css("background","#7ecef4");
        }
        else {
            $(".header").css("background","unset");
            $(".navBox").css("background","unset");
            $(".humbuger .div").css("background","rgba(255, 255, 255, 0.49)");
        }
    });

})//function结束





//导航的hover方法
function navHover(index) {

    var width=$(".nav .nav-top").css("width");
    var margin=$(".nav>ul>li").css("margin-right");
    var widthNum=width.substring(0,width.indexOf("p"));
    var marginNum=margin.substring(0,margin.indexOf("p"));
    $(".nav-top").css("marginLeft",index*(Number(widthNum)+Number(marginNum))+"px");
}
function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window)
    {//是ie
        $(".banner").empty();
        $(".banner").append('  <img data-src="images/banner.png" alt="">')
    }
    else{
//不是ie
    }

}
isIE();



