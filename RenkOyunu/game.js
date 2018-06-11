

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var hucre = [];

var puan = 0;

function oyunBaslat() {
    document.getElementById("puan").innerHTML = (puan + " Puan ").bold();
    var random1 = getRandomInt(1, 5);
    var random2 = getRandomInt(1, 5);
    while (random1 == random2) {
        random2 = getRandomInt(1, 5);
    }
    var i = 1;
    while (i <= 4) {
        renkDegistir(i, random1);
        i++;
    }
    var randomHucre = getRandomInt(1, 5);
    renkDegistir(randomHucre, random2);
}
function renkDegistir(hucreId, renk) {
    hucre[hucreId] = renk;
    document.getElementById("hucre" + hucreId).style.background = renkKodu(renk);
}
function tikKontrol(hucreId) {
    var dogruHucre = 0;
    if (hucre[1] != hucre[2]) {
        if (hucre[1] == hucre[3]) {
            dogruHucre = 2;
        }
        else {
            dogruHucre = 1;
        }
    }
    else {
        if (hucre[1] == hucre[3]) {
            dogruHucre = 4;
        }
        else {
            dogruHucre = 3;
        }
    }
    if (hucreId == dogruHucre) {
        puan = puan + 10;
        oyunBaslat();
    }
    else {
        puan = puan - 20;
        if(puan<0)
        {
            puan=0;
        }
        oyunBaslat();
    }

}
function renkKodu(renkId) {
    if (renkId == 1) {
        return "Red";
    }
    else if (renkId == 2) {
        return "Blue";

    }
    else if (renkId == 3) {
        return "Yellow";
    }
    else if (renkId == 4) {
        return "green";
    }

}