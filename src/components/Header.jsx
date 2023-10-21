const Header = () => {
  return (
    <div
      className="hero min-h-screen absolute top-0 md:px-14"
      style={{
        backgroundImage: 'url("https://i.ibb.co/ryyFs32/banner-image.jpg")',
        backgroundOrigin: "center",
        backgroundSize: "100vw 100%",
      }}>
      <div className="hero-content w-full flex-col lg:flex-row my-10 md:my-auto">
        <aside className="card flex-1 max-lg:h-40"></aside>

        {/* right side */}
        <aside className="card flex-1 rounded-[10px] bg-primary-light">
          <div className="card-body">
            <small className="font-semibold tracking-[3px]">New Arrival</small>
            <h1 className="text-primary max-sm:text-3xl">
              Discover Our <br /> New Collection
            </h1>
            <p className="text-body">
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
