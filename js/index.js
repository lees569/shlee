
//tile zoomIn

 $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        // .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
 	})

//horizontal scroll

 $.fn.scrollBy = function(x, y, callback){
    return this.animate({
        scrollLeft: '+=' + x,
        scrollTop: '+=' + y
    }, {
      duration: 700,
    specialEasing: {
      scrollLeft: "swing",
      scrollTop: "swing"
    },
      complete: callback
    });
};

$.fn.vfs = function(){
  var 
  $vfs = $(this),
  $vfs_content = $vfs.find('.v-fs-content'),
  vfs = {
    animate:false,
    countPages: $vfs.find('.v-fs-page').length,
    resize: function() {
      $vfs_content.width(parseInt($vfs.width())*vfs.countPages); 
    },
    init: function() {
      vfs.resize();
      $(window).resize(_.debounce(vfs.resize, 300));
      $vfs.mousewheel(function(evt, chg) {
        if (!vfs.animate) {
          vfs.animate = true;
          $vfs.stop().scrollBy(evt.deltaY * -$vfs.width(), 0, function () {
            vfs.animate = false;
          });
          // evt.preventDefault();
          
        }
      });
    }
  };
  
  vfs.init();
  $vfs.data('vfs', vfs);
};

$('.v-fs').each(function(i, item){
  $(item).vfs();
});

//timeline

var timelineItems = $('[class*="timeline-item"]');

$(document).on('mouseover', '[class*="timeline-item"]:not(.is-active)', function(){
  $('.is-active').addClass('is-hovering');
});

$(document).on('mouseout', '[class*="timeline-item"]:not(.is-active)', function() {
  $('[class*="timeline-item"]').removeClass('is-hovering');
});

$(document).on('click', '[class*="timeline-item"]', function() {
  timelineItems.removeClass('is-active');
  $(this).addClass('is-active');
});





var canvas = document.getElementById("canvas");

var gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientBlue.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
gradientBlue.addColorStop(1, 'rgba(151, 135, 255, 0.8)');

var gradientHoverBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientHoverBlue.addColorStop(0, 'rgba(65, 65, 255, 1)');
gradientHoverBlue.addColorStop(1, 'rgba(131, 125, 255, 1)');

var gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
// gradientRed.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
// gradientRed.addColorStop(1, 'rgba(255, 135, 135, 0.8)');

var gradientHoverRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
// gradientHoverRed.addColorStop(0, 'rgba(255, 65, 164, 1)');
// gradientHoverRed.addColorStop(1, 'rgba(255, 115, 115, 1)');

var redArea = null;
var blueArea = null;

var shadowed = {
  beforeDatasetsDraw: function(chart, options) {
    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    chart.ctx.shadowBlur = 40;
  },
  afterDatasetsDraw: function(chart, options) {
    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    chart.ctx.shadowBlur = 0;
  }
};

// Chart.plugins.register({
//   afterEvent: function(chart, e) {
    // Hardcoded hover areas
    
    // Red chart
    // chart.ctx.beginPath();
    // chart.ctx.moveTo(91, 69);
    // chart.ctx.lineTo(152, 80);
    // chart.ctx.lineTo(192, 75);
    // chart.ctx.lineTo(213, 138);
    // chart.ctx.lineTo(148, 168);
    // chart.ctx.lineTo(105, 126);
    // chart.ctx.fill();
    // chart.ctx.closePath();
    
    // if (chart.ctx.isPointInPath(e.x, e.y)) {
    //   var dataset = window.chart.data.datasets[0];
    //   dataset.backgroundColor = gradientHoverRed;
    //   window.chart.update();
    //   canvas.style.cursor = 'pointer';
    // } else {
    //   var dataset = window.chart.data.datasets[0];
    //   dataset.backgroundColor = gradientRed;
    //   window.chart.update();
    //   canvas.style.cursor = 'default';
    // }
    
     // Blue chart
    // chart.ctx.beginPath();
    // chart.ctx.moveTo(85, 61);
    // chart.ctx.lineTo(149, 66);
    // chart.ctx.lineTo(224, 63);
    // chart.ctx.lineTo(179, 112);
    // chart.ctx.lineTo(152, 177);
    // chart.ctx.lineTo(121, 117);
    // chart.ctx.fill();
    // chart.ctx.closePath();
    
    // if (chart.ctx.isPointInPath(e.x, e.y)) {
    //   var dataset = window.chart.data.datasets[1];
    //   dataset.backgroundColor = gradientHoverBlue;
    //   window.chart.update();
    //   canvas.style.cursor = 'pointer';
    // } else {
    //   var dataset = window.chart.data.datasets[1];
    //   dataset.backgroundColor = gradientBlue;
    //   window.chart.update();
    //   canvas.style.cursor = 'default';
    // }
//   }
// });
   

window.chart = new Chart(document.getElementById("canvas"), {
    type: "radar",
    data: {
        labels: ["FRAMER", "HTML5 / CSS", "SWIFT / XCODE", "UNITY3D", "ADOBE CREATIVE SUITE", "JAVASCRIPT"],
        datasets: [
        //  {
        //     label: "Donté Panlin",
        //     data: [80, 80, 60, 60, 90, 80],
        //     fill: true,
        //     backgroundColor: gradientRed,
        //     borderColor: 'transparent',
        //     pointBackgroundColor: "transparent",
        //     pointBorderColor: "transparent",
        //     pointHoverBackgroundColor: "transparent",
        //     pointHoverBorderColor: "transparent",
        //     pointHitRadius: 50,
        // },
        {
            label: "",
            data: [90, 95, 89, 75, 97, 90],
            fill: true,
            backgroundColor: gradientBlue,
            borderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            pointHoverBackgroundColor: "transparent",
            pointHoverBorderColor: "transparent",
            pointHitRadius: 50,
        }]
    },
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
        custom: function(tooltip) {
            var tooltipEl = document.getElementById('tooltip');
            if (tooltip.body) {
              tooltipEl.style.display = 'block';
              if (tooltip.body[0].lines && tooltip.body[0].lines[0]) {
                tooltipEl.innerHTML = tooltip.body[0].lines[0];
              }
            } else {
              setTimeout(function() {
                tooltipEl.style.display = 'none';
              }, 500);
            }
        },
      },
      gridLines: {
        display: false
      },
      scale: {
         ticks: {
            maxTicksLimit: 1,
            display: false,
         }
      }
    },
    plugins: [shadowed]
});





