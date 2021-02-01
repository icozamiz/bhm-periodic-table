import React from "react";

export const useSetBodyModalOpenClass = (isModalShown: boolean) => {
  const modalOpenClassName = "modal-open";

  React.useEffect(() => {
    if (isModalShown) {
      document.body.classList.add(modalOpenClassName);
    } else {
      document.body.classList.remove(modalOpenClassName);
    }

    return () => document.body.classList.remove(modalOpenClassName);
  }, [isModalShown]);
}
