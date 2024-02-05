import "./globals.css";
import localFont from 'next/font/local'

const chillaxFont = localFont({
  src: [
    {
      path: '../public/font/OTF/Chillax-Extralight.otf',
      weight: '200', // Assuming Extralight corresponds to font-weight 200
      style: 'normal',
    },
    {
      path: '../public/font/OTF/Chillax-Light.otf',
      weight: '300', // Assuming Light corresponds to font-weight 300
      style: 'normal',
    },
    {
      path: '../public/font/OTF/Chillax-Regular.otf',
      weight: '400', // Standard weight for Regular
      style: 'normal',
    },
    {
      path: '../public/font/OTF/Chillax-Medium.otf',
      weight: '500', // Medium is often considered as font-weight 500
      style: 'normal',
    },
    {
      path: '../public/font/OTF/Chillax-Semibold.otf',
      weight: '600', // Semibold often maps to font-weight 600
      style: 'normal',
    },
    {
      path: '../public/font/OTF/Chillax-Bold.otf',
      weight: '700', // Bold typically uses font-weight 700
      style: 'normal',
    },
  ],
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className={chillaxFont.className}>{children}</body>
    </html>
  );
}
