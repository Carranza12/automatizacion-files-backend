const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const _fileService = require('./file-service');
const cors = require('cors');


const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors({}))

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto: ', 3000);
})

app.post('/json/crear', jsonParser, (req,res) =>{
    console.log(req.body)
    const jsonBody = {
        name_file:req.body.name_file,
        id_file:req.body.id_file,
        name_file_es: req.body.name_file_es,
        name_file_en:req.body.name_file_en,
        name_file_pt:req.body.name_file_pt,
        db_table: req.body.db_table,
        title_file_es:req.body.title_file_es ,
        title_file_en:req.body.title_file_en,
        title_file_pt:req.body.title_file_pt,
    }

    _fileService.crear_archivo(jsonBody, req.body.inputs);
})

