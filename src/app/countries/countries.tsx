"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Input, SimpleGrid, Flex, Button } from "@mantine/core";
import { CountryListItem } from "../components/CountryListItem/CountryListItem";
import { getAllCountries } from "../../api/index";

import MenuButtons from "../components/Menu/MenuButtons";

export default function CountriesGrid() {
  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container p={"lg"} size={"xl"}>
      <Input
        pb={"sm"}
        onChange={(e) => setSearchTerm(e.target.value)}
        flex={1}
        placeholder="Search"
      />
      <MenuButtons />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
        {filteredCountries
          ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => (
            <CountryListItem country={country} key={country.name.common} />
          ))}
      </SimpleGrid>
    </Container>
  );
}
