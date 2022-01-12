const deleteButtons = document.getElementsByClassName("delete");

for (let i = 0; i < deleteButtons.length; i++) {
  const deleteButton = deleteButtons[i];

  deleteButton.addEventListener("click", async () => {
    await fetch(`/api/inventory/${deleteButton.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status < 400) {
        alert("Delete was successful");
        window.location.href = `https://shopify-2022-backend-intern.herokuapp.com/`;
      } else {
        alert("Delete was unsuccessful please retry");
      }
    });
  });
}
