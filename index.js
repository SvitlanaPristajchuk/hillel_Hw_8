animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];


function getInfo(arr) {
    arrNew = []
    for (i = 0; i < arr.length; i++) {
        currentEl = arr[i]

        arrNameNew = []
        for (j = 0; j < currentEl.length; j++) {
            arrNameNew.push(`<td>${currentEl[j]}</td>`)
            console.log(arrNameNew)

        }

        tr = `<tr>
        <td>${currentEl[0]}</td>
        <td>${currentEl[1]}</td>
        <td>${currentEl[2]}</td>
        </tr>`
        arrNew.push(tr)

    }


    document.write(`<table> ${arrNew.join(``)}
    </table>`)
}

getInfo(animals)
getInfo(food)