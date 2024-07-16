

let btnCustomers = document.getElementById("btnCustomers")
let tableCustomers =document.getElementById("tableCustomers")
let xmarkTableCustomers = document.getElementById("xmarkTableCustomers")

let btnAddCustomer = document.getElementById("btnAddCustomer")
let tableAddCustomer = document.getElementById("tableAddCustomer")
let xmarkTableAddCustomer = document.getElementById("xmarkTableAddCustomer")

let btnTransactions = document.getElementById("btnTransactions")
let tableTransactions = document.getElementById("tableTransactions")
let xmarkTableTransactions = document.getElementById("xmarkTableTransactions")

let like = document.getElementById("like")
let like2 = document.getElementById("like2")

// open Table Customers
btnCustomers.addEventListener("click",openTableCustomers)
function openTableCustomers() {
    tableCustomers.classList.toggle("d-none")
    tableAddCustomer.classList.add("d-none")
    tableTransactions.classList.add("d-none")
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}
// close Table Customers
xmarkTableCustomers.addEventListener("click",closeTableCustomers)
function closeTableCustomers(){
    tableCustomers.classList.add("d-none")
    tableAddCustomer.classList.add("d-none")
    tableTransactions.classList.add("d-none")
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}


// open Table Add Customer
btnAddCustomer.addEventListener("click",openTableAddCustomer)
function openTableAddCustomer() {
    tableAddCustomer.classList.toggle("d-none")
    tableCustomers.classList.add("d-none")
    tableTransactions.classList.add("d-none")
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}
// close Table Add Customers
xmarkTableAddCustomer.addEventListener("click",closeTableAddCustomer)
function closeTableAddCustomer(){
    tableAddCustomer.classList.add("d-none")
    tableCustomers.classList.add("d-none")
    tableTransactions.classList.add("d-none")
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}


// open Table Transactions
btnTransactions.addEventListener("click",openTableTransactions)
function openTableTransactions() {
    tableTransactions.classList.toggle("d-none")
    tableCustomers.classList.add("d-none")
    tableAddCustomer.classList.add("d-none")
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}
// close Table Transactions
xmarkTableTransactions.addEventListener("click",close)
function close(){
    tableTransactions.classList.add("d-none")
    tableCustomers.classList.add("d-none")
    tableAddCustomer.classList.add("d-none")
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}


let inputCustomerName =document.getElementById("inputCustomerName")
let inputCustomerId =document.getElementById("inputCustomerId")
let BtnAddCustomer =document.getElementById("BtnAddCustomer")
let creatTCustomer =document.getElementById("creatTCustomer")
let CustomerSaveName=[];

// localStorage Customer
if (localStorage.getItem("CustomerSaveName")==null) {
    CustomerSaveName = []
} else {
    CustomerSaveName=JSON.parse(localStorage.getItem("CustomerSaveName"))
    display()
}

// creat Customer
BtnAddCustomer.addEventListener("click",getCustomerName)
function getCustomerName() {
    let lestCustomer = {
        name:inputCustomerName.value,
        id:inputCustomerId.value,
    }
    if (lestCustomer.id.length>0 && lestCustomer.name.length>0 ) {
        CustomerSaveName.push(lestCustomer)
        localStorage.setItem("CustomerSaveName",JSON.stringify(CustomerSaveName))
        display()
        inputCustomerName.value = "";
        inputCustomerId.value = "";
// animation
        BtnAddCustomer.classList.add("d-none");
        like.classList.remove("d-none")
        setTimeout(() => {
        BtnAddCustomer.classList.remove("d-none");
            like.classList.add("d-none")
        }, 1200);
    } else {
        BtnAddCustomer.classList.add("error");
        BtnAddCustomer.innerHTML = " ☝ Wrong ☝";
        setTimeout(()=>{
            BtnAddCustomer.classList.remove("error");
            BtnAddCustomer.innerHTML = "Add Customer";
        },800)
    }
}
// 3ard el Customer
function display() {
    let cartona =``;
    for (let i = 0; i < CustomerSaveName.length; i++) {
        cartona +=`<tr>
        <td>${i+1}</td>
        <td>${CustomerSaveName[i].id}</td>
        <td>${CustomerSaveName[i].name}</td>
        <td><button onclick="AddTransactionsIdName(${i})" class="btn btn-success btn-sm rounded-5">Add Transactions</button></td>
        <td><button  onclick="View(${i})" class="btn btn-outline-success btn-sm rounded-5">View transactions</button></td>
        <td><button onclick="DeleteCustomer(${i})" class="btn btn-danger btn-sm rounded-5">delete</button></td>
        </tr>` 
    }
    document.getElementById("creatTCustomer").innerHTML = cartona;
}

