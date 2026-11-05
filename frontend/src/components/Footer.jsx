
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm text-center md:text-left">
          © {currentYear}{" "}
          <a 
            href="https://3dev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-blue-400 transition"
          >
            3DEV
          </a>
          . All Rights Reserved.
        </p>
        
        <p className="text-xs text-gray-400">
          Built with ❤️ by 3DEV
        </p>
      </div>
    </footer>
  );
};

export default Footer;