

function IslemYapma()
{
    var sayi1=parseInt(document.getElementById("number1").value);
    var sayi2=parseInt(document.getElementById("number2").value);

    var toplami=sayi1+sayi2;
    document.getElementById("sonuc").innerHTML=toplami;
}