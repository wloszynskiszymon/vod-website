import PageNotFoundIcon from "@/assets/icons/PageNotFoundIcon";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-center h-screen w-screen">
      <PageNotFoundIcon
        className="h-20 w-20 md:h-28 md:w-28 lg:h-40 lg:w-40"
        fill="#d8b4fe"
      />
      <div className="ml-6 flex flex-col gap-2 lg:gap-4">
        <h1 className="text-3xl font-extrabold uppercase text-purple-300 md:text-[3rem] lg:text-[4rem]">
          Page not found
        </h1>
        <p className="mb-2 px-1 text-sm font-semibold tracking-tighter text-white drop-shadow-2xl transition duration-200 md:text-lg lg:text-xl">
          Page you are looking for does not seem to exist.
        </p>
        <Link
          className="md:text-md h-fit w-fit rounded-md bg-purple-700 p-2 text-sm text-white"
          href="/"
        >
          Go back to home page
        </Link>
      </div>
    </section>
  );
}
