import OpenAI from 'openai';
import { createClient } from "@supabase/supabase-js";

/** OpenAI config */
if (!process.meta.process.env.VITE_OPENAI_API_KEY) throw new Error("OpenAI API key is missing or invalid.");
export const openai = new OpenAI({
  apiKey: meta.process.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

/** Supabase config */
const privateKey = process.meta.process.env.VITE_SUPABASE_API_KEY;
if (!privateKey) throw new Error(`Expected env var VITE_SUPABASE_API_KEY`);
const url = process.meta.process.env.VITE_SUPABASE_URL;
if (!url) throw new Error(`Expected env var VITE_SUPABASE_URL`);
export const supabase = createClient(url, privateKey);