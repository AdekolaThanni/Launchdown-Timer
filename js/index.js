var counter, hourCount, minuteCount, secondCount, dayCount, tick;

counter = 1209600;

tick = setInterval(function(){
    counter--;

    secondCount = ( counter % 60 );

    if ( (counter / 60) >= 60 ){
        minuteCount = Math.floor( counter / 60 ) % 60 ;
    } else {
        minuteCount = Math.floor( counter / 60);
    }

    if ( (counter / 3600) >= 24 ){
        hourCount = Math.floor( counter / 3600 ) % 24 ;
    } else {
        hourCount = Math.floor( counter / 3600);
    }

    dayCount = Math.floor( counter / 86400);

    if ( String(dayCount).length == 1 ){
        dayCount = "0" + dayCount;
    }

    if ( String(hourCount).length == 1 ){
        hourCount = "0" + hourCount;
    }

    if ( String(minuteCount).length == 1 ){
        minuteCount = "0" + minuteCount ;
    }

    if ( String(secondCount).length == 1 ){
        secondCount = "0" + secondCount;
    }

    if ( ("0" + dayCount) == $("#day").text() || dayCount == $("#day").text()){
        null;
    } else {
        $("#day").text(dayCount); 
    }

    if ( ("0" + hourCount) == $("#hour").text() || hourCount == $("#hour").text()){
        null;
    } else {
        $("#hour").text(hourCount); 
    }

    if ( ("0" + minuteCount) == $("#minute").text() || minuteCount == $("#minute").text()){
        null;
    } else {
        $("#minute").text(minuteCount); 
    }

    if ( ("0" + secondCount) == $("#second").text() || secondCount == $("#second").text()){
        null;
    } else {
        $("#second").text(secondCount); 
    }

    $(".flip-card > .flip-card__top").on("DOMSubtreeModified", function(){
        var id = $(this).attr("id");
        $("#" + id + " ~ .flip").css("animation-name", "flip");

        if ( id == "minute" || id == "hour" || id == "day"){
            setTimeout(function(){
                $("#minute ~ .flip").css("animation-name", "none");
                $("#hour ~ .flip").css("animation-name", "none");
                $("#day ~ .flip").css("animation-name", "none");
            }, 1000);
        }
    })
    
    if ( hourCount == 0 && minuteCount == 0 && secondCount == 0 && dayCount == 0) {
        $("#second ~ .flip").css("animation-name", "f");
        clearInterval(tick);
    }
}, 1000);