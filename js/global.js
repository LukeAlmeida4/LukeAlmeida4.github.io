function changeStack1_Show() {
    $("#dropdown1-content").show(500);
}

function changeStack2_Show() {
    $("#dropdown2-content").show(500);
}

function changeStack3_Show() {
    $("#dropdown3-content").show(500);
}

function changeStack1_Hide() {
    $("#dropdown1-content").hide(500);
}

function changeStack2_Hide() {
    $("#dropdown2-content").hide(500);
}

function changeStack3_Hide() {
    $("#dropdown3-content").hide(500);
}


function init () {
    $('#fullPage').fullpage({
        sectionsColor: ['whitesmoke', '#8C001A', 'whitesmoke'],
        anchors: ['homePage', 'skillPage', 'contactPage'],
        menu: '#menu',
        css3: true,
        scrollBar: true,

        onLeave: function (index, nextIndex, direction) {

            if (index == 1 && direction == 'down') {
                $("#dropdown1-content").hide(0);
                $("#dropdown2-content").hide(0);
                $("#dropdown3-content").hide(0);
            }
        }
    });

    $("#demosMenu").change(function(){
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });

    $("#dropdown1Toggle").mouseenter(changeStack1_Show);
    $("#dropdown2Toggle").mouseenter(changeStack2_Show);
    $("#dropdown3Toggle").mouseenter(changeStack3_Show);
    $("#dropdown1Toggle").mouseleave(changeStack1_Hide);
    $("#dropdown2Toggle").mouseleave(changeStack2_Hide);
    $("#dropdown3Toggle").mouseleave(changeStack3_Hide);
}

$(document).ready(function(){
    init();
});
