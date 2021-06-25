import { useEffect, useState } from "react";

const useRevealElement = (element: HTMLElement, type: string): string => {
  const [visible, setVisible] = useState<boolean>(false);
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