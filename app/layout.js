import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from 'next/font/google';
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "pms",
  description: "Project Management System",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: shadesOfPurple }}>
      <html lang="en">
        <body
          className={`${inter.className} bgcss`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />

            <main className="min-h-screen">
              {children}
            </main>

            <Toaster richColors />

            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <div>pms</div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
