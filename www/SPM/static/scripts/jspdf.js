
window.jsPDF = window.jspdf.jsPDF;


function downloadPDF() {

    
    var doc = new jsPDF("p","mm","a4");
	
    var a4_width = 210;
    var a4_height = 297;
    // doc.text(20, 20, 'Hello world!');
    // doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');


    doc.setFontSize(16); 
    doc.setFont("Helvetica", "bold");
    doc.text(20, 20,"Nome: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(45, 20, document.getElementById("client_name").value);
    
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(20,30,"Idade: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(45, 30, document.getElementById("client_age").value);
    
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(50, 30,"Escolaridade: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(90, 30, document.getElementById("client_school_year").value);
    
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(100,30,"Sexo: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(120, 30,document.getElementById("client_sex").value);

    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(20, 40,"Data: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(45, 40, document.getElementById("client_date_of_avaliation").value);

    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(20, 50,"Motivo: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    
    //var lineHeight = doc.internal.getLineHeight() * doc.internal.getFontSize();
    var lineHeight = Math.max(doc.internal.getLineHeight() , doc.internal.getFontSize());
    console.log(doc.internal.getLineHeight());
    console.log(doc.internal.getFontSize());
    console.log(lineHeight);
    var maxHeight = a4_height-40;
    
    var y = 50;
    var x = 45;
    var lines = doc.splitTextToSize(document.getElementById("client_avaliacion_reason").value, 150);
    for (var i = 0; i < lines.length; i++) {
        if (y + lineHeight > maxHeight) {
            doc.addPage();
            y = 10;
        }
        doc.text(lines[i], x, y);
        y = y + lineHeight;
    }
    //doc.text(30, 50, document.getElementById("client_avaliacion_reason").value);


    var lastTextHeight =  y;


    // Add new page
    //doc.addPage();
    
    //Add table
     // Convert the HTML div to a PDF
    //doc.autoTable({ html: '#table_spm-p-casa' });
    // doc.autoTable({
    //     startX: 20,
    //     startY: lastTextHeight+10,
    //     html: '#table_participacao_social'
    // });






    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY +10,
        html: '#table_spm-p-casa_id'
    });
    // Save the PDF
    //doc.save('document.pdf');

    // Get the data URL representation of the PDF
    var pdfData = doc.output("datauristring");
    // Open the PDF in a new window page
    var newWindow = window.open("");
    newWindow.document.write("<iframe width='100%' height='100%' src='" + pdfData + "'></iframe>");


}