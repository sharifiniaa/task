import { useEffect } from "react";

const useOutsideClick = (ref: React.RefObject<HTMLLIElement>, callback: Function) => {
  const handleClick = (e:MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;