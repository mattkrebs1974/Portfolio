$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    percent = scroll_pos / 156.25;
    fpercent = percent * 0.6;
    fpercentT = percent * 0.3;
    fontPercent = 0.6 - fpercent;
    fontPercentT = 0.3 - fpercentT;
    opacityPercent = 1 - percent;
    realfontPercent = fontPercent * 100;
    realfontPercentT = fontPercentT * 100;
    realOpacityPercent = opacityPercent * 100;
    var scrollTopp = scroll_pos * 4;
    var screenWidth = window.innerWidth;
    if (scroll_pos > -1 && scroll_pos < 156.25) {
      // $("#display").css('margin-top', scroll_pos + 'px');

      $("#display").css("opacity", realOpacityPercent + "%");
      $("#name").css("font-size", realfontPercent + "px");
      $("#title").css("font-size", realfontPercentT + "px");
      $("#newButton").css("margin-left", scrollTopp + "px");
      $("#newButton").css("margin-top", scrollTopp + "px");

      console.log("scroll " + scroll_pos);

      $(".nav-link").css("color", "white");
      $(".nav-link").css("background", "rgba(0, 0, 0, 0)");
    }
    if (scroll_pos > 156.25 && scroll_pos < 586.25) {
      $("#display").css("opacity", "0%");
      $(".nav-link").css("color", "white");
      $(".nav-link").css("background", "rgba(0, 0, 0, 0)");
    }
    if (scroll_pos > 586.25) {
      $(".nav-link").css("background", "rgba(0, 0, 0, 1)");
      $(".nav-link").css("color", "gray");
    }

    // console.log("screenWidth" + screenWidth);
  });
});

// get variables for manipulating gradient

//scrolls to the right link
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;

    // console.log(scrollTop);

    $("html, body").animate({ scrollTop: $(hash).offset().top }, 1500);
  }
});

$("a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500
  );
  return false;
});

// Underlines what section you are on.
var topMenu = $(".nav"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  // Set/remove active class
  menuItems
    .parent()
    .removeClass("active")
    .end()
    .filter("[href='#" + id + "']")
    .parent()
    .addClass("active");
});

