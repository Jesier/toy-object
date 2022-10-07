const toys = [
    {
        id: 1,
        name: "Woody",
        maker: "Disney",
        
    },
    {
        id: 2,
        name: "Sorry",
        maker: "Hasbro",
        
    },
    {
        id: 3,
        name: "Hotwheel",
        maker: "Hasbro",
        
    }
]
const Mapp = new Map(toys)
const addPhoneToInventory = (phoneObject, price) => {
    Mapp.set(JSON.stringify(phoneObject), price)
}

// Add the first phone in the array to the Map and set its price
addPhoneToInventory(toys[0], 5.00)
addPhoneToInventory(toys[1], 30.00)
addPhoneToInventory(toys[2], 20.00)

