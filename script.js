const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Hoje você já marcou, volte amanhã 😁")
    return
  }

  alert("Hora de marcar o que fez!")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

// || "ou"

nlwSetup.setData(data)
nlwSetup.load()

// const data = {
//   run: ["02-01", "02-02", "02-03", "02-04", "02-05", "02-06", "02-07", "02-08"],
//   water: [
//     "02-01",
//     "02-02",
//     "02-03",
//     "02-04",
//     "02-05",
//     "02-06",
//     "02-07",
//     "02-08",
//   ],
//   food: [
//     "02-01",
//     "02-02",
//     "02-03",
//     "02-04",
//     "02-05",
//     "02-06",
//     "02-07",
//     "02-08",
//   ],
// }
