// Importation du client Supabase
const {createClient} = require('@supabase/supabase-js');

// Configuration de votre instance Supabase
const supabaseUrl = 'https://btqfempfhyesnpwznwms.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0cWZlbXBmaHllc25wd3pud21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MjY3MzcsImV4cCI6MjAyNzEwMjczN30.s3xknGbdwSrKOBMbO3prFzgKXYWJMD6FgTizC9pqI30';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function fetchProducts() {
  // Exécution de la requête pour récupérer les produits
  const {data: products, error} = await supabase
    .from('Product') // Assurez-vous que le nom de la table est correct
    .select('*'); // Sélection de toutes les colonnes

  // Gestion des erreurs
  if (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    return;
  }

}

fetchProducts();
