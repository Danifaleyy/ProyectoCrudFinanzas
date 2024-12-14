"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const express_1 = __importDefault(require("express"));
const personalServices = __importStar(require("../services/personalServices"));
//Activamos las rutas
const router = express_1.default.Router();
//Rutas
//Para mostrar todos
//http://localhost:3001/api/personal/
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let personal = yield personalServices.obtienePersonal();
    res.send(personal);
}));
//Para mostrar uno en especifico
//http://localhost:3001/api/personal/1 <------Numero id del personal
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let personal = yield personalServices.encuentraPersonal(Number(req.params.id));
    res.send(personal);
}));
//Para mostrar usuarios con el mismo telefono
//http://localhost:3001/api/personal/telefono/1234567890 <------telefono
router.get('/telefono/:telefono', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let personal = yield personalServices.encuentraPersonalTelefono(req.params.telefono);
    res.send(personal);
}));
//Para insertar
//Rutas para hacer insercciones: Post es para insertar
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, direccion, telefono, estatus } = req.body;
        const nuevo = yield personalServices.agregarPersonal({
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(nuevo);
    }
    catch (e) {
        res.send("No se puede agregar el personal");
        // res.status(400).send('Error en los datos');
    }
}));
//Para modificar datos
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nombre, direccion, telefono, estatus } = req.body;
        const modificado = yield personalServices.modificarPersonal({
            id,
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(modificado);
    }
    catch (e) {
        res.status(400).send("Error en los datos");
    }
}));
//Eliminar un registro.
router.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const eliminado = yield personalServices.borrarPersonal(Number(id));
        res.send(eliminado);
    }
    catch (e) {
        res.status(400).send("Error en los datos");
    }
}));
exports.default = router;
