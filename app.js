const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")
const resultEl = document.getElementById("result")

function calculateAge(){
    const birthdayValue = birthdayEl.value
    if(birthdayValue === ""){
        alert("Please Enter Your Date of Birth")
    }else{
        const age = getAge(birthdayValue)
        resultEl.innerText = `You are ${age} ${age > 1 ? "Years" : "Year"} Old.`
    }
}

function getAge(birthdayValue){
    const current_date = new Date()
    const birthday_date = new Date(birthdayValue)
    let age1 = current_date.getFullYear() - birthday_date.getFullYear()
    const birthdayPassed = current_date.getMonth() > birthday_date.getMonth() || (current_date.getMonth() === birthday_date.getMonth() && current_date.getDate() > birthday_date.getDate())
    if(!birthdayPassed){
        age1--
    }
    return age1
}

btnEl.addEventListener("click",calculateAge)