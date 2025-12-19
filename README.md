# İki Teker Motor Web Tabanlı E-Ticaret Uygulaması

Bu çalışma, motosiklet ekipmanları ve ileri sürüş eğitimlerinin çevrim içi olarak
tanıtım ve satışının yapılabilmesini amaçlayan, çok sayfalı ve responsive bir
e-ticaret web uygulamasıdır.

Proje, hazır bir e-ticaret şablonu temel alınarak geliştirilmiş ve HTML5, CSS3,
Bootstrap ve JavaScript teknolojileri kullanılarak özgünleştirilmiştir.

Canlı Uygulama: https://ikitekermotor.vercel.app/  
GitHub Deposu: https://github.com/bekiryillmaz/ikiteker-motor

---

## 1. Projenin Amacı

Bu projenin amacı, motosiklet kullanıcılarının ihtiyaç duyduğu ekipmanları
(mont, kask, eldiven, bot vb.) ve ileri sürüş eğitimlerini kullanıcı dostu bir
arayüz üzerinden sunmaktır.

Ayrıca site yöneticisinin ürünleri, blog içeriklerini ve siparişleri
kontrol edebilmesini sağlayan bir yönetim paneli ile sistemin sürdürülebilir,
geliştirilebilir ve yönetilebilir olması hedeflenmiştir.

---

## 2. Kullanılan Teknolojiler

Projenin geliştirilmesinde aşağıdaki teknolojiler kullanılmıştır:

- HTML5  
- CSS3  
- JavaScript  
- Bootstrap  
- Chart.js  

Uygulama tamamen frontend tabanlıdır ve herhangi bir backend servisi
kullanmadan çalışmaktadır.

---

## 3. Sistem Mimarisi

Web uygulaması statik bir mimariye sahiptir. Tüm sayfalar HTML dosyaları
üzerinden oluşturulmuş, tasarım ve responsive yapı CSS ve Bootstrap ile
sağlanmıştır.

Dinamik işlemler JavaScript aracılığıyla gerçekleştirilmiştir.
Sepet ve istek listesi gibi kullanıcıya özel veriler tarayıcı tabanlı
localStorage yapısı kullanılarak yönetilmektedir.

---

## 4. Navigasyon ve Menü Yapısı

Kullanıcıların site içerisinde rahatça gezinebilmesi için çok seviyeli bir
menü yapısı tasarlanmıştır.

Ana menü başlıkları aşağıdaki gibidir:

- Anasayfa  
- Ürünler  
  - Tüm Ürünler  
  - Montlar  
  - Eldivenler  
  - Botlar  
  - Kasklar  
- Hizmetler  
  - Tüm Hizmetler  
  - İleri Sürüş Eğitimleri  
  - Hakimiyet Eğitimi  
  - Pist Eğitimi  
- Blog  
- Hakkımızda  
- İletişim  
- Sepet  
- Ödeme  
- İstek Listesi  

---

## 5. Uygulama Detayları

### 5.1 Ürün Listeleme Sistemi
Ürünler kategori bazlı olarak ayrılmış ve her kategori için özel HTML sayfaları
oluşturulmuştur. Ürün kartları standart bir yapı ile listelenmektedir.

### 5.2 Sepet Sistemi
Kullanıcılar ürünleri sepete ekleyebilmekte ve sepetten çıkarabilmektedir.
Sepet bilgileri localStorage üzerinde saklanarak sayfa yenilendiğinde
verilerin kaybolması engellenmiştir.

### 5.3 İstek Listesi (Favoriler)
Kullanıcıların ilgilendikleri ürünleri kaydedebilmeleri için bir istek listesi
modülü geliştirilmiştir. Aynı ürünün tekrar eklenmesi engellenmiştir.

### 5.4 Görsel Bileşenler
- Slider ve otomatik kayan alanlar
- Marka logoları için slider
- Hakkımızda sayfasında satış verilerinin görselleştirilmesi amacıyla
  bar chart (Chart.js) kullanımı
- Yaklaşık 100 adet optimize edilmiş görsel

---

## 6. Yönetici (Admin) Paneli

Sistemde site yöneticileri için bir admin paneli tasarlanmıştır.
Panele erişim login modal aracılığıyla sağlanmaktadır.

Admin panel özellikleri:
- Blog içeriklerini düzenleme
- Bekleyen siparişleri görüntüleme
- Ürün ve stok yönetimi işlemleri

---

## 7. Proje Yapısı

Proje aşağıdaki dosya yapısına sahiptir:

```text
ikiteker-motor/
│
├── index.html
├── blog.html
├── hakkimizda.html
├── iletisim.html
├── sepet.html
├── odeme.html
├── wishlist.html
│
├── urunler/
│   ├── tum-urunler.html
│   ├── montlar.html
│   ├── eldivenler.html
│   ├── botlar.html
│   └── kasklar.html
│
├── hizmetler/
│   ├── tum-hizmetler.html
│   ├── ileri-surus.html
│   ├── hakimiyet.html
│   └── pist-egitimi.html
│
├── css/
│   ├── global.css
│   └── diğer stil dosyaları
│
├── js/
│   ├── cart.js
│   ├── wishlist.js
│   ├── slider.js
│   └── main.js
│
└── images/
    └── siteye ait görseller




- 42 adet HTML sayfası
- 13 adet CSS dosyası
- 4 adet JavaScript dosyası
- Yaklaşık 100 adet görsel

---

## Kurulum

```bash
git clone https://github.com/bekiryillmaz/ikiteker-motor.git
