"use client";

const Background = () => {
  return (
    <div
      className="absolute -left-8 -top-8 right-0 bottom-0 z-0 pointer-events-none bg-main-50"
      style={{
        //backgroundImage: 'url("/pattern.svg")',
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    />
  );
};

export default Background;
