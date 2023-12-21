function validateForm() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;

    if (name === '' || address === '') {
        alert('Please fill in all fields.');
        return;
    }
    updatePayrollTable(name, address);

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
}

function updatePayrollTable(name, address) {
    var table = document.getElementById('payrollTable');
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = address;
}
