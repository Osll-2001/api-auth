
const loadTemplateLogin=()=>{
    const templateLogin=`
        <h1>Login</h1>
        <form>
            <div>
            <label for="email">Email</label>
            <input type="text" placeholder="test@example.com"/>
            <div>
            <div>
            <label for="pass">Password<label>
            <input type="password"/>
            <div>
            <button>Aceptar</button>
        </form>
    `
    const body=document.getElementsByTagName('body')[0]
    body.innerHTML=templateLogin
}

const loadTemplateRegister=()=>{
    const templateLogin=`
    <h1>Registrar</h1>
    <form id="form-register">
        <div>
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="test@example.com"/>
        <div>
        <div>
        <label for="pass">Password<label>
        <input type="password" name="password"/>
        <div>
        <button  type="submit">Aceptar</button>
    </form>
`
const body=document.getElementsByTagName('body')[0]
body.innerHTML=templateLogin
}

const addListenerRegister=async()=>{
    const formRegister=document.getElementById("form-register")
    formRegister.onsubmit=async (e) =>{
        e.preventDefault()
        const formData=new FormData(formRegister)
        const data=Object.fromEntries(formData.entries())
        const response = await axios.post('/register',data)
        console.log(response.data)
    }

 }

window.onload=()=>{
    loadTemplateRegister()
    addListenerRegister()
}