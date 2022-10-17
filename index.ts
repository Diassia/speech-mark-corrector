import * as fs from 'fs'
var path = require('path')

const getFilePathName = () => {
    const args: string[] = process.argv.slice(2)
    let filePath: string = args[0]
    let fileName = path.parse(filePath).base
    let inPlace: boolean = args.includes('-in-place')
    return [filePath, fileName, inPlace]
}

const convertMarkdownFileToStringArray = () => {
    let filePath = getFilePathName()[0]
    let newArray: string[] = []
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        newArray = [...data.split("\n")]
    } catch (err) {
        console.error(err);
    }
    return newArray
}

export const checkForPunctuation = (string: string) => {
    const punctuation = ["!", "?", ",", ".", "—", "*"]
    return punctuation.includes(string)
}

export const correctLine = (testString: string) => {
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

const correctFile = (array: string[]) => {
    let stringArray = array
    let newFileData: string[] = []

    for (let i = 0; i < stringArray.length; i++) {
        let correctedString = correctLine(stringArray[i])
        newFileData.push(correctedString)
    }

    return newFileData
}

const writeDataToMarkdownFile = (data: string) => {
    const filePathName = getFilePathName()
    let filePath = filePathName[0]
    let fileName = filePathName[1]
    let inPlace = filePathName[2]
    try {
        fs.writeFileSync(inPlace ? filePath : `./correctedFiles/${fileName}`, data);
        console.log(`${fileName} successfully written to ${inPlace ? filePath : `./correctedFiles/${fileName}`}`)
        } catch (err) {
        console.error(err);
    }
}

const main = () => {
    let dataArray = convertMarkdownFileToStringArray()
    let correctedDataArray = correctFile(dataArray)
    let correctedData = correctedDataArray.join("\n")
    writeDataToMarkdownFile(correctedData)
}

main()