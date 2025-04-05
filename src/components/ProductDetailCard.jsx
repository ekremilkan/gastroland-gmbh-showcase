
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ProductDetailCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-w-4 aspect-h-3 h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-amber-700">{product.name}</h3>
          <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <button 
                className="text-amber-700 font-medium hover:text-amber-900 transition-colors"
                onClick={() => setShowDetails(true)}
              >
                Details
              </button>
              <div className="text-sm text-gray-500">
                Großhandel
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-amber-700">{product.name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <DialogDescription className="text-gray-700">
              <p className="mb-4">{product.detailedDescription || product.description}</p>
              
              <div className="mt-4 bg-amber-50 p-4 rounded-md">
                <h4 className="font-medium text-amber-800 mb-2">Produktinformationen</h4>
                <ul className="space-y-1 text-sm">
                  <li><span className="font-medium">Herkunft:</span> Premium-Auswahl</li>
                  <li><span className="font-medium">Qualität:</span> Erstklassig</li>
                  <li><span className="font-medium">Verpackung:</span> Umweltfreundlich</li>
                  <li><span className="font-medium">Lieferung:</span> Schnell und zuverlässig</li>
                </ul>
              </div>
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDetailCard;
