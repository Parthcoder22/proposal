import React, { useState, useEffect, useCallback } from 'react';
import { getResponses, supabase } from '../utils/supabase';
import { Lock, RefreshCw, ArrowLeft, Heart, Clock } from 'lucide-react';

export default function ResponsesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('bhuma_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'bhuma2026';

  const loadData = useCallback(async () => {
    setLoading(true);
    setFetchError('');
    try {
      const data = await getResponses();
      setResponses(data);
    } catch (err) {
      setFetchError(err.message || 'Failed to fetch responses.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch responses once authenticated
  useEffect(() => {
    let ignore = false;
    if (isAuthenticated) {
      getResponses()
        .then((data) => {
          if (!ignore) {
            setResponses(data);
            setFetchError('');
          }
        })
        .catch((err) => {
          if (!ignore) {
            setFetchError(err.message || 'Failed to fetch responses.');
          }
        })
        .finally(() => {
          if (!ignore) {
            setLoading(false);
          }
        });
    }
    return () => {
      ignore = true;
    };
  }, [isAuthenticated]);


  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem('bhuma_admin_auth', 'true');
      } catch {
        // Ignore storage errors
      }
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return '—';
    const date = new Date(isoString);
    return date.toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#3D3232] p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#FFCCD8]">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#876E6C] hover:text-[#E05375] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </a>

          <div className="text-xs font-medium text-[#A68F8E] flex items-center gap-1">
            <Lock className="w-3.5 h-3.5" />
            Developer Access
          </div>
        </div>

        {!isAuthenticated ? (
          /* Password Screen */
          <div className="bg-white/90 backdrop-blur-sm border-2 border-[#FFCCD8] rounded-3xl p-6 sm:p-8 shadow-sm text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#FFEBF0] text-[#E05375] flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <h1 className="font-cute text-2xl font-bold mb-2">Proposal Responses</h1>
            <p className="text-sm text-[#7D6361] mb-6">
              Enter developer password to view logged responses.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-2xl border-2 border-[#FFD0DE] focus:border-[#FF758F] focus:outline-none text-center text-base"
                autoFocus
              />

              {authError && (
                <p className="text-xs font-semibold text-red-500">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#FF8EA3] to-[#FF6B8B] text-white font-bold shadow-md hover:opacity-95 transition-all cursor-pointer"
              >
                View Responses
              </button>
            </form>
          </div>
        ) : (
          /* Responses Dashboard */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-cute text-2xl sm:text-3xl font-bold flex items-center gap-2">
                  <span>Proposal Responses</span>
                  <Heart className="w-5 h-5 text-[#FF758F] fill-[#FF758F]" />
                </h1>
                <p className="text-xs sm:text-sm text-[#876E6C] mt-0.5">
                  Real-time final question choice records from Supabase
                </p>
              </div>

              <button
                onClick={loadData}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#FFCCD8] text-sm font-semibold text-[#664E4C] hover:bg-[#FFF0F4] hover:text-[#E05375] shadow-2xs transition-all cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>

            {/* Config Notice if Supabase is missing */}
            {!supabase && (
              <div className="bg-[#FFF0F2] border border-[#FFCCD8] rounded-2xl p-4 text-sm text-[#664E4C]">
                <p className="font-bold text-[#E03164] mb-1">⚠️ Supabase not yet connected</p>
                <p className="text-xs leading-relaxed">
                  Please add your Supabase credentials in the <code className="bg-white px-1.5 py-0.5 rounded border">.env</code> file:
                  <br />
                  <code className="block bg-white p-2 rounded mt-1.5 font-mono text-[11px]">
                    VITE_SUPABASE_URL=https://your-project.supabase.co<br />
                    VITE_SUPABASE_ANON_KEY=your-anon-key
                  </code>
                </p>
              </div>
            )}

            {/* Summary Counters */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/90 border border-[#FFCCD8] rounded-2xl p-3.5 text-center shadow-2xs">
                <div className="text-xs text-[#876E6C] font-medium">Total Responses</div>
                <div className="text-2xl font-bold text-[#3D3232] mt-0.5">{responses.length}</div>
              </div>

              <div className="bg-[#FFF0F5] border border-[#FFC2D4] rounded-2xl p-3.5 text-center shadow-2xs">
                <div className="text-xs text-[#E03164] font-medium">YES ❤️</div>
                <div className="text-2xl font-bold text-[#E03164] mt-0.5">
                  {responses.filter((r) => r.response === 'YES').length}
                </div>
              </div>

              <div className="bg-[#FFF8FA] border border-[#FFDEE7] rounded-2xl p-3.5 text-center shadow-2xs">
                <div className="text-xs text-[#876E6C] font-medium">NOT READY 🥺</div>
                <div className="text-2xl font-bold text-[#6B5553] mt-0.5">
                  {responses.filter((r) => r.response === 'NOT_READY').length}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {fetchError && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-3.5 text-xs text-red-700">
                {fetchError}
              </div>
            )}

            {/* Records Table / List */}
            <div className="bg-white/95 border-2 border-[#FFCCD8] rounded-3xl overflow-hidden shadow-xs">
              <div className="px-5 py-3.5 bg-[#FFF2F6] border-b border-[#FFCCD8] flex items-center justify-between text-xs font-bold text-[#7D5F66] uppercase tracking-wide">
                <span>Response</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Date / Time
                </span>
              </div>

              {loading && responses.length === 0 ? (
                <div className="py-12 text-center text-sm text-[#876E6C]">
                  Loading responses...
                </div>
              ) : responses.length === 0 ? (
                <div className="py-12 text-center text-sm text-[#876E6C]">
                  No responses recorded yet.
                </div>
              ) : (
                <div className="divide-y divide-[#FFEBF0]">
                  {responses.map((item) => (
                    <div
                      key={item.id}
                      className="px-5 py-4 flex items-center justify-between hover:bg-[#FFF8FA] transition-colors"
                    >
                      <div>
                        {item.response === 'YES' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5ED] text-[#E03164] border border-[#FFBDCE] text-sm font-bold">
                            <span>❤️</span>
                            <span>YES</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F4F6] text-[#6E5553] border border-[#E0DCDF] text-sm font-bold">
                            <span>🥺</span>
                            <span>NOT READY</span>
                          </span>
                        )}
                      </div>

                      <div className="text-xs sm:text-sm font-medium text-[#7D6361] text-right">
                        {formatDate(item.created_at)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
