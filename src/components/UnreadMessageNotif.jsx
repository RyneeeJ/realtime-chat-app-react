function UnreadMessageNotif({ count, type }) {
  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-slate-100 ${type === "single" && "ml-2 md:ml-4"}`}
    >
      <span>{count}</span>
    </div>
  );
}

export default UnreadMessageNotif;
