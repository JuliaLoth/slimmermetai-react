// Defer non-critical CSS loading to reduce critical path
window.addEventListener('load', function() {
  // Find and prioritize any deferred stylesheets
  var deferredStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
  deferredStyles.forEach(function(link) {
    link.rel = 'stylesheet';
  });
});

// Load Netlify Identity only when needed
if (window.location.pathname.includes('admin')) {
  const netlifyScript = document.createElement('script');
  netlifyScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
  netlifyScript.async = true;
  document.head.appendChild(netlifyScript);
} else {
  // Load on user interaction instead of timeout
  let loaded = false;
  const loadNetlify = () => {
    if (!loaded) {
      loaded = true;
      const netlifyScript = document.createElement('script');
      netlifyScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
      netlifyScript.async = true;
      document.head.appendChild(netlifyScript);
    }
  };
  // Load on first user interaction or after 5 seconds
  document.addEventListener('click', loadNetlify, { once: true });
  document.addEventListener('scroll', loadNetlify, { once: true });
  setTimeout(loadNetlify, 5000);
}
