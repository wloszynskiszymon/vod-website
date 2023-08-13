const SliderDot = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
        props.isActive ? 'bg-white' : 'bg-gray-500'
      }`}
    ></div>
  );
};

export default SliderDot;
