function _drawClock() {
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    let morning = "AM"
    morning = (h>=12) ? "PM" : "AM"
    h = (h==0) ? 12 : (h>12) ? (h-12) : h
    h = checkTime(h)
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s + " " + morning
    setTimeout(_drawClock, 1000)
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i
  }


export class TimeController{
    constructor(){
        _drawClock()
    }
}