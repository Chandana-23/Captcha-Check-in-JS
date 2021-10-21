function generate() {
    var word = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";
    for(let i = 0;i<=6;i++)
    {
        captcha+=word.charAt(Math.random()*63);
    }
    document.getElementById("captcha").value = captcha;
}
function check() {
    var result = document.getElementById("answer").value;
    var captcha = document.getElementById("captcha").value;
    console.log(captcha,result);
    if(result===captcha)
    {
        document.querySelector("p").innerHTML = "Nice, you entered correct captcha.";
        document.querySelector("p").style.color = "green";
    }
    else{
        document.querySelector("p").innerHTML = "You entered incorrect captcha";
        document.querySelector("p").style.color = "red";
    }
}