addEventListener("DOMContentLoaded", (e)=>{
    let obj = []; let cont = 1;
    let form = [];
    addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        if(!form[0]){
            form = Object.entries(data).map(elemt => {
                if(Number(elemt[1])){
                    return document.querySelector(`input[name='${elemt[0]}']`);
                }else{
                    return document.querySelector(`input[name='${elemt[0]}']`);
                }
            });
        }
        if(e.submitter.dataset.operacion == "iteracion"){
            form[0].disabled = "disabled";
            e.submitter.dataset.operacion = "insertar";
        }
        if(cont < form[0].value){
            obj.push(form[1].value);
            form[1].value = "";
            form[1].focus();
            cont++;
        }else{
            e.submitter.dataset.operacion = "iteracion";
            form[0].value = "";
            form[0].removeAttribute("disabled");
            obj.push(form[1].value);
            form[1].value = "";
            form[1].focus();
            form[0].focus();
            cont = 1;
            console.log(obj);
            obj = [];
        }
    })
})