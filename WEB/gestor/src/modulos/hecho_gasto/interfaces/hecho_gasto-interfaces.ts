export interface Hecho_gasto {
    id_hecho_gasto: number,
    nombre: string
}

// Para insertar: Tendrá todo lo de Hecho excepto el id.
export type Hecho_gastoAgregar = Omit<Hecho_gasto, 'id_hecho_gasto'>;