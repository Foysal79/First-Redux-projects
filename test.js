//  Mutable Arrays => Mutable arrays can be changed after they are created. This means you can modify, add, or remove elements directly within the same array.
let mutableArray = [1, 2, 3, 5];

mutableArray[0] = 10;

console.log(mutableArray); // [10, 2, 3, 5]

// Immutable Arrays => Immutable arrays cannot be changed directly. Instead, any modification operations create a new array with the changes, leaving the original array unchanged .

let immutable = [12, 2, 5, 30, 20];

let newArrayWithMap = immutable.map((item, index) => index === 0 ? 10 : item);
console.log("immutable :", immutable);
console.log("immutable newArrayWithMap :", newArrayWithMap);

let newArrayWithSpreedOperator = [...immutable, 4];
console.log("immutable :", immutable);
console.log("immutable newArrayWithSpreedOperator :", newArrayWithSpreedOperator);

let newArrayWithFilteringRemoveValue = immutable.filter(item => item !== 2);
console.log("immutable :", immutable);
console.log("immutable newArrayWithFilteringRemoveValue :", newArrayWithFilteringRemoveValue);







// Curried Function

function curriedAdd(x) {
    return function(y) {
        return function (z) {
            return x + y + z
        }
    }
}

console.log("curriedAdd function ", curriedAdd(1)(4)(5));

let addX = curriedAdd(5);
console.log("addx function ", addX(5)(5));
