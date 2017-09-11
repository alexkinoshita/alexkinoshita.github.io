$(document).ready(function(){
    
    /*---------1---------*/
    var a= false;
    $("#a").click(function(){
        
        if (a==true) {
            $('#c').css("background-color", "#FFC9FF");
            a=false;
        }
        else {
            $(this).css("background-color", "#FCF4FF");
            a=true;
        }
    });

/*---- 2 ---- */
$('#b').click(function() {
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#b').css('background-color', randomColorChange);
    });

    /*---------3---------*/
        $("#c").click(function(){
    $("#c").hide(1000);
});
        /*else {
            $("#blackGrow").css("width", "100px");
            $("#blackGrow").css("height", "100px");
            $("#blackGrow").css("border-radius", "90px");
            c=true;
        }
    });
    
    /*---------4---------*/
    /*---- var d= false;
    $("#d").click(function(){
        
        if (d==true) {
            $("#square").css("border-radius", "0px");
            d=false;
        }
        else {
            $("#square").css("border-radius", "125px");
            d=true;
        }
    }); ----*/
$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
    }
  });

    
    /*---------5---------*/

    /*---------6---------*/
    var f= true;
    $("#f").click(function(){
        
        if (f==true) {
            $( "#slide" ).animate({left:"90%"}, 1000);
            f=false;
        }
        else {
            $( "#slide" ).animate({left:"30%"}, 1000);
            f=true;
        }
    });
    
    /*---------7---------*/
    var g= true;
    $("#g").click(function(){
        
        if (g==true) {
            $( "#top" ).animate({width:"100%"}, 1000);
            $( "#mid" ).delay( 100 ).animate({height:"100%"}, 1000);
            $( "#bot" ).delay( 70 ).animate({height:"100%"}, 1000);
            g=false;
        }
        else {
            $( "#top" ).delay( 800 ).animate({height:"0%"}, 1000);
            $( "#mid" ).delay( 50 ).animate({width:"0%"}, 1000);
            $( "#bot" ).animate({width:"0%"}, 1000);
            g=true;
        }
    });
    
    /*---------8-----no JS----*/
  
    /*---------9---------*/
    var i= true;
    $("#i").click(function(){
        if (i==true) {
            $( "body" ).css("-webkit-filter", "invert(40%)");
            $( "body" ).css("filter", "invert(40%)");
            $( "body" ).css("background-color", "#791731");
            $( "#i" ).css("-webkit-filter", "invert(40%)");
            $( "#i" ).css("filter", "invert(40%)");
            i=false;
        }
        
        else {
            $( "body" ).css("-webkit-filter", "invert(0)");
            $( "body" ).css("filter", "invert(0)");
            $( "body" ).css("background-color", "white");
            $( "#i" ).css("-webkit-filter", "invert(0)");
            $( "#i" ).css("filter", "invert(1)");
            i=true;
        }
        
    });
    
    /*---------10---------*/
    var j= 0;
    $("#j").click(function(){
        j++;
        $("#counter").html(j);
        
    });
    
    /*---------11---------*/
    $('.main-bubble').mousedown(function(){
  $(this).removeClass('scale-large');
  $(this).addClass('scale-small');
});

$('.main-bubble').mouseup(function(){
  $(this).removeClass('scale-small');
  $(this).addClass('scale-large');
  $( '<div class="new-bubble"></div>' ).insertBefore(this);
});


    
    /*---------13---------*/
  
  // polyfill
var AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

function NVD(context) {
  this.context = context; // the audio context
  this.downSweepTime = 0.05; // the time taken for the initial sweep 
  this.upSweepTime = 1.525; // the time taken for the second sweep 
  this.initialFrequency = 5000;
  this.lowestFrequency = 1500;
  this.finalFrequency = 2500;
  this.maxGainValue = 0.2;

  this.gainNode = context.createGain();
  this.gainNode.connect(this.context.destination);
}


NVD.prototype.play = function(time) {
  this.osc = context.createOscillator();
    this.osc.connect(this.gainNode);
  this.setOscillatorWaveform();
  this.osc.start(time)
  this.osc.frequency.setValueAtTime(this.initialFrequency, time);
  this.osc.frequency.linearRampToValueAtTime(this.lowestFrequency, time + this.downSweepTime);
  this.osc.frequency.linearRampToValueAtTime(this.finalFrequency, time + this.downSweepTime + this.upSweepTime);

  this.gainNode.gain.setValueAtTime(this.maxGainValue, time);
  this.gainNode.gain.linearRampToValueAtTime(0, time + this.downSweepTime + this.upSweepTime);

  this.osc.stop(time + this.downSweepTime + this.upSweepTime);
}

