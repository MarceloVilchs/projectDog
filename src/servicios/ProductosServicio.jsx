
export function getAllProductos(buscar){

    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`).then(res=>res.json());
}

export default getAllProductos;

/* info de codigos https://developers.mercadolibre.com.ar/es_ar/categorias-y-atributos */