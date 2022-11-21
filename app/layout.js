import Header from "./components/Header/Header"
import '../src/style/normalize.css'
import '../src/style/global.css'


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
