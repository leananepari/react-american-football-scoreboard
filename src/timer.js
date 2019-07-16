const timer = (min, sec, hold1, hold2) => {
    let seconds = 60;
    let minutes = 15;
    
    min[1](min[0] = minutes);
    sec[1](sec[0] = seconds);
    hold1[1](hold1[0] = '');
    hold2[1](hold2[0] = '');
  
    function loop() {
      setTimeout(function() {
        if (minutes > 0) {
          if (seconds > 0) {
            seconds --;
            sec[1](sec[0] = seconds.toString().padStart(2, '0'));
            loop();
          } else if (seconds === 0) {
            seconds = 60;
            minutes --;
            min[1](min[0] = minutes.toString().padStart(2, '0'));
            sec[1](sec[0] = seconds.toString().padStart(2, '0'));
            loop();
          } 
  
        } else if (minutes === 0) {
          seconds = 0;
          minutes = 0;
          min[1](min[0] = minutes.toString().padStart(2, '0'));
          sec[1](sec[0] = seconds.toString().padStart(2, '0'));
  
        } 
      }, 1000)
    }
    loop();
}

export default timer;