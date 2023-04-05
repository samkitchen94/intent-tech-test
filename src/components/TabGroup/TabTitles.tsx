import { Dispatch, SetStateAction } from "react";
import { titles } from "../../util/constants";
import TabTitle from "./TabTitle";

type TabTitlesProps = {
  setActive: Dispatch<SetStateAction<string>>;
  active: string;
}

const TabTitles = ({ setActive, active }: TabTitlesProps) => {

  return (
    <div className="flex w-full pb-16">
      {titles.map(title => (
        <TabTitle 
          key={title} 
          title={title} 
          setActive={setActive} 
          isActive={active === title} 
        />
      ))}
    </div>
  )
}

export default TabTitles;