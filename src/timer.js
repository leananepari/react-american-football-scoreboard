const timer = (digOne, digTwo, digThree, digFour) => {
    let second = 1;
    let ms = 1;
  
    let msH = 1;
    let msT = 1;
  
    function loop() {
      setTimeout(function() {
        if (ms < 99 ) {
          if (msT < 60) {
            msT++;
            ms++;
            loop();
          } else if (msT === 60 && msH < 10) {
            msT = 1;
            msH ++;
            ms++;
            loop();
          } else if (msH === 10) {
            msH = 0;
            msT = 0;
            ms++;
            loop();
          }
  
        } else if (ms === 99 && second < 10) {
            digFour[1](digFour[0] + second)
            second++;
            ms = 1;
            msH = 1;
            msT = 1;
            loop();
  
        } else if (second === 10) {
            digFour[1](digFour[0] = 0)
            digThree[1](digThree[0] = 1)
        }
      }, 10)
    }
    loop();
  

}

export default timer;