// search in name Customer
let searchIn = document.getElementById("searchIn")
function searchName() {
    let searchValue = searchIn.value.toLowerCase()
    let cartona =``;
    for (let i = 0; i < CustomerSaveName.length; i++) {
        if (CustomerSaveName[i].name.toLowerCase().includes(searchValue) == true) {
            cartona +=`<tr>
            <td>${i+1}</td>
            <td>${CustomerSaveName[i].id}</td>
            <td>${CustomerSaveName[i].name.replace(searchValue,`<span class="text-danger">${searchValue}</span>`)}</td>
            <td><button onclick="AddTransactionsIdName(${i})" class="btn btn-success btn-sm rounded-5">Add Transactions</button></td>
            <td><button onclick="View(${i})" class="btn btn-success btn-sm rounded-5">View transactions</button></td>
            <td><button onclick="DeleteCustomer(${i})" class="btn btn-danger btn-sm rounded-5">delete</button></td>
            </tr>` 
            }
        document.getElementById("creatTCustomer").innerHTML = cartona;
    }
}
// -------------------------------
let nameId;
// btn Add Transactions  Id & Name  in table
function AddTransactionsIdName(i) {   
    document.getElementById("formAddTransactionsId").innerHTML=`id : ${CustomerSaveName[i].id}`
    document.getElementById("formAddTransactionsName").innerHTML=`name: ${CustomerSaveName[i].name}`
    AddTransactions.classList.remove("d-none")    
    nameId= CustomerSaveName[i].id
        tableCustomers.classList.add("d-none")
        tableAddCustomer.classList.add("d-none")
        tableTransactions.classList.add("d-none")
        tableClintTransactions.classList.add("d-none")
    
}
// ---------------
// close Xmark Form Add Transaction
let AddTransactions = document.getElementById("AddTransactions")
let xmarkFormAddTransaction = document.getElementById("xmarkFormAddTransaction")
xmarkFormAddTransaction.addEventListener("click",closeXmarkFormAddTransaction)
function closeXmarkFormAddTransaction() {
    AddTransactions.classList.add("d-none")
    tableCustomers.classList.add("d-none")
    tableAddCustomer.classList.add("d-none")
    tableTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}


let BtnAddTransactions =document.getElementById("BtnAddTransactions")
let inputData =document.getElementById("inputData")
let inputAmount =document.getElementById("inputAmount")
let inputTransactionNumber =document.getElementById("inputTransactionNumber")
let AmountArrClint=[];

// btn Add Transactions
BtnAddTransactions.addEventListener("click",getDataTAddTransactions)
function getDataTAddTransactions() {
    let OpgClint = {
        id:nameId,
        num:inputTransactionNumber.value,
        data:inputData.value,
        amount:inputAmount.value,
    }
    if (inputAmount.value.length>0 && inputTransactionNumber.value.length>0 &&inputData.value.length>0 ) {
        AmountArrClint.push(OpgClint)
        localStorage.setItem("AmountArrClint",JSON.stringify(AmountArrClint))
        idAllTransactions()
        
        inputTransactionNumber.value = "";
        inputData.value = "";
        inputAmount.value = "";

// animation
        BtnAddTransactions.classList.add("d-none");
        like2.classList.remove("d-none")
        setTimeout(() => {
        BtnAddTransactions.classList.remove("d-none");
            like2.classList.add("d-none")
        }, 1500);
    } else {
        BtnAddTransactions.classList.add("error");
        BtnAddTransactions.innerHTML = " ☝ Wrong ☝";
        setTimeout(()=>{
            BtnAddTransactions.classList.remove("error");
            BtnAddTransactions.innerHTML = "Add Customer";
        },800)
    }
}


