setInterval(() => {
    d = new Date();
    ht = d.getHours();
    hm = d.getMinutes();
    hs = d.getSeconds();
    hrot = (30*ht)+hm/2;
    mrot = 6*hm;
    srot = 6*hs;

    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;

    let hrs = document.getElementById('hrs');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    hrs.innerHTML = d.getHours();
    min.innerHTML = d.getMinutes();
    if(d.getSeconds()<10)
    {
        sec.innerHTML = "0" + d.getSeconds();
    }
    else
    {
        sec.innerHTML = d.getSeconds();
    }
}, 1000);