const loadTemplateLogin=()=>{
    const templateLogin=`
        <h1>Login</h1>
    `
    const body=document.getElementsByTagName('body')[0]
    body.innerHTML=templateLogin
}

window.onload=()=>{
    loadTemplateLogin()
}