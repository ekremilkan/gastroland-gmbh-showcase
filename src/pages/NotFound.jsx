
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 py-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gastro-dark-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gastro-deep-blue">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya başka bir adrese taşınmış olabilir.
        </p>
        <Link to="/" className="btn-primary">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
