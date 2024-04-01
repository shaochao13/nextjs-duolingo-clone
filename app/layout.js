import { ClerkProvider } from "@clerk/nextjs"
import { Nunito } from "next/font/google"
import "./globals.css"

const font = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
