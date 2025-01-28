function calculateTotalTransaction() {
    // Retrieve input values
    const salesTax = parseFloat(document.getElementById("sales_tax").value) || 0;
    const itemPrices = [
        parseFloat(document.getElementById("item1").value) || 0,
        parseFloat(document.getElementById("item2").value) || 0,
        parseFloat(document.getElementById("item3").value) || 0,
        parseFloat(document.getElementById("item4").value) || 0,
        parseFloat(document.getElementById("item5").value) || 0,
        parseFloat(document.getElementById("item6").value) || 0,
        parseFloat(document.getElementById("item7").value) || 0,
        parseFloat(document.getElementById("item8").value) || 0,
        parseFloat(document.getElementById("item9").value) || 0,
        parseFloat(document.getElementById("item10").value) || 0
    ];

    // Validate item prices
    for (let i = 0; i < itemPrices.length; i++) {
        const itemPrice = itemPrices[i];
        if (isNaN(itemPrice) || itemPrice < 0) {
            alert("Please enter valid prices for all items.");
            return;
        }
    }

    // Calculate subtotal
    const subTotal = itemPrices.reduce((sum, price) => sum + price, 0);

    // Calculate total transaction with tax
    const taxAmount = subTotal * (salesTax / 100);
    const totalTransaction = subTotal + taxAmount;

    // Display results
    document.getElementById("sub_total").textContent = `Subtotal: $${subTotal.toFixed(2)}`;
    document.getElementById("total_transaction").textContent = `Total Transaction: $${totalTransaction.toFixed(2)}`;
}
