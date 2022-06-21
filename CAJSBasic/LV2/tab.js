var tabButton = $(".tab-button");

for (let i = 0; i < 3; i++) {
    tabButton.eq(i).on("click", function () {
        tabButton.removeClass("show");
        tabButton.removeClass("orange");
        tabButton.eq(i).addClass("show");
        tabButton.eq(i).addClass("orange");
    });    
}