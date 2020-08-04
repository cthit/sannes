const id = 0
const testFood = {
    title: "pizza",
    price: 10,
    ingredients: ["Skinka", "lök", "jalapeño", "kyckling", "köttfärs", "bacon", "oxfilé", "mozzarellaost", "stark vitlökssås"]
}
const testGroup1 = {
    groupTitle: "Testgroup",
    foods: Array(3).fill(testFood)
}
const testGroup2 = {
    groupTitle: "Testgroup2",
    foods: Array(7).fill(testFood)
}
export const testMenu = [testGroup1, testGroup2]

export const pref = ["Veg", "Stark", "Inbakad"]

export const groupTitles = () => {
    const result = []
    testMenu.forEach(g => result.push(g.groupTitle))
    return result
}
export const options = [{
    text: "The Dark Knight Rises",
    value: "the_dark"
}, {
    text: "Princess Mononoke",
    value: "princess"
}, {
    text: "Aliens",
    value: "aliens"
}, {
    text: "Oldboy",
    value: "oldboy"
}, {
    text: "Once Upon a Time in America",
    value: "once"
}, {
    text: "Witness for the Prosecution",
    value: "Witness"
}, {
    text: "Das Boot",
    value: "das",
    disabled: true
}];