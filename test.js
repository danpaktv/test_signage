t = 0
b = 0
var testcumber_progress_num = document.getElementById('testcumber_progress_num');
var cube_dispenser = document.getElementById('cube_dispenser');
var cube_hazard = document.getElementById('cube_hazard');
var pellet_hazard = document.getElementById('pellet_hazard');
var pellet_catcher = document.getElementById('pellet_catcher');
var water_hazard = document.getElementById('water_hazard');
var fling_enter = document.getElementById('fling_enter');
var fling_exit = document.getElementById('fling_exit');
var turret_hazard = document.getElementById('turret_hazard');
var dirty_water = document.getElementById('dirty_water');
var cake = document.getElementById('cake');
var previous = document.getElementById('previous');
var next = document.getElementById('next');
var testchamber_meter = document.getElementById('testchamber_meter')
var chumbernum_01 = document.getElementById('chumbernum_01')
var chumbernum_00 = document.getElementById('chumbernum_00')
var chumbernum_02 = document.getElementById('chumbernum_02')
var chumbernum_03 = document.getElementById('chumbernum_03')
var chumbernum_04 = document.getElementById('chumbernum_04')
var chumbernum_05 = document.getElementById('chumbernum_05')
var chumbernum_06 = document.getElementById('chumbernum_06')

showSlides(t);

function previousSlide() {
  if (b == 0){
    showSlides(t -= 1); 
    if (t == -1){
      t = 0
    }
  }
}

function nextSlide() {
  if (b == 0){
    showSlides(t += 1); 
  }
}

function showSlides(t) {
    b = 1
    if (t == -1){
      t = 0
    }
    if (t == 0){
      testcumber_progress_num.textContent = "00/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT = t
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
          cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
          cube_hazard.style.opacity=(timePassed/ 500) + 0.5;
          chumbernum_01.style.opacity = timePassed/ Infinity;
          chumbernum_00.style.opacity = timePassed/ 250;
          previous.style.opacity = timePassed/ 500;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= 4/(timePassed /2.5) + "%";
      }
    }
    if (t == 1){
      testcumber_progress_num.textContent = "01/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;
        if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT = t
          return;
        }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
          if (oldT == 0){
            cube_dispenser.style.opacity= 125/timePassed;
            cube_hazard.style.opacity= 125/timePassed;
        }
          chumbernum_01.style.opacity = timePassed/ 250;
          chumbernum_00.style.opacity = timePassed/ Infinity;
          chumbernum_02.style.opacity = timePassed/ Infinity;
          previous.style.opacity = 250/ timePassed;
          testchamber_meter.style.width= timePassed/ 62.5 + "%";
          
      }
      
    }
    if (t == 2){
      testcumber_progress_num.textContent = "02/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
          chumbernum_01.style.opacity = timePassed/ Infinity;
          chumbernum_03.style.opacity = timePassed/ Infinity;
          chumbernum_02.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (4+timePassed/ 50) + "%";
      }
      oldT=t
    }
    if (t == 3){
      testcumber_progress_num.textContent = "03/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT = t
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
        if (oldT == 4){
          cube_dispenser.style.opacity= 125/timePassed;
          cube_hazard.style.opacity= 125/timePassed;
        }
          chumbernum_02.style.opacity = timePassed/ Infinity;
          chumbernum_04.style.opacity = timePassed/ Infinity;
          chumbernum_03.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (8+timePassed/ 50) + "%";
      }
    }
    if (t == 4){
      testcumber_progress_num.textContent = "04/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT = 4
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
        if (oldT != 5){
          cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
          cube_hazard.style.opacity= (timePassed/ 500) + 0.5;
        }
        else{
          cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
        }

          chumbernum_03.style.opacity = timePassed/ Infinity;
          chumbernum_05.style.opacity = timePassed/ Infinity;
          chumbernum_04.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (12+timePassed/ 50) + "%";
      }
    }
    if (t == 5){
      testcumber_progress_num.textContent = "05/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT = 5
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
          console.log(oldT+"ОлдТ")
          if (oldT == 6){
            pellet_hazard.style.opacity= 125/timePassed;
            pellet_catcher.style.opacity= 125/timePassed;
            cube_hazard.style.opacity= (timePassed/ 500) + 0.5;
          }
          if(oldT ==4){
          cube_dispenser.style.opacity= 125/timePassed;
          }
          chumbernum_04.style.opacity = timePassed/ Infinity;
          chumbernum_06.style.opacity = timePassed/ Infinity;
          chumbernum_05.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (16+timePassed/ 50) + "%";
      }
    }
    if (t == 6){
      testcumber_progress_num.textContent = "06/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT = 6
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
        if(oldT ==5 ){
          cube_hazard.style.opacity= 125/timePassed;
        }
        if(oldT !=7 ){
          pellet_hazard.style.opacity= (timePassed/ 500) + 0.5;
          pellet_catcher.style.opacity= (timePassed/ 500) + 0.5;
        }
          chumbernum_05.style.opacity = timePassed/ Infinity;
          chumbernum_07.style.opacity = timePassed/ Infinity;
          chumbernum_06.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (21+ +timePassed/ 50) + "%";
      }
    }
    if (t == 7){
      testcumber_progress_num.textContent = "07/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT=7
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
        if(oldT == 8){
          water_hazard.style.opacity= 125/timePassed;
          dirty_water.style.opacity= 125/timePassed;
        }
          chumbernum_06.style.opacity = timePassed/ Infinity;
          chumbernum_08.style.opacity = timePassed/ Infinity;
          chumbernum_07.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (26+ timePassed/ 56) + "%";
      }
      
    }
    if (t == 8){
      testcumber_progress_num.textContent = "08/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT=8
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
        if (oldT == 9){
          pellet_hazard.style.opacity= (timePassed/ 500) + 0.5;
          pellet_catcher.style.opacity= (timePassed/ 500) + 0.5;
          cube_dispenser.style.opacity= 125/timePassed;
          cube_hazard.style.opacity=125/timePassed;
        }
          chumbernum_07.style.opacity = timePassed/ Infinity;
          chumbernum_09.style.opacity = timePassed/ Infinity;
          chumbernum_08.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (30 + timePassed/ 45) + "%";
          water_hazard.style.opacity= (timePassed/ 500) + 0.5;
          dirty_water.style.opacity= (timePassed/ 500) + 0.5;
      }
      
    }
    if (t == 9){
      testcumber_progress_num.textContent = "09/19"
      let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT=9
          return;
      }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
      }, 20);
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
        if (oldT == 8){
          water_hazard.style.opacity= 125/timePassed;
          dirty_water.style.opacity= 125/timePassed;
          pellet_hazard.style.opacity= 125/timePassed;
          pellet_catcher.style.opacity= 125/timePassed;
        }
          cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
          cube_hazard.style.opacity=(timePassed/ 500) + 0.5;
          chumbernum_08.style.opacity = timePassed/ Infinity;
          // chumbernum_10.style.opacity = timePassed/ Infinity;
          chumbernum_09.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (35 + timePassed/ 71) + "%";
      }
      
    }
}
