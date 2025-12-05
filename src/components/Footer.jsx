const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} E-Waste Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
