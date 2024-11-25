function CurrentUserDetails() {
  return (
    <div className="flex items-center gap-3 p-4">
      <div className="aspect-square w-14 overflow-hidden rounded-full">
        <img src="/default-image.jpg" className="object-cover" />
      </div>
      <div className="font-semibold">imrynegandia@gmail.com</div>
    </div>
  );
}

export default CurrentUserDetails;
