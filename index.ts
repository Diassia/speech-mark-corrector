
let testString: string = "'This is to test opening and closing dialogue,' he said."
let testString2: string = "She nodded. 'You're right! We should use the right opening and closing!'"
let testString3: string = "'The Jones' dog doesn't like our garden?'"

const correctSpeechMarks = (testString: string) => {
    let arrayFromString = [...testString]

    for (let i = 0; i < arrayFromString.length; i++) {
        // single speech mark starts the line
        if (i == 0 && arrayFromString[i] == "'") {
            arrayFromString[i] = "‘"
        }

        if (i != 0 && arrayFromString[i] == "'") {
            // checking for closing speech mark after punctuation
            if (checkForPunctuation(arrayFromString[i-1])) {
                arrayFromString[i] = "’"
            }
            // checking for opening speech mark in the middle of a line
            if (arrayFromString[i-1] == " ") {
                arrayFromString[i] = "‘"
            }
        }
    }
    
    let newString = arrayFromString.join("")

    return newString
}

const checkForPunctuation = (string: string) => {
    const punctuation = ["!", "?", ",", ".", "—"]
    return punctuation.includes(string)
}

console.log(correctSpeechMarks(testString))
console.log(correctSpeechMarks(testString2))
console.log(correctSpeechMarks(testString3))