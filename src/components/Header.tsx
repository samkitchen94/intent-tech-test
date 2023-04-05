import { memo } from "react";

// eslint-disable-next-line react/display-name
const Header = memo(() => (
  <div className="w-full lg:w-[50%] pb-[50px] mx-auto">
    <h1 className="pb-[10px]">AREAS OF FOCUS</h1>
    <h2 className="pb-[6px]">Discover an Interest or Topic.</h2>
    <h3>Compare rates, crunch numbers and get expert guidance for life’s biggest financial moments.</h3>
  </div>
));

export default Header;