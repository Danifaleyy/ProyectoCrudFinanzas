//Validaciones
//Importamos el paquete (zod): Sirve para validar los datos que ingresa el usuario sean seguros y correctos
import { z } from 'zod';

const nombreRegEx = new RegExp(/^[a-zA-Z\s]+$/);
// Esquema de validaciones para transacciones
export const TransaccionSchema = z.object({
    descripcion: z.string().regex(nombreRegEx, {
        message: "El nombre solo puede contener letras y espacios."
    }).min(2, "Mínimo 2 caracteres").max(100, "Máximo 100 caracteres")
});