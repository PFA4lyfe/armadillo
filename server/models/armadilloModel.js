import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wmatofpfftfdkyceowna.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtYXRvZnBmZnRmZGt5Y2Vvd25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNjgzOTQsImV4cCI6MjAyNzk0NDM5NH0.hU3wy6gSy6rzZUJqsN7PViqWo2BVQ9eP_SuY-FLpdiA';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;