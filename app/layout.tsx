import React from 'react'
import './globals.css'
export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
          <div>common app nav bar</div>
          <div className="flex-grow">
            <main className="my-0 py-16">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
