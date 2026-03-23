const $startTest = $("#startTest");
const $outerMost = $(".outer-most");
const $Testing = $("#Testing");
const $testQuestion = $(".testing");
const $men = $("#men");
const $women = $("#women");
const $end = $(".result");
const $more = $(".more");

// $Testing.children(".buttons").click(function () {
//     $(this).children("h2").text("同意");
// });

// $Testing.childen(".buttons").click(function(){
//     var index = $(this).index(".testing");
//     $testing.eq(index).slideUp();
//     $testing.eq(index+1).slideDown();
// });

$startTest.click(function(){
    $startTest.parent(".begin").stop(true,false).slideUp();
    $Testing.stop(true,false).slideDown();
    $outerMost.removeClass().addClass("outer-most om_bg2");
    const audio = new Audio("./images/bgm.mp3" );
    audio.play();
    audio.loop = true;
});

$men.click(function(){
    $Testing.stop(true,false).slideUp();
    $Testing.next().stop(true,false).slideDown();
});

$women.click(function(){
    $Testing.stop(true,false).slideUp();
    $testQuestion.eq(10).stop(true,false).slideDown();
});

var answer = 0;
var countQuestion = 0;
var result = 0;
var outcome = 0;

$testQuestion.children(".options").click(goTest);

function goTest(){
    countQuestion = $(this).parent(".testing").index(".testing");
    // console.log(countQuestion);
    answer = $(this).index(".options");
    // console.log(answer % 5);
    
    if (countQuestion <= 3 ||countQuestion >=10 & countQuestion <= 12) {
        if (answer % 5 == 0) {
            result += 15;
        } else if (answer % 5 == 1) {
            result += 12;
        } else if (answer % 5 == 2) {
            result += 9;
        } else if (answer % 5 == 3) {
            result += 5;
        } else {
            result += 1;
        }
    } else if (countQuestion == 4 || countQuestion == 18){
        if (answer % 5 == 0) {
            result += 5;
        } else if (answer % 5 == 1) {
            result += 4;
        } else if (answer % 5 == 2) {
            result += 3;
        } else if (answer % 5 == 3) {
            result += 2;
        } else {
            result += 1;
        }
    } else {
        if (answer % 5 == 0) {
            result += 10;
        } else if (answer % 5 == 1) {
            result += 8;
        } else if (answer % 5 == 2) {
            result += 5;
        } else if (answer % 5 == 3) {
            result += 3;
        } else {
            result += 1;
        }
    }

    
    console.log(result);

    var index = $(this).parent(".testing").index(".testing");
    $testQuestion.eq(index).stop(true,false).slideUp();

    if (index+1 == 10) {

        if (result>=80) {
            outcome = 0;
        } else if (result>=65) {
            outcome = 1;
        } else if (result>=40) {
            outcome = 2;
        } else if (result>=20) {
            outcome = 3;
        } else  {
            outcome = 4;
        }
        
        $end.eq(outcome).stop(true,false).slideDown();

    } else if (index+1 == 19) {
        
        if (result>=80) {
            outcome = 5;
        } else if (result>=60) {
            outcome = 6;
        } else if (result>=40) {
            outcome = 7;
        } else if (result>=20) {
            outcome = 8;
        } else  {
            outcome = 9;
        }
        
        $end.eq(outcome).stop(true,false).slideDown();

    }   else {
        $testQuestion.eq(index+1).stop(true,false).slideDown();        
    }
    
};

$more.click(function(){
    $(this).next().slideToggle();
    $(this).siblings(".figure").slideToggle();
    if ($(this).children("p").text() == "點擊看更多" ) {
        $(this).parent(".result").removeClass("position_center").addClass("mx-auto");
        $(this).children("p").text("點擊以收起");        
    } else {
        $(this).parent(".result").removeClass("mx-auto").addClass("position_center");
        $(this).children("p").text("點擊看更多");        
    }
});

const $next = $(".next");
const $prev = $(".prev");
const $manCharacter = $(".manCharacter");
const $womanCharacter = $(".womanCharacter");
const $return = $(".return");
const $showMen = $(".showMen");
const $showWomen = $(".showWomen");

$next.click(function(){
    $(this).siblings(".middle").addClass("empty");
    $(this).siblings(".left1").removeClass("left1").addClass("middle");
    $(this).siblings(".left2").removeClass("left2").addClass("left1");
    $(this).siblings(".right2").removeClass("right2").addClass("left2");
    $(this).siblings(".right1").removeClass("right1").addClass("right2");
    $(this).siblings(".empty").removeClass("empty middle").addClass("right1");
});

$prev.click(function(){
    $(this).siblings(".middle").addClass("empty");
    $(this).siblings(".right1").removeClass("right1").addClass("middle");
    $(this).siblings(".right2").removeClass("right2").addClass("right1");
    $(this).siblings(".left2").removeClass("left2").addClass("right2");
    $(this).siblings(".left1").removeClass("left1").addClass("left2");
    $(this).siblings(".empty").removeClass("empty middle").addClass("left1");
});

$manCharacter.click(function(){
    $(this).next(".result").removeClass("position_center").addClass("mx-auto").slideDown();
    $(this).hide().siblings(".manCharacter").hide().siblings(".control_button").hide();
});
$manCharacter.next(".result").click(function(){
    $(this).removeClass("mx-auto").addClass("position_center").hide();
    $(this).stop(true,false).siblings(".manCharacter").show().siblings(".control_button").show();
});


$womanCharacter.click(function(){
    $(this).next(".result").removeClass("position_center").addClass("mx-auto").slideDown();
    $(this).hide().siblings(".womanCharacter").hide().siblings(".control_button").hide();
});
$womanCharacter.next(".result").click(function(){
    $(this).removeClass("mx-auto").addClass("position_center").hide();
    $(this).stop(true,false).siblings(".womanCharacter").show().siblings(".control_button").show();
});



$showMen.click(function(){
    $(this).parent(".result").stop(true,false).slideUp();   
    $manCharacter.stop(true,false).show();
    $(this).parent(".result").siblings(".control_button").stop(true,false).show();
});

$showWomen.click(function(){
    $(this).parent(".result").stop(true,false).slideUp();   
    $womanCharacter.stop(true,false).show();
    $(this).parent(".result").siblings(".control_button").stop(true,false).show();
});

$return.click(function(){
    $(this).hide().siblings(".manCharacter").hide().siblings(".womanCharacter").hide().siblings(".control_button").hide();
    $end.eq(outcome).stop(true,false).slideDown();
});