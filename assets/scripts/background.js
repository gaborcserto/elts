function backgroundChange() {
    var inAction = false;

    $(".courses__content__tables__item__content").click(function() {

        if ($(this).attr("class") === $(".active").attr("class")) {
            return;
        }

        if (!inAction) {

            var actClass = $(this).attr('data-bg'),
                previous = $(".bg.active"),
                bgTransDur = parseFloat(previous.css("transition-duration"), 10) * 1000,
                trans;

            if (actClass === "bg__1") {
                trans = "translateX(100%)";
            } else if (actClass === "bg__2") {
                trans = "translateY(100%)";
            } else if (actClass === "bg__3") {
                trans = "translateX(-100%)";
            } else if (actClass === "bg__4") {
                trans = "translateY(-100%)";
            } else if (actClass === "bg__5") {
                trans = "translateX(100%)";
            } else if (actClass === "bg__6") {
                trans = "translateY(100%)";
            } else if (actClass === "bg__7") {
                trans = "translateX(-100%)";
            } else if (actClass === "bg__8") {
                trans = "translateY(-100%)";
            }


            inAction = true;
            $(".courses__content__tables__item__content").removeClass("active");
            $(this).addClass("active");
            $(".bg").removeClass("active");
            previous.css("transform", trans);

            setTimeout(function() {
                previous.addClass("fast");
                previous.attr("style", "");
                previous.css("transform");
                previous.removeClass("fast");
            }, bgTransDur);

            $(".bg." + actClass).addClass("active");

            setTimeout(function() {
                inAction = false;
            }, bgTransDur + 100);
        }
    });
}