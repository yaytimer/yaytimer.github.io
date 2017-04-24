$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function(){
  Howler.mobileAutoEnable = true;
  // var icon = $('.play');
  //  icon.click(function() {
  //     // $('.play').toggleClass('active');
  //     return false;
  //  });

  $("#jquery_jplayer_1").jPlayer({
    ready: function() {
      $(this).jPlayer("setMedia", {
        mp3: "yay3.mp3"
      }).jPlayer();
      var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
      var kickoff = function () {
       //  alert(window.context)
       //   window.context.clearRect(0, 0, window.canvas.width, window.canvas.height);
        //stop the confetti
       //  $("#jquery_jplayer_1").jPlayer("play");
      };
       document.documentElement.addEventListener(click, kickoff, true);
    },
    swfPath: "/js"
  })
})


function changeBackground() {
  window.random = Math.floor((Math.random() * 20) + 1);
  switch(window.random) {
    case 1:
     window.color = "#0099e5"
     break;
   case 2:
     window.color = "#0079c1"
     break;
   case 3:
     window.color = "#6a67ce"
     break;
   case 4:
      window.color = "#4d4f53"
      break;
   case 5:
      window.color = "#34bf49"
      break;
   case 6:
      window.color = "#3b5998"
      break;
   case 7:
     window.color = "#33cc99"
     break;
   case 8:
      window.color = "#ce1126"
      break;
   case 9:
       window.color = "#075aaa"
       break;
   case 10:
      window.color = "#59626a"
      break;
   case 11:
     window.color = "#00a0f0"
     break;
   case 12:
     window.color = "#ed1c24"
     break;
   case 13:
     window.color = "#b4a996"
     break;
   case 14:
     window.color = "#537b35"
     break;
   case 15:
     window.color = "#56a0d3"
     break;
   case 16:
     window.color = "#990033"
     break;
   case 17:
     window.color = "#f65a5b"
     break;
   case 18:
     window.color = "#5482ab"
     break;
   case 19:
     window.color = "#97824b"
     break;
   case 20:
     window.color = "#7289da"
     break;
  }
   document.body.style.background = window.color

   $(".play.active:after").attr("box-shadow","inset 30px 0 0 0" + window.color)
}

function testSound(){
  var sound = new Howl({
    src: ['yay3.mp3']
  })
  sound.play()
  alert("hello")
}

function restart() {
  document.getElementById("value").innerText = window.default
  stop()
}

function setTiming(timing) {
  window.default = timing
  document.getElementById("value").innerText = timing
  stop()
}

function press() {
    if(window.running != true) {
      window.interval =  setInterval(changeNumber,1000)
      window.running = true
      $('#square').animateCss("zoomIn");
      $('#square').text("Start")
      $('.play').toggleClass('active')
    }
    else {
      $('#square').animateCss("zoomIn");
      $('#square').text("Pause")
      stop()
    }
}


function countDown(){
  if(window.running != true) {
    window.interval =  setInterval(changeNumber,1000)
  }
   window.running = true
}

function stop(){
  clearInterval(window.interval)
  window.running = false
  testSound()
}


function changeNumber() {
  if (document.getElementById("value").innerText != "0") {
    document.getElementById("value").innerText = document.getElementById("value").innerText - 1
  } else {
   //  $("#jquery_jplayer_1").jPlayer("play")
    stop()
  }
}

function showConfetti(){
  canvas = document.getElementById("world");
  window.canvas = canvas

  context = canvas.getContext("2d");
  window.context = context

  window.w = 0;
  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

    setup()
    setTimeout(resizeWindow, 0)
}

function setup() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
  NUM_CONFETTI = 350;
  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];
  PI_2 = 2 * Math.PI;
  canvas = document.getElementById("world");
  context = canvas.getContext("2d");
  window.w = 0;
  window.h = 0;
  window.addEventListener('resize', resizeWindow, false);
  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();


  Confetti = (function() {
    function Confetti() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    Confetti.prototype.replace = function() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    };

    Confetti.prototype.draw = function() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    };

    return Confetti;

  })();

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

}


function refresh() {
  var answer = window.confirm("Are you sure you want to restart?")
  if(answer == true) {
    changeBackground()
    restart()
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  window.default = 30
  changeBackground()
})
