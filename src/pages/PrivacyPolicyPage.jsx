
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom mx-auto">
        <Link to="/" className="inline-flex items-center text-gastro-dark-blue mb-6 hover:text-gastro-red transition-colors">
          <ChevronLeft size={20} />
          <span>Ana Sayfaya Dön</span>
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-gastro-deep-blue">Gizlilik Politikası</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Main Gastroland GmbH olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasına önem veriyoruz. Bu gizlilik politikası, web sitemizi kullanırken toplanan bilgilerin nasıl işlendiğini açıklamaktadır.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">1. Toplanan Bilgiler</h2>
            <p className="mb-4">
              Web sitemizi ziyaret ettiğinizde, IP adresiniz, tarayıcı türünüz, ziyaret saatiniz ve görüntülediğiniz sayfalar gibi standart web günlüğü bilgilerini otomatik olarak toplayabiliriz. Ayrıca, bizimle iletişime geçtiğinizde sağladığınız ad, e-posta adresi ve telefon numarası gibi kişisel bilgileri de toplayabiliriz.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">2. Bilgilerin Kullanımı</h2>
            <p className="mb-4">
              Topladığımız bilgileri aşağıdaki amaçlar için kullanabiliriz:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Web sitemizi ve hizmetlerimizi iyileştirmek</li>
              <li>Sorularınıza ve taleplerinize yanıt vermek</li>
              <li>Size ürünlerimiz ve hizmetlerimiz hakkında bilgi göndermek (yalnızca izin verdiğiniz takdirde)</li>
              <li>İstatistiksel analizler yapmak</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">3. Bilgilerin Paylaşımı</h2>
            <p className="mb-4">
              Kişisel bilgilerinizi, yasal yükümlülüklerimizi yerine getirmek veya haklarımızı korumak için gerekli olmadıkça üçüncü taraflarla paylaşmıyoruz. Bilgilerinizi hizmet sağlayıcılarımızla paylaşabiliriz, ancak bu sağlayıcılar bilgilerinizi yalnızca bizim adımıza hizmet sunmak için kullanabilir ve başka bir amaçla kullanamazlar.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">4. Çerezler</h2>
            <p className="mb-4">
              Web sitemiz, deneyiminizi geliştirmek için çerezler kullanabilir. Çerezler, tarayıcınız tarafından bilgisayarınızda saklanan küçük metin dosyalarıdır. Çerezleri kabul etmek istemiyorsanız, tarayıcı ayarlarınızı değiştirebilirsiniz. Ancak bu, web sitemizin bazı özelliklerinin düzgün çalışmamasına neden olabilir.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">5. Haklarınız</h2>
            <p className="mb-4">
              Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Bilgilerinize erişim talep etme hakkı</li>
              <li>Yanlış bilgilerin düzeltilmesini talep etme hakkı</li>
              <li>Belirli koşullar altında bilgilerinizin silinmesini talep etme hakkı</li>
              <li>Bilgilerinizin işlenmesine itiraz etme hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">6. Güvenlik</h2>
            <p className="mb-4">
              Kişisel bilgilerinizin güvenliğini sağlamak için uygun önlemleri alıyoruz. Ancak, internet üzerinden iletilen hiçbir bilginin tamamen güvenli olmadığını unutmayın.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">7. Gizlilik Politikasında Değişiklikler</h2>
            <p className="mb-4">
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Politikada yapılan değişiklikler bu sayfada yayınlanacaktır.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">8. İletişim</h2>
            <p className="mb-4">
              Gizlilik politikamızla ilgili sorularınız veya talepleriniz için aşağıdaki iletişim bilgilerini kullanabilirsiniz:
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

export default PrivacyPolicyPage;
