
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the actual form submission logic
    console.log('Form submitted with data:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gastro-orange to-gastro-yellow py-16">
        <div className="container-custom mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gastro-navy">Kontaktieren Sie Uns</h1>
            <p className="text-xl text-gastro-navy max-w-2xl mx-auto">
              Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Unser Team steht Ihnen gerne zur Verfügung.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gastro-navy">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-3 rounded-full mr-4">
                    <MapPin className="text-gastro-navy" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gastro-navy">Adresse</h3>
                    <p className="text-gray-600">Musterstraße 123, 12345 Berlin, Deutschland</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-3 rounded-full mr-4">
                    <Phone className="text-gastro-navy" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gastro-navy">Telefon</h3>
                    <p className="text-gray-600">+49 123 456789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-3 rounded-full mr-4">
                    <Mail className="text-gastro-navy" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gastro-navy">E-Mail</h3>
                    <p className="text-gray-600">info@main-gastroland.de</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gastro-yellow/30 p-3 rounded-full mr-4">
                    <Clock className="text-gastro-navy" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gastro-navy">Öffnungszeiten</h3>
                    <p className="text-gray-600">Montag - Freitag: 08:00 - 17:00</p>
                    <p className="text-gray-600">Samstag: 09:00 - 13:00</p>
                    <p className="text-gray-600">Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-gastro-navy">Standort</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder Map - in a real project we would use Google Maps or similar */}
                  <div className="w-full h-full flex items-center justify-center bg-gastro-light-yellow">
                    <p className="text-center px-4">
                      <MapPin size={32} className="inline-block mb-2 text-gastro-navy" />
                      <br />
                      Hier wird eine Karte angezeigt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gastro-navy">Schreiben Sie uns</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-bold">Vielen Dank für Ihre Nachricht!</p>
                  <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
                    placeholder="Ihre E-Mail Adresse"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
                    placeholder="Betreff Ihrer Nachricht"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gastro-yellow"
                    placeholder="Ihre Nachricht an uns"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-gastro-orange to-gastro-yellow hover:from-gastro-yellow hover:to-gastro-orange text-gastro-navy font-bold px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <Send className="mr-2" size={20} />
                    Nachricht senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gastro-light-yellow">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gastro-navy">Häufig gestellte Fragen</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gastro-navy">Wie kann ich eine Bestellung aufgeben?</h3>
              <p className="text-gray-600">Sie können uns telefonisch, per E-Mail oder über unser Kontaktformular erreichen, um eine Bestellung aufzugeben.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gastro-navy">Wie lange dauert die Lieferung?</h3>
              <p className="text-gray-600">Wir liefern in der Regel innerhalb von 1-2 Werktagen nach Bestelleingang.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gastro-navy">Gibt es einen Mindestbestellwert?</h3>
              <p className="text-gray-600">Ja, für kostenlose Lieferungen beträgt der Mindestbestellwert 250€. Bei kleineren Bestellungen erheben wir eine Liefergebühr von 15€.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gastro-navy">In welchem Gebiet liefern Sie?</h3>
              <p className="text-gray-600">Wir liefern in Berlin und Umgebung im Umkreis von 50 km. Für größere Entfernungen kontaktieren Sie uns bitte für individuelle Vereinbarungen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
