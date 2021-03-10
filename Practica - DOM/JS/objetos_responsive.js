export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breackPoint = window.matchMedia(mq);
    const responsive = (e) => {
        if (e.matches){
            document.getElementById(id).innerHTML = desktopContent
        } else{
            document.getElementById(id).innerHTML = mobileContent
        }
        console.log(e.matches)
    }
    breackPoint.addListener(responsive) // valida el cambio de media queries
    responsive(breackPoint)             //se ejecuta a la hora que cargue el documento

}