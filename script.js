
fetch("http://localhost:5000/")
  .then(res => res.json())
  .then(data => {
    document.getElementById("status").textContent = "✅ " + data.message;
  })
  .catch(err => {
    document.getElementById("status").textContent = "❌ Backend not reachable";
  });
