import TabItem from "./TabItem";

export type TabItemProps = {
  icon: string,
  header: string,
  subheader: string,
}
const TabGroup = ({ items }: {items: TabItemProps[]}) => {

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
    {items.map((item, i)=> (
      <TabItem key={`${item.header}-${i}`} item={item} />
    ))}
    </div>
  )
}

export default TabGroup;