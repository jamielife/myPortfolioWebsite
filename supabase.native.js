import {createClient, SupabaseClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

export const API_URL = 'https://oqqkzhcqvfmgxrbgbauq.supabase.co';
export const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcWt6aGNxdmZtZ3hyYmdiYXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MDU4MTgsImV4cCI6MjAwMjQ4MTgxOH0.c7aZAjU3Q8ST3y1kHYIgE8NlCbhkFSSSUHmtOoqaXp0';

// Create a single supabase client for interacting with your database
const supabase = createClient(API_URL, API_KEY, { 
    storage: AsyncStorage, 
    autoRefreshToken: true, 
    persistSession: false, 
    detectSessionInUrl: false, 
} );

export default supabase;