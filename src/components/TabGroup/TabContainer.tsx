import { useState } from "react";
import TabTitles from "./TabTitles";
import TabGroup, { TabItemProps } from "./TabGroup";
import { PERSONAL_FINANCE, tabItems } from "../../util/constants";

const TabContainer = () => {
  const [active, setActive] = useState<string>(PERSONAL_FINANCE);
  const activeItems: TabItemProps[] = tabItems[active];

  return (
    <div className="max-w-[1140px] w-full px-8 mx-auto">
    <TabTitles setActive={setActive} active={active} />
    <TabGroup items={activeItems} />
    </div>
  )
}

export default TabContainer;