$(document).ready(function () {
    $(".spinner").fadeOut(1000, function () {
        $("#loading").fadeOut(500);
        $('body').css('overflow','auto')
    });
    
    let barWidth = $("#sideBarinner").innerWidth();
    $("#sideBar").css('left',-barWidth);
    $(".icon").click(function () {
        if ($("#sideBar").css('left') == "0px") {
            $("#sideBar").animate({ left: -barWidth }, 1000)
        } else {
            $("#sideBar").animate({ left: '0px' }, 1000);
        }
    })
    $("#close").click(function () { 
        $("#sideBar").animate({ left: -barWidth }, 1000);
        
    });
    $(".link").click(function (e) { 
        e.target;
        let target = e.target.getAttribute('href');
        let scrollpx = $(target).offset().top
        $('html , body').animate({ scrollTop: scrollpx }, 1000)
    });
    $(".singerH").click(function (e) {
        let next = $(e.target).next()
        $(next).slideToggle(700);
    })
    $('textarea').on('input',function () {
        let charnum = 100 - $('textarea').val().split('').length;
        $("#num").html(charnum);
    })
    settingDate()
    
});




function settingDate() {
    let partyDate = new Date('8 31 2024')
    let currentDate = new Date()
    let remainingMili = partyDate - currentDate
    let remainingDays = Math.trunc(remainingMili / (1000 * 60 * 60 * 24))
    let reminderHours=(remainingMili - (remainingDays * 1000 * 60 * 60 * 24))
    let remainingHours = Math.trunc(reminderHours / (1000 * 60 * 60));
    let remainderMinutes=reminderHours-(remainingHours*1000*60*60)
    let remainingMinuts = Math.trunc(remainderMinutes / (1000 * 60));
    let remainderSeconds =remainderMinutes-(remainingMinuts*1000*60)
    let remainingSeconds = Math.trunc(remainderSeconds / (1000));
    console.log(remainingMili);
    console.log(remainingDays);
    console.log(remainingHours);
    console.log(remainingMinuts);
    console.log(remainingSeconds);

    $("#days").html(`${remainingDays} D`)
    $("#hours").html(`${remainingHours} H`)
    $("#minutes").html(`${remainingMinuts} M`)
    $("#seconds").html(`${remainingSeconds} S`)

    setInterval(function () {
      settingDate();
    }, 1000);
}