document.getElementById('lifePathForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let year = document.getElementById('birthYear').value;
    let month = document.getElementById('birthMonth').value;
    let day = document.getElementById('birthDay').value;
    
    if (!year || !month || !day) {
        alert('Please enter all fields');
        return;
    }
    
    let lifePathNumber = calculateLifePathNumber(year, month, day);
    window.location.href = 'lifepath' + lifePathNumber + '.html';
});

function calculateLifePathNumber(year, month, day) {
    alert("Your Life Path Number is " + lifePathNumber); // Debugging line
    const sumDigits = num => num.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
    
    let sum = sumDigits(year) + sumDigits(month) + sumDigits(day);
    while (sum > 9) {
        sum = sumDigits(sum);
    }
    return sum;
}
