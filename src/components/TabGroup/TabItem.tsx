import Image from 'next/image';
import Cash from "public/cash.svg";

const TabItem = () => {

  return (
    <div className="p-8 item-grid">
      <Image className="mx-auto" src={Cash} alt="cash" width={240} height={150} />
      <h5 className="text-center pb-2">hello test</h5>
      <p className="text-center">Compare rates, crunch numbers and get expert guidance for life.</p>
    </div>
  );
}

export default TabItem;
