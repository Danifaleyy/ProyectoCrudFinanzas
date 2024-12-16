export interface Tipo_gasto {
    id_tipo_gasto: number,
    nombre: string
}
//Para insertar: Tendrá todo lo de Personal excepto el id.
export type Tipo_gastoAgregar = Omit<Tipo_gasto, 'id_tipo_gasto'>;
