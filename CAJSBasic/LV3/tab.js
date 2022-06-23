var tabButton = $(".tab-button");
var tabContent = $(".tab-content");

/* for (let i = 0; i < tabButton.length; i++) {
    tabButton.eq(i).on("click", function () {
        openTab(i);
    });    
} */

/* $(".list").click(function (e) {
    if (e.target == document.querySelectorAll('.tab-button')[0]) {
        openTab(0)
    }
}); */

$(".list").click(function (e) {
  console.log(e.target.dataset.id); // 콘솔에 숨겨둔 data-id 값을 출력
  openTab(e.target.dataset.id);
});

function openTab(num) {
  tabContent.removeClass("show");
  tabContent.eq(num).addClass("show");
  tabButton.removeClass("orange");
  tabButton.eq(num).addClass("orange");
}
