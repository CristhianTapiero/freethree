import './globals.css'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta
			name="title"
			content="FreeThree - Connect the world with you"
		/>
		<meta
			name="description"
			content="FreeThree is a free service where you can share your social media and contact information with a single link. Developed by Cristhian Tapiero as a personal project." 
		/>
		<meta
			name="keywords"
			content="FreeThree, Cristhian Tapiero, Link, Social Media, Contact, Share, Connect, World, Personal Project"
		/>
		<meta name="robots" content="index, follow" />
		<meta name="application-name" content="Cristhian Tapiero" />
		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="language" content="Spanish" />
		<meta name="author" content="Cristhian David Tapiero Padilla" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>FreeThree - Connect the world with you</title>
      </head>
      <body className='w-screen h-screen bg-brand-black text-brand-white'>
		<Providers>
        	{children}
		</Providers>
      </body>
    </html>
  )
}