NVD.prototype.setOscillatorWaveform = function() {

  var coeffs = [
    0,
    0.010,
    0.022,
    0.007,
    0.004,
    0.004
  ];
  var real = new Float32Array(coeffs);
  var imag = new Float32Array(real.length); // creates an array of zeros.
  var wave = context.createPeriodicWave(real, imag);
  this.osc.setPeriodicWave(wave);
}

var context = new AudioContext();

$("#js-trigger-sound").click(function(e) {
  e.preventDefault();
  var nvd = new NVD(context);
  nvd.play(context.currentTime);
});
    
    /*---------14---------*/
    var n= true;
    $("#n").click(function(){
        if (n==true) {
            $( "#invade" ).animate({width: "600%"}, 7000);
            $( "#invade" ).animate({height: "70px"}, 6200);
   
    
            n=false;
        }
        else {
        
            $( "#invade" ).animate({height: "10px"}, 1390);
            $( "#invade" ).animate({width: "100px"}, 6000);
            
            n=true;
        }
    });
    
    /*---------15---------*/
    $('.pulse').click(function () {
  $('.pulse').removeClass('active')
  $(this).addClass('active')
})
/*-------16------*/
var dragSpeed = 5;

var points = new Array();
points[0] = {x:0, y:0, z: 0, color:"red"};
points[1] = {x:1, y:0, z: 0, color:"green"};
points[2] = {x:0, y:1, z: 0, color:"orange"};
points[3] = {x:0, y:0, z: 1, color:"black"};
points[4] = {x:-1, y:0, z: 0, color:"green"};
points[5] = {x:0, y:-1, z: 0, color:"orange"};
points[6] = {x:0, y:0, z: -1, color:"black"};
for(i=7;i<100;i++) {
  var colorcode = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
  points[i] = {x:(Math.random()*2-1), y:(Math.random()*2-1), z:(Math.random()*2-1), color:colorcode}
}

var gridsize = 2;
var lines = new Array();
lines[0] = {x1:1, y1:0, z1: 0, x2:-1, y2:0, z2: 0, color:"#222"};
lines[1] = {x1:0, y1:1, z1: 0, x2:0, y2:-1, z2: 0, color:"#222"};
lines[2] = {x1:0, y1:0, z1: 1, x2:0, y2:0, z2: -1, color:"#222"};
var i = 3;
for(x = -gridsize ; x<=gridsize ; x++) {
  for(y = -gridsize ; y<=gridsize ; y++) {
    for(z = -gridsize ; z<=gridsize ; z++) {
        lines[i] = {x1:x+1, y1:y, z1: z, x2:x-1, y2:y, z2: z, color:"#222"};
            lines[i+1] = {x1:x, y1:y+1, z1: z, x2:x, y2:y-1, z2: z, color:"#222"};
            lines[i+2] = {x1:x, y1:y, z1: z+1, x2:x, y2:y, z2: z-1, color:"#222"};
      i=i+3;
    }
    }
}

var CENTER_X = 512;
var CENTER_Y = 512;
var SCALE = 200;
var d_v = 0;
var d_h = 0.1;

var rot_v = 15; // vertical rotation in deg
var rot_h = 45; // horizontal rotation in deg

setInterval(function() {
  if (bMouseDragging == false) {
    rot_h=rot_h+d_h;
    rot_v=rot_v+d_v;
    drawGraph()
  }
}, 10);

function getX(X,Y,Z) {
  var theta_v = rot_v*Math.PI/180;
  var theta_h = rot_h*Math.PI/180;
  return CENTER_X + ( X*Math.cos(theta_h) + Y*Math.sin(theta_h) )*SCALE;
}

function getY(X,Y,Z) {
  var theta_v = rot_v*Math.PI/180;
  var theta_h = rot_h*Math.PI/180;
  return CENTER_Y + ( Z*Math.cos(theta_v) + ( X*Math.sin(theta_h)*Math.sin(theta_v) - Y*Math.cos(theta_h)*Math.sin(theta_v) ))*SCALE;
}

function getDepth(X,Y,Z) {
  // returns a number from 0 to 1 - zero is close, 1 is far.
  var theta_v = rot_v*Math.PI/180;
  var theta_h = rot_h*Math.PI/180;
  var depth = (-X*Math.sin(theta_h) + Y*Math.cos(theta_h))*Math.cos(theta_v) + Math.sin(theta_v)*Z;
  return  (2+( depth ))/4;
}

var svg = d3.select("svg");
var svgdoc = document.getElementsByTagName('svg')[0];
svgdoc.addEventListener("mousedown",mouseDownHandler);
svgdoc.addEventListener("mouseup",mouseUpHandler);
svgdoc.addEventListener("mousemove",mouseMoveHandler);

drawGraph();

