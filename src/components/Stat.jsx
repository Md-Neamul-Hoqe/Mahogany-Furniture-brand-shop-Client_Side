import { TbTrophy } from "react-icons/tb";

const Stat = () => {
  return (
    <div className="stats rounded-none bg-primary-light w-full py-28 mt-20">
      <div className="stat flex items-center">
        <div className="stat-figure text-title">
          <TbTrophy className="text-4xl"/>
        </div>
        <div>
          <h5>High Quality</h5>
          <div className="stat-desc leading-snug font-medium text-[20px]">
            crafted from top materials
          </div>
        </div>
      </div>
      <div className="stat flex items-center">
        <div className="stat-figure text-title">
          <TbTrophy className="text-4xl"/>
        </div>
        <div>
          <h5>Warranty Protection</h5>
          <div className="stat-desc leading-snug font-medium text-[20px]">
          Over 2 years
          </div>
        </div>
      </div>
      <div className="stat flex items-center">
        <div className="stat-figure text-title">
          <TbTrophy className="text-4xl"/>
        </div>
        <div>
          <h5>Free Shipping</h5>
          <div className="stat-desc leading-snug font-medium text-[20px]">
          Order over 150 $
          </div>
        </div>
      </div>
      <div className="stat flex items-center">
        <div className="stat-figure text-title">
          <TbTrophy className="text-4xl"/>
        </div>
        <div>
          <h5>24 / 7 Support</h5>
          <div className="stat-desc leading-snug font-medium text-[20px]">
          Dedicated support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
