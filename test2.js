let testnum = 0
let b = 0
oldT = testnum
const testcumber_progress_num = document.getElementById('testcumber_progress_num');
const cube_dispenser = document.getElementById('cube_dispenser');
const cube_hazard = document.getElementById('cube_hazard');
const pellet_hazard = document.getElementById('pellet_hazard');
const pellet_catcher = document.getElementById('pellet_catcher');
const water_hazard = document.getElementById('water_hazard');
const fling_enter = document.getElementById('fling_enter');
const fling_exit = document.getElementById('fling_exit');
const turret_hazard = document.getElementById('turret_hazard');
const dirty_water = document.getElementById('dirty_water');
const cake = document.getElementById('cake');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const testchamber_meter = document.getElementById('testchamber_meter')
const chumbernum_01 = document.getElementById('chumbernum_01')
const chumbernum_00 = document.getElementById('chumbernum_00')
const chumbernum_02 = document.getElementById('chumbernum_02')
const chumbernum_03 = document.getElementById('chumbernum_03')
const chumbernum_04 = document.getElementById('chumbernum_04')
const chumbernum_05 = document.getElementById('chumbernum_05')
const chumbernum_06 = document.getElementById('chumbernum_06')
const first_number_0 = document.getElementById('first_number_0')
const first_number_1 = document.getElementById('first_number_1')
showSlides(testnum);

function previousSlide() {
  if (b == 0){
    showSlides(testnum -= 1); 
    if (testnum == -1){
        testnum = 0
    }
  }
}

