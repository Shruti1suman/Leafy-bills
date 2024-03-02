const tBody = document.getElementById("table-body");

addNewRow =()=> {
    const row = document.createElement("tr");
    row.className = "single-row";
    row.innerHTML = `<td><input type="text" placeholder="Plant Name" class="Plant" id="Plant"></td>
                    <td><input type="number" placeholder="0" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="Subtotal" class="Subtotal" id="Subtotal" disabled></td>
                    <td style="text-align: right;"><span class="material-icons" action="delete">delete_outline</span></td>`

    tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
}
var time=document.getElementById("customerName");
console.log(time);

let 
//GET INPUTS, MULTIPLY AND GET THE ITEM PRICE
getInput =()=> {
    var rows = document.querySelectorAll("tr.single-row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#unit").value;
        var price = currentRow.querySelector("#price").value;

        Subtotal = unit * price;
        currentRow.querySelector("#amount").value = Subtotal;
        overallSum();

    })
};

//Get the overall sum/Total
overallSum =()=> {
    var arr = document.getElementsByName("Subtotal");
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].value) {
            total += +arr[i].value;
        }
        document.getElementById("total").value = total;
    }
}

function downloadInvoice() {
    // Get the element containing the invoice content
    const invoice = document.getElementById("downloadPdf");

    // Options for html2pdf
    const options = {
        filename: 'Leafy Bills.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().from(invoice).set(options).save();
}

  
