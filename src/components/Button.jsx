// eslint-disable-next-line no-unused-vars
function Button({ children, type }) {
  return (
    <button className="rounded-[12px] bg-blue-600 px-8 py-2 font-bold tracking-wider text-slate-100">
      {children}
    </button>
  );
}

export default Button;
