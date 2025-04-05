
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gastro-light-yellow py-16">
      <div className="text-center">
        <img 
          src="/lovable-uploads/2c78969d-6267-4cfd-8009-989dfa27f7fa.png" 
          alt="Main Gastroland GmbH Logo" 
          className="w-32 mx-auto mb-8"
        />
        <h1 className="text-9xl font-bold text-gastro-orange mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gastro-navy">Seite nicht gefunden</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Die gesuchte Seite existiert nicht oder wurde an eine andere Adresse verschoben.
        </p>
        <Link to="/" className="bg-gradient-to-r from-gastro-orange to-gastro-yellow hover:from-gastro-yellow hover:to-gastro-orange text-gastro-navy font-medium px-6 py-3 rounded-lg transition-all duration-300">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
