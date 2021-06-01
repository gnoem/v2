import { useEffect, useState } from "react";

const useRevealElement = (element, type) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element]);
  return visible ? type : 'revealElement';
}

export default useRevealElement;