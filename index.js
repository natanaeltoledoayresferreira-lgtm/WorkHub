const form = document.getElementById("login")
let pathUser = null

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const formData = new FormData(form)
    
    const dataJson = Object.fromEntries(formData)

    try {
        const requisicao = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson, null, 2)
        })

        if (requisicao.ok) {
            pathUser = await requisicao.json()
        }
    } catch (error) {
        console.log('erro na requisicao', error),
        alert("deu ruim")
    }

    console.log(pathUser)

    if (pathUser) {
       window.location.href = pathUser
    }

})

