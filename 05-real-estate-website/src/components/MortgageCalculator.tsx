import { useState, useMemo } from 'react';
import { Calculator, DollarSign, Percent } from 'lucide-react';

export default function MortgageCalculator() {
  const [price, setPrice] = useState(2000000);
  const [downPayment, setDownPayment] = useState(400000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const monthly = useMemo(() => {
    const principal = price - downPayment;
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    if (monthlyRate === 0) return principal / numPayments;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  }, [price, downPayment, rate, years]);

  const totalPaid = monthly * years * 12;
  const totalInterest = totalPaid - (price - downPayment);

  return (
    <section className="py-24 bg-cream-100">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">Plan Your Investment</span>
            <h2 className="section-title">Mortgage Calculator</h2>
            <p className="text-slate-500 text-lg mt-4 font-light leading-relaxed">
              Get an instant estimate of your monthly mortgage payment. Adjust the sliders to explore
              different scenarios and find the right budget for your new home.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Monthly</p>
                <p className="font-serif text-2xl text-champagne-600 font-medium">
                  ${Math.round(monthly).toLocaleString()}
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Total Interest</p>
                <p className="font-serif text-2xl text-slate-700 font-medium">
                  ${Math.round(totalInterest).toLocaleString()}
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Total Paid</p>
                <p className="font-serif text-2xl text-slate-700 font-medium">
                  ${Math.round(totalPaid).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-champagne-500/10 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-champagne-500" />
              </div>
              <h3 className="font-serif text-xl text-slate-900">Payment Estimator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-600 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-champagne-500" />
                    Home Price
                  </label>
                  <span className="font-serif text-lg text-slate-900">
                    ${price.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="50000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-champagne-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>$500K</span>
                  <span>$10M</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-600">Down Payment</label>
                  <span className="font-serif text-lg text-slate-900">
                    ${downPayment.toLocaleString()}
                    <span className="text-sm text-slate-400 ml-1">
                      ({Math.round((downPayment / price) * 100)}%)
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={price * 0.5}
                  step="10000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full accent-champagne-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-600 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-champagne-500" />
                    Interest Rate
                  </label>
                  <span className="font-serif text-lg text-slate-900">{rate}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-champagne-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-slate-600">Loan Term</label>
                  <span className="font-serif text-lg text-slate-900">{years} years</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 15, 20, 30].map((y) => (
                    <button
                      key={y}
                      onClick={() => setYears(y)}
                      className={`py-2.5 text-sm font-medium rounded-md transition-all ${
                        years === y
                          ? 'bg-champagne-500 text-white'
                          : 'bg-cream-100 text-slate-600 hover:bg-cream-200'
                      }`}
                    >
                      {y} yr
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Estimated Monthly Payment</span>
                  <span className="font-serif text-3xl text-champagne-600 font-medium">
                    ${Math.round(monthly).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
