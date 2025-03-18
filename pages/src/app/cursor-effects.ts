'use client';

export function initCursorEffects() {
  if (typeof window === 'undefined') return () => {};

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const elements = document.querySelectorAll('.ancient-card, .contribution-card, .quote-card, .interactive');
    
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const rect = element.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;
        
        element.style.setProperty('--mouse-x', `${x}%`);
        element.style.setProperty('--mouse-y', `${y}%`);
      }
    });
  };

  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove);

  // Cleanup function
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
} 