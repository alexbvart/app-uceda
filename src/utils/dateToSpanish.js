/* 
const fecha = new Date("Thu Mar 18 2021 11:18:23 GMT-0500 (Peru Standard Time)")
dateToSpanish(fecha)
 */
    ;
const dateToSpanish = (fecha) => {

    const MONTHS = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    const WEEK = new Array ("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado")

    const fechaobj = new Date(fecha)

    const DAY_OF_WEEK = WEEK[fechaobj.getUTCDay()]
    const DAY_OF_MONTH = fechaobj.getDate()
    const MONTH = MONTHS[fechaobj.getMonth()]
    const YEAR = fechaobj.getFullYear()
    const HOUR = fechaobj.getHours()
    const MINUTES = fechaobj.getUTCMinutes()
    const SECONDS = fechaobj.getUTCSeconds()

    if (DAY_OF_MONTH<10) {
        DAY_OF_MONTH = `0${DAY_OF_MONTH}`
    }

    /* (DAY_OF_MONTH<10) ? DAY_OF_MONTH : `0${DAY_OF_MONTH}`  */

    console.log({fechaobj, DAY_OF_WEEK, DAY_OF_MONTH,MONTH,YEAR,HOUR,MINUTES,SECONDS});

    return `${DAY_OF_WEEK} ${DAY_OF_MONTH} / ${MONTH} / ${YEAR} a ${HOUR}:${MINUTES}:${SECONDS}`;

}
export default dateToSpanish;
