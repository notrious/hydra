//EVENT FUNCTION//
$(document).ready(function () {
    $("#button3").click(function () {
        $("#lol").hide();
    });
});

//EVENT FUNCTION//
$(document).ready(function () {
    $("#p1").mouseenter(function () {
        alert("welcome you entered MGK fanpage!");
    });
});

$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color", "red");
    });
    $("input").blur(function () {
        $(this).css("background-color", "green");
    });
});

//SELECTOR FUNCTION//
$(document).ready(function () {
    $("#change").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "RED");
        }
    });
});


//HIDE AND SHOW FUNCTION//
$(document).ready(function () {
    $("#hide").click(function () {
        $("#image").hide();
    });
    $("#show").click(function () {
        $("#image").show();
    });
});

//FADE IN FUNCTION//
$(document).ready(function () {
    $("#button4").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});


//SLIDE FUNCTION//
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });
});

//ANIMATION FUNCTION//
$(document).ready(function () {
    $("#ddd").click(function () {
        var div = $("#animation");
        div.animate({ height: '1000px', opacity: '0.8' }, "slow");
        div.animate({ width: '1000px', opacity: '0.8' }, "slow");
        div.animate({ height: '500px', opacity: '0.8' }, "slow");
        div.animate({ width: '500px', opacity: '0.8' }, "slow");
    });
});

//SLIDE FUNCTION//
$(document).ready(function () {
    $("#clip").click(function () {
        $("#lean").slideDown(5000);
    });
    $("#stop").click(function () {
        $("#lean").stop();
    });
});


//CALL BACK FUNCTION//
$(document).ready(function () {
    $("#form1").click(function () {
        $("form").hide(1000);
        alert("The form is now hidden");
    });
});

//CHAINING FUNCTION//
$(document).ready(function () {
    $("#chain").click(function () {
        $("#p2").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

//GET FUNCTION//
$(document).ready(function () {
    $("#link").click(function () {
        alert($("#w3s").attr("href"));
    });
});

//SET FUNCTION//
$(document).ready(function () {
    $("#btn1").click(function () {
        $("#test1").text("32!");
    });
    $("#btn2").click(function () {
        $("#test2").html("<b>Dating MEGAN FOX</b>");
    });
    $("#btn3").click(function () {
        $("#test3").val("Machine gun kelly");
    });
});

//ADD FUNCTION//
function afterText() {
    var txt1 = "<b>I </b>";           // Create element with HTML
    var txt2 = $("<i></i>").text("love ");  // Create with jQuery
    var txt3 = document.createElement("b");   // Create with DOM
    txt3.innerHTML = "machine gun kelly";
    $("img").after(txt1, txt2, txt3);    // Insert new elements after img
}

//remove function//
$(document).ready(function () {
    $("#remove").click(function () {
        $("#div1").remove();
    });
});

//css classes function//
$(document).ready(function () {
    $("#toggle4").click(function () {
        $("#toggle1, #toggle2, #toggle3").toggleClass("blue");
    });
});