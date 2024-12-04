import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import css from './AboutUsPage.module.css';


const AboutUsPage = () =>{
    return(
        <div>

            {/*NAVBAR*/}
            <div>
                <Navbar/>
            </div>
            <div className={css.DesignsPage}> 
                <h1>¡Quiénes somos?</h1>
                <p>
                    ¡Bienvenidos a Bubalche! 
                    Somos una empresa 100% mexicana que se dedica a la conscientización de las especies endémicas
                    mexicanas mediante un sistema de adopción.
                </p>
                <section className={css.team}>
                    <h2>Our Team</h2>
                    <div className={css.team_member}>
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>John Doe</h3>
                    <p>CEO</p>
                    </div>
                    <div className={css.team_member}>
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                    </div>
                </section>
                <section className={css.history}>
                    <h2>Our History</h2>
                    <p>
                    Our journey began in 2010 with a small team of passionate individuals. Since then, we have grown into a reputable company with a global presence.
                    </p>
                </section>
                <section className={css.values}>
                    <h2>Our Values</h2>
                    <ul>
                    <li>Integrity</li>
                    <li>Innovation</li>
                    <li>Customer Focus</li>
                    <li>Excellence</li>
                    </ul>
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