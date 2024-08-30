import "./CountryListItemStyles.css";
import { Card, Text, Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CountryListItem = ({ country }: { country: IRestCountry }) => {
  const router = useRouter();

  const formattedPopulation = new Intl.NumberFormat("fi", {
    useGrouping: true,
  }).format(country.population);

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      onClick={() => router.push("countries/country")}
      className="container"
    >
      <Card.Section>
        <div className="image-container">
          <Image
            src={`https://flagcdn.com/w320/${country.cca2.toLocaleLowerCase()}.png`}
            alt={country.name.common}
            width={306}
            height={204}
          />
        </div>
      </Card.Section>
      <Card.Section p={"sm"}>
        <Text size="xl">{country.name.common}</Text>
        <Text size="md">Capital: {country.capital}</Text>
        <Text size="sm">Population: {formattedPopulation}</Text>
      </Card.Section>
    </Card>
  );
};

export { CountryListItem };
