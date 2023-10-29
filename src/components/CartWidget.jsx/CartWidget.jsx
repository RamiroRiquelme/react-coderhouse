import React from 'react';
import carrito from "../../../public/img/carrito.jpg";
import styles from "./Cartwidget.module.css"

export const CartWidget = () => {
    return (
        <>
        <img src={carrito} alt="Mi Imagen" className={`${styles.carrito}`} />
        </>
    )
}