const Footer = () => {
  return (
    <section className="border-t-2">
      <footer className="max-w-5xl mx-auto footer p-10">
        <aside>
          <img src="./src/assets/images/logo.svg" alt="" />
          <p>
            Mahogany Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-primary text-white absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="max-w-5xl mx-auto footer px-10 py-4 border-t">
        <aside className="items-center grid-flow-col">
          <p>2023 Mahogany. All rights reserved</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end"></nav>
      </footer>
    </section>
  );
};

export default Footer;
