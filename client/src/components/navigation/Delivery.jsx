import { Link } from "react-router-dom";

export default function Delivery() {
  return (
    <div className="mx-auto w-8/12 pt-16">
      <div className="flex justify-center text-4xl font-bold">
        Orders & delivery
      </div>

      <div>
        <div>
          <h1 className="mt-7 border-b text-2xl font-bold">Daytime</h1>
          <p className="mt-4">
            Daytime delivery goes from 8:00 to 22:50. The delivery cost is
            $2.39, and the estimated delivery duration is approximately 40
            minutes. Please keep in mind that delivery duration may vary during
            busy times, as well as due to weather and road conditions.
          </p>
        </div>
        <div>
          <h1 className="mt-7 border-b text-2xl font-bold"> Nighttime </h1>
          <p className="mt-4">
            Nighttime delivery is available from 22:50 to 8:00. The minimum
            order cost is $15.00, excluding the nighttime delivery rate of
            $3.99. The delivery rate of $3.99 applies regardless of the order
            value and is only available within London&apos;s delivery area.
          </p>
        </div>
        <div>
          <h2 className="mt-7 border-b text-2xl font-bold">Order by phone</h2>
          <p className="mt-4">
            To order by phone, please contact the call-center operator at 020
            7946 0732. You can place an order for delivery or pre-order at any
            of our restaurants.
          </p>
        </div>
        <div>
          <h2 className="mt-7 border-b text-2xl font-bold">Online orders</h2>
          <p className="mt-4">
            When ordering online, our call-center operator will call you within
            7 minutes after you place your order to confirm it. It is essential
            to provide your correct contact phone number so that our operator
            can reach you. If you do not receive a call back, please contact us
            at the phone number 020 7946 0732. Any orders that are not confirmed
            will be canceled.
          </p>
        </div>
        <div>
          <h2 className="mt-7 border-b text-2xl font-bold">Payments</h2>
          <p className="mt-4">
            We accept cash upon receipt of the order or credit cards (VISA,
            MasterCard, Maestro) upon receipt of the order. We also accept
            credit card payments through our website.
          </p>
        </div>
      </div>
      <div>
        <h2 className="mt-7 border-b text-2xl font-bold">Order receipt</h2>
        <p className="mt-4">
          Upon receipt of the order, please ensure that you obtain a fiscal
          receipt and a slip-check (if you paid by credit card). If you require
          any additional documents, please request them in advance from our
          call-center operator. After receiving your order, please check the
          order number and range against the check.
        </p>
      </div>
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
