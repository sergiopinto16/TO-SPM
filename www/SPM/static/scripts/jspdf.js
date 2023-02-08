

function downloadPDF() {
    var chartDiv = document.getElementById("chart_spm-p-casa");

    html2canvas(chartDiv).then(function (canvas) {
        setTimeout(function () {
            var pdf = new jsPDF("p", "mm", "a4");
            pdf.addImage(canvas.toDataURL("image/jpeg", 1.0), "JPEG", 10, 10);
            var pdfData = pdf.output("blob");
            var url = URL.createObjectURL(pdfData);
            window.open(url, "_blank");
            //pdf.save("chart.pdf");
        }, 1000);
    });



}