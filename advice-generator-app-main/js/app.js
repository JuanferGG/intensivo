const btn = document.getElementById('btn')
const adviceHtml = document.getElementById('advice')
const adviceH2 = document.getElementById('adviceH2')

async function getMethod(){
    const data = await fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 90)}`).then((e) => e.json())
    adviceH2.textContent = `Advice: #${data.slip.id}`
    adviceHtml.textContent = `"${data.slip.advice}"`

    console.log(data)
}

btn.addEventListener('click', getMethod)