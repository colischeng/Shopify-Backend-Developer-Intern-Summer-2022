const addButton = document.getElementById("submit-btn");

addButton.addEventListener("click", async () => {
  const item = {
    itemName: document.getElementById("addItemName").value,
    warehouse: document.getElementById("addWarehouse").value,
    weight: document.getElementById("addWeight").value,
    category: document.getElementById("addCategory").value,
    description: document.getElementById("addDescription").value,
  };

  await fetch("/api/inventory", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => {
    if (res.status < 400) {
      alert("Add was successful");
      location.reload();
    } else {
      alert("Add was unsuccessful please check fields and retry");
    }
  });
});