function launchParticlesJS(a, e) {
  var i = document.querySelector("#" + a + " > canvas");
  pJS = {
    canvas: { el: i, w: i.offsetWidth, h: i.offsetHeight },
    particles: {
      color: "#fff",
      shape: "circle",
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 200,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
        condensed_mode: { enable: true, rotateX: 65000, rotateY: 65000 },
      },
      anim: { enable: true, speed: 1 },
      array: [],
    },
    interactivity: {
      enable: true,
      mouse: { distance: 100 },
      detect_on: "canvas",
      mode: "grab",
      line_linked: { opacity: 1 },
      events: { onclick: { enable: true, mode: "push", nb: 4 } },
    },
    retina_detect: false,
    fn: { vendors: { interactivity: {} } },
  };
  if (e) {
    if (e.particles) {
      var b = e.particles;
      if (b.color) {
        pJS.particles.color = b.color;
      }
      if (b.shape) {
        pJS.particles.shape = b.shape;
      }
      if (b.opacity) {
        pJS.particles.opacity = b.opacity;
      }
      if (b.size) {
        pJS.particles.size = b.size;
      }
      if (b.size_random == false) {
        pJS.particles.size_random = b.size_random;
      }
      if (b.nb) {
        pJS.particles.nb = b.nb;
      }
      if (b.line_linked) {
        var j = b.line_linked;
        if (j.enable_auto == false) {
          pJS.particles.line_linked.enable_auto = j.enable_auto;
        }
        if (j.distance) {
          pJS.particles.line_linked.distance = j.distance;
        }
        if (j.color) {
          pJS.particles.line_linked.color = j.color;
        }
        if (j.opacity) {
          pJS.particles.line_linked.opacity = j.opacity;
        }
        if (j.width) {
          pJS.particles.line_linked.width = j.width;
        }
        if (j.condensed_mode) {
          var g = j.condensed_mode;
          if (g.enable == false) {
            pJS.particles.line_linked.condensed_mode.enable = g.enable;
          }
          if (g.rotateX) {
            pJS.particles.line_linked.condensed_mode.rotateX = g.rotateX;
          }
          if (g.rotateY) {
            pJS.particles.line_linked.condensed_mode.rotateY = g.rotateY;
          }
        }
      }
      if (b.anim) {
        var k = b.anim;
        if (k.enable == false) {
          pJS.particles.anim.enable = k.enable;
        }
        if (k.speed) {
          pJS.particles.anim.speed = k.speed;
        }
      }
    }
    if (e.interactivity) {
      var c = e.interactivity;
      if (c.enable == false) {
        pJS.interactivity.enable = c.enable;
      }
      if (c.mouse) {
        if (c.mouse.distance) {
          pJS.interactivity.mouse.distance = c.mouse.distance;
        }
      }
      if (c.detect_on) {
        pJS.interactivity.detect_on = c.detect_on;
      }
      if (c.mode) {
        pJS.interactivity.mode = c.mode;
      }
      if (c.line_linked) {
        if (c.line_linked.opacity) {
          pJS.interactivity.line_linked.opacity = c.line_linked.opacity;
        }
      }
      if (c.events) {
        var d = c.events;
        if (d.onclick) {
          var h = d.onclick;
          if (h.enable == false) {
            pJS.interactivity.events.onclick.enable = false;
          }
          if (h.mode != "push") {
            pJS.interactivity.events.onclick.mode = h.mode;
          }
          if (h.nb) {
            pJS.interactivity.events.onclick.nb = h.nb;
          }
        }
      }
    }
    pJS.retina_detect = e.retina_detect;
  }
  pJS.particles.color_rgb = hexToRgb(pJS.particles.color);
  pJS.particles.line_linked.color_rgb_line = hexToRgb(
    pJS.particles.line_linked.color
  );
  if (pJS.retina_detect && window.devicePixelRatio > 1) {
    pJS.retina = true;
    pJS.canvas.pxratio = window.devicePixelRatio;
    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
    pJS.particles.anim.speed = pJS.particles.anim.speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance =
      pJS.particles.line_linked.distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width =
      pJS.particles.line_linked.width * pJS.canvas.pxratio;
    pJS.interactivity.mouse.distance =
      pJS.interactivity.mouse.distance * pJS.canvas.pxratio;
  }
  pJS.fn.canvasInit = function () {
    pJS.canvas.ctx = pJS.canvas.el.getContext("2d");
  };
  pJS.fn.canvasSize = function () {
    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;
    window.onresize = function () {
      if (pJS) {
        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;
        if (pJS.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }
        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;
        pJS.fn.canvasPaint();
        if (!pJS.particles.anim.enable) {
          pJS.fn.particlesRemove();
          pJS.fn.canvasRemove();
          f();
        }
      }
    };
  };
  pJS.fn.canvasPaint = function () {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };
  pJS.fn.canvasRemove = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };
  pJS.fn.particle = function (n, o, m) {
    this.x = m ? m.x : Math.random() * pJS.canvas.w;
    this.y = m ? m.y : Math.random() * pJS.canvas.h;
    this.radius =
      (pJS.particles.size_random ? Math.random() : 1) * pJS.particles.size;
    if (pJS.retina) {
      this.radius *= pJS.canvas.pxratio;
    }
    this.color = n;
    this.opacity = o;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.draw = function () {
      pJS.canvas.ctx.fillStyle =
        "rgba(" +
        this.color.r +
        "," +
        this.color.g +
        "," +
        this.color.b +
        "," +
        this.opacity +
        ")";
      pJS.canvas.ctx.beginPath();
      switch (pJS.particles.shape) {
        case "circle":
          pJS.canvas.ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2,
            false
          );
          break;
        case "edge":
          pJS.canvas.ctx.rect(this.x, this.y, this.radius * 2, this.radius * 2);
          break;
        case "triangle":
          pJS.canvas.ctx.moveTo(this.x, this.y - this.radius);
          pJS.canvas.ctx.lineTo(this.x + this.radius, this.y + this.radius);
          pJS.canvas.ctx.lineTo(this.x - this.radius, this.y + this.radius);
          pJS.canvas.ctx.closePath();
          break;
      }
      pJS.canvas.ctx.fill();
    };
  };
  pJS.fn.particlesCreate = function () {
    for (var m = 0; m < pJS.particles.nb; m++) {
      pJS.particles.array.push(
        new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity)
      );
    }
  };
  pJS.fn.particlesAnimate = function () {
    for (var n = 0; n < pJS.particles.array.length; n++) {
      var q = pJS.particles.array[n];
      q.x += q.vx * (pJS.particles.anim.speed / 2);
      q.y += q.vy * (pJS.particles.anim.speed / 2);
      if (q.x - q.radius > pJS.canvas.w) {
        q.x = q.radius;
      } else {
        if (q.x + q.radius < 0) {
          q.x = pJS.canvas.w + q.radius;
        }
      }
      if (q.y - q.radius > pJS.canvas.h) {
        q.y = q.radius;
      } else {
        if (q.y + q.radius < 0) {
          q.y = pJS.canvas.h + q.radius;
        }
      }
      for (var m = n + 1; m < pJS.particles.array.length; m++) {
        var o = pJS.particles.array[m];
        if (pJS.particles.line_linked.enable_auto) {
          pJS.fn.vendors.distanceParticles(q, o);
        }
        if (pJS.interactivity.enable) {
          switch (pJS.interactivity.mode) {
            case "grab":
              pJS.fn.vendors.interactivity.grabParticles(q, o);
              break;
          }
        }
      }
    }
  };
  pJS.fn.particlesDraw = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    pJS.fn.particlesAnimate();
    for (var m = 0; m < pJS.particles.array.length; m++) {
      var n = pJS.particles.array[m];
      n.draw(
        "rgba(" +
          n.color.r +
          "," +
          n.color.g +
          "," +
          n.color.b +
          "," +
          n.opacity +
          ")"
      );
    }
  };
  pJS.fn.particlesRemove = function () {
    pJS.particles.array = [];
  };
  pJS.fn.vendors.distanceParticles = function (t, r) {
    var o = t.x - r.x,
      n = t.y - r.y,
      s = Math.sqrt(o * o + n * n);
    if (s <= pJS.particles.line_linked.distance) {
      var m = pJS.particles.line_linked.color_rgb_line;
      pJS.canvas.ctx.beginPath();
      pJS.canvas.ctx.strokeStyle =
        "rgba(" +
        m.r +
        "," +
        m.g +
        "," +
        m.b +
        "," +
        (pJS.particles.line_linked.opacity -
          s / pJS.particles.line_linked.distance) +
        ")";
      pJS.canvas.ctx.moveTo(t.x, t.y);
      pJS.canvas.ctx.lineTo(r.x, r.y);
      pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
      pJS.canvas.ctx.stroke();
      pJS.canvas.ctx.closePath();
      if (pJS.particles.line_linked.condensed_mode.enable) {
        var o = t.x - r.x,
          n = t.y - r.y,
          q = o / (pJS.particles.line_linked.condensed_mode.rotateX * 1000),
          p = n / (pJS.particles.line_linked.condensed_mode.rotateY * 1000);
        r.vx += q;
        r.vy += p;
      }
    }
  };
  pJS.fn.vendors.interactivity.listeners = function () {
    if (pJS.interactivity.detect_on == "window") {
      var m = window;
    } else {
      var m = pJS.canvas.el;
    }
    m.onmousemove = function (p) {
      if (m == window) {
        var o = p.clientX,
          n = p.clientY;
      } else {
        var o = p.offsetX || p.clientX,
          n = p.offsetY || p.clientY;
      }
      if (pJS) {
        pJS.interactivity.mouse.pos_x = o;
        pJS.interactivity.mouse.pos_y = n;
        if (pJS.retina) {
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }
        pJS.interactivity.status = "mousemove";
      }
    };
    m.onmouseleave = function (n) {
      if (pJS) {
        pJS.interactivity.mouse.pos_x = 0;
        pJS.interactivity.mouse.pos_y = 0;
        pJS.interactivity.status = "mouseleave";
      }
    };
    if (pJS.interactivity.events.onclick.enable) {
      switch (pJS.interactivity.events.onclick.mode) {
        case "push":
          m.onclick = function (o) {
            if (pJS) {
              for (var n = 0; n < pJS.interactivity.events.onclick.nb; n++) {
                pJS.particles.array.push(
                  new pJS.fn.particle(
                    pJS.particles.color_rgb,
                    pJS.particles.opacity,
                    {
                      x: pJS.interactivity.mouse.pos_x,
                      y: pJS.interactivity.mouse.pos_y,
                    }
                  )
                );
              }
            }
          };
          break;
        case "remove":
          m.onclick = function (n) {
            pJS.particles.array.splice(0, pJS.interactivity.events.onclick.nb);
          };
          break;
      }
    }
  };
  pJS.fn.vendors.interactivity.grabParticles = function (r, q) {
    var u = r.x - q.x,
      s = r.y - q.y,
      p = Math.sqrt(u * u + s * s);
    var t = r.x - pJS.interactivity.mouse.pos_x,
      n = r.y - pJS.interactivity.mouse.pos_y,
      o = Math.sqrt(t * t + n * n);
    if (
      p <= pJS.particles.line_linked.distance &&
      o <= pJS.interactivity.mouse.distance &&
      pJS.interactivity.status == "mousemove"
    ) {
      var m = pJS.particles.line_linked.color_rgb_line;
      pJS.canvas.ctx.beginPath();
      pJS.canvas.ctx.strokeStyle =
        "rgba(" +
        m.r +
        "," +
        m.g +
        "," +
        m.b +
        "," +
        (pJS.interactivity.line_linked.opacity -
          o / pJS.interactivity.mouse.distance) +
        ")";
      pJS.canvas.ctx.moveTo(r.x, r.y);
      pJS.canvas.ctx.lineTo(
        pJS.interactivity.mouse.pos_x,
        pJS.interactivity.mouse.pos_y
      );
      pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
      pJS.canvas.ctx.stroke();
      pJS.canvas.ctx.closePath();
    }
  };
  pJS.fn.vendors.destroy = function () {
    cancelAnimationFrame(pJS.fn.requestAnimFrame);
    i.remove();
    delete pJS;
  };
  function f() {
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.particlesDraw();
  }
  function l() {
    pJS.fn.particlesDraw();
    pJS.fn.requestAnimFrame = requestAnimFrame(l);
  }
  f();
  if (pJS.particles.anim.enable) {
    l();
  }
  if (pJS.interactivity.enable) {
    pJS.fn.vendors.interactivity.listeners();
  }
}
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      window.setTimeout(a, 1000 / 60);
    }
  );
})();
window.cancelRequestAnimFrame = (function () {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout
  );
})();
function hexToRgb(c) {
  var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  c = c.replace(b, function (e, h, f, d) {
    return h + h + f + f + d + d;
  });
  var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return a
    ? { r: parseInt(a[1], 16), g: parseInt(a[2], 16), b: parseInt(a[3], 16) }
    : null;
}
window.particlesJS = function (d, c) {
  if (typeof d != "string") {
    c = d;
    d = "particles-js";
  }
  if (!d) {
    d = "particles-js";
  }
  var b = document.createElement("canvas");
  b.style.width = "100%";
  b.style.height = "100%";
  var a = document.getElementById(d).appendChild(b);
  if (a != null) {
    launchParticlesJS(d, c);
  }
};

