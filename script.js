let textView= document.querySelector("#one-1");

let btn = document.querySelector("#one");


let imranInfo = {
    name: "Imran",
    age: 17,
    lastName: "Hossain",
    fullName: function(){
        return this.name+" "+this.lastName;
    }
}

const imranFullName = imranInfo.fullName();

textView.innerHTML = imranFullName;






