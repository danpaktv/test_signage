const testcumber = document.getElementById('test_cumber');

function flash() {
    console.log("work")
    testcumber.classList.toggle("test_cumber")
    testcumber.classList.toggle("test_cumber_off")
    let start = Date.now(); // запомнить время начала
    flag1000 = 1
    flag2000 = 1
    flag3000 = 1
    let timer = setInterval(timers,20);
      function timers() {
            let timePassed = Date.now() - start
            if ((timePassed >= 1000) && (flag1000 == 1)) {
                testcumber.classList.toggle("test_cumber_off")
                testcumber.classList.toggle('test_cumber')
                flag1000 = 0
            }
            if ((timePassed >= 2000) && (flag2000 == 1)) {
                testcumber.classList.toggle("test_cumber")
                testcumber.classList.toggle('test_cumber_off')
                flag2000 = 0
            }
            if ((timePassed >= 3000) && (flag3000 == 1)) {
                testcumber.classList.toggle("test_cumber_off")
                testcumber.classList.toggle('test_cumber')
                flag3000 = 0
                clearInterval(timer)
            }
      }
}
