import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://dupfnmiinihgxrdbbabi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1cGZubWlpbmloZ3hyZGJiYWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NTM3MTYsImV4cCI6MjAzNDIyOTcxNn0.ve4RBm4CYTctIAH6H1bLtHkZzQdfcZFEO7oTopS9hrc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
