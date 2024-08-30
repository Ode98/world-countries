import { useState } from "react";
import { Button, Group } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

type SortOption = "name" | "population" | "area";

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function MenuButtons() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  const sortFields = ["name", "population", "area"];

  const [activeSort, setActiveSort] = useState<SortOption>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const toggleSortDirection = (isAsc?: boolean) => {
    if (isAsc) {
      return setSortDirection("asc");
    }
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <Group mb={"lg"} justify="space-between">
      <Group>
        {sortFields.map((field) => (
          <Button
            key={field}
            onClick={() => {
              activeSort === field
                ? toggleSortDirection()
                : toggleSortDirection(true);
              setActiveSort(field as SortOption);
            }}
            leftSection={
              activeSort === field ? (
                sortDirection === "asc" ? (
                  <FaSortAmountDown size={14} />
                ) : (
                  <FaSortAmountUp size={14} />
                )
              ) : (
                <FaSortAmountDown size={14} />
              )
            }
            color="gray"
            variant={activeSort === field ? "filled" : "default"}
          >
            {capitalizeFirstLetter(field)}
          </Button>
        ))}
      </Group>
      <Button color="gray" onClick={toggleColorScheme}>
        {colorScheme === "dark" ? (
          <MdOutlineLightMode size={20} />
        ) : (
          <MdDarkMode size={20} />
        )}
      </Button>
    </Group>
  );
}
