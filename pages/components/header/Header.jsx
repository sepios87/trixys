import React from 'react';
import Triangle from '../../components/triangle/Triangle';
import classes from './Header.module.scss';
import { MdEmail } from 'react-icons/md';

const Header = ({ isWaiting }) => {
    return (
        <section className={classes.header} id="home">
            <img
                className={classes.header__pointsDroite}
                src="svg/points.svg"
                alt="pointsDroite"
            />
            <img
                className={classes.header__pointsGauche}
                src="svg/points.svg"
                alt="pointsGauche"
            />
            <img
                className={classes.header__rond}
                src="svg/rond.svg"
                alt="rondFlottant"
            />
            <Triangle num={7} classNameTriangle={classes.triangle2} />
            <Triangle num={3} classNameTriangle={classes.triangle5} />
            <Triangle num={3} classNameTriangle={classes.triangle1} />
            <Triangle num={1} classNameTriangle={classes.triangle3} />
            <Triangle num={5} classNameTriangle={classes.triangle8} />
            <Triangle num={6} classNameTriangle={classes.triangle6} />

            <div className={classes.header__titleDiv}>
                <h1>
                    AGENCE WEB A LA ROCHELLE <span>TRIXYS</span>
                </h1>
                {isWaiting && (
                    <div className={classes.header__contact}>
                        <p>
                            Notre site est en cours de <strong>création</strong>
                            , merci de bien vouloir patienter. Pour toute
                            question n{"'"}hésitez pas à nous contacter par mail
                            !
                        </p>
                        <a href="mailto:contact.trixys@gmail.com">
                            <MdEmail className={classes.svg + ' svg'} />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Header;