function nextSlide() {
  if (b == 0){
    showSlides(testnum += 1); 
    if (testnum == 20){
        testnum = 19
  }
}

function showSlides(testnum) {
    b = 1
    let start = Date.now(); // запомнить время начала
      let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;
        if (timePassed >= 250) {
          clearInterval(timer); // закончить анимацию через 2 секунды
          b = 0
          oldT = testnum
          return;
        }
        draw(timePassed);
    }, 20);
    if (testnum == -1){
      testnum = 0
    }
      if (testnum == 20){
      testnum = 19
    }
    if (testnum == 0){
      function draw(timePassed) {
          testcumber_progress_num.textContent = "00/19"
          cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
          cube_hazard.style.opacity=(timePassed/ 500) + 0.5;
          chumbernum_01.style.opacity = timePassed/ Infinity;
          chumbernum_00.style.opacity = timePassed/ 250;
          previous.style.opacity = timePassed/ 500;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= 4/(timePassed /2.5) + "%";
      }
    }
    if (testnum == 1){   
      function draw(timePassed) {
          if (oldT == 0){
            cube_dispenser.style.opacity= 125/timePassed;
            cube_hazard.style.opacity= 125/timePassed;
        }
          chumbernum_01.style.opacity = timePassed/ 250;
          chumbernum_00.style.opacity = timePassed/ Infinity;
          chumbernum_02.style.opacity = timePassed/ Infinity;
          previous.style.opacity = 250/ timePassed;
          testchamber_meter.style.width= ((timePassed/50)) + "%"
          testcumber_progress_num.textContent = "01/19"
      }
      
    }
    if (testnum == 2){
      // в то время как timePassed идёт от 0 до 2000
      // left изменяет значение от 0px до 400px
      function draw(timePassed) {
          chumbernum_01.style.opacity = timePassed/ Infinity;
          chumbernum_03.style.opacity = timePassed/ Infinity;
          chumbernum_02.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (5 + (timePassed/50)) + "%"
          testcumber_progress_num.textContent = "02/19"
      }
    }
    if (testnum == 3){
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
          testchamber_meter.style.width= (10 + (timePassed/50)) + "%"
          testcumber_progress_num.textContent = "03/19"
      }
    }
    if (testnum == 4){
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
          testchamber_meter.style.width= (15 + (timePassed/50)) + "%"
          testcumber_progress_num.textContent = "04/19"
      }
    }
    if (testnum == 5){
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
          testchamber_meter.style.width= (20 + (timePassed/50)) + "%"
          testcumber_progress_num.textContent = "05/19"
      }
    }
    if (testnum == 6){ 
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
          testchamber_meter.style.width= (25 + (timePassed/50)) + "%"
          testcumber_progress_num.textContent = "06/19"
      }
    }
    if (testnum == 7){
      function draw(timePassed) {
        if(oldT == 8){
          water_hazard.style.opacity= 125/timePassed;
          dirty_water.style.opacity= 125/timePassed;
        }
          chumbernum_06.style.opacity = timePassed/ Infinity;
          chumbernum_08.style.opacity = timePassed/ Infinity;
          chumbernum_07.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (30 + (timePassed/50)) + "%"
          testcumber_progress_num.textContent = "07/19"
      }
      
    }
    if (testnum == 8){ 
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
          testchamber_meter.style.width= (35 + (timePassed/50)) + "%"
          water_hazard.style.opacity= (timePassed/ 500) + 0.5;
          dirty_water.style.opacity= (timePassed/ 500) + 0.5;
          testcumber_progress_num.textContent = "08/19"
      }
      
    }
    if (testnum == 9){
      function draw(timePassed) {
        if (oldT == 8){
          water_hazard.style.opacity= 125/timePassed;
          dirty_water.style.opacity= 125/timePassed;
          pellet_hazard.style.opacity= 125/timePassed;
          pellet_catcher.style.opacity= 125/timePassed;
        }
        if (oldT == 10){
            chumbernum_09.style.opacity = timePassed/ Infinity;
            first_number_1.style.opacity = timePassed/ Infinity;
            chumbernum_00.style.opacity = timePassed/ Infinity;
            first_number_0.style.opacity = timePassed/ 250;;
            fling_exit.style.opacity = 125/timePassed;
            fling_enter.style.opacity = 125/timePassed;;
          }
          cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
          cube_hazard.style.opacity=(timePassed/ 500) + 0.5;
          chumbernum_08.style.opacity = timePassed/ Infinity;
          // chumbernum_10.style.opacity = timePassed/ Infinity;
          chumbernum_09.style.opacity = timePassed/ 250;
          testchamber_meter.style.transition= ".1s ease"
          testchamber_meter.style.width= (40 + (timePassed/50)) + "%"
          testcumber_progress_num.textContent = "09/19"
            }
      
        }
        if (testnum == 10){
            function draw(timePassed) {
              if (oldT == 9){
                cube_dispenser.style.opacity= 125/timePassed;
                cube_hazard.style.opacity=125/timePassed;
                first_number_1.style.opacity = timePassed/ 250;;
              }
              if (oldT == 11){
                pellet_hazard.style.opacity= 125/timePassed;
                pellet_catcher.style.opacity= 125/timePassed
                water_hazard.style.opacity= 125/timePassed;
                dirty_water.style.opacity= 125/timePassed;
              }
                fling_exit.style.opacity = (timePassed/ 500) + 0.5;
                fling_enter.style.opacity = (timePassed/ 500) + 0.5;;
                chumbernum_09.style.opacity = timePassed/ Infinity;
                first_number_0.style.opacity = timePassed/ Infinity;
                chumbernum_01.style.opacity = timePassed/ Infinity;
                chumbernum_00.style.opacity = timePassed/ 250;    
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (45+(timePassed/50)) + "%";
                testcumber_progress_num.textContent = "10/19"
                  }
            
              }
        if (testnum == 11){
            function draw(timePassed) {
              if (oldT == 12){
                cube_dispenser.style.opacity= 125/timePassed;
                cube_hazard.style.opacity=125/timePassed;
                
              }
              if (oldT == 11){
                first_number_1.style.opacity = timePassed/ 250;
                first_number_0.style.opacity = timePassed/ Infinity;
              }
                pellet_hazard.style.opacity= (timePassed/ 500) + 0.5;
                pellet_catcher.style.opacity= (timePassed/ 500) + 0.5
                water_hazard.style.opacity= (timePassed/ 500) + 0.5;
                dirty_water.style.opacity= (timePassed/ 500) + 0.5;
                fling_exit.style.opacity = 125/timePassed;
                fling_enter.style.opacity = 125/timePassed;;
                chumbernum_00.style.opacity = timePassed/ Infinity;
                chumbernum_02.style.opacity = timePassed/ Infinity;
                chumbernum_01.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (50 + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "11/19"
                  }
            
              }
        if (testnum == 12){
            function draw(timePassed) {
              if (oldT == 11){
                cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
                cube_hazard.style.opacity=(timePassed/ 500) + 0.5;
                pellet_hazard.style.opacity= 125/timePassed;
                pellet_catcher.style.opacity= 125/timePassed
                water_hazard.style.opacity= 125/timePassed;
                dirty_water.style.opacity= 125/timePassed;
              }
              if (oldT == 12){
                cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
                cube_hazard.style.opacity=(timePassed/ 500) + 0.5;
                first_number_1.style.opacity = timePassed/ 250;
                first_number_0.style.opacity = timePassed/ Infinity;
              }
              if (oldT == 13){
                cube_dispenser.style.opacity= (timePassed/ 500) + 0.5;
                first_number_1.style.opacity = timePassed/ 250;
                first_number_0.style.opacity = timePassed/ Infinity;
                pellet_hazard.style.opacity = 125/timePassed;
                pellet_catcher.style.opacity = 125/timePassed;
              }
                fling_exit.style.opacity = (timePassed/ 500) + 0.5;
                fling_enter.style.opacity = (timePassed/ 500) + 0.5;;
                chumbernum_01.style.opacity = timePassed/ Infinity;
                chumbernum_03.style.opacity = timePassed/ Infinity;
                chumbernum_02.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (55 + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "12/19"
                  }
            
              }
        if (testnum == 13){
            function draw(timePassed) {
              if (oldT == 12){
                cube_dispenser.style.opacity= 125/timePassed;
                fling_exit.style.opacity = 125/timePassed;
                fling_enter.style.opacity = 125/timePassed
                pellet_hazard.style.opacity = (timePassed/ 500) + 0.5;
                pellet_catcher.style.opacity = (timePassed/ 500) + 0.5;
                fling_exit.style.opacity = 125/timePassed;
                fling_enter.style.opacity = 125/timePassed;;
              }
              if (oldT == 13){
                first_number_1.style.opacity = timePassed/ 250;
                first_number_0.style.opacity = timePassed/ Infinity;
              }
              if(oldT == 14){
                fling_exit.style.opacity = 125/timePassed
                fling_enter.style.opacity = 125/timePassed
                dirty_water.style.opacity = 125/timePassed
                water_hazard.style.opacity = 125/timePassed
              }
              
                chumbernum_02.style.opacity = timePassed/ Infinity;
                chumbernum_04.style.opacity = timePassed/ Infinity;
                chumbernum_03.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (60   + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "13/19"
                  }
            
              }
        if (testnum == 14){
            function draw(timePassed) {
              if (oldT == 13){
                fling_exit.style.opacity = (timePassed/ 500) + 0.5;
                fling_enter.style.opacity = (timePassed/ 500) + 0.5;
                dirty_water.style.opacity = (timePassed/ 500) + 0.5;
                water_hazard.style.opacity = (timePassed/ 500) + 0.5;
              }
              if (oldT == 15){
                cube_hazard.style.opacity = (timePassed/ 500) + 0.5;
              }
                chumbernum_03.style.opacity = timePassed/ Infinity;
                chumbernum_05.style.opacity = timePassed/ Infinity;
                chumbernum_04.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (65 + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "14/19"

              }
            }
        if (testnum == 15){
            function draw(timePassed) {
              if (oldT == 14){
                cube_hazard.style.opacity = 125/timePassed
              }
              if (oldT == 16){
                pellet_hazard.style.opacity = (timePassed/ 500) + 0.5;
                pellet_catcher.style.opacity = (timePassed/ 500) + 0.5;
                water_hazard.style.opacity = (timePassed/ 500) + 0.5;
                fling_enter.style.opacity = (timePassed/ 500) + 0.5;
                fling_exit.style.opacity = (timePassed/ 500) + 0.5;
                dirty_water.style.opacity = (timePassed/ 500) + 0.5;
                cube_hazard.style.opacity = 125/timePassed
                cube_dispenser.style.opacity = 125/timePassed
                turret_hazard.style.opacity = 125/timePassed
              }
                chumbernum_04.style.opacity = timePassed/ Infinity;
                chumbernum_06.style.opacity = timePassed/ Infinity;
                chumbernum_05.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (70 + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "15/19"

              }
            }
      if (testnum == 16){
            function draw(timePassed) {
              if (oldT == 15){
                water_hazard.style.opacity = 125/timePassed;
                fling_enter.style.opacity = 125/timePassed
                fling_exit.style.opacity = 125/timePassed
                dirty_water.style.opacity = 125/timePassed
                cube_hazard.style.opacity = (timePassed/ 500) + 0.5;
                cube_dispenser.style.opacity = (timePassed/ 500) + 0.5;
              }
                pellet_hazard.style.opacity = 125/timePassed
                pellet_catcher.style.opacity = 125/timePassed
                turret_hazard.style.opacity = (timePassed/ 500) + 0.5;
                chumbernum_05.style.opacity = timePassed/ Infinity;
                chumbernum_07.style.opacity = timePassed/ Infinity;
                chumbernum_06.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (75 + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "16/19"

              }
            }
    if (testnum == 17){
            function draw(timePassed) {
              if (oldT == 16){              
                pellet_hazard.style.opacity = (timePassed/ 500) + 0.5;
                pellet_catcher.style.opacity = (timePassed/ 500) + 0.5;
              }
              if (oldT == 18){
                fling_exit.style.opacity = 125/timePassed
                fling_enter.style.opacity = 125/timePassed
                dirty_water.style.opacity = 125/timePassed
                water_hazard.style.opacity = 125/timePassed
              }
                turret_hazard.style.opacity = 125/timePassed
                chumbernum_06.style.opacity = timePassed/ Infinity;
                chumbernum_08.style.opacity = timePassed/ Infinity;
                chumbernum_07.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (80 + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "17/19"

              }
            }
    if (testnum == 18){
            function draw(timePassed) {
              if (oldT == 17){
                water_hazard.style.opacity = (timePassed/ 500) + 0.5;
                fling_exit.style.opacity = (timePassed/ 500) + 0.5;
                fling_enter.style.opacity = (timePassed/ 500) + 0.5;
                dirty_water.style.opacity = (timePassed/ 500) + 0.5;
                water_hazard.style.opacity = (timePassed/ 500) + 0.5;
                turret_hazard.style.opacity = (timePassed/ 500) + 0.5;
              }
              if (oldT == 19){
                cake.style.opacity = 125/timePassed
                cube_dispenser.style.opacity = (timePassed/ 500) + 0.5;
                cube_hazard.style.opacity = (timePassed/ 500) + 0.5;
                fling_enter.style.opacity = (timePassed/ 500) + 0.5;
                fling_exit.style.opacity = (timePassed/ 500) + 0.5;
                turret_hazard.style.opacity = (timePassed/ 500) + 0.5;
                next.style.opacity = (timePassed/ 500) + 0.5;
              }
                chumbernum_07.style.opacity = timePassed/ Infinity;
                chumbernum_09.style.opacity = timePassed/ Infinity;
                chumbernum_08.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (85 + timePassed/ 50) + "%";
                testcumber_progress_num.textContent = "18/19"

              }
            }
      if (testnum == 19){
            function draw(timePassed) {
              if (oldT == 18){
                cake.style.opacity = (timePassed/ 500) + 0.5;
                cube_dispenser.style.opacity = 125/timePassed
                cube_hazard.style.opacity = 125/timePassed
                fling_enter.style.opacity = 125/timePassed
                fling_exit.style.opacity = 125/timePassed
                turret_hazard.style.opacity = 125/timePassed
              }
                chumbernum_08.style.opacity = timePassed/ Infinity;
                chumbernum_09.style.opacity = timePassed/ 250;
                testchamber_meter.style.transition= ".1s ease"
                testchamber_meter.style.width= (90 + timePassed/ 125) + "%";
                testcumber_progress_num.textContent = "19/19"
                next.style.opacity = 125/timePassed
              }
            }
}
