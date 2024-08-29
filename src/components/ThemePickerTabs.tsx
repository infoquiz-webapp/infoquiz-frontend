import { Tabs, Tab } from "@nextui-org/tabs";
import { Icon, Monitor, Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import { Key, ReactNode } from "react";

const ThemesIcons: Record<string, ReactNode> = {
  light: (
    <Sun1
      className="size-6"
      variant="Bold"
    />
  ),
  dark: (
    <Moon
      className="size-6"
      variant="Bold"
    />
  ),
  system: (
    <Monitor
      className="size-6"
      variant="Bold"
    />
  ),
};

const ThemePickerTabs = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <Tabs
      classNames={{
        base: "w-full",
        tab: "h-auto py-2",
        tabList:
          "w-full bg-default-100 dark:bg-background border-[.5px] border-default-200",
        cursor:
          "bg-background dark:bg-default-100 border-[.5px] border-default-200 shadow-none",
      }}
      radius="lg"
      variant={"solid"}
      selectedKey={theme}
      onSelectionChange={(key: Key) => setTheme(key.toString() as any)}
    >
      {themes.map((t, i) => (
        <Tab
          key={t}
          title={ThemesIcons[t]}
        />
      ))}
    </Tabs>
  );
};

export default ThemePickerTabs;
