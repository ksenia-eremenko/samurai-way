import React from 'react';
import s from './Preloader.module.scss';
import preloader from "../../../assets/img/preloader.svg";


const Preloader = () => {
    return (
        <img className={s.preloader} src={preloader} alt="" />
    )
}

export default Preloader