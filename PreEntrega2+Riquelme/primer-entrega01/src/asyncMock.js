const products = [
    { id: "1", name: "Casio Vintage A-158", description: "cuerpo color plateado, digital, fondo gris, con correa de acero", price: 34.995, stock: 1, category: "reloj", img: "https://http2.mlstatic.com/D_NQ_NP_2X_935560-MLA47513699169_092021-F.webp" },
    { id: "2", name: "Casio Collection F-91", description: "cuerpo color negro, digital, fondo gris, con correa de resina", price: 29200, stock: 2, category: "reloj", img: "https://http2.mlstatic.com/D_NQ_NP_2X_875464-MLU70002250690_062023-F.webp" },
    { id: "3", name: "Casio Ca-53w", description: "Reloj Calculadora Casio Ca-53w 1z Retro Vintage Classic", price: 34.330, stock: 3, category: "reloj", img: "https://http2.mlstatic.com/D_NQ_NP_2X_998305-MLU70065256039_062023-F.webp" },
    { id: "4", name: "Casio Youth AE-15", description: "cuerpo color negro, digital, fondo gris, con correa de resina color negro", price: 49.890, stock: 4, category: "reloj", img: "https://http2.mlstatic.com/D_NQ_NP_2X_656839-MLU70583959139_072023-F.webp" },
    { id: "5", name: "Casio Vintage A67", description: "cuerpo color dorado, digital, fondo negro, con correa de acero inoxidable", price: 23.450, stock: 5, category: "reloj", img: "https://http2.mlstatic.com/D_NQ_NP_2X_848814-MLA47546029778_092021-F.webp" },
    { id: "6", name: "Casio Vintage A523", description: "cuerpo color azul, digital, fondo gris, con correa de resina color negro", price: 63.450, stock: 6, category: "reloj", img: "https://http2.mlstatic.com/D_NQ_NP_2X_906321-MLU72605846731_102023-F.webp" },
    { id: "7", name: "Casio Vintage A23", description: "cuerpo color plateado, digital, fondo gris, con correa de acero inoxidable", price: 75.670, stock: 7, category: "reloj-dama", img: "https://http2.mlstatic.com/D_NQ_NP_2X_919880-MLU72607432815_102023-F.webp" },
    { id: "8", name: "Casio Vintage A56", description: "cuerpo color negro, digital, para hombre, fondo amarillo, con correa de resina", price: 80.535, stock: 8, category: "reloj-dama", img: "https://http2.mlstatic.com/D_NQ_NP_2X_866470-MLA47614391771_092021-F.webp" },
    { id: "9", name: "Casio Vintage A234", description: "cuerpo color negro, analógico, fondo blanco, con correa de resina color negro", price: 96.780, stock: 9, category: "reloj-dama", img: "https://http2.mlstatic.com/D_NQ_NP_2X_876628-MLA47630984010_092021-F.webp" },
    { id: "10", name: "Casio Vintage 8736A", description: "cuerpo color plateado, digital, fondo gris, con correa de resina color transparente", price: 10.650, stock: 10, category: "reloj-dama", img: "https://http2.mlstatic.com/D_NQ_NP_2X_709845-MLA47615158584_092021-F.webp" },
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 100);
        } else {
            reject("No hay productos");
        }
    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {

        const product = products.find(product => product.id === id);
        setTimeout(() => {
            if (!product) {
                reject("No se encontró el producto solicitado")
            } else {
                resolve(product);
            }
        }, 100)

    });
};