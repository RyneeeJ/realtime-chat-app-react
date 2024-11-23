const defaultClass =
  "bg-blue-600 hover:bg-blue-700 font-bold tracking-wider text-slate-100 transition-all duration-200";

const variants = {
  large: "rounded-lg px-8 py-3",
};

function Button({ children, type, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`${defaultClass} ${variants[type]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
