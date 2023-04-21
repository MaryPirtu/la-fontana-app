export default function FooterNav() {
  const footerList = [
    {
      title: "Company",
      items: ["Career", "Feedback", "Contacts"],
    },
    {
      title: "Services",
      items: ["Gift Card", "Corporate clients", "Kids parties", "Banquets"],
    },
    {
      title: "Delivery",
      items: ["London", "Manchenster", "Liverpool", "Comrat", "Birmingham"],
    },
  ];

  return (
    <div className="flex h-[228px] w-[60%] justify-between">
      {footerList.map((item) => (
        <div className="w-1/6">
          <div className="mb-[25px] pr-[30px] text-lg text-colorYellow">
            {item.title}
          </div>
          <ul className="text-sm text-[rgba(255,255,255,.2)] ">
            {item.items.map((el) => (
              <li className="text-amber-400 mb-[15px] cursor-pointer transition hover:text-[#fff] hover:delay-100">
                {el}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
