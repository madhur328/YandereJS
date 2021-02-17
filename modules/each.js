const each  =  (list, iteratee) => {
    for(var i=0; i<Object.keys(list).length; i++){
        iteratee(Object.values(list)[i], Object.keys(list)[i], list)
    }
}

module.exports = {
    each
}