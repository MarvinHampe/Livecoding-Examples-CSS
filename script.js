function toggleCodeExecution(codeId) {
  var codeElement = document.getElementById("code-" + codeId);
  var sandboxOutput = document.getElementById("sandbox-output-" + codeId);

  if (sandboxOutput.style.display === "block") {
    sandboxOutput.style.display = "none";
  } else {
    var code = codeElement.innerText;

    var sandboxIframe = document.createElement("iframe");
    sandboxIframe.style.width = "100%";
    sandboxIframe.style.height = "200px";
    sandboxIframe.style.border = "none";

    sandboxOutput.innerHTML = "";
    sandboxOutput.appendChild(sandboxIframe);

    var sandboxDocument =
      sandboxIframe.contentDocument || sandboxIframe.contentWindow.document;
    sandboxDocument.open();
    sandboxDocument.write("<style>" + code + "</style><body></body>");
    sandboxDocument.close();

    sandboxOutput.style.display = "block";

    var exampleContent = sandboxDocument.body;
    var exampleHTML = "";

    if (codeId === 2) {
      exampleHTML =
        '<div id="example-div" class="animated bounce" style="color:white;">This is an example div.</div>';
    } else if (codeId === 3) {
      exampleHTML =
        '<div id="example-div" class="animated rotate" style="color:white;">This is an example div.</div>';
    } else if (codeId === 7) {
      exampleHTML =
        '<p class="example-paragraph" style="color:white;">This is an example paragraph with a blur effect.</p>';
    } else if (codeId === 8) {
      exampleHTML =
        '<p class="example-paragraph" style="color:white;">This is an example paragraph with an opacity effect.</p>';
    } else if (codeId === 9) {
      exampleHTML =
        '<p class="example-paragraph" style="color:limegreen;">This is an example paragraph with a saturate effect.</p>';
    } else if (codeId === 10) {
      exampleHTML =
        '<div class="flex-container"><div class="flex-item">Item 1</div><div class="flex-item">Item 2</div><div class="flex-item">Item 3</div></div>';
    } else if (codeId === 11) {
      exampleHTML =
        '<div class="flex-container"><div class="flex-item">Item 1</div><div class="flex-item">Item 2</div><div class="flex-item">Item 3</div></div>';
    } else if (codeId === 12) {
      exampleHTML =
        '<p class="font-example" style="color:white;">This is an example paragraph with a custom font size.</p>';
    } else if (codeId === 13) {
      exampleHTML =
        '<p class="font-example" style="color:white;">This is an example paragraph with a custom font family.</p>';
    } else if (codeId === 14) {
      exampleHTML =
        '<div class="grid-example" style="color:white;"><div>Column 1</div><div>Column 2</div><div>Column 3</div></div>';
    } else if (codeId === 15) {
      exampleHTML =
        '<div class="grid-example" style="color:white;"><div>Row 1</div><div>Row 2</div><div>Row 3</div></div>';
    } else if (codeId === 16) {
      exampleHTML =
        '<img class="image-example" src="/image.jpg" alt="Example Image">';
    } else if (codeId === 17) {
      exampleHTML =
        '<img class="image-example" src="/image.jpg" alt="Example Image">';
    } else if (codeId === 18) {
      exampleHTML =
        '<div class="example-div">This is an example div with responsive layout.</div>';
    } else if (codeId === 19) {
      exampleHTML =
        '<div class="flex-container"><div class="flex-item">Item 1</div><div class="flex-item">Item 2</div><div class="flex-item">Item 3</div></div>';
    } else if (codeId === 20) {
      exampleHTML =
        '<div class="grid-container"><div class="grid-item">Item 1</div><div class="grid-item">Item 2</div><div class="grid-item">Item 3</div></div>';
    } else if (codeId === 21) {
      exampleHTML =
        '<div class="inline-container"><span class="inline-item">Item 1</span><span class="inline-item">Item 2</span><span class="inline-item">Item 3</span></div>';
    } else if (codeId === 22) {
      exampleHTML =
        '<div class="block-container"><div class="block-item">Item 1</div><div class="block-item">Item 2</div><div class="block-item">Item 3</div></div>';
    } else if (codeId === 23) {
      exampleHTML =
        '<ul class="list-style" style="color:white;"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><ul class="list-style-square" style="color:white;"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><ol class="list-style-decimal" style="color:white;"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>';
    } else if (codeId === 24) {
      exampleHTML =
        '<ul class="list-media-query" style="color:white;"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';
    }

    exampleContent.innerHTML = exampleHTML;
  }
}
