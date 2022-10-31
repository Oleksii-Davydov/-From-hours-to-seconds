const time = prompt("Enter the number of hours.");
let result = `In ${time} hours ${3600 * time} seconds`
if (time === null || isNaN(+time)) {
    alert("Incorrect data")
} else {
    alert(result)
}


