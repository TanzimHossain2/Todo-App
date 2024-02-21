const RightSide = () => {
  return (
    <div className="relative">
      <img
        src="image.jpg"
        alt="img"
        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
      />

      <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
        <span className="text-cyan-50 text-xl">
          We've been uesing Untitle to kick"
          <br />
          start every new project and can't <br />
          imagine working without it."
        </span>
      </div>
    </div>
  );
};

export default RightSide;
