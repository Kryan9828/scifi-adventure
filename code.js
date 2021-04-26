// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;
let printedText = ``

while (currentPage !== null){
    function endingPage(pageInput){
        for (let i = 0; i < endingPages.length; i++){
            let endPage = endingPages[i]
            console.log(endPage)
            if (pageInput === endPage){
                return true
            }
        }
    }
    console.log(endingPage(currentPage) === true )
    if (endingPage(currentPage) !== true) {
        let pagePrompt = prompt(`${pages[currentPage]} \n Please select your next page.`)
        printedText +=`<br> ${pages[currentPage]} </br>`
        currentPage = Number(pagePrompt)
        printedText += `<br>You turned to page ${currentPage}</br>`
        }
    if (endingPage(currentPage) === true){
        printedText += `<br> ${pages[currentPage]} </br>`
        document.write(`<p> ${printedText} <br>\n THE END </p>`)
        currentPage = null
        console.log(currentPage)
    } 
}