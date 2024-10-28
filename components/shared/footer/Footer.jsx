export default function Footer() {
  return (
    <footer className="w-11/12 2xl:w-10/12 mx-auto text-white grid grid-cols-4 px-8 py-10 bg-dark-blue rounded-xl shadow-xl">
      <section className="flex flex-col gap-4">
        <h5 className="font-bold text-white text-xl">Get to Know Us</h5>
        <ul className="flex flex-col gap-1">
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Tours</li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h5 className="font-bold text-white text-xl">Make Money With Us</h5>
        <ul className="flex flex-col gap-1">
          <li>Sell Products on Amazon</li>
          <li>Sell Apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub</li>
          <li>See More Make Money with Us</li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h5 className="font-bold text-white text-xl">Let Us Help You</h5>
        <ul className="flex flex-col gap-1">
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Amazon Assistant</li>
          <li>Help</li>
        </ul>
      </section>
      <section className="flex flex-col gap-4">
        <h5 className="font-bold text-white text-xl">
          Amazon Payment Products
        </h5>
        <ul className="flex flex-col gap-1">
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
      </section>
    </footer>
  );
}
