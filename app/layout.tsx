import { siteConfig } from "@/config";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from '@clerk/themes';
import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PracticeModal } from "@/components/modals/practice-modal";

const font = Nunito({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#22C55E",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        variables: {
          colorPrimary: '#22c55e',
          colorText: '#14532d',
        },
        elements: {
          card: 'border-green-500',
          headerTitle: 'text-green-600',
          buttonPrimary: 'bg-green-500 hover:bg-green-600 text-white',
          input: 'focus:ring-green-500 border-green-300',
        },
        layout: {
          logoImageUrl: "/favicon.ico",
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>
          {children}
          <Toaster theme="light" richColors closeButton />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
        </body>
      </html>
    </ClerkProvider>
  );
}
