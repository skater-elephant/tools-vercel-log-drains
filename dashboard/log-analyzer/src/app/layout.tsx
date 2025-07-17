import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { Imagotype } from "@/components/brand/Imagotype";

import "./globals.css";

export const metadata: Metadata = {
  title: "Log Analytics",
  description: "Custom real-time log analytics with Tinybird",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="p-4 border-b bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
            <Imagotype />
            <div className="container mx-auto flex justify-between items-center ml-[25px]">
              <Link href="/" className="text-xl font-bold flex items-center gap-2">
                Logs Analyzer
              </Link>
              <SignedIn>
                <div className="flex items-center gap-4">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </header>
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <footer className="p-4 border-t bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Skater Elephant. All rights reserved.
            </div>
          </footer> 
        </body>
      </html>
    </ClerkProvider>
  );
} 