/* config dom id (optional) + config particles params */
particlesJS("particles-js", {
  particles: {
    color: "#990000",
    shape: "circle", // "circle", "edge" or "triangle"
    opacity: 0.8,
    size: 6,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: "#FFF",
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
    anim: {
      enable: true,
      speed: 2,
    },
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250,
    },
    detect_on: "canvas", // "canvas" or "window"
    mode: "grab",
    line_linked: {
      opacity: 0.5,
    },
    events: {
      onclick: {
        enable: true,
        mode: "push", // "push" or "remove" (particles)
        nb: 4,
      },
    },
  },
  /* Retina Display Support */
  retina_detect: true,
});

$(".photos").hover(function () {
  $(this).css("width", "90%");
  $(this).css("overflow", "hidden");
  $(this).css("transform", "scale(2)");
});

//button

$(function () {
  // Vars
  var pointsA = [],
    pointsB = [],
    $canvas = null,
    canvas = null,
    context = null,
    vars = null,
    points = 8,
    viscosity = 20,
    mouseDist = 70,
    damping = 0.05,
    showIndicators = false;
  (mouseX = 0),
    (mouseY = 0),
    (relMouseX = 0),
    (relMouseY = 0),
    (mouseLastX = 0),
    (mouseLastY = 0),
    (mouseDirectionX = 0),
    (mouseDirectionY = 0),
    (mouseSpeedX = 0),
    (mouseSpeedY = 0);

  /**
   * Get mouse direction
   */
  function mouseDirection(e) {
    if (mouseX < e.pageX) mouseDirectionX = 1;
    else if (mouseX > e.pageX) mouseDirectionX = -1;
    else mouseDirectionX = 0;

    if (mouseY < e.pageY) mouseDirectionY = 1;
    else if (mouseY > e.pageY) mouseDirectionY = -1;
    else mouseDirectionY = 0;

    mouseX = e.pageX;
    mouseY = e.pageY;

    relMouseX = mouseX - $canvas.offset().left;
    relMouseY = mouseY - $canvas.offset().top;
  }
  $(document).on("mousemove", mouseDirection);

  /**
   * Get mouse speed
   */
  function mouseSpeed() {
    mouseSpeedX = mouseX - mouseLastX;
    mouseSpeedY = mouseY - mouseLastY;

    mouseLastX = mouseX;
    mouseLastY = mouseY;

    setTimeout(mouseSpeed, 50);
  }
  mouseSpeed();

  /**
   * Init button
   */
  function initButton() {
    // Get button
    var button = $(".btn-liquid");
    var buttonWidth = button.width();
    var buttonHeight = button.height();

    // Create canvas
    $canvas = $("<canvas></canvas>");
    button.append($canvas);

    canvas = $canvas.get(0);
    canvas.width = buttonWidth + 100;
    canvas.height = buttonHeight + 100;
    context = canvas.getContext("2d");

    // Add points

    var x = buttonHeight / 2;
    for (var j = 1; j < points; j++) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
    }
    addPoints(buttonWidth - buttonHeight / 5, 0);
    addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
    for (var j = points - 1; j > 0; j--) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
    }
    addPoints(buttonHeight / 5, buttonHeight);

    addPoints(-buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonHeight / 5, 0);
    // addPoints(x, 0);
    // addPoints(0, buttonHeight/2);

    // addPoints(0, buttonHeight/2);
    // addPoints(buttonHeight/4, 0);

    // Start render
    renderCanvas();
  }

  /**
   * Add points
   */
  function addPoints(x, y) {
    pointsA.push(new Point(x, y, 1));
    pointsB.push(new Point(x, y, 2));
  }

  /**
   * Point
   */
  function Point(x, y, level) {
    this.x = this.ix = 50 + x;
    this.y = this.iy = 50 + y;
    this.vx = 0;
    this.vy = 0;
    this.cx1 = 0;
    this.cy1 = 0;
    this.cx2 = 0;
    this.cy2 = 0;
    this.level = level;
  }

  Point.prototype.move = function () {
    this.vx += (this.ix - this.x) / (viscosity * this.level);
    this.vy += (this.iy - this.y) / (viscosity * this.level);

    var dx = this.ix - relMouseX,
      dy = this.iy - relMouseY;
    var relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

    // Move x
    if (
      (mouseDirectionX > 0 && relMouseX > this.x) ||
      (mouseDirectionX < 0 && relMouseX < this.x)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vx = (mouseSpeedX / 4) * relDist;
      }
    }
    this.vx *= 1 - damping;
    this.x += this.vx;

    // Move y
    if (
      (mouseDirectionY > 0 && relMouseY > this.y) ||
      (mouseDirectionY < 0 && relMouseY < this.y)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vy = (mouseSpeedY / 4) * relDist;
      }
    }
    this.vy *= 1 - damping;
    this.y += this.vy;
  };

  /**
   * Render canvas
   */
  function renderCanvas() {
    // rAF
    rafID = requestAnimationFrame(renderCanvas);

    // Clear scene
    context.clearRect(0, 0, $canvas.width(), $canvas.height());
    context.fillStyle = "rgba(33, 116, 135, 0)";

    context.fillRect(0, 0, $canvas.width(), $canvas.height());

    // Move points
    for (var i = 0; i <= pointsA.length - 1; i++) {
      pointsA[i].move();
      pointsB[i].move();
    }

    // Create dynamic gradient
    var gradientX = Math.min(
      Math.max(mouseX - $canvas.offset().left, 0),
      $canvas.width()
    );
    var gradientY = Math.min(
      Math.max(mouseY - $canvas.offset().top, 0),
      $canvas.height()
    );
    var distance =
      Math.sqrt(
        Math.pow(gradientX - $canvas.width() / 2, 2) +
          Math.pow(gradientY - $canvas.height() / 2, 2)
      ) /
      Math.sqrt(
        Math.pow($canvas.width() / 2, 2) + Math.pow($canvas.height() / 2, 2)
      );

    var gradient = context.createRadialGradient(
      gradientX,
      gradientY,
      300 + 300 * distance,
      gradientX,
      gradientY,
      0
    );

    gradient.addColorStop(0, "#88B161");
    gradient.addColorStop(1, "#8884FF");

    // Draw shapes
    var groups = [pointsA, pointsB];

    for (var j = 0; j <= 1; j++) {
      var points = groups[j];

      if (j == 0) {
        // Background style

        context.fillStyle = "#1CE2D8";
      } else {
        // Foreground style
        context.fillStyle = gradient;
      }

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        var nextP = points[i + 1];
        var val = 30 * 0.552284749831;

        if (nextP != undefined) {
          // if (nextP.ix > p.ix && nextP.iy < p.iy) {
          // 	p.cx1 = p.x;
          // 	p.cy1 = p.y-val;
          // 	p.cx2 = nextP.x-val;
          // 	p.cy2 = nextP.y;
          // } else if (nextP.ix > p.ix && nextP.iy > p.iy) {
          // 	p.cx1 = p.x+val;
          // 	p.cy1 = p.y;
          // 	p.cx2 = nextP.x;
          // 	p.cy2 = nextP.y-val;
          // }  else if (nextP.ix < p.ix && nextP.iy > p.iy) {
          // 	p.cx1 = p.x;
          // 	p.cy1 = p.y+val;
          // 	p.cx2 = nextP.x+val;
          // 	p.cy2 = nextP.y;
          // } else if (nextP.ix < p.ix && nextP.iy < p.iy) {
          // 	p.cx1 = p.x-val;
          // 	p.cy1 = p.y;
          // 	p.cx2 = nextP.x;
          // 	p.cy2 = nextP.y+val;
          // } else {

          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;
          p.cx2 = (p.x + nextP.x) / 2;
          p.cy2 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
          // 	continue;
          // }

          // context.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, nextP.x, nextP.y);
        } else {
          nextP = points[0];
          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
        }
      }

      // context.closePath();
      context.fill();
    }

    if (showIndicators) {
      // Draw points
      context.fillStyle = "#000";
      context.beginPath();
      for (var i = 0; i < pointsA.length; i++) {
        var p = pointsA[i];

        context.rect(p.x - 1, p.y - 1, 2, 2);
      }
      context.fill();

      // Draw controls
      context.fillStyle = "#f00";
      context.beginPath();
      for (var i = 0; i < pointsA.length; i++) {
        var p = pointsA[i];

        context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
        context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
      }
      context.fill();
    }
  }

  // Init
  initButton();
});

