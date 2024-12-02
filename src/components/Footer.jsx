const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black special-font ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center uppercase text-xs font-light md:text-left">
          &copy; zentry clone 2024. All rights reserved
        </p>

        <p className="text-center text-sm font-light hover:underline md:text-right">
          <a
            href="https://github.com/Fortstar09/sentry"
            target="_blank"
            className="mr-4"
          >
            Github.
          </a>
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
