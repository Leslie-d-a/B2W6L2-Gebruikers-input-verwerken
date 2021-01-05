var number = prompt("hoeveel namen wil je in de array stoppen?")
var namen = []

for(i=0;i<number;i++){
    namen[i] = prompt("voer een naam in.")
}

for(i=0;i<number;i++){
    var listItem = document.createElement('li');
    listItem.innerHTML = namen[i];
    document.getElementById('namen').appendChild(listItem)
}

for(i=number-1;i>=0;i--){
    var listItem = document.createElement('li');
    listItem.innerHTML = namen[i];
    document.getElementById('omgekeerde namen').appendChild(listItem)
}