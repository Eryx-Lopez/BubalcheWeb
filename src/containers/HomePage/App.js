import css from './App.module.css';

import Banner from '../../components/Banner/Banner';
import Modals from '../../components/Modal/Modals.js';
import ImageBanner from '../../components/ImageBanner/ImageBanner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Products from '../../components/Products/Products';

function App() {
  return (
    <div>
        {/*NAVBAR*/}
        <div>
            <Navbar/>
        </div>
    <Modals/>
            {/*BANNER IMAGEN*/}
            <div> 
                <ImageBanner title={"Adopta a tu nuevo compañero"} 
                text={"Diseña tu peluche desde cero"}
                button_text={"Adoptar"}/>
            </div>
            {/*PRODUCTOS*/}
            <div>
                <Products/>
            </div>
            {/*BANNER*/}
            <div> 
                <Banner title={"¿Buscas un diseño especifico?"} 
                text={<>Contáctanos para ver qué tienes en mente y hacerlo <br></br><span className={css.underline}>realidad</span></>}
                button_text={"Mándanos correo"}/>
            </div>

        {/*FOOTER*/}
        <div>
            <Footer/>
        </div>

    </div>
  );
}

export default App;
