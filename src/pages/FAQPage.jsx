
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gastro-deep-blue"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Sipariş ve Teslimat",
      items: [
        {
          question: "Nasıl sipariş verebilirim?",
          answer: "Toptan siparişlerinizi telefon, e-posta veya web sitemiz üzerinden verebilirsiniz. Sipariş vermek için lütfen bizimle iletişime geçin."
        },
        {
          question: "Teslimat ne kadar sürer?",
          answer: "Berlin ve çevresine 24 saat içinde teslimat yapıyoruz. Diğer bölgeler için teslimat süresi 2-3 iş günüdür."
        },
        {
          question: "Minimum sipariş miktarı var mı?",
          answer: "Evet, 250€ minimum sipariş tutarımız bulunmaktadır. Bu tutarın altındaki siparişler için ek teslimat ücreti alınabilir."
        },
        {
          question: "Teslimat ücretleri nedir?",
          answer: "500€ üzeri siparişlerde Berlin bölgesine ücretsiz teslimat yapıyoruz. Diğer bölgeler ve tutarlar için teslimat ücretleri mesafeye göre değişiklik gösterebilir."
        }
      ]
    },
    {
      title: "Ürünler ve Stok",
      items: [
        {
          question: "Ürünleriniz nereden geliyor?",
          answer: "Ürünlerimizi Avrupa'nın çeşitli bölgelerinden ve Türkiye'den ithal ediyoruz. Tüm ürünlerimiz kalite kontrol süreçlerinden geçmektedir."
        },
        {
          question: "Organik ürünleriniz var mı?",
          answer: "Evet, birçok kategoride organik sertifikalı ürünlerimiz mevcuttur. Bu ürünler web sitemizde 'Organik' etiketi ile belirtilmiştir."
        },
        {
          question: "Özel sipariş verebilir miyim?",
          answer: "Evet, menümüzde bulunmayan özel ürünler için sipariş verebilirsiniz. Bunun için lütfen bizimle iletişime geçin."
        },
        {
          question: "Stokta olmayan ürünleri ne zaman temin edebilirsiniz?",
          answer: "Stokta olmayan ürünleri genellikle 7-10 iş günü içinde temin edebiliyoruz, ancak bu süre tedarikçilere göre değişiklik gösterebilir."
        }
      ]
    },
    {
      title: "Ödeme ve Faturalar",
      items: [
        {
          question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          answer: "Banka havalesi, kredi kartı ve düzenli müşterilerimiz için açık hesap seçeneklerimiz mevcuttur."
        },
        {
          question: "Ödeme vadesi nedir?",
          answer: "Yeni müşterilerimiz için ödeme teslimatta yapılmaktadır. Düzenli müşterilerimiz için 14-30 gün vade seçeneklerimiz bulunmaktadır."
        },
        {
          question: "Faturamı dijital olarak alabilir miyim?",
          answer: "Evet, tüm faturalarımızı dijital olarak e-posta adresinize gönderiyoruz. Basılı fatura isteğinizi sipariş sırasında belirtebilirsiniz."
        }
      ]
    },
    {
      title: "İadeler ve Şikayetler",
      items: [
        {
          question: "Ürün teslimatta hasarlı çıkarsa ne yapmalıyım?",
          answer: "Hasarlı ürünleri teslim almayı reddedebilir veya teslimat anında belirtebilirsiniz. Alternatif olarak, teslimatı takip eden 24 saat içinde hasarlı ürünleri bildirmeniz durumunda değişim yapabiliriz."
        },
        {
          question: "Ürün iade politikanız nedir?",
          answer: "Gıda ürünleri için genellikle iade kabul etmiyoruz. Ancak kalite sorunu olan ürünler için teslimatı takip eden 24 saat içinde bildirim yapmanız halinde değişim veya iade mümkündür."
        },
        {
          question: "Şikayetimi nasıl iletebilirim?",
          answer: "Tüm şikayet ve önerilerinizi telefon veya e-posta ile müşteri hizmetlerimize iletebilirsiniz. En kısa sürede size dönüş yapacağız."
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom mx-auto">
        <Link to="/" className="inline-flex items-center text-gastro-dark-blue mb-6 hover:text-gastro-red transition-colors">
          <ChevronLeft size={20} />
          <span>Ana Sayfaya Dön</span>
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6 text-gastro-deep-blue">Sıkça Sorulan Sorular</h1>
          
          <div className="mb-8">
            <p className="text-gray-600">
              Main Gastroland GmbH hakkında en sık sorulan soruların cevaplarını aşağıda bulabilirsiniz. Başka sorularınız varsa, lütfen bizimle iletişime geçmekten çekinmeyin.
            </p>
          </div>
          
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gastro-deep-blue">{category.title}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                {category.items.map((item, itemIndex) => (
                  <FAQItem 
                    key={itemIndex} 
                    question={item.question} 
                    answer={item.answer} 
                  />
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-12 p-6 bg-gastro-blue/10 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gastro-deep-blue">Başka Sorularınız mı Var?</h2>
            <p className="text-gray-600 mb-4">
              Sorunuza cevap bulamadıysanız, müşteri hizmetlerimizle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@main-gastroland.de" className="btn-primary">
                E-posta Gönder
              </a>
              <a href="tel:+49123456789" className="btn-outline">
                Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