let nameId5;
let bn;
let tableClintTransactions = document.getElementById("tableClintTransactions")
// btn View transactions
function View(i) {
    document.getElementById("ClintId").innerHTML = `id : ${CustomerSaveName[i].id}`
    document.getElementById("ClintName").innerHTML = `Name : ${CustomerSaveName[i].name}`
    AddTransactionsIdName(i)
    nameId5= CustomerSaveName[i].id
         bn = [];
         AmountArrClint = JSON.parse(localStorage.getItem("AmountArrClint"))
        for (let i = 0; i < AmountArrClint.length; i++) {
            if (nameId5 == AmountArrClint[i].id) {
                bn.push(AmountArrClint[i])
            }
        }
        el3rd()    
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.remove("d-none")
}


// 3ard data el client el 
function el3rd() {
    let cartona = ``;
    for (let i = 0; i < bn.length; i++) {
        cartona += `<tr>
            <td>${i+1}</td>
            <td id="Clintnum">${bn[i].num}</td>
            <td id="ClintData">${bn[i].data}</td>
            <td id="ClintAmount">${bn[i].amount}</td>
        </tr>`
    }
    document.getElementById("tbodyAddTransactions").innerHTML = cartona
    
    let result = bn.reduce((sum,el)=>{
        return sum+Number(el.amount)
     },0)
     document.getElementById("totalSumbn").innerHTML = result
}

// close table Clint Transactions
let xmarkClint=document.getElementById("xmarkClint")
xmarkClint.addEventListener("click",closeXmarkClint)
function closeXmarkClint() {
    tableCustomers.classList.add("d-none")
    tableAddCustomer.classList.add("d-none")
    tableTransactions.classList.add("d-none")
    AddTransactions.classList.add("d-none")
    tableClintTransactions.classList.add("d-none")
}

// table All Transactions
function idAllTransactions() {
    let cartona ='';
    for (let i = 0; i < AmountArrClint.length; i++) {
        cartona += `<tr>
              <td>${i+1}</td>
              <td>${AmountArrClint[i].num}</td>
              <td>${AmountArrClint[i].id}</td>
              <td>${AmountArrClint[i].amount}</td>
              <td><button onclick="DeleteTransactions(${i})" class="btn btn-danger btn-sm rounded-5">delete</button></td>
            </tr>`
    }
    document.getElementById("idAllTransactions").innerHTML = cartona
// get total sum
    let result = AmountArrClint.reduce((sum,el)=>{
        return sum+Number(el.amount)
     },0)
     document.getElementById("totalSum").innerHTML = result
}

if (localStorage.getItem("AmountArrClint")==null) {
    AmountArrClint = []
} else {
    AmountArrClint = JSON.parse(localStorage.getItem("AmountArrClint"))
    idAllTransactions()
}



// Delete Customer
function DeleteCustomer(e) {
    CustomerSaveName.splice(e,1)
    localStorage.setItem("CustomerSaveName",JSON.stringify(CustomerSaveName))
    display()
}

// Delete all Customers
document.getElementById("DeleteAllCustomers").addEventListener("click",function () {
    CustomerSaveName.length=0;
    localStorage.setItem("CustomerSaveName",JSON.stringify(CustomerSaveName))
    display()
})

// Delete Transactions
function DeleteTransactions(i) {
    AmountArrClint.splice(i,1)
    localStorage.setItem("AmountArrClint",JSON.stringify(AmountArrClint))
    idAllTransactions()
}
// Delete All Transactions
document.getElementById("DeleteAll").addEventListener("click",function () {
    AmountArrClint.length = 0;
    localStorage.setItem("AmountArrClint",JSON.stringify(AmountArrClint))
    idAllTransactions()
})



