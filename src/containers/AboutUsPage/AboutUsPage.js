import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BubalcheCover from '../../assets/Marca/BubalcheCover.jpg';
import css from './AboutUsPage.module.css';


const AboutUsPage = () =>{
    return(
        <div>

            {/*NAVBAR*/}
            <div>
                <Navbar/>
            </div>
            <div className={css.AboutUsPage}> 
                <section className={css.header}>
                    <div className={css.left_header}>
                        <h1>¡Quiénes somos?</h1>
                        <p>
                            ¡Bienvenidos a Bubalche! 
                            Somos una empresa 100% mexicana que se dedica a la conscientización de las especies endémicas
                            mexicanas mediante un sistema de adopción.
                        </p>
                         <p>
                            Cada especie es única en su clase y es una lástima que se extingan, es por eso que nosotros también 
                            ayudamos a organizaciones que se encargan de cuidar de ellos.
                            <br/>
                            ¡Ayúdanos a ayudar!
                        </p>
                        <button className={css.button}>Adoptar</button>
                    </div>
                    <img src={BubalcheCover} className={css.right_header}/>
                    
                </section>
                
                <section className={css.team}>
                    <h1>Our Team</h1>
                    <div className={css.members}>
                        <div className={css.team_member}>
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>Eryx Lopez</h3>
                            <p>CEO</p>
                        </div>
                        <div className={css.team_member}>
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>Diego Arzate</h3>
                            <p>Vicepresidente</p>
                        </div>
                        <div className={css.team_member}>
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>Jorge Moctezuma</h3>
                            <p>CTO</p>
                        </div>
                        <div className={css.team_member}>
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>Julieta Becerra</h3>
                            <p>PM</p>
                        </div>
                        <div className={css.team_member}>
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>Oscar Herrera</h3>
                            <p>CFO</p>
                        </div>
                    </div>
                    
                </section>

                
            </div>
            {/*NAVBAR*/}
            <div>
                <Footer/>
            </div>

        </div>
        
    );
}
export default AboutUsPage;