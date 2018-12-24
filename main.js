var video = document.getElementById("vid");

$(video).on("click", function(e) {
    console.log("bruh");
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
});
