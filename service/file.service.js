const { v4: uuidv4 } = require("uuid");
const fs = require("fs"); // fs = file system
const path = require("path");

class FileService {
  save(file) {
    try {
      const fileName = uuidv4() + ".jpg";
      const currentDir = __dirname; // shu turgan faylimizgacha bo'lgan yo'l
      const staticDir = path.join(currentDir, "..", "static"); // static directoriya qilyapmiz
      const filePath = path.join(staticDir, fileName); // static papkani ichiga rasm qo'yyapmiz

      if (!fs.existsSync(staticDir)) {
        fs.mkdirSync(staticDir, { recursive: true });
      }

      file.mv(filePath);

      return fileName;
    } catch (error) {
      throw new Error(`Error saving file: ${error}`);
    }
  }
}

module.exports = new FileService();
