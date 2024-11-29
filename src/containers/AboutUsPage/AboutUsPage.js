import css from './AboutUsPage.module.css';
import { ProductCard } from '../../components';
import { products } from '../../utils/products';
import { Banner } from '../../components';

const AboutUsPage = () =>{
    return(
        <div>
            <div> 
                <Banner text="Descuentos por el buen fin!" /> 
            </div>
            <div className={css.ProductList}>
                {products.map((product) =>{
                    return <ProductCard key={product.id} product={product} className={css.ProductList_card}/>
                })}
            </div>

        </div>
        
    );
}
export default AboutUsPage;