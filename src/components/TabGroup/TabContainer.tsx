import { useState } from "react";
import TabTitles from "./TabTitles";
import TabGroup, { TabItemProps } from "./TabGroup";
import { PERSONAL_FINANCE, tabItems } from "../../util/constants";

const TabContainer = () => {
  const [active, setActive] = useState<string>(PERSONAL_FINANCE);
  const activeItems: TabItemProps[] = tabItems[active];

  return (
    <>
    <TabTitles setActive={setActive} active={active} />
    <TabGroup items={activeItems} />
    </>
  )
}

export default TabContainer;