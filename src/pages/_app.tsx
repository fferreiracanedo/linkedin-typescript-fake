import "tailwindcss/dist/base.min.css"
import "tailwindcss/dist/components.min.css"
import "tailwindcss/dist/utilities.min.css"
import "tailwindcss/dist/tailwind.min.css"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
