import css from './App.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../utils/products';
import Banner from '../../components/Banner/Banner';

import ImageBanner from '../../components/ImageBanner/ImageBanner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <div>
        {/*NAVBAR*/}
        <div>
            <Navbar/>
        </div>
            {/*BANNER IMAGEN*/}
            <div> 
                <ImageBanner title={"Adopta a tu nuevo compañero"} 
                text={"Diseña tu peluche desde cero"}
                button_text={"Adoptar"}/>
            </div>
            {/*PRODUCTOS*/}
            <div className={css.ProductList}>
                {products.map((product) =>{
                    return <ProductCard key={product.id} product={product} className={css.ProductList_card}/>
                })}
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
