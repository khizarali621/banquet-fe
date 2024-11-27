import { ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: any;
  setActiveTab: any;
  wallet?: boolean;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  wallet,
  className,
}) => {
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div
      className={`${className} w-full bg-[#EBEBEB] rounded-t-3xl xl:px-[18px] px-4 lg:pt-7 pt-5 overflow-x-auto AtScrollHide`}
    >
      <div className="w-full flex xl:gap-9 gap-6 justify-between items-center">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`relative cursor-pointer w-full lg:text-[22px] text-lg whitespace-nowrap lg:pb-5 pb-3 font-poppins ${
              index === activeTab
                ? "text-black font-semibold text-center lg:px-5 px-4"
                : "text-[#00000099] font-normal"
            }`}
            onClick={() => handleTabClick(index)}
          >
            <span className="relative">{tab.label}</span>
            {index === activeTab && (
              <div className="absolute bottom-0 left-0 w-full h-[6px] bg-primary rounded-t-[12px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
