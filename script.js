let items = [];

function addItem() {
    const plantName = document.getElementById("plantName").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    if (plantName && quantity && price) {
        const item = {
            plantName: plantName,
            quantity: quantity,
            price: price
        };
        items.push(item);
        displayItems();
        updateTotal();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayItems() {
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";
    
    items.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <div>${item.plantName}</div>
            <div>${item.quantity}</div>
            <div>$${item.price.toFixed(2)}</div>
        `;
        itemsList.appendChild(itemDiv);
    });
}

function updateTotal() {
    let subtotal = 0;
    items.forEach(item => {
        subtotal += item.quantity * item.price;
    });
    
    const total = subtotal * 1.08; // Assuming 8% tax
    document.getElementById("subtotal").textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

function generateBill() {
    const customerName = document.getElementById("customerName").value;
    if (!customerName) {
        alert("Please enter customer name before generating the bill.");
        return;
    }

    const billPreview = document.getElementById("billPreview");
    billPreview.innerHTML = `
        <h2>Bill for ${customerName}</h2>
        <div>
            <strong>Items:</strong>
            <div>${getItemList()}</div>
        </div>
        <p id="billSubtotal">Subtotal: ${document.getElementById("subtotal").textContent}</p>
        <p id="billTotal">Total: ${document.getElementById("total").textContent}</p>
    `;
    billPreview.style.display = "block";
}

function getItemList() {
    let itemList = "";
    items.forEach(item => {
        itemList += `${item.quantity} ${item.plantName}(s), `;
    });
    return itemList.slice(0, -2); // Remove the last comma and space
}
