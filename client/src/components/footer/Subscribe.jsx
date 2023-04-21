export default function Subscribe() {
  return (
    <div>
      <div className="mb-[30px] flex flex-row items-center justify-start">
        <input
          className="overflow-visible py-[15px] px-[20px] text-stone"
          type="email"
          id="email"
          pattern=".+@globex\.com"
          size="30"
          placeholder="Enter your email address"
        />
        <input
          className="text-normal ml-[7px] rounded-sm border py-[15px] px-[20px]"
          type="submit"
          value="SUBSCRIBE"
        />
      </div>
    </div>
  );
}
