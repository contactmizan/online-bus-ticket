function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}
let count = 0;
let totalSeatNumber = 12;
const allSeats = document.getElementsByClassName('seat');

for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        totalSeatNumber = totalSeatNumber - 1;

        document.getElementById('total-seat').innerText = totalSeatNumber;

        const seatNumber = e.target.parentNode.childNodes[1].innerText;
        // selected seat count
        count = count + 1;
        document.getElementById('seat-book-count').innerText = count;


        // seat amount
        const perSeatTaka = document.getElementById('seat-details').childNodes[5].innerText;
        // seat class
        const seatClass = document.getElementById('economic').parentNode.childNodes[3].innerText;
        console.log(seatClass);

        // add selected seat beside 
        const selectedSeatContainer = document.getElementById('selected-seat-container');
        const div = document.createElement("div");
        div.classList.add('selected-seat');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p1.innerText = seatNumber;
        p2.innerText = seatClass;
        p3.innerText = perSeatTaka;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedSeatContainer.appendChild(div);


        updateTotalCost(perSeatTaka);
        updatedgrandTotal();
        // const li = document.createElement('li');
        // const p = document.createElement('p');
        // p.innerText = seatNumber;

        // li.appendChild(p);

        // selectedSeatContainer.appendChild(li);

        seat.classList.add('bg-[#1DD100]');
        setInnerText('total-seat', totalSeatNumber);

    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function getConvertedVale(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

function updateTotalCost(value) {
    const totalCost = getConvertedVale('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}

function updatedgrandTotal() {
    const totalCost = getConvertedVale('total-cost');
    document.getElementById('grand-total').innerText = totalCost;
}