function drawGraph() {
   var axes = svg.selectAll("line")
    .data(lines);
  axes.enter().append("line")
    .attr("x1", function(d) {return getX(d.x1, d.y1, d.z1)})
    .attr("y1", function(d) {return getY(d.x1, d.y1, d.z1)})
    .attr("x2", function(d) {return getX(d.x2, d.y2, d.z2)})
    .attr("y2", function(d) {return getY(d.x2, d.y2, d.z2)})
    .attr("r", 5)
    .style("stroke", function(d) {return d.color;});
  axes
        .style("opacity", function(d) {
        var distance = 1-getDepth((d.x1+d.x2)/2,(d.y1+d.y2)/2,(d.z1+d.z2)/2);
        //console.log(distance);
    return distance;
    })
    .attr("x1", function(d) {return getX(d.x1, d.y1, d.z1)})
    .attr("y1", function(d) {return getY(d.x1, d.y1, d.z1)})
    .attr("x2", function(d) {return getX(d.x2, d.y2, d.z2)})
    .attr("y2", function(d) {return getY(d.x2, d.y2, d.z2)});
  
  var circles = svg.selectAll("circle")
    .data(points);
  circles.enter().append("circle")
    .attr("cx", function(d) {return getX(d.x, d.y, d.z)})
    .attr("cy", function(d) {return getY(d.x, d.y, d.z)})
    .attr("r", 5)
    .style("fill", function(d) {return d.color;});
  circles
/*      .style("fill", function(d) {
        var distance = Math.round(220*getDepth(d.x,d.y,d.z));
    return "rgb("+distance+","+distance+","+distance+")";;
    })*/
        .style("opacity", function(d) {
        var distance = 1-getDepth(d.x,d.y,d.z);
        //console.log(distance);
    return distance*2;
    })
    .attr("cx", function(d) {return getX(d.x, d.y, d.z)})
    .attr("cy", function(d) {return getY(d.x, d.y, d.z)})
    .attr("r",function(d) {
        var distance = (10-10*getDepth(d.x,d.y,d.z))/2;
         return distance;
    });
    

  
  
/*  xlabel = svg.select("text.h")
    .text("h = "+rot_h);
  
    xlabel = svg.select("text.v")
    .text("v = "+rot_v);*/
}

var bMouseDragging = false;
var nMouseOffsetX = 0;
var nMouseOffsetY = 0;

var tempX = rot_h;
var tempY = rot_v;

function mouseDownHandler(evt) { 
  bMouseDragging = true;
  // get the starting drag point, translate to SVG space
  var p = svgdoc.createSVGPoint();
  p.x = evt.clientX;
  p.y = evt.clientY;
  var m = svgdoc.getScreenCTM();
  p = p.matrixTransform(m.inverse())
  // save the value of our starting drag and our initial center
  nMouseOffsetX = p.x;
  nMouseOffsetY = p.y;
  tempX = rot_h;
  tempY = rot_v;
  // send to log
  console.log("Mousedown: "+p.x+", "+p.y);
}

function mouseUpHandler(evt) { 
  bMouseDragging = false;
  //console.log("Mouseup");
}

function mouseMoveHandler(evt) { 

  // get the current drag point, translate to SVG space
  var p = svgdoc.createSVGPoint();
  p.x = evt.clientX;
  p.y = evt.clientY;
  var m = svgdoc.getScreenCTM();
  p = p.matrixTransform(m.inverse())
  // calculate offset from inital drag point
  var dx = p.x - nMouseOffsetX;
  var dy = p.y - nMouseOffsetY;

 
  
  if(bMouseDragging) {
    // we should cap the center x & y based on the zoom of the map
    //console.log("Mousedrag: "+p.x+", "+p.y);
    rot_h = tempX - dx/dragSpeed;
    rot_v = tempY + dy/dragSpeed;
     d_h = -dx/1000;
    d_v = dy/1000;
    drawGraph();
    //console.log(rot_h);

  }
}
/*--------17-------*/
  var e= true;
    $("#e").click(function(){
        
        if (e==true) {
            $("#germ").css("height", "200px");
            $("#germ").css("width", "100px");
            e=false;
        }
        else {
            $("#germ").css("height", "100px");
            $("#germ").css("width", "300px");
            e=true;
        }
    });

    /*---------18---------*/
    var r= true;
    $("#r").click(function(){
        if (r==true) {
            $( "#spin" ).css( "-webkit-transform", "rotate(90deg)");
            $( "#spin" ).css( "-ms-transform", "rotate(180deg)");
            $( "#spin" ).css( "transform", "rotate(180deg)");
            $( "#spin" ).css( "top", "46%");
            $( "#spin" ).css( "left", "-50%");    
            r=false;
        }
        else {
            $( "#spin" ).css( '-webkit-transform', "rotate(0deg);");
            $( "#spin" ).css( '-ms-transform', "rotate(0deg);");
            $( "#spin" ).css( 'transform', "rotate(0deg)");
            r=true;
        }    
    });
    
    /*---------19---------*/
    var s= true;
    $("#s").click(function(){
        if (s==true) {
                $( "#cover" ).css( 'position', 'fixed');
                $( "#cover" ).css( 'z-index', '10');
            s=false;
        }
        else {
                $( "#cover" ).css( 'position', 'absolute');
                $( "#cover" ).css( 'z-index', '0');

            s=true;
        }    
    });
    
    /*---------20---------*/
    var t= true;
    $("#t").click(function(){
        if (t==true) {
            
            $("#yes").html('COMIC');
            t=false;
        }
        else {
            $("#yes").html('SANS');
            t=true;
        }    
    });
    
    /*---------21---------*/
    var u= true;
    $("#u").click(function(){
        if (u==true) {

            $( "body" ).css( "-webkit-filter", "hue-rotate(90deg)");
            $( "body" ).css( "filter", "hue-rotate(90deg)");
            
            
            u=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "hue-rotate(0deg)");
            $( "body" ).css( "filter", "hue-rotate(0deg)");
            
            u=true;
        }    
    });
    
    /*---------22---------*/

    
    /*---------23---------*/
   var kc= true;
    $("#kc").click(function(){
        if (kc==true) {
            $( ".cell" ).append( "<div class=\"full raid\"></div>");
            kc=false;
        }
        else {
            $( ".raid" ).remove();
            kc=true;
        }    
    });


    /*---------25---------*/
   $(document)
