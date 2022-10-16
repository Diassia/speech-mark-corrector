import * as fs from 'fs'

const convertMarkdownFileToStringArray = () => {
    fs.readFile('./test-file.md', 'utf8', (err: any, data: any) => {
        if (err) {
          console.error(err)
          return;
        }
        let newArray = data.split("\n")
        return newArray
    })
    return []
}

export const correctSpeechMarks = (testString: string) => {
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

export const checkForPunctuation = (string: string) => {
    const punctuation = ["!", "?", ",", ".", "—"]
    return punctuation.includes(string)
}

convertMarkdownFileToStringArray()