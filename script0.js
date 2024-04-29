function compareJSON(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

var json1 = { name : "Person 1" , age : 5 };
var json2 = { age : 5, name : "Person 1" };

console.log(compareJSON(json1, json2));