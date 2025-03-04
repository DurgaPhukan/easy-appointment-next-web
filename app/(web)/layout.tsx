import { QueryProvider } from "../components/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <QueryProvider>{children}</QueryProvider>
    </div>
  );
}
