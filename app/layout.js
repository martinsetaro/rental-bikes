import Header from "./components/Header/Header"
import '../public/style/normalize.css'
import '../public/style/global.css'


export default function RootLayout({ children }) {
  return (
    <html>
      <head>

      </head>
      
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
