const tBody = document.getElementById("table-body");

addNewRow =()=> {
    const row = document.createElement("tr");
    row.className = "single-row";
    row.innerHTML = `<td><select id="name">
    <option value="">Plant Name</option>
    <option value="1">Adeniums</option>
    <option value="2">Monstera deliciosa-plant</option>
    <option value="3">Ferns and foliage</option>
    <option value="4">Cactus and Succelents</option>
    <option value="5">Bamboo-palm</option>
    <option value="6">Climbers</option>
    <option value="7">Bonsai</option>
    <option value="8">Bougainvillea</option>
    </select>
    </td>
    <td><input type="number" placeholder="0" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
    <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
    <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
    <td style="text-align: right;"><span class="material-icons" action="delete">delete_outline</span></td>`


    tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
}

document.getElementById("add-row").addEventListener("click", (e)=> {
    e.preventDefault();
    addNewRow();
});

//GET INPUTS, MULTIPLY AND GET THE ITEM PRICE
getInput =()=> {
    var rows = document.querySelectorAll("tr.single-row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#unit").value;
        var price = currentRow.querySelector("#price").value;

        amount = unit * price;
        currentRow.querySelector("#amount").value = amount;
        overallSum();

    })
}

//Get the overall sum/Total
overallSum =()=> {
    var arr = document.getElementsByName("amount");
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].value) {
            total += +arr[i].value;
        }
        document.getElementById("total").value = total;
    }
}


//Delete row from the table
tBody.addEventListener("click", (e)=>{
    let el = e.target;
    const deleteROW = e.target.getAttribute("action");
    if(deleteROW == "delete") {
        delRow(el);
        overallSum();
    }
})

//Target row and remove from DOM;
delRow =(el)=> {
    el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}

//generate pdf
function download(){
    var element = document.getElementById("bill");
    html2pdf(element);
}