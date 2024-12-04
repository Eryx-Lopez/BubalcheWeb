import { useEffect, useState } from 'react';
import { products } from '../../utils/products';
import { promoCodes } from '../../utils/promocodes';
import css from './CartPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const CartPage = () => {

    const cart= JSON.parse(localStorage.getItem("cart-bubalche")) || [];
    const [total, setTotal] = useState(0);
    
    const [hasPromoCode, setHasPromoCode] = useState(false);

    const applyPromoCode = (promoCode) => {

        if(hasPromoCode){
            return;
        }

        if(promoCodes  && promoCodes.filter(item => item.code === promoCode.length > 0)){
            const promoCodeData = promoCodes.find(code => code.code === promoCode);

            if(promoCodeData){
                if(promoCodeData.amount){
                    if(total >= promoCodeData.amount){
                        setTotal(total - promoCodeData.amount)
                    }

                    if(promoCodeData.pera){
                        setTotal(total - (total * promoCodeData.pera / 100));
                    }
                }
            }
        }
    }

    useEffect(() => {
        if(cart.length > 0 && !hasPromoCode){
            setTotal(cart.reduce((acc, item) => {
                const product = products.find(product => product.id === item.id)

                if(product){
                    return acc + (product.price * item.quantity);
                }else{
                    return acc;
                }
            }, 0));
        }
    }, [cart]);

    return(
        <div>
            {/*NAVBAR*/}
            <div>
                <Navbar/>
            </div>

            <div className={css.CartPage}>
                <div  className={css.title}>
                    <h1>Carrito</h1>
                </div>
                <div className={css.list}>
                    {cart.length > 0 ? cart.map((item, index) => {
                        const product = products.find(product => product.id === item.id)

                        if(product){
                            return(
                                <div key={index} className={css.item}>
                                    
                                    <img src={product.image} alt="Product"/>
                                    
                                    <div className={css.item_body}>
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                        <p>{product.price}</p>
                                    </div>
                                    <div className={css.item_quantity}>
                                    
                                        <p className={css.item_value}>Cantidad: {item.quantity}</p>
                                        <p className={css.item_value}>Total: ${product.price * item.quantity}</p>

                                    </div>
                                    
                                </div>
                            )
                        }

                    }) : <p>Agrega cosas a tu carrito</p>}


                </div>
                <div className={css.promoCode}>
                    <div>
                        <input type="text"  id="promocode" placeholder='Ingrese Codigo' className={css.promo_input}/>
                        <button type="button" className={css.promo_bttn}
                            onClick={(e) => {
                                e.preventDefault();
                                setHasPromoCode(true);
                                applyPromoCode(document.getElementById("promocode").value);                        
                            }}
                        >       
                        Aplicar</button>
                    </div>

                    <div className={css.total}>
                        <p>Total:</p>
                        <p>$</p><span className={css.total_value}>{total}</span>                
                    </div>
                </div>

            </div>
            {/*FOOTER*/}
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CartPage;
