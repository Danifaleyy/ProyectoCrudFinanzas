export interface Categoria_gasto{
    id_categoria_gasto: number,
    nombre: string
}
//Para insertar: Tendra todo lo de Personal excepto el id.
export type Categoria_gastoAgregar = Omit<Categoria_gasto,'id_categoria_gasto'>