$(".tint").click(function () {
  $(".sectionfour").addClass("invisible");
  $(".fc").addClass("hidework");
  $(".tint").removeClass("selected");
  $(this).addClass("selected");

  // if ($(this).hasClass("node")) {
  //     $(".nodenode").removeClass("hidework")
  // }
  function isSelected() {
    $(".sectionfour").removeClass("invisible");

    if ($("#node").hasClass("selected")) {
      $(".nodenode").removeClass("hidework");
      $("#firstfour").prepend($("#storestore"));
      $("#firstfour").prepend($("#liriliri"));
      $("#firstfour").prepend($("#friendfriend"));
      $("#firstfour").prepend($("#burgerburger"));
      $("#firstfour").prepend($("#braingaugebraingauge"));
      $("#firstfour").prepend($("#llllll"));
      $("#firstfour").prepend($("#mongoscrapermongoscraper"));
      $("#firstfour").prepend($("#one"));
      $("#firstfour").prepend($("#weatherweather"));
      $("#firstfour").prepend($("#rockrock"));
      $("#firstfour").prepend($("#diamonddiamond"));
      $("#firstfour").prepend($("#restaurantrestaurant"));
      $("#firstfour").prepend($("#teamteam"));
      $("#firstfour").prepend($("#gifgif"));
      $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#html").hasClass("selected")) {
      $(".htmlhtml").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#css").hasClass("selected")) {
      $(".csscss").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#bootstrap").hasClass("selected")) {
      $(".bootstrapbootstrap").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#jquery").hasClass("selected")) {
      $(".jqueryjquery").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#javascript").hasClass("selected")) {
      $(".javascriptjavascript").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#mysql").hasClass("selected")) {
      $(".mysqlmysql").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#showall").hasClass("selected")) {
      $(".allall").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#express").hasClass("selected")) {
      $(".expressexpress").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#react").hasClass("selected")) {
      $(".reactreact").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }

    if ($("#wordpress").hasClass("selected")) {
      $(".wordpresswordpress").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }
    if ($("#mongodb").hasClass("selected")) {
      $(".mongomongo").removeClass("hidework");
        $("#firstfour").prepend($("#storestore"));
        $("#firstfour").prepend($("#liriliri"));
        $("#firstfour").prepend($("#friendfriend"));
        $("#firstfour").prepend($("#burgerburger"));
        $("#firstfour").prepend($("#braingaugebraingauge"));
        $("#firstfour").prepend($("#llllll"));
        $("#firstfour").prepend($("#mongoscrapermongoscraper"));
        $("#firstfour").prepend($("#one"));
        $("#firstfour").prepend($("#weatherweather"));
        $("#firstfour").prepend($("#rockrock"));
        $("#firstfour").prepend($("#diamonddiamond"));
        $("#firstfour").prepend($("#restaurantrestaurant"));
        $("#firstfour").prepend($("#teamteam"));
        $("#firstfour").prepend($("#gifgif"));
        $("#firstfour").prepend($("#clickygameclickygame"));
    }

    if ($("#showall").hasClass("selected")) {
      $(".all").removeClass("hidework");
      $("#firstfour").prepend($("#storestore"));
      $("#firstfour").prepend($("#liriliri"));
      $("#firstfour").prepend($("#friendfriend"));
      $("#firstfour").prepend($("#burgerburger"));
      $("#firstfour").prepend($("#braingaugebraingauge"));
      $("#firstfour").prepend($("#llllll"));
      $("#firstfour").prepend($("#mongoscrapermongoscraper"));
      $("#firstfour").prepend($("#one"));
      $("#firstfour").prepend($("#weatherweather"));
      $("#firstfour").prepend($("#rockrock"));
      $("#firstfour").prepend($("#diamonddiamond"));
      $("#firstfour").prepend($("#restaurantrestaurant"));
      $("#firstfour").prepend($("#teamteam"));
      $("#firstfour").prepend($("#gifgif"));
      $("#firstfour").prepend($("#clickygameclickygame"));
       $("#firstfour").prepend($("#wordpresswordpress"));
    }
  }
  setTimeout(isSelected, 250);
});
