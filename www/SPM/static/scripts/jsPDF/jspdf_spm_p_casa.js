

window.jsPDF = window.jspdf.jsPDF;

const addFooters = doc => {
    const pageCount = doc.internal.getNumberOfPages()

    doc.setFont('helvetica', 'italic')
    doc.setFontSize(8)
    for (var i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.text('Page ' + String(i) + ' of ' + String(pageCount), doc.internal.pageSize.width / 2, 287, {
            align: 'center'
        })
        doc.text('Developed by SPinto with jsPDF', doc.internal.pageSize.width - 10, 287, {
            align: 'right'
        })

    }
}


const addHeaders = doc => {

    // Load the image
    //var image = new Image();
    //image.src = '../../static/images/logo_spm.jpg';


    const pageCount = doc.internal.getNumberOfPages()

    doc.setFont('helvetica', 'italic')
    doc.setFontSize(8)
    for (var i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        //doc.addImage(image, 'JPEG', 10, 5, 60, 15);
        doc.text('SPM-p CASA', doc.internal.pageSize.width - 10, 10, {
            align: 'right'
        })

    }
}


function downloadPDF() {

    var jsonString_res_array_questions = JSON.stringify(res_array_questions);
    console.log(jsonString_res_array_questions);
    var jsonString_res_array_group = JSON.stringify(res_array_group);
    console.log(jsonString_res_array_group);
    var jsonString_res_array_score = JSON.stringify(res_array_score);
    console.log(jsonString_res_array_score);
    var jsonString_res_array_classificacao_int = JSON.stringify(res_array_classificacao_int);
    console.log(jsonString_res_array_classificacao_int);
    // console.log(res_array_questions[0]);
    //console.log(jsonString);
    // console.log(jsonString);


    $.ajax({
        type: 'POST',
        url: '../../static/php/SPMs/addSPM.php',
        data: { jsonString_res_array_questions: jsonString_res_array_questions, 
                jsonString_res_array_group:jsonString_res_array_group,
                jsonString_res_array_score:jsonString_res_array_score,
                jsonString_res_array_classificacao_int:jsonString_res_array_classificacao_int,
                avaliation_date : document.getElementById("client_date_of_avaliation").value,
                avaliation_reason :  document.getElementById("client_avaliacion_reason").value,
                spm_type :2},
        success: function(response) {
            console.log("sucess!");
            console.log(response);
        }
      });



    var doc = new jsPDF("p", "mm", "a4");

    var a4_width = 210;
    var a4_height = 297;
    // doc.text(20, 20, 'Hello world!');
    // doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');

    var y = 20;
    // Load the image
    var image = new Image();
    image.src = '../../static/images/logo_spm.jpg';
    doc.addImage(image, 'JPEG', 10, y - 10, 60, 15);

    y = y;
    doc.setFontSize(26);
    doc.setFont("Helvetica", "bold");
    doc.text('SPM-p CASA', doc.internal.pageSize.width / 2, y, { align: 'center' });

    y = y + 15;
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(20, y, "Nome: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(45, y, document.getElementById("client_name").value);


    y = y + 10;
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(20, y, "Idade: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(45, y, document.getElementById("client_age").value);

    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(50, y, "Escolaridade: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(90, y, document.getElementById("client_school_year").value);

    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(100, y, "Sexo: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(120, y, document.getElementById("client_sex").value);


    y = y + 10;
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(20, y, "Data: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(45, y, document.getElementById("client_date_of_avaliation").value);


    y = y + 10;
    doc.setFontSize(16);
    doc.setFont("Helvetica", "bold");
    doc.text(20, y, "Motivo: ");
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");


    //var lineHeight = doc.internal.getLineHeight() * doc.internal.getFontSize();
    doc.setFontSize(12);
    var lineHeight = Math.max(doc.internal.getLineHeight(), doc.internal.getFontSize());
    var lineHeight = 12*0.4;
    console.log(doc.internal.getLineHeight());
    console.log(doc.internal.getFontSize());
    console.log(lineHeight);
    var maxHeight = a4_height - 40;


    y = y + 00;
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


    var lastTextPosition = y;
    lastTextPosition = 80;

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


    //Empty Table
    doc.autoTable({ startY: lastTextPosition + 10, });

    var green_color = [242, 176, 173];
    var alternative_green_color = [255, 255, 255];
    var header_color_gray = [148, 148, 148];

    var y_before = lastTextPosition ;
    
    var height_oneline = 5.23;
    var height_twolines = 8.5;
    var height_trheelines = 11.7;
    var height_text = height_oneline/2.0;
    

    var y = [];
    var table_page = [];

    y[1] = y_before+20+height_oneline;
    y[2] = y[1]+height_oneline;
    y[3] = y[2]+height_oneline;
    y[4] = y[3]+height_oneline;
    y[5] = y[4]+height_oneline;
    y[6] = y[5]+height_twolines;
    y[7] = y[6]+height_twolines;
    y[8] = y[7]+height_twolines;

    var y_table2 = y[8]+18.5;

    y[9] = y_table2+height_oneline;
    y[10] = y[9]+height_twolines;
    y[11] = y[10]+height_oneline;
    y[12] = y[11]+height_twolines;
    y[13] = y[12]+height_twolines;
    y[14] = y[13]+height_oneline;
    y[15] = y[14]+height_oneline;
    y[16] = y[15]+height_oneline;
    y[17] = y[16]+height_twolines;
    y[18] = y[17]+height_twolines;
    y[19] = y[18]+height_oneline;

    var y_table3 = 14;

    y[20] = y_table3+height_oneline;
    y[21] = y[20]+height_twolines;
    y[22] = y[21]+height_twolines;
    y[23] = y[22] + height_oneline;
    y[24] = y[23] + height_twolines;
    y[25] = y[24]+height_twolines;
    y[26] = y[25]+height_twolines;
    y[27] = y[26]+height_twolines;
    y[28] = y[27]+height_oneline;

    var y_table4 = y[28] +  15.3;

    y[29] = y_table4+height_oneline;
    y[30] = y[29]+height_oneline;
    y[31] = y[30]+height_oneline;
    y[32] = y[31]+height_oneline;
    y[33] = y[32] + height_oneline;
    y[34] = y[33]+height_twolines;
    y[35] = y[34]+height_oneline;
    y[36] = y[35]+height_twolines;
    y[37] = y[36]+height_twolines;
    y[38] = y[37]+height_oneline;
    y[39] = y[38]+height_oneline;
    y[40] = y[39]+height_oneline;
    y[41] = y[40]+height_oneline;
    y[42] = y[41]+height_oneline;

    var y_table5 = y[42] + 15.3;

    
    y[43] = y_table5+height_oneline;
    y[44] = y[43]+height_oneline;
    y[45] = y[44]+height_oneline;
    y[46] = y[45]+height_oneline;

    var y_table6 = 14;

    y[47] = y_table6+height_oneline;
    y[48] = y[47]+height_twolines;
    y[49] = y[48]+height_twolines;
    y[50] = y[49]+height_twolines;
    y[51] = y[50]+height_twolines;
    y[52] = y[51]+height_twolines;
    y[53] = y[52]+height_oneline;
    y[54] = y[53]+height_oneline;
    y[55] = y[54]+height_oneline;

    var y_table7 = y[55] + 18.5;

    y[56] = y_table7+height_oneline;
    y[57] = y[56]+height_twolines;
    y[58] = y[57]+height_twolines;
    y[59] = y[58]+height_twolines;
    y[60] = y[59]+height_oneline;
    y[61] = y[60]+height_oneline;
    y[62] = y[61]+height_oneline;
    y[63] = y[62]+height_oneline;
    y[64] = y[63]+height_oneline;
    y[65] = y[64]+height_twolines;
    y[66] = y[65]+height_oneline;

    var y_table8 = y[66]+15.3;

    y[67] = y_table8+height_oneline;
    y[68] = y[67]+height_oneline;
    y[69] = y[68]+height_oneline;
    y[70] = y[69]+height_trheelines;
    y[71] = y[70]+height_oneline;
    y[72] = y[71]+height_twolines;
    y[73] = y[72]+height_oneline;
    y[74] = y[73]+height_oneline;
    y[75] = y[74]+height_twolines;
    
    var x = [0,19.1,35.3,57.6,75];

    var x1 = 10;
    var radius = 2;

    //TABLE spm_casa_table_participacao_social (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,

        html: '#spm_p_casa_table_participacao_social',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },
        pageBreak: 'avoid',

        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });


    // var headerHTML = document.getElementById("participacao_social_resultado").innerHTML;
    // doc.text(15, doc.lastAutoTable.finalY+5, headerHTML);

    table_page[1] = doc.internal.getNumberOfPages();

    
    
    //TABLE spm_casa_table_visao (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,
        html: '#spm_p_casa_table_visao',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });

    table_page[2] = doc.internal.getNumberOfPages();

    //TABLE spm_casa_table_audicao (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,
        html: '#spm_p_casa_table_audicao',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });

    table_page[3] = doc.internal.getNumberOfPages();

    //TABLE spm_casa_table_toque (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,
        html: '#spm_p_casa_table_toque',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });

    
    table_page[4] = doc.internal.getNumberOfPages();



    //TABLE spm_casa_table_gosto_e_olfato (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,
        html: '#spm_p_casa_table_gosto_e_olfato',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });

    table_page[5] = doc.internal.getNumberOfPages();

    //TABLE spm_casa_table_consciencia_corporal (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,
        html: '#spm_p_casa_table_consciencia_corporal',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });


    table_page[6] = doc.internal.getNumberOfPages();

    //TABLE spm_casa_table_movimento_e_equilibrio (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,
        html: '#spm_p_casa_table_movimento_e_equilibrio',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });

    
    table_page[7] = doc.internal.getNumberOfPages();

    //TABLE spm_casa_table_planeamento_motor_e_ideacao (green)
    doc.autoTable({
        startX: 20,
        startY: doc.lastAutoTable.finalY + 10,
        html: '#spm_p_casa_table_planeamento_motor_e_ideacao',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        //tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: green_color,
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: alternative_green_color,
            textColor: 0
        },
        headStyles: {
            fillColor: header_color_gray,
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            0: { halign: 'center' },
            1: { halign: 'center' },
            2: { halign: 'center' },
            3: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });

    table_page[8] = doc.internal.getNumberOfPages();

    

    //Design circles
    for(let i = 1;i<=75;i++){
        
        // console.log(i + " = "+ parseInt(res_array_questions[i]) + " , " + x[parseInt(res_array_questions[i])] + " ,,,, " + y[i] );
        if(i==1){
            doc.setPage(table_page[1]);
        }
        else if(i==9){
            doc.setPage(table_page[2]);
        }else if(i==20){
            doc.setPage(table_page[3]);
        }else if(i==29){
            doc.setPage(table_page[4]);
        }else if(i==43){
            doc.setPage(table_page[5]);
        }else if(i==47){
            doc.setPage(table_page[6]);
        }else if(i==56){
            doc.setPage(table_page[7]);
        }else if(i==67){
            doc.setPage(table_page[8]);
        }


        var x_aux = 0;
        if(res_array_questions[i]!=null){
            if(i<=8){
                //Invert because first questions have opossite values
                x_aux = x[ 5 - parseInt(res_array_questions[i])];
            }
            else{
                x_aux = x[parseInt(res_array_questions[i])];
            }
            
            doc.setDrawColor(255,0,0);
            doc.circle(x_aux, y[i]+height_text, radius, 'S');
        }
    }
    
    
    y = doc.lastAutoTable.finalY + 10;
    
    doc.addPage();
    y = 10;
    
    doc.text(20, y, "CHART: ");
    
    if(y>a4_height){
        doc.addPage();
        y = 10;
    }
    if(y+150>a4_height){
        doc.addPage();
        y = 10;
    }
    //Chart
    
    // Get the div to export
    var divToExport = document.getElementById("chart_spm-p-casa");
    // Convert the div to a PNG image using html2canvas
    html2canvas(divToExport).then(canvas => {
        // Get the data URL of the PNG image
        var imgData = canvas.toDataURL("image/png");

        // Create a new image element
        var imgElement = document.createElement("img");
        
        // Set the source of the image to the data URL
        imgElement.src = imgData;

        // Add the PNG image to the PDF document
        //doc.addImage(imgData, "PNG", 10, y, 180, 150);
        doc.addImage(imgElement, "PNG", 10, y, 180, 150);
    });


    y = y + 150+10;
    if(y>a4_height){
        doc.addPage();
        y = 10;
    }
    
    doc.text(20, y, "FINAL TABLE: ");
    y = y +10;
    
    //Table FINAL (gray)
    doc.autoTable({
        startX: 20,
        //startY: doc.lastAutoTable.finalY + 10,
        startY: y,
        html: '#table_spm-p-casa_id',

        //margin: { top: 37 },
        // tableLineColor: [231, 76, 60],
        // tableLineWidth: 0.1,

        tableWidth: 'wrap',
        styles: {
            cellPadding: 1,
            fontSize: 8,
            lineColor: [44, 62, 80],
            lineWidth: 0.25,
            // halign : 'center',
        },

        bodyStyles: {
            fillColor: [192, 194, 192],
            textColor: 0
        },
        alternateRowStyles: {
            fillColor: [228, 226, 226],
            textColor: 0
        },
        headStyles: {
            fillColor: [44, 44, 44],
            textColor: 255,
            fontSize: 15
        },
        columnStyles: {
            text: { cellWidth: 'auto' },
            1: { halign: 'center' },
            //     // 0: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' }, 
        },

        pageBreak: 'avoid',
        // tableWidth: 180,
        // styles: {fillColor: [181, 243, 173]},
        // columnStyles: {
        //   0: {fillColor: [148, 148, 148]}
        // }
    });
    // Save the PDF
    //doc.save('document.pdf');



    //Header and Fotter
    addFooters(doc);
    addHeaders(doc);

    // Get the data URL representation of the PDF
    var pdfData = doc.output("datauristring");
    // Open the PDF in a new window page
    var newWindow = window.open("");
    newWindow.document.write("<iframe width='100%' height='100%' src='" + pdfData + "'></iframe>");

    


}