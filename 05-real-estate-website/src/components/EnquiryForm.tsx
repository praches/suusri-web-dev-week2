import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, CheckCircle2, AlertCircle, X, Building2 } from 'lucide-react';
import { type Property, properties } from '@/data';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface EnquiryFormProps {
  selectedProperty: Property | null;
  onClose: () => void;
}

export default function EnquiryForm({ selectedProperty, onClose }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [propertyId, setPropertyId] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedProperty) {
      setPropertyId(selectedProperty.id);
      setMessage(`I am interested in "${selectedProperty.title}" in ${selectedProperty.location}. Please contact me with more information.`);
    }
  }, [selectedProperty]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in your name and email.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const property = properties.find((p) => p.id === propertyId);
    const { error } = await supabase.from('property_enquiries').insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      property_id: propertyId || null,
      property_title: property?.title || null,
      message: message.trim() || null,
      preferred_date: preferredDate || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setPreferredDate('');
    setPropertyId('');
  };

  return (
    <section id="enquiry" className="py-24 bg-cream-50">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Property Enquiry</h2>
            <p className="text-slate-500 text-lg mt-4 font-light leading-relaxed">
              Interested in a property or want to schedule a viewing? Send us a message and one of our
              expert agents will get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-champagne-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-champagne-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Visit Our Office</p>
                  <p className="text-sm text-slate-400">1200 Madison Avenue, New York, NY 10128</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-champagne-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Send className="w-5 h-5 text-champagne-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Call or Email</p>
                  <p className="text-sm text-slate-400">+1 (212) 555-0100 · hello@luxestate.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 relative">
            {selectedProperty && (
              <div className="mb-5 p-3 bg-champagne-50 rounded-lg flex items-center justify-between">
                <span className="text-sm text-slate-600">
                  Enquiring about: <strong className="text-champagne-700">{selectedProperty.title}</strong>
                </span>
                <button onClick={() => { onClose(); setPropertyId(''); }} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-champagne-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-500">
                  Your enquiry has been received. One of our agents will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-6"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      Full Name <span className="text-champagne-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:border-champagne-400 focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      Email <span className="text-champagne-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:border-champagne-400 focus:outline-none transition-colors"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-cream-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:border-champagne-400 focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 bg-cream-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:border-champagne-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5">Property of Interest</label>
                  <select
                    value={propertyId}
                    onChange={(e) => setPropertyId(e.target.value)}
                    className="w-full px-4 py-3 bg-cream-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:border-champagne-400 focus:outline-none transition-colors"
                  >
                    <option value="">General Enquiry</option>
                    {properties.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} — {p.location}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-cream-50 border border-slate-200 rounded-md text-sm text-slate-700 focus:border-champagne-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
                  {status !== 'submitting' && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