.ready(function(){
    var N = 30,
    M = 30,
    V = 60;

    var addWave, initField, Wave, pause,
        waves = [],
        field = [],
        fieldNode = $('#waves');
    debugger;
    Wave = function (params) {
      
      this.isOver = false;
      this.startRow = 0;
      this.step = 0;
      this.color = 'rgb(' + Math.round((Math.random() * 255)) + ',' + Math.round((Math.random() * 255)) + ',' + Math.round((Math.random() * 255)) + ')';
        
      $.extend(this, params);

  
      this.nextStep = function () {
        var i, j, low, hight,
            map = {}; 
        
        if (this.isOver || this.step >= N * 2) {
           this.isOver = true;
           return null;
        }
        this.step++;

      }
      
   
      this.isReach = function(i, j) {
        var d;
       
        if (i > this.step) {
    
           return false;
        } else {
        
          d = this.step - i - 1;           
          
          return j >= Math.max(0, this.startRow - d) && j <= Math.min(M, this.startRow + d);
        }
      }
    }
    

    initField = function() {
        var i, j, cellW, cellH, _class;
      
        cellW = fieldNode.width() / N;
        cellH = fieldNode.height() / M;
     
        for (j = 0; j < M; j++) {
            field[j] = [];
            for (i = 0; i < N; i++) {
                _class = 'cell' + (j === 0 ? ' first-row' : '') + (i === N - 1 ? ' last-col' : '');
              
                field[j][i] = $('<div>')
                .addClass(_class)
                .css({
                      width : cellW + 'px',
                      height : cellH + 'px'
                    })
              .on('click', (function(_j) {
                      return function () {
                        addWave(_j);
                      }
                    })(j));
              fieldNode.append(field[j][i]);
                  
            }
        }
    }
    
    //Добавляем волну
    addWave = function (j) {
      waves.push(new Wave({
        startRow : j
      }));
    }
    
    initField();
  
  //Анимация
  setInterval(function(){
    var i, j, k, color;

    //Переводим волны на след шаг
    waves.forEach(function(wave){
      wave.nextStep();
    });

    //Удаляем волны, которые "кончились"
    waves = waves.filter(function(wave){
      return !wave.isOver;
    });
    
    //Меняем цвета ячеек
    for (j = 0; j < M; j++) {
      for (i = 0; i < N; i++) {
        k = waves.length - 1;
        
        //Берем цвет последней волны в этой ячейке
        while (k >= 0 && !waves[k].isReach(i, j)) {
          k--;
        }
        
        //Если волна найдена меняем ее цвет
        if (waves[k]) {
          field[j][i]
          .css('background', waves[k].color);
        }
      }
    }
  }, V);
});


    
    /*---------26---------*/
    var z= true;
    $("#z").click(function(){
        if (z==true) {
                $( "#side" ).animate({left:"60%"}, 100);
            z=false;
        }
        else {
                $( "#side" ).animate({left:"20%"}, 1200);
            z=true;
        }    
    });
    
    /*---------27---------*/
 var ic= 2;
    $("#ic").click(function(){
        window.print();
        
    });
    
    /*---------28---------*/
    var ba= true;
    $("#ba").click(function(){
        if (ba==true) {
            $( "body" ).css( "cursor", "help");
    
            ba=false;
        }
        else {
            $( "body" ).css( "cursor", "inherit");

            ba=true;
        }  
    });
    
    /*---------29---------*/
  
    $(".toggle-icon").click(function() {
  $('#nav-container').toggleClass("pushed");
});


