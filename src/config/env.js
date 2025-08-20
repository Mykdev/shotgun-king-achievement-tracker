// Environment configuration for image paths
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Base path for images
// In development: /images/ (relative to dev server root)
// In production: /shotgun-king-achievement-tracker/images/ (GitHub Pages base path)
export const getImageBasePath = () => {
  const basePath = isDevelopment ? '/shotgun-king-achievement-tracker/public/images/' : 'images/';
  
  // Log the environment and base path for debugging
  if (isDevelopment) {
    console.log('🔧 Development mode - using base path:', basePath);
  } else {
    console.log('🚀 Production mode - using base path:', basePath);
  }
  
  return basePath;
};

// Fallback image path
export const getFallbackImagePath = () => {
  const fallbackPath = isDevelopment ? '/shotgun-king-achievement-tracker/public/images/Image_missing.png' : 'images/Image_missing.png';
  return fallbackPath;
};
