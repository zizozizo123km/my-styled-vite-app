import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < 10) {
        // Ignore minor movements
        return;
      }

      if (scrollY > lastScrollY && scrollY > 70) {
        // Scrolling down past the initial header area
        setScrollDirection("down");
      } else if (scrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection("up");
      } else if (scrollY <= 70) {
        // At the very top
        setScrollDirection("top");
      }

      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener("scroll", updateScrollDirection);

    // Initial check
    updateScrollDirection();

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [lastScrollY]);

  return scrollDirection;
};

export default useScrollDirection;