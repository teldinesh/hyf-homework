let fullName;
let firstName;
let surName;
let useFormalName;
let isMale;

function getFullname(firstName, surName, useFormalName, isMale) {
    if ((firstName == null) || (firstName == '') || (firstName.indexOf(' ') >= 0) ){
        return fullName = `Name value is not entered properly`;
    }

    else if ((!useFormalName) && (!surName)){
        return fullName = `${firstName}`;
    }
    else if ((!useFormalName) && (!isMale)){
        return fullName = `${firstName} ${surName}`;
    }
    else if ((useFormalName) && (!surName) && (isMale)){
            if (isMale) {
            return fullName = `Lord ${firstName}`;
            }
            else
            return fullName = `Highness ${firstName}`;
    }
    else if (isMale) {
            return fullName = `Lord ${firstName} ${surName}`;
        }
        else
        return fullName = `Highness ${firstName} ${surName}`;
    };

    
let fullName1=getFullname("Benjamin","Hughes",true,true);
console.log(`fullName1 value is: ${fullName1}`);

let fullName2=getFullname("Benjamin","Jones",false,false);
console.log(`fullName2 value is: ${fullName2}`);

let fullName3=getFullname("Benjamin","Jones",true,false);
console.log(`fullName3 value is: ${fullName3}`);

let fullName4=getFullname("","", "");
console.log(`fullName4 value is: ${fullName4}`);

let fullName5=getFullname(" "," ", " ");
console.log(`fullName5 value is: ${fullName5}`);

let fullName6=getFullname("Benjamin");
console.log(`fullName6 value is: ${fullName6}`);

let fullName7=getFullname(null, null, null);
console.log(`fullName7 value is: ${fullName7}`);

let fullName8=getFullname(undefined, undefined, undefined);
console.log(`fullName8 value is: ${fullName8}`);