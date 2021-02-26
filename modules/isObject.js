const isObject = (value) => {
    return (typeof value === "object" || typeof value === "function")
}
module.exports = {
    isObject
}