
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom mx-auto">
        <Link to="/" className="inline-flex items-center text-gastro-dark-blue mb-6 hover:text-gastro-red transition-colors">
          <ChevronLeft size={20} />
          <span>Ana Sayfaya Dön</span>
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-gastro-deep-blue">Şartlar ve Koşullar</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Bu web sitesini kullanarak, aşağıdaki şartları ve koşulları kabul etmiş olursunuz. Lütfen bu şartları ve koşulları dikkatle okuyun.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">1. Kullanım Şartları</h2>
            <p className="mb-4">
              Main Gastroland GmbH web sitesini kullanırken tüm yerel, ulusal ve uluslararası yasalara ve düzenlemelere uymayı kabul edersiniz. Web sitesini yasadışı veya bu şartlarda yasaklanmış herhangi bir amaç için kullanmamayı taahhüt edersiniz.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">2. Fikri Mülkiyet Hakları</h2>
            <p className="mb-4">
              Bu web sitesindeki tüm içerik (metin, grafikler, logolar, düğme simgeleri, resimler, ses klipleri, dijital indirmeler, veri derlemeleri) ve yazılım, Main Gastroland GmbH'nin veya içerik sağlayıcılarının mülkiyetindedir ve telif hakkı yasaları tarafından korunmaktadır. Web sitesindeki içeriği kişisel ve ticari olmayan amaçlarla görüntüleyebilir ve yazdırabilirsiniz, ancak içeriği kopyalayamaz, çoğaltamaz, değiştiremez, dağıtamaz veya başka bir şekilde kullanamaz veya gösteremezsiniz.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">3. Sorumluluk Reddi</h2>
            <p className="mb-4">
              Web sitesindeki içerik "olduğu gibi" ve "mevcut olduğu şekilde" sağlanmaktadır. Main Gastroland GmbH, web sitesinin kesintisiz veya hatasız olacağını garanti etmez. Web sitesini kullanmanızdan kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuçsal zararlardan sorumlu değiliz.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">4. Ürün Bilgileri</h2>
            <p className="mb-4">
              Web sitemizdeki ürün açıklamaları ve görselleri mümkün olduğunca doğru bir şekilde sunulmaya çalışılmıştır, ancak renk, boyut ve diğer detaylarda küçük farklılıklar olabilir. Tüm ürünlerimiz stok durumuna bağlıdır.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">5. Fiyatlandırma ve Ödeme</h2>
            <p className="mb-4">
              Tüm fiyatlar Euro (€) cinsindendir ve KDV dahildir. Fiyatlar önceden haber verilmeksizin değiştirilebilir. Ödeme şartları ayrı bir sözleşmede belirtilecektir.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">6. Teslimat</h2>
            <p className="mb-4">
              Teslimat süreleri ve koşulları, sipariş sırasında belirtilecektir. Teslimat sadece Almanya sınırları içinde yapılmaktadır. Uluslararası teslimatlar için lütfen bizimle iletişime geçin.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">7. İade ve İptal</h2>
            <p className="mb-4">
              Siparişinizi teslim aldıktan sonra 14 gün içinde iade edebilirsiniz. İade edilen ürünler kullanılmamış ve orijinal ambalajında olmalıdır. Belirli ürünler (gıda ürünleri gibi) hijyen sebeplerinden dolayı iade edilemez.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">8. Şartların Değiştirilmesi</h2>
            <p className="mb-4">
              Bu şartları ve koşulları istediğimiz zaman değiştirebiliriz. Değişiklikler, web sitesinde yayınlandıktan sonra geçerli olacaktır. Web sitemizi kullanmaya devam etmeniz, değiştirilen şartları kabul ettiğiniz anlamına gelir.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">9. Geçerli Yasa ve Yargı Yetkisi</h2>
            <p className="mb-4">
              Bu şartlar ve koşullar Alman yasalarına tabidir. Bu şartlar ve koşullardan kaynaklanan herhangi bir anlaşmazlık, Berlin mahkemelerinin münhasır yargı yetkisine tabi olacaktır.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">10. İletişim</h2>
            <p className="mb-4">
              Şartlar ve koşullarımızla ilgili sorularınız veya endişeleriniz için aşağıdaki iletişim bilgilerini kullanabilirsiniz:
            </p>
            <p className="mb-4">
              Main Gastroland GmbH<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Almanya<br />
              E-posta: info@main-gastroland.de<br />
              Telefon: +49 123 456789
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Son güncelleme: 5 Nisan 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
