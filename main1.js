var Form1 = document.getElementById("Form1")
const btnSend = document.getElementById("submit")

const getLocalStorage = () => JSON.parse(localStorage.getItem('pr_product')) ?? []
//const setLocalStorage = (dbProduct) => localStorage.setItem("product", JSON.stringify(dbProduct))
  
const saveProduct = ()=>{
    let product = {
        codigo: document.getElementById("cod").value,
        quantidade: document.getElementById("qtd").value,
        valor: document.getElementById("compra").value  
    }      
    createProduct(product)
}

const createProduct = (product) => {
    const prProduct = getLocalStorage()
    prProduct.push(product)
    localStorage.setItem("pr_product",JSON.stringify(prProduct))
}


btnSend.addEventListener("click", saveProduct)