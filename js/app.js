//programa 2.- Leer 10 calificaciones, mostrar el promedio y las calificaciones mayores al promedio
let calificaciones = [];          //valores de la calificacion 
  let division = parseInt (0);
  let califm = [];                    // donde se almacenan las calificaciones 

  for (let i =0; i<10; i++) {                                   // contador de las 10 calificaciones
    calificaciones [i] = prompt ("ingresa una calificacion");
  }
  for (let i =0; i<10; i++)
    division=division + parseInt(calificaciones [i]);   //segundo contador para la division de las calificaciones
  let smn = division /10;                //dision de estos mismos
  
  for (let i=0; i<10; i++){              // contador para las calificaiones mayores 
    if (calificaciones [i] > smn);
    califm.push (calificaciones [i/2]);  //mexicanada para sacar los numeros mayores :D
  }
  document.write ("el promedio de las calificaciones es :" + smn + "<br> y las calificaiones mayores son " + (califm ));
