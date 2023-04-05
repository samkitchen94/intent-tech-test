import { Dispatch, SetStateAction } from "react";

type TabTitleProps = {
  title: string;
  setActive: Dispatch<SetStateAction<string>>;
  isActive: boolean;
}

const TabTitle = ({ title, setActive, isActive }: TabTitleProps) => {

  return (
    <div className="cursor-pointer text-center flex-1 px-2">
      <h4 
        className="pb-[10px]" 
        onClick={() => setActive(title)}
      >
        {title}
      </h4>
      {isActive && (
        <div className="sm:w-1/3 w-full h-[4px] bg-category-yellow mx-auto" />
      )}
    </div>
  );
}

export default TabTitle;