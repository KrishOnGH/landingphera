import "./globals.css";


export const metadata = {
	title: 'Power of AI',
	description: 'Unlock the True Power of AI in your day with Phera',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
