'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = () => {
      // Check system theme preference
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = isDark ? 'dark' : 'light';
      
      console.log(`🎨 System theme detected: ${theme}`);
      
      // Remove ALL existing favicon-related links to prevent conflicts
      const existingFavicons = document.querySelectorAll(
        'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"], link[rel="apple-touch-icon-precomposed"]'
      );
      existingFavicons.forEach(link => {
        link.remove();
      });
      
      // Define all favicon configurations
      const faviconConfigs = [
        // Standard favicons
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: `/favicon-${theme}.ico`,
          id: 'favicon-ico'
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '16x16', 
          href: `/favicon-${theme}-16x16.png`,
          id: 'favicon-16'
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '32x32', 
          href: `/favicon-${theme}-32x32.png`,
          id: 'favicon-32'
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '48x48', 
          href: `/favicon-${theme}-48x48.png`,
          id: 'favicon-48'
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '96x96', 
          href: `/favicon-${theme}-96x96.png`,
          id: 'favicon-96'
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          sizes: '192x192', 
          href: `/favicon-${theme}-192x192.png`,
          id: 'favicon-192'
        },
        // Apple Touch Icons (iOS)
        { 
          rel: 'apple-touch-icon', 
          sizes: '180x180',
          href: `/favicon-${theme}-180x180.png`,
          id: 'apple-touch-icon-180'
        },
        { 
          rel: 'apple-touch-icon', 
          sizes: '152x152',
          href: `/favicon-${theme}-152x152.png`,
          id: 'apple-touch-icon-152'
        },
        { 
          rel: 'apple-touch-icon', 
          sizes: '167x167',
          href: `/favicon-${theme}-167x167.png`,
          id: 'apple-touch-icon-167'
        },
        // Android Chrome
        { 
          rel: 'icon', 
          type: 'image/png',
          sizes: '384x384',
          href: `/favicon-${theme}-384x384.png`,
          id: 'favicon-384'
        },
        { 
          rel: 'icon', 
          type: 'image/png',
          sizes: '512x512',
          href: `/favicon-${theme}-512x512.png`,
          id: 'favicon-512'
        }
      ];
      
      // Add all favicon links to the document head
      faviconConfigs.forEach(config => {
        const link = document.createElement('link');
        link.id = config.id;
        link.rel = config.rel;
        if (config.type) link.type = config.type;
        if (config.sizes) link.setAttribute('sizes', config.sizes);
        link.href = config.href;
        
        // Add to head
        document.head.appendChild(link);
      });
      
      console.log(`✅ Favicon updated to ${theme} theme`);
      
      // Force browser to refresh favicon by adding timestamp
      const timestamp = new Date().getTime();
      document.querySelectorAll('link[rel*="icon"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('?v=')) {
          link.setAttribute('href', `${href}?v=${timestamp}`);
        }
      });
    };
    
    // Update favicon on mount
    updateFavicon();
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Modern browsers
    const handleChange = (e) => {
      console.log('🔄 Theme changed:', e.matches ? 'dark' : 'light');
      updateFavicon();
    };
    
    // Add event listener (use addEventListener for better compatibility)
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return null;
}
