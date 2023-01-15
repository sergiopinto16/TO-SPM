$(document).ready(function () {




});

function onChange() {

    calc_spm_p();

}



function checkArray($checkbox) {
    return $checkbox
        .filter(':checked')
        .map((_, el) => el.get("value"))
        .get();
}

const res_array_questions = [];


let tscore_total = 0;


function calc_participacao_social() {

    res_group_name = "res_participacao_social"
    score_group_name = "score_participacao_social"
    tscore_group_name = "tscore_participacao_social"

    let indexquestion_start = 1;
    let indexquestion_end = 8;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;

    if(res_group != 0){
        if(res_group == 10 || res_group == 1){
            score_group = 16;
            tscore_group = 40;
        }
        else if(res_group == 12){
            score_group = 24;
            tscore_group = 43;
        }
        else if(res_group == 13){
            score_group = 31;
            tscore_group = 45;
        }
        else if(res_group == 14){
            score_group = 38;
            tscore_group = 47;
        }
        else if(res_group == 15){
            score_group = 46;
            tscore_group = 49;
        }
        else if(res_group == 16){
            score_group = 54;
            tscore_group = 51;
        }
        else if(res_group == 17){
            score_group = 62;
            tscore_group = 53;
        }
        else if(res_group == 18){
            score_group = 69;
            tscore_group = 55;
        }
        else if(res_group == 19){
            score_group = 73;
            tscore_group = 56;
        }
        else if(res_group == 20){
            score_group = 79;
            tscore_group = 58;
        }
        else if(res_group == 21){
            score_group = 84;
            tscore_group = 60;
        }
        else if(res_group == 22){
            score_group = 88;
            tscore_group = 62;
        }
        else if(res_group == 23){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 24){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 25){
            score_group = 93;
            tscore_group = 65;
        }
        else if(res_group == 26){
            score_group = 95;
            tscore_group = 66;
        }
        else if(res_group == 27){
            score_group = 95;
            tscore_group = 67;
        }
        else if(res_group == 28){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 29){
            score_group = 97;
            tscore_group = 70;
        }
        else if(res_group == 30){
            score_group = 98;
            tscore_group = 71;
        }
        else if(res_group == 31){
            score_group = 99;
            tscore_group = 73;
        }
        else if(res_group == 32){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 33){
            score_group = 99;
            tscore_group = 76;
        }
        else if(res_group == 34){
            score_group = 99;
            tscore_group = 78;
        }
        else if(res_group == 35 || res_group==36){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 37){
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;
    
    tscore_total += parseInt(tscore_group);

}


function calc_visao() {

    res_group_name = "res_visao"
    score_group_name = "score_visao"
    tscore_group_name = "tscore_visao"

    let indexquestion_start = 9;
    let indexquestion_end = 19;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;


    score_group = 0;
    tscore_group = 0;

    if(res_group != 0){
        if(res_group == 11 ){
            score_group = 18;
            tscore_group = 41;
        }
        else if(res_group == 12){
            score_group = 50;
            tscore_group = 50;
        }
        else if(res_group == 13){
            score_group = 66;
            tscore_group = 54;
        }
        else if(res_group == 14){
            score_group = 76;
            tscore_group = 57;
        }
        else if(res_group == 15){
            score_group = 82;
            tscore_group = 59;
        }
        else if(res_group == 16){
            score_group = 86;
            tscore_group = 61;
        }
        else if(res_group == 17){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 18){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 19){
            score_group = 93;
            tscore_group = 65;
        }
        else if(res_group == 20){
            score_group = 95;
            tscore_group = 67;
        }
        else if(res_group == 21){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 22){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 23){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 24){
            score_group = 97;
            tscore_group = 70;
        }
        else if(res_group == 25){
            score_group = 98;
            tscore_group = 71;
        }
        else if(res_group == 26){
            score_group = 98;
            tscore_group = 72;
        }
        else if(res_group == 27){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 28){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 29){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 30){
            score_group = 99;
            tscore_group = 76;
        }
        else if(res_group == 31){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 32){
            score_group = 99;
            tscore_group = 78;
        }
        else if(res_group >= 33 && res_group<=34){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 35){
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;
    
    tscore_total += parseInt(tscore_group);
}


function calc_audicao() {

    res_group_name = "res_audicao"
    score_group_name = "score_audicao"
    tscore_group_name = "tscore_audicao"

    let indexquestion_start = 20;
    let indexquestion_end = 28;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;
    

    if(res_group != 0){
        if(res_group == 8 ){
            score_group = 24;
            tscore_group = 43;
        }
        else if(res_group == 9){
            score_group = 58;
            tscore_group = 52;
        }
        else if(res_group == 10){
            score_group = 73;
            tscore_group = 56;
        }
        else if(res_group == 11){
            score_group = 82;
            tscore_group = 59;
        }
        else if(res_group == 12){
            score_group = 88;
            tscore_group = 62;
        }
        else if(res_group == 13){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 14){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 15){
            score_group = 95;
            tscore_group = 66;
        }
        else if(res_group == 16){
            score_group = 95;
            tscore_group = 67;
        }
        else if(res_group == 17){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 18){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 19){
            score_group = 97;
            tscore_group = 70;
        }
        else if(res_group == 20){
            score_group = 98;
            tscore_group = 71;
        }
        else if(res_group == 21){
            score_group = 98;
            tscore_group = 72;
        }
        else if(res_group == 22){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 23){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 24){
            score_group = 99;
            tscore_group = 76;
        }
        else if(res_group == 25){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 26){
            score_group = 99;
            tscore_group = 78;
        }
        else if(res_group == 27){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group == 28){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 29){
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;


    tscore_total += parseInt(tscore_group);

}


function calc_toque() {

    res_group_name = "res_toque"
    score_group_name = "score_toque"
    tscore_group_name = "tscore_toque"

    let indexquestion_start = 29;
    let indexquestion_end = 42;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;
    
    
    score_group = 0;
    tscore_group = 0;
    
    
    if(res_group != 0){
        if(res_group == 11 ){
            score_group = 16;
            tscore_group = 40;
        }
        else if(res_group == 12){
            score_group = 38;
            tscore_group = 47;
        }
        else if(res_group == 13){
            score_group = 58;
            tscore_group = 52;
        }
        else if(res_group == 14){
            score_group = 69;
            tscore_group = 55;
        }
        else if(res_group == 15){
            score_group = 76;
            tscore_group = 57;
        }
        else if(res_group == 16){
            score_group = 82;
            tscore_group = 59;
        }
        else if(res_group == 17){
            score_group = 86;
            tscore_group = 61;
        }
        else if(res_group == 18){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 19){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 20){
            score_group = 93;
            tscore_group = 65;
        }
        else if(res_group == 21){
            score_group = 95;
            tscore_group = 66;
        }
        else if(res_group == 22){
            score_group = 95;
            tscore_group = 67;
        }
        else if(res_group == 23){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 24){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 25){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 26){
            score_group = 98;
            tscore_group = 71;
        }
        else if(res_group == 27){
            score_group = 98;
            tscore_group = 72;
        }
        else if(res_group == 28){
            score_group = 99;
            tscore_group = 73;
        }
        else if(res_group == 29){
            score_group = 99;
            tscore_group = 73;
        }
        else if(res_group == 30){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 31){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 32){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 33 ){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 34 || res_group ==35){
            score_group = 99;
            tscore_group = 78;
        }else if(res_group == 36 ){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 37 ){
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;
    


    tscore_total += parseInt(tscore_group);

}


function calc_gosto_e_olfato() {

    res_group_name = "res_gosto_e_olfato"
    score_group_name = "score_gosto_e_olfato"
    tscore_group_name = "tscore_gosto_e_olfato"

    let indexquestion_start = 43;
    let indexquestion_end = 46;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;


    if(res_group != 0){
        if(res_group == 10){
            score_group = 16;
            tscore_group = 40;
        }
        else if(res_group == 11 ){
            score_group = 42;
            tscore_group = 48;
        }
        else if(res_group == 12){
            score_group = 58;
            tscore_group = 52;
        }
        else if(res_group == 13){
            score_group = 69;
            tscore_group = 55;
        }
        else if(res_group == 14){
            score_group = 76;
            tscore_group = 57;
        }
        else if(res_group == 15){
            score_group = 82;
            tscore_group = 59;
        }
        else if(res_group == 16){
            score_group = 85;
            tscore_group = 60;
        }
        else if(res_group == 17){
            score_group = 86;
            tscore_group = 61;
        }
        else if(res_group == 18){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 19){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 20){
            score_group = 93;
            tscore_group = 65;
        }
        else if(res_group == 21){
            score_group = 95;
            tscore_group = 66;
        }
        else if(res_group == 22){
            score_group = 95;
            tscore_group = 67;
        }
        else if(res_group == 23){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 24){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 25){
            score_group = 97;
            tscore_group = 70;
        }
        else if(res_group == 26){
            score_group = 98;
            tscore_group = 71;
        }
        else if(res_group == 27){
            score_group = 98;
            tscore_group = 72;
        }
        else if(res_group == 28){
            score_group = 99;
            tscore_group = 73;
        }
        else if(res_group == 29){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 30){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 31){
            score_group = 99;
            tscore_group = 76;
        }
        else if(res_group == 32){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 33){
            score_group = 99;
            tscore_group = 78;
        }
        else if(res_group == 34 || res_group==35){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 36){
            score_group = 99;
            tscore_group = 80;
        }

    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;
    

    tscore_total += parseInt(tscore_group);


}


function calc_consciencia_corporal() {

    res_group_name = "res_consciencia_corporal"
    score_group_name = "score_consciencia_corporal"
    tscore_group_name = "tscore_consciencia_corporal"

    let indexquestion_start = 47;
    let indexquestion_end = 55;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        //console.log(i_var + ":" + res_question)
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;

score_group = 0;
tscore_group = 0;

    if(res_group != 0){
        if(res_group == 11 ){
            score_group = 18;
            tscore_group = 41;
        }
        else if(res_group == 12){
            score_group = 50;
            tscore_group = 50;
        }
        else if(res_group == 13){
            score_group = 66;
            tscore_group = 54;
        }
        else if(res_group == 14){
            score_group = 76;
            tscore_group = 57;
        }
        else if(res_group == 15){
            score_group = 82;
            tscore_group = 59;
        }
        else if(res_group == 16){
            score_group = 86;
            tscore_group = 61;
        }
        else if(res_group == 17){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 18){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 19){
            score_group = 93;
            tscore_group = 65;
        }
        else if(res_group == 20){
            score_group = 95;
            tscore_group = 67;
        }
        else if(res_group == 21){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 22){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 23){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 24){
            score_group = 97;
            tscore_group = 70;
        }
        else if(res_group == 25){
            score_group = 98;
            tscore_group = 71;
        }
        else if(res_group == 26){
            score_group = 98;
            tscore_group = 72;
        }
        else if(res_group == 27){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 28){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 29){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 30){
            score_group = 99;
            tscore_group = 76;
        }
        else if(res_group == 31){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 32){
            score_group = 99;
            tscore_group = 78;
        }
        else if(res_group >= 33 && res_group<=34){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 35){
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;
    

    tscore_total += parseInt(tscore_group);

}


function calc_movimento_e_equilibrio() {

    res_group_name = "res_movimento_e_equilibrio"
    score_group_name = "score_movimento_e_equilibrio"
    tscore_group_name = "tscore_movimento_e_equilibrio"

    let indexquestion_start = 56;
    let indexquestion_end = 66;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;
    if(res_group != 0){
        if(res_group == 11 ){
            score_group = 16;
            tscore_group = 40;
        }
        else if(res_group == 12){
            score_group = 38;
            tscore_group = 47;
        }
        else if(res_group == 13){
            score_group = 54;
            tscore_group = 51;
        }
        else if(res_group == 14){
            score_group = 66;
            tscore_group = 54;
        }
        else if(res_group == 15){
            score_group = 76;
            tscore_group = 57;
        }
        else if(res_group == 16){
            score_group = 82;
            tscore_group = 59;
        }
        else if(res_group == 17){
            score_group = 86;
            tscore_group = 61;
        }
        else if(res_group == 18){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 19){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 20){
            score_group = 93;
            tscore_group = 65;
        }
        else if(res_group == 21){
            score_group = 95;
            tscore_group = 66;
        }
        else if(res_group == 22){
            score_group = 96;
            tscore_group = 68;
        }
        else if(res_group == 23){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 24){
            score_group = 98;
            tscore_group = 71;
        }
        else if(res_group == 25){
            score_group = 98;
            tscore_group = 72;
        }
        else if(res_group == 26){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 27){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 28){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 29){
            score_group = 99;
            tscore_group = 76;
        }
        else if(res_group == 30){
            score_group = 99;
            tscore_group = 76;
        }
        else if(res_group == 31){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 32){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 33){
            score_group = 99;
            tscore_group = 78;
        }
        else if(res_group == 34){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 35){
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;
    

    tscore_total += parseInt(tscore_group);

}


function calc_planeamento_motor_e_ideacao() {

    res_group_name = "res_planeamento_motor_e_ideacao"
    score_group_name = "score_planeamento_motor_e_ideacao"
    tscore_group_name = "tscore_planeamento_motor_e_ideacao"

    let indexquestion_start = 67;
    let indexquestion_end = 75;

    let res_group = 0;
    
    let exist_one_question_null = false;
    
    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question=null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if(res_question==null) exist_one_question_null =true;
        res_group += parseInt(parseInt(res_question)) 

    }

    if(exist_one_question_null) res_group = 0;
    if(res_group != 0){
        
        if(res_group ==9 ){
            score_group = 16;
            tscore_group = 40;
        }
        else if(res_group == 10 ){
            score_group = 31;
            tscore_group = 45;
        }
        else if(res_group == 11 ){
            score_group = 42;
            tscore_group = 48;
        }
        else if(res_group == 12){
            score_group = 54;
            tscore_group = 51;
        }
        else if(res_group == 13){
            score_group = 62;
            tscore_group = 53;
        }
        else if(res_group == 14){
            score_group = 69;
            tscore_group = 55;
        }
        else if(res_group == 15){
            score_group = 76;
            tscore_group = 57;
        }
        else if(res_group == 16){
            score_group = 79;
            tscore_group = 58;
        }
        else if(res_group == 17){
            score_group = 84;
            tscore_group = 60;
        }
        else if(res_group == 18){
            score_group = 86;
            tscore_group = 61;
        }
        else if(res_group == 19){
            score_group = 90;
            tscore_group = 63;
        }
        else if(res_group == 20){
            score_group = 92;
            tscore_group = 64;
        }
        else if(res_group == 21){
            score_group = 93;
            tscore_group = 65;
        }
        else if(res_group == 22){
            score_group = 95;
            tscore_group = 66;
        }
        else if(res_group == 23){
            score_group = 95;
            tscore_group = 67;
        }
        else if(res_group == 24){
            score_group = 97;
            tscore_group = 69;
        }
        else if(res_group == 25){
            score_group = 97;
            tscore_group = 70;
        }
        else if(res_group == 26){
            score_group = 98;
            tscore_group = 72;
        }
        else if(res_group == 27){
            score_group = 99;
            tscore_group = 73;
        }
        else if(res_group == 28){
            score_group = 99;
            tscore_group = 74;
        }
        else if(res_group == 29){
            score_group = 99;
            tscore_group = 75;
        }
        else if(res_group == 30){
            score_group = 99;
            tscore_group = 77;
        }
        else if(res_group == 31){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group == 32){
            score_group = 99;
            tscore_group = 79;
        }
        else if(res_group >= 33 ){
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;
    

    tscore_total += parseInt(tscore_group);

}

function calc_tscore_total(){





}

function calc_spm_p() {
    //res_participacao_social
    calc_participacao_social();

    //res_visao
    calc_visao();
    //res_audicao
    calc_audicao();
    //res_toque
    calc_toque();
    //res_gosto_e_olfato
    calc_gosto_e_olfato();
    //res_consciencia_corporal
    calc_consciencia_corporal();
    //res_movimento_e_equilibrio
    calc_movimento_e_equilibrio();
    //res_planeamento_motor_e_ideacao
    calc_planeamento_motor_e_ideacao();

    calc_tscore_total();
}

function onlyOneCheckBox(ele) {

    console.log(ele);

    switch (ele) {
        case 'checkbox_question_1':
            $checkbox = $('.checkbox_question_1');
            break;
        case 'checkbox_question_2':
            $checkbox = $('.checkbox_question_2');
            break;
        case 'checkbox_question_3':
            $checkbox = $('.checkbox_question_3');
            break;
        case 'checkbox_question_4':
            $checkbox = $('.checkbox_question_4');
            break;
        case 'checkbox_question_5':
            $checkbox = $('.checkbox_question_5');
            break;
        case 'checkbox_question_6':
            $checkbox = $('.checkbox_question_6');
            break;
        case 'checkbox_question_7':
            $checkbox = $('.checkbox_question_7');
            break;
        case 'checkbox_question_8':
            $checkbox = $('.checkbox_question_8');
            break;
        case 'checkbox_question_9':
            $checkbox = $('.checkbox_question_9');
            break;
        case 'checkbox_question_10':
            $checkbox = $('.checkbox_question_10');
            break;
        case 'checkbox_question_11':
            $checkbox = $('.checkbox_question_11');
            break;
        case 'checkbox_question_12':
            $checkbox = $('.checkbox_question_12');
            break;
        case 'checkbox_question_13':
            $checkbox = $('.checkbox_question_13');
            break;
        case 'checkbox_question_14':
            $checkbox = $('.checkbox_question_14');
            break;
        case 'checkbox_question_15':
            $checkbox = $('.checkbox_question_15');
            break;
        case 'checkbox_question_16':
            $checkbox = $('.checkbox_question_16');
            break;
        case 'checkbox_question_17':
            $checkbox = $('.checkbox_question_17');
            break;
        case 'checkbox_question_18':
            $checkbox = $('.checkbox_question_18');
            break;
        case 'checkbox_question_19':
            $checkbox = $('.checkbox_question_19');
            break;
        case 'checkbox_question_20':
            $checkbox = $('.checkbox_question_20');
            break;
        case 'checkbox_question_21':
            $checkbox = $('.checkbox_question_21');
            break;
        case 'checkbox_question_22':
            $checkbox = $('.checkbox_question_22');
            break;
        case 'checkbox_question_23':
            $checkbox = $('.checkbox_question_23');
            break;
        case 'checkbox_question_24':
            $checkbox = $('.checkbox_question_24');
            break;
        case 'checkbox_question_25':
            $checkbox = $('.checkbox_question_25');
            break;
        case 'checkbox_question_26':
            $checkbox = $('.checkbox_question_26');
            break;
        case 'checkbox_question_27':
            $checkbox = $('.checkbox_question_27');
            break;
        case 'checkbox_question_28':
            $checkbox = $('.checkbox_question_28');
            break;
        case 'checkbox_question_29':
            $checkbox = $('.checkbox_question_29');
            break;
        case 'checkbox_question_30':
            $checkbox = $('.checkbox_question_30');
            break;
        case 'checkbox_question_31':
            $checkbox = $('.checkbox_question_31');
            break;
        case 'checkbox_question_32':
            $checkbox = $('.checkbox_question_32');
            break;
        case 'checkbox_question_33':
            $checkbox = $('.checkbox_question_33');
            break;
        case 'checkbox_question_34':
            $checkbox = $('.checkbox_question_34');
            break;
        case 'checkbox_question_35':
            $checkbox = $('.checkbox_question_35');
            break;
        case 'checkbox_question_36':
            $checkbox = $('.checkbox_question_36');
            break;
        case 'checkbox_question_37':
            $checkbox = $('.checkbox_question_37');
            break;
        case 'checkbox_question_38':
            $checkbox = $('.checkbox_question_38');
            break;
        case 'checkbox_question_39':
            $checkbox = $('.checkbox_question_39');
            break;

        case 'checkbox_question_40':
            $checkbox = $('.checkbox_question_40');
            break;
        case 'checkbox_question_41':
            $checkbox = $('.checkbox_question_41');
            break;
        case 'checkbox_question_42':
            $checkbox = $('.checkbox_question_42');
            break;
        case 'checkbox_question_43':
            $checkbox = $('.checkbox_question_43');
            break;
        case 'checkbox_question_44':
            $checkbox = $('.checkbox_question_44');
            break;
        case 'checkbox_question_45':
            $checkbox = $('.checkbox_question_45');
            break;
        case 'checkbox_question_46':
            $checkbox = $('.checkbox_question_46');
            break;
        case 'checkbox_question_47':
            $checkbox = $('.checkbox_question_47');
            break;
        case 'checkbox_question_48':
            $checkbox = $('.checkbox_question_48');
            break;
        case 'checkbox_question_49':
            $checkbox = $('.checkbox_question_49');
            break;

        case 'checkbox_question_50':
            $checkbox = $('.checkbox_question_50');
            break;
        case 'checkbox_question_51':
            $checkbox = $('.checkbox_question_51');
            break;
        case 'checkbox_question_52':
            $checkbox = $('.checkbox_question_52');
            break;
        case 'checkbox_question_53':
            $checkbox = $('.checkbox_question_53');
            break;
        case 'checkbox_question_54':
            $checkbox = $('.checkbox_question_54');
            break;
        case 'checkbox_question_55':
            $checkbox = $('.checkbox_question_55');
            break;
        case 'checkbox_question_56':
            $checkbox = $('.checkbox_question_56');
            break;
        case 'checkbox_question_57':
            $checkbox = $('.checkbox_question_57');
            break;
        case 'checkbox_question_58':
            $checkbox = $('.checkbox_question_58');
            break;
        case 'checkbox_question_59':
            $checkbox = $('.checkbox_question_59');
            break;

        case 'checkbox_question_60':
            $checkbox = $('.checkbox_question_60');
            break;
        case 'checkbox_question_61':
            $checkbox = $('.checkbox_question_61');
            break;
        case 'checkbox_question_62':
            $checkbox = $('.checkbox_question_62');
            break;
        case 'checkbox_question_63':
            $checkbox = $('.checkbox_question_63');
            break;
        case 'checkbox_question_64':
            $checkbox = $('.checkbox_question_64');
            break;
        case 'checkbox_question_65':
            $checkbox = $('.checkbox_question_65');
            break;
        case 'checkbox_question_66':
            $checkbox = $('.checkbox_question_66');
            break;
        case 'checkbox_question_67':
            $checkbox = $('.checkbox_question_67');
            break;
        case 'checkbox_question_68':
            $checkbox = $('.checkbox_question_68');
            break;
        case 'checkbox_question_69':
            $checkbox = $('.checkbox_question_69');
            break;
        case 'checkbox_question_70':
            $checkbox = $('.checkbox_question_70');
            break;
        case 'checkbox_question_71':
            $checkbox = $('.checkbox_question_71');
            break;
        case 'checkbox_question_72':
            $checkbox = $('.checkbox_question_72');
            break;
        case 'checkbox_question_73':
            $checkbox = $('.checkbox_question_73');
            break;
        case 'checkbox_question_74':
            $checkbox = $('.checkbox_question_74');
            break;
        case 'checkbox_question_75':
            $checkbox = $('.checkbox_question_75');
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }

    //console.log($checkbox);

    $checkbox.click(function () {
        $checkbox.not(this).prop('checked', false);
    });


}



