import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;


// Create client only if configuration is provided
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Get or create an anonymous session ID for the current visitor.
 * Does not collect any personal data or IP.
 */
export function getSessionId() {
  const KEY = 'bhuma_proposal_sid';
  try {
    let sid = localStorage.getItem(KEY);
    if (!sid) {
      if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        sid = crypto.randomUUID();
      } else {
        sid = 'sid_' + Math.random().toString(36).slice(2) + '_' + Date.now();
      }
      localStorage.setItem(KEY, sid);
    }
    return sid;
  } catch {
    return 'temp_sid_' + Math.random().toString(36).slice(2);
  }
}

/**
 * Silently records the response in the background.
 * Will not throw or interrupt the user experience under any circumstance.
 * @param {'YES' | 'NOT_READY'} responseType
 */
export async function recordResponse(responseType) {
  try {
    if (!supabase) {
      console.warn('[Tracking] Supabase credentials not set in .env. Skipping record.');
      return;
    }

    const sessionId = getSessionId();

    const { error } = await supabase
      .from('proposal_responses')
      .insert([
        {
          response: responseType,
          session_id: sessionId,
        },
      ]);

    if (error) {
      console.error('[Tracking] Background insert notice:', error.message);
    }
  } catch (err) {
    // Fail silently in background
    console.error('[Tracking] Unexpected notice:', err);
  }
}

/**
 * Fetch all responses for the developer view
 */
export async function getResponses() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
  }

  const { data, error } = await supabase
    .from('proposal_responses')
    .select('id, response, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
}
