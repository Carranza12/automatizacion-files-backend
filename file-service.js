const fs = require("fs");

module.exports.crear_archivo = (jsonBody, inputs) => {
    const input = JSON.stringify(inputs);
    console.log(input)
    console.log(typeof(input))
  fs.writeFile(
    `./files/${jsonBody.name_file}.js`,
    `
    module.exports = {
        "id":"${jsonBody.id_file}",
        "name":{
            "es":"${jsonBody.name_file_es}",
            "en":"${jsonBody.name_file_en}",
            "pt":"${jsonBody.name_file_pt}"
        },
        "db_table":"${jsonBody.db_table}",
        "form":{
            "title":{
                "es":"${jsonBody.title_file_es}",
                "en":"${jsonBody.title_file_en}",
                "pt":"${jsonBody.title_file_pt}"
            }
        },
        "inputs":${ input },
        "options":[]
    }
`,
    (error) => {
      if (error) {
        throw error;
      }
      console.log("archivo creado con exito");
    }
  );
};
