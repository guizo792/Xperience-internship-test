const Button = ({ children }) => {
  return (
    <button className="flex justify-around items-center border border-gray-300 rounded text-gray-900 text-sm font-bold gap-2 px-2">
      {children.map((child, index) => (
        <span key={index}>{child}</span>
      ))}
    </button>
  );
};

export default Button;
