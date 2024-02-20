function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}

let totalSeatNumber = 40;
const allSeats = document.getElementsByClassName('seat');

for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        totalSeatNumber = totalSeatNumber - 1;

        document.getElementById('total-seat').innerText = totalSeatNumber;

        const seatNumber = e.target.parentNode.childNodes[1].innerText;
console.log(document.getElementById('seat-details').childNodes)
        const selectedSeatContainer = document.getElementById('selected-seat-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatNumber;
      
        li.appendChild(p);
     
        selectedSeatContainer.appendChild(li);

        seat.classList.add('bg-[#1DD100]');
        setInnerText('total-seat', totalSeatNumber);
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}