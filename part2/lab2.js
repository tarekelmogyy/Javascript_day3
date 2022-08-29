let contacts =[];
let obj = {};
let operator;
let search;
let stop = false;
do{
    operator =prompt("Choose operator you want (add,search,cancel)");
    switch(operator){
        case "add":
            obj.name = prompt("Enter contact name");
            obj.phone = prompt("Enter contact phone");
            contacts.push(obj);
            console.log(obj);
            console.log(contacts);
            alert(`Contact name is ${obj.name} and contact phone is ${obj.phone}`);
            break;
            case "search":
                search = prompt("Enter name or phone");
                for(let i=0; i<contacts.length;i++){
                    var currentContact = contacts[i];
                    if(search == currentContact.name || search == currentContact.phone){
                    alert(`Name is ${currentContact.name} And Phone is ${currentContact.phone}`);
                    break;
                    }
                }
            case "cancel":
                stop = true;
                break;
    }       
}while(!stop)