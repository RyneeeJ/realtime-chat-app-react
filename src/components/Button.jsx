const defaultClass = "tracking-wider transition-all duration-200";

const variants = {
  color: {
    blue: "bg-blue-600 hover:bg-blue-700 text-slate-100",
    white:
      "bg-gray-200 ring-1 ring-inset ring-blue-600 text-blue-600 hover:bg-gray-300",
  },
  size: {
    large: "rounded-lg px-8 py-3 font-bold ",
    medium: "px-6 py-2 rounded-md font-bold ",
    small: "px-5 py-1 rounded-md ",
  },
};

function Button({ children, size, onClick, color, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`${defaultClass} ${variants.size[size]} ${variants.color[color]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
