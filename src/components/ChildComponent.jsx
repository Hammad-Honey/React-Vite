import React, { useRef } from 'react';

function Counter() {
  const countRef = useRef(0); // Initialize with 0

  const handleClick = () => {
    countRef.current += 1; // Mutate the value directly
    console.log(`Current count: ${countRef.current}`);
  };

  return (
    <div>
      <p>Count (in console, UI won't update): {countRef.current}</p>
      <button onClick={handleClick}>Increment Ref</button>
    </div>
  );
}


import { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Runs after every render by default
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default {Counter, ExampleComponent};