import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-black text-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Image Section */}
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mint-300 via-black/70 to-pitch-700"></div>
        </aside>

        {/* Form Section */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">
              Welcome Back!
            </h1>
            <p className="mb-8 text-gray-300 text-center">
              Login to access your workspace and keep conquering your goals.
            </p>

            {/* SignIn Component */}
            <div className="bg-pitch-800 shadow-lg rounded-lg p-8">
              <SignIn />
            </div>

            {/* Additional Info */}
            <p className="mt-8 text-center text-gray-400">
              Don’t have an account?{" "}
              <a
                href="/sign-up"
                className="text-mint-300 hover:text-mauve-400 underline"
              >
                Sign up here
              </a>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}
