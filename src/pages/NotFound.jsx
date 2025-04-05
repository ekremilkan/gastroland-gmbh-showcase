
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-amber-50 py-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-amber-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-amber-800">Seite nicht gefunden</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Die gesuchte Seite existiert nicht oder wurde an eine andere Adresse verschoben.
        </p>
        <Link to="/" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
