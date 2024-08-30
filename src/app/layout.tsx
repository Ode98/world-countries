import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./index.css";
import Providers from "./providers";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Countries",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <MantineProvider defaultColorScheme="light">
            {children}
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
