newDate();

setInterval(() =>{
    newDate();
    },10000);

    
function newDate(){
        let date = new Date
        let gethours = date.getHours();
        let getminutes = date.getMinutes();
        document.querySelector('.hours').innerHTML = `${gethours} : ${getminutes}`   
        console.log(date)
    }



    



