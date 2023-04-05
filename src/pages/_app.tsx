import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { Bebas_Neue, Montserrat } from 'next/font/google';


// avenir isn't available on google fonts - using montserrat for ease
const avenir = Montserrat({
  weight: "500",
  variable: "--font-avenir",
  subsets: [],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: [],
  variable: "--font-bebas",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>
        {`
            :root {
              --font-avenir: ${avenir.style.fontFamily};
              --font-bebas: ${bebasNeue.style.fontFamily};
            }
          `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default App;
