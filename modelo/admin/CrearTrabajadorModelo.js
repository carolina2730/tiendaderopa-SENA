const dbService = require('../bd/Conexion');
const bcrypt = require('bcrypt');

class CrearTrabajadorModelo{
// funcion para crear nuevos admin
  static async crearTrabajadores(tipoD, numeroD, nom, dir, tel, email, contras, rol) {
    const query = 'INSERT INTO admins (tipoD, numeroD, nombres, direccion, telefono, correo, contrasena, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const contra = await bcrypt.hash(contras, salto);
      rol = "trabajador"; // Asignar el rol de trabajador por defecto

      return await dbService.query(query, [tipoD, numeroD, nom, dir, tel, email, contra, rol]);
    } catch (err) {
      throw new Error(`Error al crear su nueva cuenta Trabajador: ${err.message}`);
    }
  }//cerrar crear Trabajador
}

module.exports = CrearTrabajadorModelo;