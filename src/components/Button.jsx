const defaultClass = "tracking-wider transition-all duration-200";

const variants = {
  color: {
    blue: "bg-blue-600 hover:bg-blue-700 text-slate-100",
    white:
      "bg-slate-100 ring-1 ring-inset ring-blue-600 text-blue-600 hover:bg-gray-200",
  },
  size: {
    large: "rounded-lg px-8 py-3 font-bold",
    medium: "px-6 py-2 rounded-md font-bold",
    small:
      "px-3 py-1 xs:px-5 rounded-md sm:text-lg sm:px-6 md:text-base lg:text-lg",
  },
};

function Button({ children, size, onClick, color, disabled, ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${defaultClass} ${variants.size[size]} ${variants.color[color]} ${disabled && "cursor-progress"}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
