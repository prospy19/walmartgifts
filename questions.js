function startCheck() {
    var e = $(".overlay-checker"),
        t = $(".overlay-checker-points > li");
    for (t.hide(), e.fadeIn(), i = 0; i < t.length; i++) setTimeout(function() {
        $(".overlay-checker-points").find(":hidden").first().fadeIn()
    }, 1500 * (i + 1));
    setTimeout(function() {
        window.location = $(".redirectNow").attr("href")
    }, 1500 * t.length + 2e3)
}

function toggleDiv(e) {
    $(e).toggle()
}
$(document).ready(function() {
    $("#questionWrapper .question").first().show(), $("#questionWrapper .answer").click(function(e) {
        e.preventDefault(), "answer cannotContinue" != $(this).attr("class") ? ($(this).parent(".question").fadeOut(200), $(this).parent().next(".question").length ? $(this).parent().next(".question").delay(200).fadeIn() : startCheck()) : alert("Sorry, you need to be 16 or above to participate in this survey.")
    })
});