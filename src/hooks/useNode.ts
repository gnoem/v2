import { useCallback, useState } from "react";

const useNode = (): [HTMLElement, React.LegacyRef<HTMLDivElement>] => {
  const [element, setElement] = useState<HTMLElement | undefined>(null);
  const ref = useCallback(node => {
    if (node) setElement(node);
  }, []);
  return [element, ref];
}

export default useNode;