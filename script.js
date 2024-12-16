  
    // Select elements
    const gridItems = document.querySelectorAll(".grid-item");
    const blockIdInput = document.getElementById("block_id");
    const colourInput = document.getElementById("colour_id");
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset");

    // Function to reset all grid colors to transparent
    const resetColors = () => {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    };

    // Change color event listener
    changeButton.addEventListener("click", () => {
      const blockId = blockIdInput.value;
      const color = colourInput.value;

      if (!blockId || !color) {
        alert("Please enter both block ID and color.");
        return;
      }

      // Reset all grid colors first
      resetColors();

      // Find the grid item by ID and change its color
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
      } else {
        alert("Invalid block ID. Please enter a number between 1 and 9.");
      }
    });

    // Reset button event listener
    resetButton.addEventListener("click", resetColors);
