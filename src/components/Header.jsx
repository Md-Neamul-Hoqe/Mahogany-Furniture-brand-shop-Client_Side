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
            <small className="font-semibold tracking-[3px]">New Arrival</small>
            <h1 className="text-primary">
              Discover Our <br /> New Collection
            </h1>
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
