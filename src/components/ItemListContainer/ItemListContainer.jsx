import styles from "./ItemListContainer.module.css"

export const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className={`${styles.cuerpo1}`}>{greeting}</div>
        </>
    )
}