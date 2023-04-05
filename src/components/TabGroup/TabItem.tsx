import Image from 'next/image';
import { TabItemProps } from './TabGroup';

const TabItem = ({ item }: { item: TabItemProps }) => (
  <div className="p-8 item-grid cursor-pointer">
    <Image className="mx-auto" src={item.icon} alt="cash" width={240} height={150} />
    <h5 className="text-center pb-2">{item.header}</h5>
    <p className="text-center">{item.subheader}</p>
  </div>
);

export default TabItem;
