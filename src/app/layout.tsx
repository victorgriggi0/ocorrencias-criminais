"use client";

import { usePathname } from "next/navigation";

import "../styles/globals.css";
import { checkIsPublicRoute } from "@/functions/checkIsPublicRoute";
import { PrivateRoute } from "@/components/privateRoute";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isPublicPage = checkIsPublicRoute(pathName!);

  return (
    <html lang="pt-br">
      <body>
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  );
}
