function accessByName() {
    let name = "Infna";
    let age = 19 ;
    if (age < 18) {
            switch (name){
                case "Dima" :
                    console.log ("Go to do home work "+ name + "."); 
                break;
                case "Alex" :
                    console.log ("Go to do home work " + name + "." ); 
                break;    
            default :
                console.log ("Hello guest.");
            }
        } else if (age >= 18) {
            switch (name){
                case "Inna" :
                    console.log ("Hello "+ name + "." ); 
                break;
                case "Yehor" :
                    console.log ("Hello "+ name + "." ); 
                break;
            default :
                console.log ("Hello guest.");
            };
    }}
    accessByName()