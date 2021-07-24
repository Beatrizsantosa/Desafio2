var Form1 = document.getElementById("Form1")
const btnSend = document.getElementById("submit")

const getLocalStorage = () => JSON.parse(localStorage.getItem('client')) ?? []

const saveClient = ()=>{
    let client = {
        nome: document.getElementById("nome").value,
        endereco: document.getElementById("endereço").value,        
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value 
        
    }      
    createClient(client)
}

const createClient = (client) => {
    const prClient = getLocalStorage()
    prClient.push(client)
    localStorage.setItem("client",JSON.stringify(prClient))
}

btnSend.addEventListener("click", saveClient)
