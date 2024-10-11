import Logo from "@/assets/Logo";

const Footer = () => {
  return (
    <footer className="flex-center h-full w-full flex-col bg-gray-950 bg-gradient-to-r from-gray-950 via-[rgb(18,29,40)] to-gray-950 px-12 py-8">
      <Logo className="h-32 w-auto scale-150" withSubtitle />
      <a
        className="mb-2 border-b-2 border-blue-300 px-1 text-sm font-semibold tracking-tighter text-blue-300 drop-shadow-2xl transition duration-200 md:text-lg"
        href="https://developers.themoviedb.org/3"
        rel="noreferrer"
        target="_blank"
      >
        API
      </a>
      <a
        href="https://github.com/wloszynskiszymon"
        target="_blank"
        rel="noreferrer"
        className="text-gray-600 underline-offset-2 hover:underline"
      >
        Copyright &#169; 2023 Szymon (GITHUB)
      </a>
    </footer>
  );
};
export default Footer;
