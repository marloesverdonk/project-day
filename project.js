const images = [
    {
        name: 'rabbit1',
        src: "https://svgsilh.com/svg/1751147.svg",
        //"https://www.pngix.com/pngfile/middle/51-511412_rabbit-png-rabbit-clipart-bunny-animals-white-rabbits.png",
        id: "searchField",
    },

    {
        name: 'rabbit2',
        src: "https://svgsilh.com/svg/1730151.svg",
        //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rlckv4wKPLIJIv1gZLALD1Yu36Agxa4Hm4YB-pibH4tqUig1",
        id: "searchField",
    },
    {
        name: 'rabbit3',
        src: "https://svgsilh.com/svg/1298864.svg",
        //"https://banner2.kisspng.com/20171201/5c8/rabbit-png-image-5a21e555d2fb66.6182842515121708378642.jpg",
        id: "searchField",
    },

    {
        name: 'rabbit4',
        src: "https://svgsilh.com/svg/154672.svg",
        //"https://www.pngfind.com/pngs/m/51-511432_rabbit-bunny-png-image-background-rabbit-transparent-png.png",
        id: "searchField",
    },
    {
        name: 'rabbit5',
        src: "https://svgsilh.com/svg/34013.svg",
        id: "searchField",
    },


]

function getRandomInt(a, b) {
    return Math.floor(Math.random() * b) + a
}
//console.log(getRandomInt(1, 6))

function doSomethingWithObjects() {
    for (let i = 0; i < images.length; i++) {
        const currentObject = images[i]

        const main = document.getElementById("searchField")

        const img = document.createElement('img')
        img.alt = currentObject.name
        img.src = currentObject.src
        img.style.height = "100%"
        img.style.position = "absolute"
        img.style.bottom = getRandomInt(0, 30) + "rem"
        img.style.left = getRandomInt(0, 40) + "rem"
        img.addEventListener("click", function () { 
            addToFoundItems(this) 
            displayInFooter()
        })

        main.appendChild(img)
    }

}
doSomethingWithObjects()

const foundItems = []

function addToFoundItems(image) {
    if (foundItems.includes(image) == false) {
        foundItems.push(image)
        // console.log(foundItems)
    }
}

function displayInFooter() {
    //reset inner HTML foundItemsSection --> empty string
    const footer = document.getElementById('foundItems')
    footer.innerHTML = '';
    // document.footer.getElementById("foundItems").innerHTML = ""
    //show image of every item of foundItems-array
    for (let i = 0; i < foundItems.length; i++) {
        
        // // Gather -> what? where?
        const image = foundItems[i]
        image.style.bottom = '1rem'
        // console.log(image)
        // // Create Elements
        // const img = document.createElement('img')

        // // Adjust
        // img.alt = image.name
        // img.src = image.url

        // console.log('HEEEELLLOOOO')
        // // Display

        footer.appendChild(image)
    }
}