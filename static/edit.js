const editButton = document.getElementById("edit-btn");

editButton.addEventListener("click", async () => {
  const itemId = document.getElementById("itemId").innerHTML;

  const item = {
    itemName: document.getElementById("editItemName").value,
    warehouse: document.getElementById("editWarehouse").value,
    weight: document.getElementById("editWeight").value,
    category: document.getElementById("editCategory").value,
    description: document.getElementById("editDescription").value,
  };

  Object.keys(item).forEach(
    (k) => !item[k] && item[k] !== undefined && delete item[k]
  );

  await fetch(`/api/inventory/${itemId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => {
    if (res.status < 400) {
      alert("Edit was successful");
      const PORT = process.env.PORT || "http://localhost:3000";
      window.location.href = `${PORT}`;
    } else {
      alert("Edit was unsuccessful please check fields and retry");
    }
  });
});
