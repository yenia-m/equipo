const equipo_url = "https://yenia-m.github.io/equipo/listado.json"

function cargarDatos(url) {
    document.getElementById("data").innerHTML ="";
    fetch(url)
        .then(respuesta => respuesta.json())
    
        .then(listado => {
            let row = "";
            for (let i=0; i < listado.length; i++) {

                row=
                 `

                <td>`+ listado[i].nombre + `</td>
                <td>`+ listado[i].temporadas + `</td>
                <td>`+ listado[i].goles + `</td>
                <td>`+ listado[i].fechas + `</td>
            
                  `
                    document.getElementById("data").innerHTML += row;


             }
    })

}