import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="mx-auto w-8/12 pt-16">
      <h1 className="flex justify-center text-4xl font-bold">Contact us</h1>
      <p className="mt-9 text-lg">
        We&apos;re always happy to hear from our customers! <br /> If you have
        any questions, comments, or feedback, please don&apos;t hesitate to get
        in touch with us. <br /> Here are the best ways to contact us:
      </p>
      <div className="mt-4 text-lg">Email: info@lafontana.com </div>
      <div className="mt-4 text-lg">Phone: 0800 328 6081</div>
      <div className="mt-4 text-lg">
        Address: 1-13 St Giles High St, London, WC2H 8AG
      </div>
      <p className="mt-4 text-lg">
        Our head office is open every day from 9:00 to 17:00, so feel free to
        call or email us at any time during those hours. If you&apos;d like to
        visit us in person, our restaurant is located in the heart of London,
        just a few blocks from the main square. <br />
        <br /> We take customer service very seriously, and we&apos;ll do our
        best to respond to your inquiry as soon as possible. Whether you have a
        question about our menu, a suggestion for how we can improve our
        service, or just want to say hello, we&apos;re here to help. <br />
        <br /> Thank you for choosing our restaurant, and we hope to hear from
        you soon!
      </p>
      <div className="flex justify-center pt-9">
        <Link to="/menu">
          <button
            type="button"
            className="rounded-lg border-2 border-solid border-colorYellow py-3 px-14 text-lg font-bold transition  hover:bg-colorYellow hover:text-stone hover:delay-200"
          >
            BACK TO MENU
          </button>
        </Link>
      </div>
    </div>
  );
}
