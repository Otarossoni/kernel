const fetchContainerContent = function () {
  fetch('https://raw.githubusercontent.com/Otarossoni/kernel/main/README.md')
      .then(response => response.text())
      .then(data => {
        const readmeHtml = marked(data)
        const container = document.getElementById('content')
        container.innerHTML = readmeHtml
        Prism.highlightAllUnder(container)
      })
      .catch(error => console.error("Error:", error))
}
document.addEventListener("DOMContentLoaded", fetchContainerContent())