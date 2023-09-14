const Hobby = ({ hobby }) => {
  const randomColor = () => Math.floor(Math.random() * 255);
  return (
    <>
      <li
        style={{
          backgroundColor: `rgb(${randomColor()},${randomColor()}, ${randomColor()}, 0.7)`,
        }}
      >
        {hobby}
      </li>
    </>
  );
};

export default Hobby;
