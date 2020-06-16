var OriginTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    $('[rel="icon"]').attr("href", "/img/TEP.ico");
    document.title = "╭(°A°`)╮ 你丑你就走 ~";
    clearTimeout(titleTime);
  } else {
    $('[rel="icon"]').attr("href", "/favicon.ico");
    document.title = "(ฅ>ω<*ฅ) 你帅你美你回来~" + OriginTitle;
    titleTime = setTimeout(function() {
      document.title = OriginTitle;
    }, 2000);
  }
});
