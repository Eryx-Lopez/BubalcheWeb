import css from './AboutUsPage.module.css';
import  ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../utils/products';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const AboutUsPage = () =>{
    return(
        <div>

            {/*NAVBAR*/}
            <div>
                <Navbar/>
            </div>
            <div className={css.AboutUsPage}> 
                <div  className={css.title}>
                        <h1>Peluches</h1>
                </div>
                <div className={css.ProductList}>
                    {products.map((product) =>{
                        return <ProductCard key={product.id} product={product} className={css.ProductList_card}/>
                    })}
                </div>
            </div>
            {/*NAVBAR*/}
            <div>
                <Footer/>
            </div>

        </div>
        
    );
}
export default AboutUsPage;