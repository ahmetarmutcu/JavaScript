

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var hucre = [];
var puan=0;

function oyunBaslat()
{
    document.getElementById("puan").innerHTML = (puan + " Puan ").bold();
    var random1=getRandomInt(1,5);
    var random2=getRandomInt(1,5);
    while(random1==random2)
    {
        random2=getRandomInt(1,5);
    }
    var i=1;
    while(i<=4)
    {
        renkDegistir(i,random1);
        i++;
    }
    var rasgelerandom=getRandomInt(1,5);
    renkDegistir(rasgelerandom,random2);
}

function renkDegistir(hucreid, renk) {
    hucre[hucreid]=renk;
    document.getElementById("hucre"+ hucreid).style.background = renkKodu(renk);

}
var dogrutiklama=0;
function tikKontrol(hucreid) {
    if(hucre[1]!=hucre[2])
    {
        if(hucre[1]==hucre[3])
        {
            dogrutiklama=2;
        }
        else
        {
            dogrutiklama=1;
        }
    }
    else
    {
        if(hucre[1]==hucre[3])
        {
            dogrutiklama=4;
        }
        else
        {
            dogrutiklama=3;
        }
    }
    if(hucreid==dogrutiklama)
    {
        puan+=10;
        oyunBaslat();
    }
    else
    {
        puan-=20;
        oyunBaslat();
    }

}
function renkKodu(renkid) {
    if (renkid == 1)
        return "Red";
    else if(renkid==2)
        return "Blue";
    else if(renkid==3)
        return "Yellow";
    else if(renkid==4)
        return "green";    

}