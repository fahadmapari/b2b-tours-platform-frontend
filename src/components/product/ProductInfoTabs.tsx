"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const SECTIONS = [
  "General Info",
  "Meeting Point",
  "You will see",
  "You will learn",
];

interface ProductInfoTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function ProductInfoTabs({ activeTab, setActiveTab }: ProductInfoTabsProps) {
  return (
    <Tabs
      className="w-full sticky top-4 z-10"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <TabsList className="bg-white/25 backdrop-blur-2xl h-12 w-full flex gap-4">
        {SECTIONS.map((section) => (
          <TabsTrigger
            key={section}
            value={section}
            onClick={() => {
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className={cn(
              activeTab === section && "!bg-green-700 text-white",
              "py-5 cursor-pointer text-base font-medium bg-white"
            )}
          >
            {section}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default ProductInfoTabs;
