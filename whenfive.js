let count = 0;

document.getElementById('rollButton').addEventListener('click', function() {
    count++;
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('resultDisplay').innerText = `You Rolled a: ${roll}`;

    if (roll === 5 || count >= 20) {
        if (roll === 5) {
            alert('YOU WIN!!');
        } else {
            alert('YOU LOSE!!');
        }
        count = 0;
    }
});