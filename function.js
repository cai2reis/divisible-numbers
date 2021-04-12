window.onload = () => {
    document.getElementById('getResult').addEventListener('click', () => {
        const handle_value = document.getElementById('number').value
        const result = sum(handle_value)

        document.getElementById('result').innerHTML = result;
    })
}

function sum(number) {
    let div_of_3 = 0
    let div_of_5 = 0

    if (number < 0) {
        return ("Esse número não é um inteiro positivo");
    }

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0)
            div_of_3 += i;

        if (i % 5 === 0)
            div_of_5 += i;
    }

    if (number > 0) {
        return div_of_3 + div_of_5;
    }
}



// for(let i = 3, j = 5; i < number || j < number; i += 3) {
//     if(j < number && j < i) {
//         sum += j;

//         j += 5
//     }

//     if(i < number && i != j) {
//         sum += i
//     }
// }

// return sum