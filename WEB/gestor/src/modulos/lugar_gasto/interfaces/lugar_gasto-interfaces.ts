export interface Lugar_gasto {
    id_lugar_gasto: number,
    nombre: string
}

// Para insertar: Tendrá todo lo de Lugar excepto el id.
export type Lugar_gastoAgregar = Omit<Lugar_gasto, 'id_lugar_gasto'>;

