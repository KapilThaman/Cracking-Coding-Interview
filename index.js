// Checking if the string is unique...

function CheckUnique (Str){
    let checker  = 0;

    for(let i = 0; i < Str.length; i++){
        let positionOfChar = Str.charCodeAt(i) - 'a'.charCodeAt(0);
        if((checker & (1 << positionOfChar) ) > 0){
            return false;
        }

        checker |= (1 << positionOfChar);
    }
    return true;
}

// console.log(CheckUnique("Kalk"));

