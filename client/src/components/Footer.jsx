const Footer = () => {
  return (
    <footer className="mt-10 border-t border-pink-100 bg-white/70">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} BabyBliss. Demo-only baby products store.
        </p>
        <div className="flex gap-3 text-xs text-gray-500">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