/*** starwars.com's Toggle Icon Animation ***/
    /*---------30---------*/
    var da= true;
    $("#da").click(function(){
        if (da==true) {
            $( "#space" ).css( "letter-spacing", "37px");
            $( "#space" ).css( "left", "54%");
    
            da=false;
        }
        else {
            $( "#space" ).css( "letter-spacing", "-2px");
            $( "#space" ).css( "left", "50%");

            da=true;
        } 
        
    });
    
    /*---------31---------*/
    var ea= true;
    $("#ea").click(function(){
        if (ea==true) {
            $( "#follow" ).css( "position", "fixed");
            $( "#ballGame" ).css( "position", "fixed");
            ea=false;
        }
        
    });

    $('#follow').click(function() {
            $( "#ballGame" ).css( "position", "absolute");
            $( "#follow" ).css( "position", "absolute");
            
            $( "#follow" ).css( "left", "10%");
            $( "#follow" ).css( "top", "100%");
        
    });
    
    $('body').click(function(){
        if( $("#follow").css('position') == 'fixed') {
                var xpos = ((event.clientX)/($(document).width())) *100;
                var ypos = ((event.clientY)/(window.innerHeight)) *100;
                $( "#follow" ).css( "left", xpos +"%");
                $( "#follow" ).css( "top", ypos + "%");
            
        }
    });

    
    /*---------32---------*/
   var jb= true;
    $("#jb").click(function(){
        if (jb==true) {
            $( "#triangle" ).css("display", "none");
            $( "#squr" ).css("display", "inherit");
       
            

            jb=false;
        }
        else {
            $( "#triangle" ).css("display", "inherit");
            $( "#squr" ).css("display", "none");
            
            jb=true;
        }    
    });
    
    /*---------33---------*/
    var ga= true;
    var ttt;
    $("#ga").click(function(){
        if (ga) {
            ttt=500;
            ga=false;
        }else {
            ttt=0;
            ga=true;
        }
        
        setInterval(function () { 
            $("#ga").css("background-color", function () {
                this.switch = !this.switch
                return this.switch ? "#90929E" : ""
            });  
        }, ttt)
            
    });
    /*---------34---------*/
    var ha= true;
    $("#ha").click(function(){
        
        if (ha==true) {
            $( this ).css("width","90%");
            $( this ).css("height","1000px");
            $("#yess").css("font-size", "50px");
            //code
            ha=false;
        }
        
        else {
            
            $( this ).css("width","10%");
            $( this ).css("height","200px");
            
            ha=true;

        }    
    });
    
    /*---------35---------*/
   
    var sa= true;
    $("#sa").click(function(){ 
        if (sa==true) {
            $( "#rect" ).css( "-webkit-transform", "rotate(135deg)");
            $( "#rect" ).css( "-ms-transform", "rotate(135deg)");
            $( "#rect" ).css( "transform", "rotate(135deg)");
            $( "#rect" ).css( "top", "0%");
            $( "#rect" ).css( "left", "0%");    
            sa=false;
        }
        else {
            $( "#rect" ).css( "-webkit-transform", "rotate(180deg)");
            $( "#rect" ).css( "-ms-transform", "rotate(90deg)");
            $( "#rect" ).css( "transform", "rotate(20deg)");
        
            sa=true;      
        }
    });
    
    /*---------36---------*/
        var sb= 1;
    $("#sb").click(function(){
        $( "#sb" ).append( "<div class=\"circle\" id=\"add" + sb +"\"></div>");
        $( "#add" + sb ).css( "top", (Math.random()*100) + "%");
        $( "#add" + sb ).css( "left", (Math.random()*100) + "%");
        
        if (sb%2==1) {
            $( "#add" + sb ).css( "background-color", "#002380");
        }
        else {
            $( "#add" + sb ).css( "background-color", "white");
        }
        
        sb++;
    });
    
    /*---------37---------*/
   
    
    /*---------38---------*/
     var la=true;
    var rl= 120;
    $("#la").click(function(){
        if (la==true) {
            if (Math.random()>.5) {
                rl=120;
            }
            else {
                rl=-20;
            }
            $( "#fadeR" ).css("left", rl +"%");
            $( "#fadeR" ).css("opacity","0");
                
            
            la=false;
        }
        else {
            
            $( "#fadeR" ).css("left","50%");
            $( "#fadeR" ).css("opacity","1");
          
            la=true;
        }   
    });


    /*---------39---------*/
      var tb= 0;
    $("#tb").click(function(){

        $( "#addd" ).css( "top", (Math.random()*100) + "%");
        $( "#addd" ).css( "left", (Math.random()*100) + "%");
        
        rb++;
        
        if (tb%2==1) {
            $( "#addd" ).css( "background-color", "#002380");
            $( "#tb" ).css( "background-color", "blue");
        }
        else {
            $( "#addd" ).css( "background-color", "white");
            $( "#tb" ).css( "background-color", "red");
        }
        
        tb++;
    });
    

    /*---------40---------*/
  
    /*---------41---------*/
   var ob= true;
    $("#ob").click(function(){
        if (ob==true) {
            $( "#toggle" ).addClass("none");
            $( "#toggle2" ).removeClass("none");
               
            ob=false;
        }
        else {
            $( "#toggle2" ).addClass("none");
            $( "#toggle" ).removeClass("none");

            ob=true;
        }    
    });
    
    /*---------42---------*/
   var fb= true;
    $("#fb").click(function(){
        if (fb==true) {
            $( ".num" ).css("color", "white");

            fb=false;
        }
        else {
            $( ".num" ).css("color", "black");

            fb=true;
        }    
    });
    
    /*---------43---------*/
   $(".dott").click(function(){
        var id = $(this).attr('id');
        $( '.dott').css( "background-color", "blue" );
  
    });
    
    /*---------44---------*/
  
    
    
    
    /*---------46---------*/
    var ta= true;
    $("#ta").click(function(){ 
        if (ta==true) {
            $( "#pass1" ).animate({"width":"230%"}, 1200);
            $( "#pass2" ).delay( 1200 ).animate({"width":"140%"}, 1000);
            ta=false;
        }
        else {
            $( "#pass2" ).animate({"width":"0%"}, 1000);
            $( "#pass1" ).delay( 1200 ).animate({"width":"100%"}, 1200);
            ta=true;      
        }
    });
    
    /*---------48---------*/
    $("#va").click(function(){ 
        if (ta==true) {
            $( "#pass1" ).animate({"width":"230%"}, 1200);
            $( "#pass2" ).delay( 1200 ).animate({"width":"140%"}, 1000);
            ta=false;
        }
        else {
            $( "#pass2" ).animate({"width":"0%"}, 1000);
            $( "#pass1" ).delay( 1200 ).animate({"width":"100%"}, 1200);
            ta=true;      
        }
    });
    
    /*---------47---------*/
 
    
    /*---------49---------*/
      var gc= true;
    $("#gc").click(function(){
        
        if (gc==true) {
            $( "#breach" ).css( "width", "200%" );
            gc=false;
        }
        else {
            $( "#breach" ).css( "width", "50%" );
            gc=true;
        }    
        
    });
    
    /*---------50---------*/
    var xa= true;
    $("#xa").click(function(){
        if (xa==true) {
            $( "iframe" ).css( "display", "inherit");
            $( "#exit" ).html( "&#9746");
            $( "#exit" ).addClass( "exit");
            $( "#exit" ).addClass( "exit");
        
            xa=false;
        }
        else {
            $( "iframe" ).css( "display", "none");
            $( "#exit" ).removeClass( "exit");
            $( "#exit" ).html( "50");
            xa=true;
        }    
    });
    
    /*---------51---------*/
    var ya= true;
    $("#ya").click(function(){
        if (ya==true) {
            $( "body" ).css("cursor", "crosshair");
        
            ya=false;
        }
        else {
            $( "body" ).css( "cursor", "inherit");
            
            ya=true;
        }    
    });
    
    /*---------52---------*/
    var za= true;
    $("#za").click(function(){
        $( "body" ).animate({scrollTop: $("#fb").offset().top}, 2000);
  
    });
    
    /*---------53---------*/
    var ab= true;
    var ddd=0;
    $("#ab").click(function(){
        while (ddd<4) {
            $("#yess").delay(4000).append("S");
            ddd++;
        }
        ddd=0;
  
    });
    
    /*---------54---------*/
    var bb=true;
    $("#bb").click(function(){
        $( ".cell" ).animate({"width":"0"},800);
        $( ".cell" ).delay(1200).animate({"width":"33.33%"},800);

    });
    
    /*---------55---------*/
    var cb= true;
    $("#cb").click(function(){
        if (cb==true) {
            $( "#halfer" ).css("position", "fixed");
            $( "#halfer" ).css("z-index", "8");
        
            cb=false;
        }
        else {
            $( "#halfer" ).css("position", "absolute");
            $( "#halfer" ).css("z-index", "0");
            
            cb=true;
        }    
    });
    
    /*---------56---------*/
   
    
    /*---------57---------*/
    var eb= true;
    $("#eb").click(function(){
        if (eb==true) {
            $( this ).addClass("drop");        
            eb=false;
        }
        else {
        
            $( this ).removeClass("drop");        
            eb=true;
        }    
    });
    
    /*---------58---------*/
    var fb= true;
    $("#fb").click(function(){
        if (fb==true) {
            $( ".num" ).css("color", "white");

            fb=false;
        }
        else {
            $( ".num" ).css("color", "black");

            fb=true;
        }    
    });
    
    /*---------59---------*/
    var gb=true;
    $("#gb").click(function(){
        if (gb==true) {
            $( "#fiftn").html( "1959");
            gb=false;
        }
        else {
            $( "#fiftn").html( "59");
            gb=true;  
        }
    });
    
    /*---------60---------*/
    var hb=true;
    $("#hb").click(function(){
        $( ".cell" ).animate({"opacity":"0"},600);
        $( ".cell" ).delay(800).animate({"opacity":"1"},600);

    });
    
    /*---------61---------*/
    var ib=true;
    $("#ib").click(function(){
        $( ".cell" ).animate({"height":"500px"},800);
        $( ".cell" ).delay(800).animate({"height":"250px"},800);
    });
    
    /*---------62---------*/
  
    
    /*---------63---------*/
    var kb= 0;
    $("#kb").click(function(){
        if (kb==0) {
            $(this).css("background-color", "#FFF07F");
            kb++;
        }
        
        else if (kb==1) {
            $(this).css("background-color", "#C1FF7F");
            kb++;
        }
        
        else if (kb==2) {
            $(this).css("background-color", "#7FFFBD");
            kb++;
        }
        
        else if (kb==3) {
            $(this).css("background-color", "#7FD0FF");
            kb++;
        }
        
        else if (kb==4) {
            $(this).css("background-color", "#B0A1FF");
            kb++;
        }
        
        else if (kb==5) {
            $(this).css("background-color", "#F6A1FF");
            kb++;
        }
        
        else if (kb==6) {
            $(this).css("background-color", "#FFA1A1");
            kb++;
        }
        
        else {
            $(this).css("background-color", "#FFA963");
            kb=0;
        }
    });
    
    /*---------65---------*/
    var mb= true;
    $("#mb").click(function(){
        if (mb==true) {
            $( "#skew" ).addClass("skewd");
               
            mb=false;
        }
        else {
            $( "#skew" ).removeClass("skewd");
            mb=true;
        }    
    });
    
    /*---------66---------*/
    var nb= true;
    $("#nb").click(function(){
        if (nb==true) {
            $( "#strch" ).addClass("wrek");
               
            nb=false;
        }
        else {
            $( "#strch" ).removeClass("wrek");
            nb=true;
        }    
    });
    
    /*---------67---------*/
   
    
    /*---------68---------*/

    $("#pb").click(function(){
        if (ob==true) {
            $( "#toggle" ).addClass("none");
            $( "#toggle2" ).removeClass("none");
               
            ob=false;
        }
        else {
            $( "#toggle2" ).addClass("none");
            $( "#toggle" ).removeClass("none");

            ob=true;
        }    
    });
    
    /*---------69---------*/
    var qb= true;
    $("#qb").click(function(){
        if (qb==true) {
            $( "body" ).addClass("blur");
               
            qb=false;
        }
        else {
            $( "body" ).removeClass("blur");

            qb=true;
        }    
    });
    
    /*---------70---------*/
    var rb= 0;
    $("#rb").click(function(){

        $( "#add" ).css( "top", (Math.random()*100) + "%");
        $( "#add" ).css( "left", (Math.random()*100) + "%");
        
        rb++;
    });
    
    /*---------71---------*/
  
    
    /*---------72---------*/
    var tb= 0;
    $("#tb").click(function(){

        $( "#addd" ).css( "top", (Math.random()*100) + "%");
        $( "#addd" ).css( "left", (Math.random()*100) + "%");
        
        rb++;
        
        if (tb%2==1) {
            $( "#addd" ).css( "background-color", "#002380");
            $( "#tb" ).css( "background-color", "blue");
        }
        else {
            $( "#addd" ).css( "background-color", "white");
            $( "#tb" ).css( "background-color", "red");
        }
        
        tb++;
    });
    
    
    /*---------73---------*/
    var ub=true;
    $("#ub").click(function(){
        if (ub==true) {
            $( ".dot" ).addClass("marginal");
    
               
            ub=false;
        }
        else {
            $( ".dot" ).removeClass("marginal");

            ub=true;
        }    
    });
    
    /*---------74---------*/
    var vb=true;
    $("#vb").click(function(){
        if (vb==true) {
            $( ".dot" ).addClass("collapd");
    
               
            vb=false;
        }
        else {
            $( ".dot" ).removeClass("collapd");

            vb=true;
        }    
    });
    
    /*---------75---------*/
    var wb=true;
    $("#wb").click(function(){
         if (wb==true) {
            $( ".tt" ).addClass("swtch");
            $( ".t" ).addClass("swtchr");
    
               
            wb=false;
        }
        else {
            $( ".tt" ).removeClass("swtch");
            $( ".t" ).removeClass("swtchr");
            wb=true;
        }    
    });
    
    /*---------76---------*/
    var xb= 0;
    $("#xb").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + xb +"\">move</marquee>");
        xb++;
      
    });
    
    /*---------77---------*/
    var yb= 0;
    $("#yb").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + yb +"\">I</marquee>");
        yb++;
      
    });
    
    /*---------78---------*/
    $("#zb").click(function(){
        $( "#vibr" ).delay(0).animate({"left":"51%"},10);
        $( "#vibr" ).delay(20).animate({"left":"49%"},10);
        $( "#vibr" ).delay(30).animate({"left":"51%"},10);
        $( "#vibr" ).delay(40).animate({"left":"49%"},10);
        $( "#vibr" ).delay(50).animate({"left":"50%"},10);

    });
    
    /*---------79---------*/
    var ac= true;

    $("#ac").click(function(){
        if (ac==true) {
            $( "#bounce" ).css("top","25%");
            $( "#bounce" ).css("background-color","red");
            $( "#bounce1" ).css("top","75%");
            $( "#bounce1" ).css("background-color","blue");
            
            ac=false;
        }
        else {
            $( "#bounce" ).css("top","75%");
            $( "#bounce" ).css("background-color","blue");
            $( "#bounce1" ).css("top","25%");
            $( "#bounce1" ).css("background-color","red");
            
            ac=true;
        }
    });
    
    /*---------80---------*/
    var bc= 80;
    $(function(){
        $( "#drug" ).draggable();
    });
    
    /*---------81---------*/
    var cc= 0;
    $("#cc").click(function(){
        $( "#cc" ).append( "<div class=\"circle\" id=\"trip" + cc +"\"></div>");
        $( "#trip" + cc ).css( "width", 120 + (cc*20) + "px");
        $( "#trip" + cc ).css( "height", 120 + (cc*20) + "px");
        $( "#trip" + cc ).css( "z-index", "-" + cc -1);
        $( "#trip" + cc ).css( "border-radius", 120 + (cc*20));
        
        if (cc%2==1) {
            $( "#trip" + cc ).css( "background-color", "black");
        }
        else {
            $( "#trip" + cc ).css( "background-color", "gray");
        }
        
        cc++;
    });
    
    /*---------82---------*/
    var dc= 0;
    var dcc=true;
    $("#dc").click(function(){
        dc=0;
        if (dcc==true) {
            while (dc<26) {
                create();
                dc++;
            }  
            dcc=false;
        }
        else {
            $( "#dc" ).html( "<p class=\"num\">82</p>");
            dcc=true;
        }    
    });
    
    function create() {
        $( "#dc" ) .append( "<div class=\"circle\" id=\"tripp" + dc +"\"></div>");
        $( "#tripp" + dc ).css( "width", 100 + (dc*20) + "px");
        $( "#tripp" + dc ).css( "height", 100 + (dc*20) + "px");
        $( "#tripp" + dc ).css( "z-index", "-" + dc -1);
        $( "#tripp" + dc ).css( "border-radius", 120 + (dc*20));
        

        if (dc%2==0) {
            $( "#tripp" + dc ).css( "background-color", "black");
        }
        else {
            $( "#tripp" + dc ).css( "background-color", "gray");
        }
    }
    
    /*---------83---------*/
    var ec= true;
    $("#ec").click(function(){
        if (ec==true) {
            $( ".cell" ).append( "<div class=\"circled every\"></div>");
            ec=false;
        }
        else {
            $( ".every" ).remove();
            ec=true;
        }    
    });
    
    /*---------84---------*/
    var fc= 0;
    var fcc= 0;
    $("#fc").click(function(){
        $( "#broke" ).html( "fuck you...");
        
    });
    
    /*---------85---------*/
 

    /*---------86---------*/
    var hc= 2;
    $("#hc").click(function(){
        hc=hc*2;
        $("#timesTwo").html(hc);
        
    });
    
    /*---------87---------*/
    var ic= 2;
    $("#ic").click(function(){
        window.print();
        
    });
    
    /*---------88---------*/
    var jc= 2;
    $("#jc").click(function(){
        window.open();
        
    });
    
    /*---------89---------*/
   
    
    /*---------90---------*/
    var lc= true;
    $("#lc").click(function(){
        if (lc==true) {
            $( "body" ).animate({"max-width":"300px"},600);
            lc=false;
        }
        else {
            $( "body" ).animate({"max-width":"2200px"},600);
            lc=true;
        }    
    });
    
    /*---------91---------*/

    $(".dott").click(function(){
        var id = $(this).attr('id');
        $( '.dott').css( "background-color", "blue" );
  
    });
    
    /*---------92---------*/

    $("#nc").click(function(){
        var person = prompt("Please enter your name", "Hanahan");
        $( '#screenX').html( person + "'s button <3" );
  
    });
    
    /*---------93---------*/
    $("#oc").click(function(){
        $( this ).delay(6000).animate({"width":"000px"},600);
    });
    
    /*---------93---------*/
    $("#vc").click(function(){
        while (true) {
            
        }
    });
    

    
});