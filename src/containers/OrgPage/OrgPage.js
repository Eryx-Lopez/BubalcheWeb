import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import css from './OrgPage.module.css';


const OrgPage = () =>{
    return(
        <div>

            {/*NAVBAR*/}
            <div>
                <Navbar/>
            </div>
            <div className={css.AboutUsPage}> 
                
                
            </div>
            {/*NAVBAR*/}
            <div>
                <Footer/>
            </div>

        </div>
        
    );
}
export default OrgPage;