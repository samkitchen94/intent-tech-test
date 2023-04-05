import TabItem from "./TabItem";

const TabGroup = () => {

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-8">
    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
      <TabItem key={item} />
    ))}
    </div>
  )
}

export default TabGroup;