import Link from "next/link";

const PageNotFound= () => {
  return (
    <>
      <main className="flex pt-5 justify-center bg-slate-300 sm:text-5xl h-screen">
        <div className="text-center">
          <h1>Page not found!!</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn't finde the page you are looking for
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-slate-400 px-3.5 py-2.5 text-sm font-semibold text-slate-300 shadow-sm hover:bg-slate-600 focus-visible:outline"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound
