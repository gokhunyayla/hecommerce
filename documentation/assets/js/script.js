const copyButtonLabel = "Copy Code";
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) 
{
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);
  button.innerText = "Code Copied";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}

window.onload = function() {
    var yaerTag = document.getElementById("year-tag");
    if (yaerTag)
    {
        var currentYear = new Date().getFullYear();
        yaerTag.textContent = currentYear.toString();
    }
};
