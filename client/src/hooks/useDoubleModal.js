import { useState } from "react";

const useDoubleModal = () => {
  const [isDoubleShowing, setIsDoubleShowing] = useState(false);

  function doubletoggle() {
    setIsDoubleShowing(!isDoubleShowing);
  }

  return {
    isDoubleShowing,
    doubletoggle,
  };
};

export default useDoubleModal;
