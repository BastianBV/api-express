const express = require ("express")
const fs = require ("fs")
const fsPromises = require ("fs/promises")
const app = express()
// Leer Archivo 

/**
 * 1 -> calbacks 
 * 2-> promises 
 * 3-> async/await
 */

// // Callback
// app.get("/files-callbacks", (request, response)=>{
//     fs.readFile("text1.txt", "utf8", (err, data)=>{
//         if(err){
//             repsonse.write("Huboun error")
//             response.end()
//         }
//         response.write(data)
//         response.end()
//     })
// })
// //Promises
// app.get("/files-promises", (request, response)=>{
//     fsPromises.readFile("text1.txt", "utf8")
//     .then((data)=>{
//         response.write(data)
//         response.end()
//     })
//     .catch((error)=>{
//         response.write(error)
//         response.end()
//     })
// })
// Async Await
app.get("/files-async",  async(request, response)=>{
    try{
       const fs = await fsPromises.readFile("text1.txt", "utf8")
       response.write(FileSystemEntry)
       response.end()
    }
    catch(error){
        response.write(error)
        response.end()
       
       }
})


// Endpoints Koders
// Recurso/identificador -> koders 
/**
 * 1 - PATH PARAM -> identificadores -> modifica la ruta del lado de back
 *  /recurso/identificador -> /koders/:id 
 * 2 -
 */
// app.get("/koders", async(request, response)=>{
//     const db = await fsPromises.readFile("koders.json", "utf8")
//     const parsedDB = JSON.parse(db)
//     console.log("koders", parsedDB.koders)
//     response.json( parsedDB.koders)
// })


// Recibir un koder en especifico con el id 
// app.get("/koders/:id", async (request, response)=>{
//     const { params } = request
//     //DB
//      const db = await fsPromises.readFile("koders.json", "utf8")
//      const parseDB = JSON.parse(db)
   
//      // Filtramos para encontra al koder con el id 
//      const foundKouder = parseDB.koders.filter((koder)=> koder.id === Numb(params.id))
//      response.json(foundKouder[0])
// })

//QUERY PARAMS - No cmabian la ruta 
// Sirven para filtrar
// Sintaxis 
// ?modulo=
app.get("/koders", async (request, response) => {
    console.log("request", request)
  
    const { query } = request
    console.log("modulo", query.modulo)

    const db = await fsPromises.readFile("koders.json", "utf8") 
    const parsedDB = JSON.parse(db)

    const foundKouder = parsedDB.koders.filter((koder)=> koder.modulo === query.modulo)

    response.json(foundKouder)
  })


/**
 * Tarea: 
 * En el endpoint de enlistar koders, recibir modulo como query params
 * y regresar todos los koders que tengan ese modulo
 * 
 * []
 */


// Endpoint de bienvenida 
app.get("/", (request, response)=>{
    response.write("Bienvenido a nuestra api express")
    response.end()
})


app.listen(5050,()=>{
    console.log("Server is listening...")
})