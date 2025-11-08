import { createClient } from '@supabase/supabase-js';

const SupaBase_Url = import.meta.env.SUPABASE_URL;
const SupaBase_Key = import.meta.env.SUPABASE_ANON_KEY;
const Spoonacular_Key = import.meta.env.SPOONACULAR;

if (!SupaBase_Url || !SupaBase_Key) throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY');

export const supabase = createClient(SupaBase_Url, SupaBase_Key);