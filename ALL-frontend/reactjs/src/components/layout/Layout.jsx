import Navbar from './Navbar';
import Footer from './Footer';


/*
ezay nesta5dem:

<Layout>
<homepage /> for example
</Layout>


layout comp we wrap pages in it so we
dont have to use header and footer everytime

be5tsar simplifcation (ready made header and footer)

*/

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;