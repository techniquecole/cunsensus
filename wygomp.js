function calculateTripCost() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuel_efficiency').value);
    var pricePerGallon = parseFloat(document.getElementById('price_per_gallon').value);

    if (isNaN(distance) || isNaN(fuelEfficiency) || isNaN(pricePerGallon) || distance <= 0 || fuelEfficiency <= 0 || pricePerGallon <= 0) {
        alert("Please, Enter Correct Data within the fields.");
        return;
    }

    var gallonsNeeded = distance * 2 / fuelEfficiency;
    var totalCost = gallonsNeeded * pricePerGallon ;

    document.getElementById('gallons_needed').innerText = gallonsNeeded.toFixed(2) + " gallons";
    document.getElementById('total_cost').innerText = "$" + totalCost.toFixed(2) + " round trip";
}
