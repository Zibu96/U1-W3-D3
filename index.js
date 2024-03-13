const handleSubmit = (event) => {
event.preventDefault()


const taskInput = document.getElementById("task");

const toDoTask = taskInput.value


const main = document.querySelector("main")
const corpe = document.createElement("div")
corpe.className = corpe


corpe.addEventListener("click", (event) =>{ event.currentTarget.style.backgroundcolor = grey}, )

const makeTask = document.createElement("p")
makeTask.innerText = toDoTask

console.log(makeTask)


corpe.append(makeTask)
main.appendChild(corpe)

taskInput.value = ""
}