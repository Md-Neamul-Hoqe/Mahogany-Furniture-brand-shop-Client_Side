const Header = () => {
  return (
    <div
      className="hero min-h-screen absolute top-0 px-14"
      style={{
        backgroundImage: 'url("./src/assets/images/banner-image.jpg")',
        backgroundOrigin: "center",
        backgroundSize: "100vw",
      }}>
      <div className="hero-content w-full flex-col lg:flex-row">
        <aside className="card flex-1"></aside>

        {/* right side */}
        <aside className="card flex-1 rounded-[10px] bg-primary-light">
          <div className="card-body">
            <h5 className="font-semibold tracking-[3px]">New Arrival</h5>
            <h2 className="card-title font-bold text-5xl leading-snug text-primary">
              Discover Our <br /> New Collection
            </h2>
            <p>
              Introducing Our Stunning New Collection! Elevate your living
              spaces with our latest furniture arrivals. From sleek modern
              designs to timeless classics, our pieces are crafted to
              perfection. Explore the perfect blend of style and comfort.
              Discover your next favorite piece today!
            </p>
            <div className="card-actions justify-start mt-10">
              <button className="btn btn-lg rounded-none text-white bg-primary">
                Buy Now
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Header;
