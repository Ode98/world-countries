import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CountriesGrid from "./countries";

import { getAllCountries } from "../../api/index";

export default async function CountriesRoute() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CountriesGrid />
    </HydrationBoundary>
  );
}
