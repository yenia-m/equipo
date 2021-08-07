const goleadores_url= "https:/nicobolso.github.io/goleadores/listado.json"

function cargandoDatos(url){
    document.getElementById("data").innerHTML="";
    fetch(url)
        .then(respuesta=> respuesta.json())
    
        .then(listado => {
            let row= "";
            for (let i=0; i < listado.length; i++) {

                row=
                 `

                <td> `+ listado[i].nombre + `</td>
                <td> `+ listado[i].temporadas + `</td>
                <td> `+ listado[i].goles + `</td>
                <td> `+ listado[i].fechas + `</td>
            
                  `
                     document.getElementById("data").innerHTML += row;


             }
    })

}