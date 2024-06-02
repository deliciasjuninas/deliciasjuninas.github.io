var rd = document.getElementById("random")
var op = [
    "arroz.html", "beiju.html", "bmac.html",
    "bmil.html", "canjica.html", "cuscuz.html",
    "milho.html", "munguza.html", "pdmlk.html", "pipoca.html", "sarolho.html"
]

rd.onclick = function(){
    let link = op[Math.floor(Math.random()*op.length)]
    window.location.href = link;
}
