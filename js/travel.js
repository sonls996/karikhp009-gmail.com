
  var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none ";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function openContact1(){
  var ex = document.getElementById("changeText1");
  ex.classList.toggle("test");
}
function openContact2(){
  var ex = document.getElementById("changeText2");
  ex.classList.toggle("test");
}
function openContact3(){
  var ex = document.getElementById("changeText3");
  ex.classList.toggle("test");
}
function openContact4(){
  var ex = document.getElementById("changeText4");
  ex.classList.toggle("test");
}



/**
 * js ngoài 
 */

let i=2;

	
$(document).ready(function(){
  var radius = 200;
  var fields = $('.itemDot');
  var container = $('.dotCircle');
  var width = container.width();
radius = width/2.5;

   var height = container.height();
  var angle = 0, step = (2*Math.PI) / fields.length;
  fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
    var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    if(window.console) {
      console.log($(this).text(), x, y);
    }
    
    $(this).css({
      left: x + 'px',
      top: y + 'px'
    });
    angle += step;
  });
  
  
  $('.itemDot').click(function(){
    
    var dataTab= $(this).data("tab");
    $('.itemDot').removeClass('active');
    $(this).addClass('active');
    $('.CirItem').removeClass('active');
    $( '.CirItem'+ dataTab).addClass('active');
    i=dataTab;
    
    $('.dotCircle').css({
      "transform":"rotate("+(360-(i-1)*36)+"deg)",
      "transition":"2s"
    });
    $('.itemDot').css({
      "transform":"rotate("+((i-1)*36)+"deg)",
      "transition":"1s"
    });
    
    
  });
  
  setInterval(function(){
    var dataTab= $('.itemDot.active').data("tab");
    if(dataTab>6||i>6){
    dataTab=1;
    i=1;
    }
    $('.itemDot').removeClass('active');
    $('[data-tab="'+i+'"]').addClass('active');
    $('.CirItem').removeClass('active');
    $( '.CirItem'+i).addClass('active');
    i++;
    
    
    $('.dotCircle').css({
      "transform":"rotate("+(360-(i-2)*36)+"deg)",
      "transition":"2s"
    });
    $('.itemDot').css({
      "transform":"rotate("+((i-2)*36)+"deg)",
      "transition":"1s"
    });
    
    }, 5000);
  
});


  var log= document.getElementById("myAccount");
  log.addEventListener("click",toggleLoggin);
  function toggleLoggin(){
    document.getElementById("wrapMyAccount").classList.toggle("hidden");
    // alert("add thành công class hidden");
  }
  var hidden= document.getElementById("clickme");
  hidden.addEventListener("click",hiddenLogin);
  function hiddenLogin(){
    if( document.getElementById("mobile-wrapLogin").style.height<="0px"){
    document.getElementById("mobile-wrapLogin").style.height= "160px"
    }else{
      document.getElementById("mobile-wrapLogin").style.height="0px"
    }
  }
  // $(".nav__btnwrap").append(
  //   $("<span>",{text:"Ngôn ngữ"}),
  //   $("<a>",{id:"myAcount", href:"#",}).append(
  //     $("<i>",{class:"fas fa-user-tie"}),
  //     "Tài Khoản của tôi", 
  //   ).on("click",function(){
  //     var t =$(this);
  //     t.append(
  //       $("<div>",{id:"wrapMyAccount",class:"myaccount"}).append(
  //         `<a href="#">Đăng nhập</a>
  //         <a href="#">Đăng ký</a>
  //         <a href="#">Chuyến đi của bạn</a>`
  //       )
  //     )
  //   })
  // )

  function openNav() {
    document.getElementById("mySidebar").style.left = "0";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "1";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.left = "-100%";
    // document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.opacity = "0";
  }

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem chi tiết tại đây";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hiển thị ít hơn";
      moreText.style.display = "inline";
    }
  }



  window.onscroll = function() {
    scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.8)";
      document.getElementById("navbar").style.opacity = "1";
      document.getElementById(navbar).style.height="150px";
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.001)";
      document.getElementById(navbar).style.height="100px";
      // document.getElementsByClassName("nav-hidden-item").style.marginTop = "50px";
    }
  }