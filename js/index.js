document.getElementById("btn-dwld").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "pdf/presentacion.pdf"; // Ruta del archivo PDF
    link.download = "presentacion.pdf"; // Nombre del archivo que se descargará
    link.click();
});