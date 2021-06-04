let names = [];
let list = [];
function getReply(command){
if(command.includes('Hello')){
    let resp = getResponse(command);
return res = resp;
}
else if(command.includes('What is my name')){
return res = 'Your name is ' + names;
}
else if(command.includes('todo')){
    let resp = getRespList(command);
    return res = resp;
}
else if(command.includes('today')){
    const today = new Date();
    const dateArr = today.toString().split(" ");
    return `${dateArr[2]}. of ${dateArr[1]} ${dateArr[3]}`;
}
else if(command.includes('timer')){
    delayedTimer();
    return res = resp;
}
else if(command.includes('What is')){
    let arr = command.split('');
    var num1 = parseInt(arr[8]);
    const operator = arr[10];
    var num2 = parseInt(arr[12]);
    return res = eval(num1+operator+num2);

}
}
function delayedTimer(){
    setTimeout(function(){ console.log('Timer'); }, 1000);
    return resp = console.log('Timer started');;
}

function getRespList(command){
    if(command.includes('Add fishing')){
list.push('fishing');
return res = 'fishing added to your todo';
    }
    else if(command.includes('Add singing')){
        list.push('singing');
        return res = 'singing added to your todo';
    }
    else if(command.includes('Remove fishing')){
        list.splice('fishing');
        return res = 'fishing removed from your todo';
    }
    else
    return res = list;
}
function getResponse(command){
    var givenString = command.split(' ');
    names.push(givenString[4]);
    return res = 'Nice to meet you ' + givenString[4];

  //  console.log(`Nice to meet you givenString`);

}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing to my todo")); // "singing added to your todo"
console.log(getReply("What is on my todo?")); // "should respond with the todos"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("What is on my todo?")); // "should respond with the todos"
console.log(getReply("what day is it today?")); // "should respond with the todos"
console.log(getReply("Set timer for 4 minutes")); // "should respond with the todos"
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 3 * 3"));
console.log(getReply("What is 3 - 3"));