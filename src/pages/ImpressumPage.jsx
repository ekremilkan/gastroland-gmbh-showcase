
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const ImpressumPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom mx-auto">
        <Link to="/" className="inline-flex items-center text-gastro-dark-blue mb-6 hover:text-gastro-red transition-colors">
          <ChevronLeft size={20} />
          <span>Ana Sayfaya Dön</span>
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-gastro-deep-blue">Impressum</h1>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">Şirket Bilgileri</h2>
            <p className="mb-4">
              Main Gastroland GmbH<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Almanya
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">İletişim</h2>
            <p className="mb-4">
              Telefon: +49 123 456789<br />
              E-posta: info@main-gastroland.de<br />
              Web: www.main-gastroland.de
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">Yasal Temsil</h2>
            <p className="mb-4">
              Genel Müdür: Ahmet Yılmaz
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">Ticari Kayıt</h2>
            <p className="mb-4">
              Berlin Ticaret Sicili<br />
              Sicil Numarası: HRB 123456<br />
              Vergi Numarası: DE123456789
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">İçerik Sorumluluğu</h2>
            <p className="mb-4">
              İçerikten Sorumlu (TMG § 55, Abs. 2 uyarınca):<br />
              Ahmet Yılmaz<br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Almanya
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">AB Uyuşmazlık Çözümü</h2>
            <p className="mb-4">
              Avrupa Komisyonu, tüketiciler için bir çevrimiçi uyuşmazlık çözüm platformu (ODR) sunmaktadır: <a href="https://ec.europa.eu/consumers/odr/" className="text-gastro-dark-blue hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p className="mb-4">
              E-posta adresimiz yukarıda belirtilmiştir.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gastro-deep-blue">Sorumluluk Reddi</h2>
            <p className="mb-4">
              <strong>Web sitesi içeriği:</strong> Web sitemizdeki bilgilerin doğruluğunu, güncelliğini ve eksiksizliğini sağlamak için çaba gösteriyoruz. Ancak, bilgilerin doğruluğu, güncelliği ve eksiksizliği konusunda herhangi bir sorumluluk üstlenmiyoruz. Web sitemizdeki bilgilerin kullanımından kaynaklanan zararlardan sorumlu değiliz.
            </p>
            <p className="mb-4">
              <strong>Harici bağlantılar:</strong> Web sitemiz, diğer web sitelerine bağlantılar içerebilir. Bu web sitelerinin içeriğinden sorumlu değiliz ve bu bağlantıları öneri olarak sunmuyoruz. Bu web sitelerinin içeriğinden yalnızca ilgili sağlayıcılar sorumludur.
            </p>
            <p className="mb-4">
              <strong>Telif hakkı:</strong> Web sitemizin içeriği, telif hakkı ve diğer fikri mülkiyet yasalarıyla korunmaktadır. İçeriğin çoğaltılması, dağıtılması, değiştirilmesi veya başka bir şekilde kullanılması, önceden yazılı izin olmadan yasaktır.
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

export default ImpressumPage;
