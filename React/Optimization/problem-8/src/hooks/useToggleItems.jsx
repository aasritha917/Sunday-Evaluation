import { useState } from 'react';

const useToggleItems = (items, initialPosition = 0) => {
  const [index, setIndex] = useState(initialPosition % items.length);

  const toggleItem = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return [items[index], toggleItem];
};

export default useToggleItems;
