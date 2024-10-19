setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    htime = 30*h + m/2;
    mtime = 6*m;
    stime=6*s;
    hour.style.transform = `rotate(${htime}deg)`;
    min.style.transform = `rotate(${mtime}deg)`;
    sec.style.transform = `rotate(${stime}deg)`;
},1000);
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s + " " + ampm;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}