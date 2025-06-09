import { useState } from 'react';

function useToggleItems(initialArray, initialPosition = 0) {
  const [index, setIndex] = useState(initialPosition);

  const toggleItem = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialArray.length);
  };

  return [initialArray[index], toggleItem];
}

export default useToggleItems;
