function checkAge() {
  let age = document.getElementById("ageInput").value; 
  let result = document.getElementById("ageResult");

  if (age >= 18) { 
    result.textContent = "✅ You are an adult.";
  } else if (age > 0) {
    result.textContent = "👶 You are under 18.";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}

function calculateSum(a, b) {
  return a + b; 
}

function showSum() {
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);
  let result = calculateSum(n1, n2); 
  document.getElementById("sumResult").textContent = `Sum = ${result}`;
}

function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; 

  for (let i = 5; i >= 1; i--) { 
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

function showArray() {
  let fruits = ["Apple", "Banana", "Orange"];
  let list = document.getElementById("arrayList");
  list.innerHTML = ""; 

  fruits.forEach(fruit => { 
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

function toggleMessage() {
  let msg = document.getElementById("message");
  msg.classList.toggle("hidden"); 
}

function addNewItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New dynamic item added!";
  list.appendChild(newItem); 
}
