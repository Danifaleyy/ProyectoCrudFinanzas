"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarCuenta = exports.modificarCuenta = exports.agregarCuenta = exports.encuentraCuenta = exports.obtieneCuenta = void 0;
//Aqui haremos las conexiones a la base de datos
const promise_1 = __importDefault(require("mysql2/promise"));
const cuenta_schema_1 = require("../schema/cuenta.schema");
//Importamos las validaciones
const conexion = promise_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "proyecto_finanzas",
    port: 3306,
    //Evitar las multiples consultas a la vez
    multipleStatements: false
});
//Para mostrar todos
const obtieneCuenta = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conexion.query('SELECT * FROM proyecto_finanzas');
        return results;
    }
    catch (err) {
        return { error: "No se puede obterner la cuenta" };
    }
});
exports.obtieneCuenta = obtieneCuenta;
//Para mostrar uno en especifico
const encuentraCuenta = (id_cuenta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conexion.query('SELECT * FROM proyecto_finanzas WHERE id_cuenta = ? LIMIT 1', id_cuenta);
        return results;
    }
    catch (err) {
        return { error: "No se encuentra esa cuenta" };
    }
});
exports.encuentraCuenta = encuentraCuenta;
//Para insertar
const agregarCuenta = (nuevo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Validacion con zod: Lo puedes agregar a cualquier otro try que quieras validar
        const validacion = cuenta_schema_1.CuentaSchema.safeParse(nuevo);
        //Si la validacion falla: ! significa lo contrario de exito
        if (!validacion.success) {
            return { error: validacion.error };
        }
        //---------------------
        const [results] = yield conexion.query('INSERT INTO proyecto_finanzas(nombre) values (?)', [nuevo.nombre]);
        return results;
    }
    catch (err) {
        return { error: "No se puede agregar la cuenta" };
    }
});
exports.agregarCuenta = agregarCuenta;
//Para modificar
const modificarCuenta = (modificado) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Agregar validaciones
        const [results] = yield conexion.query('UPDATE proyecto_finanzas SET nombre=? WHERE id_cuenta=?', [modificado.nombre]);
        return results;
    }
    catch (err) {
        return { error: "No se puede modificar" };
    }
});
exports.modificarCuenta = modificarCuenta;
//Eliminar un registro
const borrarCuenta = (id_cuenta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Agregar validaciones
        const [results] = yield conexion.query('DELETE FROM proyecto_finanzas WHERE id_cuenta=?', [id_cuenta]);
        return results;
    }
    catch (err) {
        return { error: "No se puede eliminar" };
    }
});
exports.borrarCuenta = borrarCuenta;
