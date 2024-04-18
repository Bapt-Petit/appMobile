import 'react-native-url-polyfill/auto'
import {createClient, SupabaseClient} from '@supabase/supabase-js';

const supabaseUrl: string = 'https://btqfempfhyesnpwznwms.supabase.co';
const supabaseAnonKey: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0cWZlbXBmaHllc25wd3pud21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MjY3MzcsImV4cCI6MjAyNzEwMjczN30.s3xknGbdwSrKOBMbO3prFzgKXYWJMD6FgTizC9pqI30';

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey,
);


