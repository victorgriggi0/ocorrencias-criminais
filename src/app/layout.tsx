"use client";

import { usePathname } from "next/navigation";

import "../styles/globals.css";
import { checkIsPublicRoute } from "@/functions/checkIsPublicRoute";
import AuthenticatedRoute from "@/components/authenticatedRoute";

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
        {!isPublicPage && <AuthenticatedRoute>{children}</AuthenticatedRoute>}
      </body>
    </html>
  );
}
