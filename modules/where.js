//returns array of list_elems that contain all (key, value) pairs in props 
// result should be of the form [{},{}]

const where = (list, properties) => {
    let result = [];
    let list_vals = Object.values(list)
    let prop_entries = Object.entries(properties)
    for (let i in list_vals) {
        // does this val pass the k,v match test?
        //  if yes, push it into result
        let list_entry = Object.entries(list_vals[i])
        let bool = prop_entries.every(elem => list_entry.some((element) => elem[0] === element[0] && elem[1] === element[1]))  //elem present as some element of list_entry array?
        if (bool) { result.push(Object.fromEntries(list_entry)) }
    }
    return result;
}


module.exports = {
    where
}

let listOfPlays = { one: { random_key: "random_value", author: "Shakespeare", year: 1611 }, two: { author: "Shakespeare", year: 1611 }, three: { author: "Madhur", year: 1611 }, four: { author: "Shakespeare", year: 2020 }, five: { author: "Madhur", year: 2020 } }
let where_output = where(listOfPlays, { author: "Shakespeare", year: 1611 })
console.log(where_output)