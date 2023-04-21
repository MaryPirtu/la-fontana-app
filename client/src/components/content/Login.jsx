import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section>
      <div className="mx-auto flex flex-col items-center justify-center">
        <a
          href="#!"
          className="mb-8 mt-8 flex items-center text-3xl font-semibold"
        >
          Log in
        </a>

        <div className="relative mb-12 flex w-[600px] items-center justify-center overflow-hidden rounded-lg shadow before:absolute before:h-[180%] before:w-[50%] before:animate-move-circle before:bg-gradient-to-r before:from-bgSlate before:to-colorYellow before:content-[''] after:absolute after:inset-1 after:rounded-lg after:bg-stone after:content-[''] ">
          <div className="relative z-20 w-full rounded-lg p-16">
            <h1 className="mb-6 text-2xl font-bold italic tracking-wider">
              Returning Customers
            </h1>
            <form className="space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your email
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border p-2.5 text-stone"
                    placeholder="Enter your email address"
                    required=""
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border p-2.5 text-stone"
                    required=""
                  />
                </label>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex">
                  <label htmlFor="remember" className="flex text-stone">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border"
                      required=""
                    />
                  </label>
                  <p className="ml-3 text-sm">Remember me</p>
                </div>
                <div className="flex">
                  <a href="#!" className="text-sm font-medium hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-colorYellow px-5 py-2.5 text-center text-sm font-medium"
              >
                Sign in
              </button>
              <p className="text-sm font-light">
                Do not have an account yet?{" "}
                <Link to="/registration">
                  <a href="#!" className="ml-2 font-medium hover:underline">
                    Sign up
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
