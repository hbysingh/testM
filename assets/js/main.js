class createBtns {
    constructor(){
        this.div = document.getElementById('dynamic_buttons');
        for(let i=1 ;i<=5 ;i++){
            this.createBtn('Button'+i , this.div);
        }
    }
    createBtn(btnName, appendIn){

        var button = document.createElement("button");
        button.innerHTML = btnName;
        button.className = 'btn btn-primary';
        appendIn.appendChild(button);
        button.addEventListener ("click", function() {
            console.log(btnName +" is clicked");
        });
    }
}

 new createBtns();