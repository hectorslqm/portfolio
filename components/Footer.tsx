function Footer() {
  return (
    <footer className="absolute bottom-0 w-full px-4 py-2 text-white/80">
      <div className="mx-auto px-4 flex justify-between items-center">
        {/* Copyright */}
        <div className="text-lg text-white">
          <p>© {new Date().getFullYear()} Hector S. Lazcano</p>
        </div>

        {/*Contact*/}
        <div className="text-sm space-y-2">
          <p>
            <a
              href="https://www.linkedin.com/in/h%C3%A9ctor-samuel-lazcano-quintero-m%C3%A1rmol-48a766148/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a href="tel:+19793262670" className="hover:text-white transition-colors">
              +1 (979) 3 26 26 70
            </a>
          </p>
          <p>
            <a href="mailto:hectorslqm@gmail.com" className="hover:text-white transition-colors">
              hectorslqm@gmail.com
            </a>
          </p>
          <p>College Station, TX</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;