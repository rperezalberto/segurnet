import React from 'react';
import { Link } from 'react-router-dom'
import segcar from '../../assets/img/segcar.png';
import segSalud from '../../assets/img/segSalud.png';
import segViaj from '../../assets/img/segViaj.png';
import segVida from '../../assets/img/segVida.png';
import segHogar from '../../assets/img/segHogar.png';
import segMasi from '../../assets/img/segMasi.png';
import segCorp from '../../assets/img/segCorp.png';


export const CotizarHomeComponent = () => {
    return (
        <section className='cotizar container'>
            <h3 className='cotizar__title'>Empieza a cotizar tu seguro</h3>
            <div className='cotizar__content'>
                <div className='cotizar__content_servi'>
                    <Link to="/cotiza">
                        <div className='cotizar__content_bg'>
                            <img src={segcar} alt='Car' />
                        </div>
                        <p>Seguros de Vehículos</p>
                    </Link>
                </div>



                <div className='cotizar__content_servi'>
                    <Link to="/cotiza">
                        <div className='cotizar__content_bg'>
                            <img src={segSalud} alt='Salud' />
                        </div>
                        <p>Seguros de Salud</p>
                    </Link>
                </div>

                <div className='cotizar__content_servi'>
                    <Link to="/cotiza">
                        <div className='cotizar__content_bg'>
                            <img src={segViaj} alt='Viaje' />
                        </div>
                        <p>Seguros de Viajes</p>
                    </Link>
                </div>

                <div className='cotizar__content_servi'>
                    <Link to="/cotiza">
                        <div className='cotizar__content_bg'>
                            <img src={segVida} />
                        </div>
                        <p>Seguros de Vida</p>
                    </Link>
                </div>

                <div className='cotizar__content_servi'>
                    <Link to="/cotiza">
                        <div className='cotizar__content_bg'>
                            <img src={segHogar} alt='Hogar' />
                        </div>
                        <p>Seguros de Propiedades</p>
                    </Link>
                </div>

                <div className='cotizar__content_servi'>
                    <Link to="/cotiza">
                        <div className='cotizar__content_bg'>
                            <img src={segMasi} alt='Seguros' />
                        </div>
                        <p>Seguros Masivos</p>
                    </Link>
                </div>

                <div className='cotizar__content_servi'>
                    <Link to="/cotiza">
                        <div className='cotizar__content_bg'>
                            <img src={segCorp} alt='Corporativos' />
                        </div>
                        <p>Seguros Corporativos</p>
                    </Link>
                </div>

            </div>
        </section>
    )
}
