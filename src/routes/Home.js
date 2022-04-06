import React, { useState } from 'react';

const Home = () => {
  const [ewitt, setEwitt] = useState('');
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEwitt(value);
    console.log('ewitt', ewitt);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Home🦁</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={ewitt}
          type="text"
          placeholder="흔적을 남겨주세요."
        />
      </form>
    </>
  );
};

export default Home;
