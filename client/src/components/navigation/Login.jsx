export default function Login() {
  return (
    <section>
      <div className="mx-auto flex flex-col items-center justify-center">
        <a
          href="#!"
          className="mb-16 mt-12 flex items-center text-4xl font-semibold"
        >
          Log in
        </a>
        <div className="mb-24 w-[600px] rounded-lg border shadow">
          <div className="p-16">
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
              {/* Закрытие */}
              <button
                type="submit"
                className="w-full rounded-lg bg-colorYellow px-5 py-2.5 text-center text-sm font-medium"
              >
                Sign in
              </button>
              <p className="text-sm font-light">
                Do not have an account yet?{" "}
                <a href="#!" className="ml-2 font-medium hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
