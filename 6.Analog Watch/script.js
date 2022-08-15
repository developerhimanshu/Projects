let tick = new Audio("/6.Analog Watch/tick.mp3");
setInterval(() => {
    const d = new Date();
    const htime = d.getHours()%12;
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;
    tick.play();
    if (mtime < 10) {
        min.innerHTML = "0" + `${mtime}` + "  :";
    } else
        min.innerHTML = `${mtime}` + "  :";
    if (htime < 10) {
        hr.innerHTML = "0" + `${htime}` + "  :";
    } else
        hr.innerHTML = `${htime}` + "  :";
    if (stime < 10) {
        sec.innerHTML = "0" + `${stime}`;
    } else
        sec.innerHTML = `${stime}`;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);