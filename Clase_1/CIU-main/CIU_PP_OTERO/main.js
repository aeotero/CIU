let btnAdd = document.getElementById('sumar');
let btnSus = document.getElementById('restar');
let btnSearch = document.getElementById('search');
let tablaS = document.getElementById('tablaSeries');
let filas = document.getElementById('contenido');

btnSearch.addEventListener("click", function(){
	var buscar = document.getElementById('search_serie').value.toLowerCase();
	var celdasDeFila="";
	var encontrado=false;
	var comparar="";
 
	for (var i = 1; i < tablaS.rows.length; i++)
	{
		celdasDeFila = tablaS.rows[i].getElementsByTagName('td');
		encontrado = false;
		for (var j = 0; j < celdasDeFila.length && !encontrado; j++)
		{
			comparar = celdasDeFila[j].innerHTML.toLowerCase();
			if (buscar.length == 0 || (comparar.indexOf(buscar) > -1))
			{
				encontrado = true;
			}
		}
		if(encontrado)
		{
			tablaS.rows[i].style.display = '';
		} else {
			tablaS.rows[i].style.display = 'none';
		}
	}
});

btnAdd.addEventListener("click", function(){
        for(i = 1; i <= tablaS.rows.length; i++) {
            let checkeado = document.getElementById(i); 
            if (checkeado.checked) {
                let tempTotales = tablaS.rows[i].cells[2];
                let tempVistas = tablaS.rows[i].cells[3];
                if (parseInt(tempTotales.innerHTML) > parseInt(tempVistas.innerHTML)) {
                    tempVistas.innerHTML = parseInt(tempVistas.innerHTML) + 1;
                }
            }         
        }
    } );
    
btnSus.addEventListener("click", function(){    
        for(i = 1; i <= tablaS.rows.length; i++) {
            let checkeado = document.getElementById(i); 
            if (checkeado.checked) {
                let tempTotales = tablaS.rows[i].cells[2];
                let tempVistas = tablaS.rows[i].cells[3];
                if (parseInt(tempTotales.innerHTML) >= parseInt(tempVistas.innerHTML) && parseInt(tempVistas.innerHTML) > 0) {
                    tempVistas.innerHTML = parseInt(tempVistas.innerHTML) - 1;
                }
            }
        }
    } );
     
