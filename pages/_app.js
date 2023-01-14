import MainLayout from '../src/components/layout/main-layout';
import '../styles/globals.css';
import '../styles/general.css';


function MyApp({ Component, pageProps }) {
 return(
   <>
   <MainLayout>
    <Component {...pageProps} />
   </MainLayout>
   </>
  );
}

export default MyApp
