import { useState } from 'react';

let timerId: NodeJS.Timeout;

export const useDebounce = (delay: number = 300): [boolean, any] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSetDebounce = (callback: Function) => {
    clearTimeout(timerId);
    setIsLoading(true);

    timerId = setTimeout(() => {
      callback();

      setIsLoading(false);
    }, delay);
  };

  return [isLoading, handleSetDebounce];
};
