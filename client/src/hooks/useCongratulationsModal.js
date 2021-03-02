import { useState } from "react";

const useCongratulationsModal = () => {
//   const [isDoubleShowing, setIsDoubleShowing] = useState(false);
  const [isCongratulationsModalShowing, setToggleCongratulationsShowing] = useState(false);

  function toggleCongratulationsModal() {
    setToggleCongratulationsShowing(!isCongratulationsModalShowing);
  }

  return {
    isCongratulationsModalShowing,
    toggleCongratulationsModal,
  };
};

export default useCongratulationsModal;
