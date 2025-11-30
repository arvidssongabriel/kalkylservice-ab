export const metadata = {
   title: "Kalkylservice AB",
   description: "Din elkalkylator – kalkyler för elinstallationsbranschen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="sv">
         <body>{children}</body>
      </html>
   );
}
