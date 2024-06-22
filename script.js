//your code here!
document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById("infi-list");
    let itemCount = 10; // Initial number of items
    let loadCount = 2;  // Number of items to load on scroll end

    // Function to create and append list items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = "Item " + (itemList.children.length + 1);
            itemList.appendChild(listItem);
        }
    }

    // Initial load of 10 items
    addItems(itemCount);

   
    document.getElementById("infi-list").addEventListener("scroll", function() {
        const { scrollTop, scrollHeight, clientHeight } = this;
        if (scrollTop + clientHeight >= scrollHeight) {
            addItems(loadCount);
        }
    });
});


