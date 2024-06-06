module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],

  darkMode: 'media', // ou 'class' selon votre préférence

  theme: {
    extend: {
      colors: {
        // Ajoutez vos couleurs personnalisées ici
        primary: '#3490dc', // Couleur principale
        secondary: '#f59e0b', // Couleur secondaire
        accent: '#ffed4a', // Couleur d'accentuation
        dark: '#1a202c', // Fond sombre
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
