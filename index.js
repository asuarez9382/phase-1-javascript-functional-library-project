function callback(collection) { 
    console.log(collection)
}

function callbackMap(collection) {
    return collection*2
}

function callbackReduce(val, acc) {
    return val+acc
}

function myEach(collection, callback) {
    if(typeof collection === 'object' && collection !== null) {
        const newCollection = Object.values(collection)
        console.log(newCollection)
        for(let i = 0; i<newCollection.length; i++) {
            callback(newCollection[i])
        }
    }
    else {
        for(let i = 0; i<collection.length; i++) {
            callback(collection[i])
        }
    }
    return collection
}

function myMap(collection, callbackMap) {
    const returnArr = []
    if(typeof collection === 'object' && collection !== null) {
        const newCollection = Object.values(collection)
        for(let i = 0; i<newCollection.length; i++) {
            let number = callbackMap(newCollection[i])
            returnArr.push(number)
        }
    }
    else {
        for(let i = 0; i<collection.length; i++) {
            let number = callbackMap(collection[i])
            returnArr.push(number)
        }
    }
    return returnArr
}

function myReduce(collection, callback, acc){
    let startIndex = 0;
    if (acc === undefined) {
        acc = collection[Object.keys(collection)[0]];
        startIndex = 1;
      }
    for (let i = startIndex; i < Object.values(collection).length; i++) {
        const currentValue = Object.values(collection)[i];
        acc = callback(acc, currentValue, collection);
    }
    return acc
}

function myFind(collection, predicate) {
    for(let i = 0; i<collection.length; i++) {
        if(predicate(collection[i])){
            return collection[i]
        }
    }
}

function myFilter(collection, predicate) {
    let filteredArr = []
    for(let i = 0; i<collection.length; i++) {
        if(predicate(collection[i])){
            filteredArr.push(collection[i])
        }
    }
    return filteredArr
    
}

function mySize(collection) {
    if(typeof collection === 'object' && collection !== null) {
        let keys = Object.keys(collection)
        return keys.length
    }
    else {
        return collection.length
    }
}

function myFirst(array, n) {
    if(n){
        return array.slice(0,n)
    }
    else {
        return array[0]
    }
}

function myLast(array, n) {
    if(n){
        return array.slice(array.length -n)
    }
    else {
        return array[array.length - 1]
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}
