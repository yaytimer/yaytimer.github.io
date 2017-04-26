$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
    })
  }
})


function doOnOrientationChange() {

    switch(window.orientation) {
      case -90 || 90:
        alert('landscape' + window.orientation);
        break;
      default:
        alert('portrait'+ window.orientation);
        break;
    }
}

window.addEventListener('orientationchange', doOnOrientationChange);

// $( document ).ready(function() {
//   $('#half').css('left', window.innerWidth/2 - 10)
// })

function changeBackground() {
  var colours = ["#0099e5","#0079c1","#6a67ce","#4d4f53","#34bf49",
                  "#3b5998","#33cc99","#ce1126","#075aaa","#59626a",
                "#00a0f0","#ed1c24","#009966","#097054","#56a0d3",
                "#003366","#f65a5b", "#5482ab", "#336699", "#7289da"]
  window.random = Math.floor((Math.random() * 20) + 1);
  document.body.style.background = colours[window.random - 1]
}

function testSound(){
  var sound = new Howl({
    src: ['yay3.mp3']
  })
  sound.play()
}

function switchOnSound(){
  if ($('#sound').text() == "Sound off") {

    $('#volume').addClass('fa-volume-up')
    $('#volume').removeClass('fa-volume-off')
    $('#sound').text("Sound on")

    var sound = new Howl({
      src: ['yay3.mp3']
    })
    sound.play()

  } else {

    $('#volume').addClass('fa-volume-off')
    $('#volume').removeClass('fa-volume-up')
    $('#sound').text("Sound off")
  }
}

function restart() {
  document.getElementById("value").innerText = window.default
  stop()
}

function setTiming(timing) {
  window.default = timing
  document.getElementById("value").innerText = timing
  stop()
  $(".navbar-toggle").trigger( "click" ) //only trigger on mobile
}

function press() {
  if(window.running != true) {
    window.interval =  setInterval(changeNumber,1000)
    window.running = true
    $('#icon').addClass('fa-play')
    $('#icon').removeClass('fa-pause')
    testAnmation()
  }
  else {
    $('#icon').removeClass('fa-play')
    $('#icon').addClass('fa-pause')
    stop()
    testAnmation()
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
}

function changeNumber() {
  if (document.getElementById("value").innerText != "0") {
    document.getElementById("value").innerText = document.getElementById("value").innerText - 1
  } else {
    stop()
    testSound()
  }
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

  step()
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

function testAnmation() {
  $('#square').css('left', window.innerWidth/2 - 50 )
  $('#square').show()
  $('#square').animateCss("zoomIn")
  $('#square').fadeOut() //cannot ev
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
