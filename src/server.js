import http from "http"
// REQUEST
// - HTTP
// - Método
// - URL
//  riot.com/user/config
// riot.com/config 

// GET, POST, PUT, PATCH, DELETE
// GET -> Buscar uma informção do back end
// POST -> Criar algo no back end
// PUT -> Atualizar algo no bacd endd
// PATCH -> Atualiza um informação única
// DELETE -> DEletar um informação do back end

let usuarios = []

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    if (req.url == "/"){
        res.end('Página Principal')
        return
    }

    if (req.url == "/user" && req.method == "GET"){
        res.end(JSON.stringify(usuarios))
        return
    }

    if (req.url == "/user" && req.method == "POST"){
        usuarios.push({
            nome: "Pedro",
            idade: 12
        })
        res.end("Usuários criado")
        return
    }
})

server.listen(3333)
//localhost:3333