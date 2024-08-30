import axios from "axios";

export const getCountry = async (name: string) => {
  const { data } = await axios.get(
    `https://api.worldbank.org/v2/country/${name}?format=json`
  );
  return data[1][0];
};

export const getAllCountries = async (): Promise<IRestCountry[]> => {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/independent?status=true`
  );
  return data;
};
