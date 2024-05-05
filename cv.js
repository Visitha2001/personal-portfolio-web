document.getElementById("downloadButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of anchor tag
    var cvUrl = "./CV/VisithaNirmalRajapaksha_CV.pdf";
    var link = document.createElement("a");
    link.href = cvUrl;
    link.download = "VisithaNirmalRajapaksha_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
