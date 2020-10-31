import multer from 'multer'; // BIBLIOTECA PARA GERENCIAR UPLOADS
import path from 'path'; // BIBLIOTECA PARA GERENCIAR CAMINHOS

export default {
  storage: multer.diskStorage({
      destination: path.join(__dirname, '..', '..', 'uploads'),
      filename: (request, file, cb) => {
          const fileName = `${Date.now()}-${file.originalname}`;

          cb(null, fileName);
      },
  })
};