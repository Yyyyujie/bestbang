$(function () {
    $(".nav li").hover(function () {
        var index=$(this).index();
        alert(index);
        navHover(index)
    },function () {
    });
})


function navHover(index) {
    var width=$(".nav .nav-top").css("width");
    var margin=$(".nav>ul>li").css("margin-right");
    var widthNum=width.substring(0,width.indexOf("p"));
    var marginNum=margin.substring(0,margin.indexOf("p"));
    $(".nav-top").css("marginLeft",index*(Number(widthNum)+Number(marginNum))+"px");
}