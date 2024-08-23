const form = document.querySelector('form')
const input = document.querySelector('input')
const myList = document.querySelector('ul')
const check = document.gt



form.onsubmit = (event) => {
    event.preventDefault()
    addNewItem()

}


function addNewItem() {
    const newItem = input.value.trim();

    if (newItem !== "") {
        const listItem = document.createElement("li")

        listItem.innerHTML += `
                <div class="content-list">
                    <input type="checkbox">
                    <label for="">${newItem}</label>
                </div>
                    <button onclick="removeItem(this)">
                        <img src="/images/Frame-3.svg" alt="Deletar">
                    </button>`;

        myList.appendChild(listItem)
        input.value = ''
    }
}

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();

}







