let root = document.querySelector("#root");

const link = [
  {
    title: "Company",
    petro: "About Us",
    kote: "Teams",
    koba: "Careers",
    saba: "Contact",
  },
  {
    title: "Services",
    petro: "All Products ",
    kote: "News",
    koba: "Blogs",
    saba: "Comming Soon",
  },
  {
    title: "Pricing",
    petro: "Overview",
    kote: "Pro Plans",
    koba: "Affiliate Program",
    saba: "Promotions",
  },
  {
    title: "Help",
    petro: "FAQ",
    kote: "Support",
    koba: "Documentation",
    saba: "Privacy Policy",
  },
];
const meore = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-mail-open-icon lucide-mail-open"
      >
        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
      </svg>
    ),
    title: "Info@exemple.com",
  },
  {
    call: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-phone-icon lucide-phone"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
    title2: "+1 123 456 7890",
  },
  {
    location: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-map-pin-icon lucide-map-pin"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title3: "1234  Main Street, City, State, ZIP",
  },
];

const kote = (
  <div className="max-w-[1500px] m-auto ">
    <h1 className="text-[32px] font-bold mb-[48px]">Logo Template</h1>
    <div className="flex  text-[20px] gap-[110px] mb-[48px]">
      {link.map((misamartebi, index) => (
        <ul
          key={misamartebi}
          className="kote text=[#1A1A1A] flex  flex-col gap-[10px]"
        >
          <li className="font-semibold"> {misamartebi.title}</li>
          <li>{misamartebi.petro}</li>
          <li>{misamartebi.kote}</li>
          <li>{misamartebi.koba}</li>
          <li> {misamartebi.saba}</li>
        </ul>
      ))}
    </div>
    <div className=" div2 flex text-[18px] gap-[80px] mb-[48px]">
      {meore.map((iconebi, index) => (
        <ul key={iconebi} className="kote2 flex gap-[8px] ">
          <li>{iconebi.icon}</li>
          <li>{iconebi.title}</li>
          <li>{iconebi.call}</li>
          <li>{iconebi.title2}</li>
          <li> {iconebi.location}</li>
          <li> {iconebi.title3}</li>
        </ul>
      ))}
    </div>
    <hr className="max-w-[60%] bg-[red] text-[#EAEAEA] mb-[48px]" />
    <p className="text-[18px] text-[#8E8E8E]">
      Copyright © 2023 - All rights Reserved
    </p>
  </div>
);
ReactDOM.createRoot(root).render(kote);
