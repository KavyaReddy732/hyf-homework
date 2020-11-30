import React, { useState, useEffect } from 'react';
export function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
   setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, [count]);

  return (
    <>
      <p>you have used {count} seconds on this website</p>
    </>
  );
}