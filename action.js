let customerList = []
let history = []


function renderAccounts(){

    let accountList = document.getElementById('accounts-list')
    accountList.innerHTML = ""
    customerList.forEach((customer)=>{
        
        let li1 = document.createElement("li")
        li1.innerText = `${customer.name} has ${customer.balance} £`
        accountList.appendChild(li1)
    })
}

function createNames (){
    let selectLists = [document.getElementById("sender"),document.getElementById("receiver")]

    selectLists.forEach((list)=>{
        list.innerHTML=""
        customerList.forEach((customer)=>{
            let opt = document.createElement("option")
            opt.innerText = customer.name
            list.appendChild(opt)
        })
    })
    
}

function renderHistory(){

    const historyList = document.getElementById('history-list')
    historyList.innerHTML = ""
    history.forEach((past)=>{
        const li = document.createElement("li")
        li.innerText = past
        historyList.appendChild(li)
    })

}


document.getElementById('btnAdd').addEventListener('click', ()=>{
    const name = document.getElementById('name').value
    const balance = document.getElementById('balance').value

    if(name != "New Customer" && balance != 0){

        customerList.push({name,balance})
        history.push(`${name} Deposited ${balance} £ To His/Her Account`)
    }
    
    renderAccounts()
    createNames()
    renderHistory()
})


document.getElementById('btnTransfer').addEventListener('click',()=>{
    const sender = document.getElementById("sender").value
    const receiver = document.getElementById("receiver").value
    const amount = parseInt(document.getElementById("amount").value)

    customerList.forEach((customer)=>{
        if(customer.name === sender){
            customer.balance = (parseInt(customer.balance) - amount).toString()

        }

        if(customer.name === receiver){
            customer.balance = (parseInt(customer.balance) + amount).toString()
        }
    })

    history.push(`${sender} Transfered ${amount} £ To ${receiver}`)

    renderAccounts()
    renderHistory()

})