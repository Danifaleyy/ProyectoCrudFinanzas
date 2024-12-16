export interface Categoria_ingreso{
    id_categoria_ingreso:number,
    nombre: string
}
//Para insertar: Tendra todo lo de Personal excepto el id.
export type Categoria_ingresoAgregar = Omit<Categoria_ingreso,'id_categoria_ingreso'>