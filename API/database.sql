--Proyecto finanzas

--Tabla cuentas
CREATE TABLE cuenta (
  id_cuenta INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(40) DEFAULT NULL,
  PRIMARY KEY (id_cuenta)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla Categoria_Ingreso
CREATE TABLE categoria_ingreso (
  id_categoria_ingreso INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(30) DEFAULT NULL,
  PRIMARY KEY (id_categoria_ingreso)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla Categoria_Gasto
CREATE TABLE categoria_gasto (
  id_categoria_gasto INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(30) DEFAULT NULL,
  PRIMARY KEY (id_categoria_gasto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla Tipo_Gasto
CREATE TABLE tipo_gasto (
  id_tipo_gasto INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(30) DEFAULT NULL,
  PRIMARY KEY (id_tipo_gasto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla Lugar de gasto
CREATE TABLE lugar_gasto (
  id_lugar_gasto INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(40) DEFAULT NULL,
  PRIMARY KEY (id_lugar_gasto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla gasto hecho por?
CREATE TABLE hecho_gasto (
  id_hecho_gasto INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (id_hecho_gasto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla Ingreso
CREATE TABLE ingreso (
  id_ingreso INT(11) NOT NULL AUTO_INCREMENT,
  fk_id_cuenta INT(11) NOT NULL,
  fk_id_categoria_ingreso INT(11) NOT NULL,
  descripcion VARCHAR(100) DEFAULT NULL,
  monto DECIMAL(10, 2) NOT NULL,
  fecha_operacion DATE NOT NULL,
  --Primary Key
  PRIMARY KEY (id_ingreso),
  --Forgein Key
  FOREIGN KEY (fk_id_cuenta) REFERENCES cuenta(id_cuenta),
  FOREIGN KEY (fk_id_categoria_ingreso) REFERENCES categoria_ingreso(id_categoria_ingreso)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla Gasto
CREATE TABLE gasto (
  id_gasto INT(11) NOT NULL AUTO_INCREMENT,
  fk_id_cuenta INT(11) NOT NULL,
  fk_id_categoria_gasto INT(11) NOT NULL,
  fk_id_tipo_gasto INT(11) NOT NULL,
  fk_id_lugar_gasto INT(11) NOT NULL,
  descripcion VARCHAR(100) DEFAULT NULL,
  monto DECIMAL(10, 2) NOT NULL,
  fecha_operacion DATE NOT NULL,
  fecha_pago DATE NOT NULL,
  fk_id_hecho_gasto INT(11) NOT NULL,
  --Primary Key
  PRIMARY KEY (id_gasto),
  --Forgein Key
  FOREIGN KEY (fk_id_cuenta) REFERENCES cuenta(id_cuenta),
  FOREIGN KEY (fk_id_categoria_gasto) REFERENCES categoria_gasto(id_categoria_gasto),
  FOREIGN KEY (fk_id_tipo_gasto) REFERENCES tipo_gasto(id_tipo_gasto),
  FOREIGN KEY (fk_id_lugar_gasto) REFERENCES lugar_gasto(id_lugar_gasto),
  FOREIGN KEY (fk_id_hecho_gasto) REFERENCES hecho_gasto(id_hecho_gasto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--Tabla Transacciones
CREATE TABLE transaccion (
  id_transaccion INT(11) NOT NULL AUTO_INCREMENT,
  fk_id_cuenta_saliente INT(11) NOT NULL,
  fk_id_cuenta_entrante INT(11) NOT NULL,
  descripcion VARCHAR(100) DEFAULT NULL,
  monto DECIMAL(10, 2) NOT NULL,
  fecha DATE NOT NULL,
  --Primary Key
  PRIMARY KEY (id_transaccion),
  --Forgein Key
  FOREIGN KEY (fk_id_cuenta_saliente) REFERENCES cuenta(id_cuenta),
  FOREIGN KEY (fk_id_cuenta_entrante) REFERENCES cuenta(id_cuenta)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;