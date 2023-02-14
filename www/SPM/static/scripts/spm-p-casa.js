
var res_array_questions = [];
var res_array_group = [];
var res_array_score = [];
var res_array_classificacao = [];

for (let i_array = 0; i_array <= 8; i_array++) {
    res_array_group[i_array] = 0;
}


classificacao_nivel_01 = "Típica (40 - 59)";
classificacao_nivel_02 = "Disfunção Provável (60 - 69)";
classificacao_nivel_03 = "Disfunção Estabelecida (70 - 80)";


let tscore_total = 0;



$(document).ready(function () {

    show_chart();


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


function calc_participacao_social() {

    res_group_name = "res_participacao_social"
    score_group_name = "score_participacao_social"
    tscore_group_name = "tscore_participacao_social"
    classificacao_group_name = "classificacao_participacao_social"


    let indexquestion_start = 1;
    let indexquestion_end = 8;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;

    if (res_group != 0) {
        if (res_group == 8 || res_group == 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (res_group == 10) {
            score_group = 27;
            tscore_group = 44;
        }
        else if (res_group == 11) {
            score_group = 38;
            tscore_group = 47;
        }
        else if (res_group == 12) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (res_group == 13) {
            score_group = 58;
            tscore_group = 52;
        }
        else if (res_group == 14) {
            score_group = 66;
            tscore_group = 54;
        }
        else if (res_group == 15) {
            score_group = 73;
            tscore_group = 56;
        }
        else if (res_group == 16) {
            score_group = 82;
            tscore_group = 59;
        }
        else if (res_group == 17) {
            score_group = 90;
            tscore_group = 63;
        }
        else if (res_group == 18) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (res_group == 19) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (res_group == 20) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (res_group == 21) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (res_group == 22) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (res_group == 23) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (res_group == 24) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (res_group == 25) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (res_group == 26) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group == 27) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (res_group >= 28) {
            score_group = 99;
            tscore_group = 80;
        }

    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;


    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[0] = tscore_group;
    res_array_score[0] = score_group;
    res_array_classificacao[0] = classificacao_group;
    res_array_classificacao_int[0] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);



}


function calc_visao() {

    res_group_name = "res_visao"
    score_group_name = "score_visao"
    tscore_group_name = "tscore_visao"
    classificacao_group_name = "classificacao_visao"

    let indexquestion_start = 9;
    let indexquestion_end = 19;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;


    score_group = 0;
    tscore_group = 0;

    if (res_group != 0) {
        if (res_group == 11) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (res_group == 12) {
            score_group = 24;
            tscore_group = 43;
        }
        else if (res_group == 13) {
            score_group = 38;
            tscore_group = 47;
        }
        else if (res_group == 14) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (res_group == 15) {
            score_group = 62;
            tscore_group = 53;
        }
        else if (res_group == 16) {
            score_group = 73;
            tscore_group = 56;
        }
        else if (res_group == 17) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (res_group == 18) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (res_group == 19) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (res_group == 20) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (res_group == 21) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (res_group == 22) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (res_group == 23) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (res_group == 24) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (res_group == 25) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (res_group == 26) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (res_group == 27) {
            score_group = 99;
            tscore_group = 72;
        }
        else if (res_group == 28) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (res_group == 29) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (res_group == 30) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (res_group == 31) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (res_group >= 32 && res_group <= 34) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group >= 35 && res_group <= 36) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (res_group == 37) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (res_group >= 38) {
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;


    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[1] = tscore_group;
    res_array_score[1] = score_group;
    res_array_classificacao[1] = classificacao_group;
    res_array_classificacao_int[1] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);

}


function calc_audicao() {

    res_group_name = "res_audicao"
    score_group_name = "score_audicao"
    tscore_group_name = "tscore_audicao"
    classificacao_group_name = "classificacao_audicao"

    let indexquestion_start = 20;
    let indexquestion_end = 28;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;


    if (res_group != 0) {
        if (res_group == 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (res_group == 10) {
            score_group = 38;
            tscore_group = 47;
        }
        else if (res_group == 11) {
            score_group = 58;
            tscore_group = 52;
        }
        else if (res_group == 12) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (res_group == 13) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (res_group == 14) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (res_group == 15) {
            score_group = 90;
            tscore_group = 63;
        }
        else if (res_group == 16) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (res_group == 17) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (res_group == 18) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (res_group == 19) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (res_group == 20) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (res_group == 21) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (res_group == 22) {
            score_group = 99;
            tscore_group = 72;
        }
        else if (res_group == 23) {
            score_group = 99;
            tscore_group = 72;
        }
        else if (res_group == 24) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (res_group == 25) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (res_group == 26) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group == 27) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (res_group == 28) {
            score_group = 99;
            tscore_group = 78;
        }
        else if (res_group == 29) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (res_group >= 30) {
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;

    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[2] = tscore_group;
    res_array_score[2] = score_group;
    res_array_classificacao[2] = classificacao_group;
    res_array_classificacao_int[2] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);


}


function calc_toque() {

    res_group_name = "res_toque"
    score_group_name = "score_toque"
    tscore_group_name = "tscore_toque"
    classificacao_group_name = "classificacao_toque"

    let indexquestion_start = 29;
    let indexquestion_end = 42;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;


    score_group = 0;
    tscore_group = 0;


    if (res_group != 0) {
        if (res_group == 14) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (res_group == 15) {
            score_group = 24;
            tscore_group = 43;
        }
        else if (res_group == 16) {
            score_group = 34;
            tscore_group = 46;
        }
        else if (res_group == 17) {
            score_group = 46;
            tscore_group = 49;
        }
        else if (res_group == 18) {
            score_group = 62;
            tscore_group = 53;
        }
        else if (res_group == 19) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (res_group == 20) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (res_group == 21) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (res_group == 22) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (res_group == 23) {
            score_group = 90;
            tscore_group = 63;
        }
        else if (res_group == 24) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (res_group == 25) {
            score_group = 93;
            tscore_group = 65;
        }
        else if (res_group == 26) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (res_group == 27) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (res_group == 28) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (res_group == 29) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (res_group == 30) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (res_group == 31) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (res_group == 32) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (res_group == 33) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (res_group == 34) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group == 35) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (res_group >= 36) {
            score_group = 99;
            tscore_group = 80;
        }
    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;


    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[3] = tscore_group;
    res_array_score[3] = score_group;
    res_array_classificacao[3] = classificacao_group;
    res_array_classificacao_int[3] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);


}


function calc_gosto_e_olfato() {

    res_group_name = "res_gosto_e_olfato"
    score_group_name = "score_gosto_e_olfato"
    tscore_group_name = "tscore_gosto_e_olfato"
    classificacao_group_name = "classificacao_gosto_e_olfato"



    let indexquestion_start = 43;
    let indexquestion_end = 46;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;

    //não tem tabela


    document.getElementById(res_group_name).innerHTML = res_group;
    //document.getElementById(score_group_name).innerHTML = score_group;
    //document.getElementById(tscore_group_name).innerHTML = tscore_group;

    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    //document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[4] = tscore_group;
    res_array_score[4] = score_group;
    res_array_classificacao[4] = classificacao_group;
    res_array_classificacao_int[4] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);



}


function calc_consciencia_corporal() {

    res_group_name = "res_consciencia_corporal"
    score_group_name = "score_consciencia_corporal"
    tscore_group_name = "tscore_consciencia_corporal"
    classificacao_group_name = "classificacao_consciencia_corporal"

    let indexquestion_start = 47;
    let indexquestion_end = 55;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        //console.log(i_var + ":" + res_question)
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;

    if (res_group != 0) {
        if (res_group == 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (res_group == 10) {
            score_group = 34;
            tscore_group = 46;
        }
        else if (res_group == 11) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (res_group == 12) {
            score_group = 66;
            tscore_group = 54;
        }
        else if (res_group == 13) {
            score_group = 76;
            tscore_group = 57;
        }
        else if (res_group == 14) {
            score_group = 84;
            tscore_group = 60;
        }
        else if (res_group == 15) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (res_group == 16) {
            score_group = 93;
            tscore_group = 65;
        }
        else if (res_group == 17) {
            score_group = 95;
            tscore_group = 66;
        }
        else if (res_group == 18) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (res_group == 19) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (res_group == 20) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (res_group == 21) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (res_group == 22) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (res_group == 23) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group == 24) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (res_group == 25) {
            score_group = 99;
            tscore_group = 78;
        }
        else if (res_group == 26) {
            score_group = 99;
            tscore_group = 79;
        }
        else if (res_group >= 27) {
            score_group = 99;
            tscore_group = 80;
        }

    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;


    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[5] = tscore_group;
    res_array_score[5] = score_group;
    res_array_classificacao[5] = classificacao_group;
    res_array_classificacao_int[5] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);


}


function calc_movimento_e_equilibrio() {

    res_group_name = "res_movimento_e_equilibrio"
    score_group_name = "score_movimento_e_equilibrio"
    tscore_group_name = "tscore_movimento_e_equilibrio"
    classificacao_group_name = "classificacao_movimento_e_equilibrio"


    let indexquestion_start = 56;
    let indexquestion_end = 66;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;

    if (res_group != 0) {
        if (res_group == 11) {
            score_group = 21;
            tscore_group = 42;
        }
        else if (res_group == 12) {
            score_group = 50;
            tscore_group = 50;
        }
        else if (res_group == 13) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (res_group == 14) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (res_group == 15) {
            score_group = 88;
            tscore_group = 62;
        }
        else if (res_group == 16) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (res_group == 17) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (res_group == 18) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (res_group == 19) {
            score_group = 96;
            tscore_group = 68;
        }
        else if (res_group == 20) {
            score_group = 97;
            tscore_group = 70;
        }
        else if (res_group == 21) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (res_group == 22) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (res_group == 23) {
            score_group = 99;
            tscore_group = 73;
        }
        else if (res_group >= 24 && res_group <= 27) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (res_group >= 28 && res_group <= 31) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group == 32) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (res_group >= 33) {
            score_group = 99;
            tscore_group = 80;
        }

    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;

    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[6] = tscore_group;
    res_array_score[6] = score_group;
    res_array_classificacao[6] = classificacao_group;
    res_array_classificacao_int[6] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);


}


function calc_planeamento_motor_e_ideacao() {

    res_group_name = "res_planeamento_motor_e_ideacao"
    score_group_name = "score_planeamento_motor_e_ideacao"
    tscore_group_name = "tscore_planeamento_motor_e_ideacao"
    classificacao_group_name = "classificacao_planeamento_motor_e_ideacao"

    let indexquestion_start = 67;
    let indexquestion_end = 75;

    let res_group = 0;

    let exist_one_question_null = false;

    var res_question = null;
    for (let i_var = indexquestion_start; i_var <= indexquestion_end; i_var++) {
        res_question = null;
        var inputElements = document.getElementsByClassName('checkbox_question_' + i_var);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                res_question = inputElements[i].value;
                break;
            }
        }
        res_array_questions[i_var] = res_question;
        if (res_question == null) exist_one_question_null = true;
        res_group += parseInt(parseInt(res_question))

    }

    if (exist_one_question_null) res_group = 0;

    score_group = 0;
    tscore_group = 0;

    if (res_group != 0) {

        if (res_group == 9) {
            score_group = 16;
            tscore_group = 40;
        }
        else if (res_group == 10) {
            score_group = 42;
            tscore_group = 48;
        }
        else if (res_group == 11) {
            score_group = 58;
            tscore_group = 52;
        }
        else if (res_group == 12) {
            score_group = 69;
            tscore_group = 55;
        }
        else if (res_group == 13) {
            score_group = 79;
            tscore_group = 58;
        }
        else if (res_group == 14) {
            score_group = 86;
            tscore_group = 61;
        }
        else if (res_group == 15) {
            score_group = 92;
            tscore_group = 64;
        }
        else if (res_group == 16) {
            score_group = 93;
            tscore_group = 65;
        }
        else if (res_group == 17) {
            score_group = 95;
            tscore_group = 67;
        }
        else if (res_group == 18) {
            score_group = 97;
            tscore_group = 69;
        }
        else if (res_group == 19) {
            score_group = 98;
            tscore_group = 71;
        }
        else if (res_group == 20) {
            score_group = 98;
            tscore_group = 72;
        }
        else if (res_group == 21) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (res_group == 22) {
            score_group = 99;
            tscore_group = 74;
        }
        else if (res_group == 23) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (res_group == 24) {
            score_group = 99;
            tscore_group = 75;
        }
        else if (res_group == 25) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group == 26) {
            score_group = 99;
            tscore_group = 76;
        }
        else if (res_group == 27) {
            score_group = 99;
            tscore_group = 77;
        }
        else if (res_group == 28) {
            score_group = 99;
            tscore_group = 78;
        }
        else if (res_group >= 29) {
            score_group = 99;
            tscore_group = 80;
        }

    }



    document.getElementById(res_group_name).innerHTML = res_group;
    document.getElementById(score_group_name).innerHTML = score_group;
    document.getElementById(tscore_group_name).innerHTML = tscore_group;


    classificacao_group = "";
    classificacao_group_int = 0;
    if (res_group != 0) {
        classificacao_group = classificacao_nivel_01;
        classificacao_group_int =1;
        if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
            classificacao_group_int = 2;}
        else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}
    }

    document.getElementById(classificacao_group_name).innerHTML = classificacao_group;

    res_array_group[7] = tscore_group;
    res_array_score[7] = score_group;
    res_array_classificacao[7] = classificacao_group;
    res_array_classificacao_int[7] = classificacao_group_int;
    tscore_total += parseInt(tscore_group);


}

function calc_tscore_total() {

    score_group = 0;
    tscore_group = 0;

    console.log("p casa -> calc_tscore_total | tscore_total = " + tscore_total);

    if (tscore_total != 0) {
        if (tscore_total >= 58 && tscore_total <= 62) {
            tscore_group = 40;
            score_group = 16;
        }
        else if (tscore_total >= 63 && tscore_total <= 63) {
            tscore_group = 41;
            score_group = 18;
        }
        else if (tscore_total >= 64 && tscore_total <= 64) {
            tscore_group = 42;
            score_group = 21;
        }
        else if (tscore_total >= 65 && tscore_total <= 65) {
            tscore_group = 43;
            score_group = 24;
        }
        else if (tscore_total >= 66 && tscore_total <= 66) {
            tscore_group = 44;
            score_group = 27;
        }
        else if (tscore_total >= 67 && tscore_total <= 67) {
            tscore_group = 45;
            score_group = 31;
        }
        else if (tscore_total >= 68 && tscore_total <= 68) {
            tscore_group = 46;
            score_group = 34;
        }
        else if (tscore_total >= 69 && tscore_total <= 69) {
            tscore_group = 46;
            score_group = 34;
        }
        else if (tscore_total >= 70 && tscore_total <= 70) {
            tscore_group = 47;
            score_group = 38;
        }
        else if (tscore_total >= 71 && tscore_total <= 71) {
            tscore_group = 48;
            score_group = 42;
        }
        else if (tscore_total >= 72 && tscore_total <= 72) {
            tscore_group = 49;
            score_group = 46;
        }
        else if (tscore_total >= 73 && tscore_total <= 73) {
            tscore_group = 50;
            score_group = 50;
        }
        else if (tscore_total >= 74 && tscore_total <= 74) {
            tscore_group = 51;
            score_group = 54;
        }
        else if (tscore_total >= 75 && tscore_total <= 75) {
            tscore_group = 51;
            score_group = 54;
        }
        else if (tscore_total >= 76 && tscore_total <= 76) {
            tscore_group = 52;
            score_group = 58;
        }
        else if (tscore_total >= 77 && tscore_total <= 78) {
            tscore_group = 53;
            score_group = 62;
        }
        else if (tscore_total >= 79 && tscore_total <= 79) {
            tscore_group = 54;
            score_group = 66;
        }
        else if (tscore_total >= 80 && tscore_total <= 81) {
            tscore_group = 55;
            score_group = 69;
        }
        else if (tscore_total >= 82 && tscore_total <= 83) {
            tscore_group = 56;
            score_group = 73;
        }
        else if (tscore_total >= 84 && tscore_total <= 84) {
            tscore_group = 57;
            score_group = 76;
        }
        else if (tscore_total >= 85 && tscore_total <= 86) {
            tscore_group = 58;
            score_group = 79;
        }
        else if (tscore_total >= 87 && tscore_total <= 87) {
            tscore_group = 59;
            score_group = 82;
        }
        else if (tscore_total >= 88 && tscore_total <= 89) {
            tscore_group = 60;
            score_group = 84;
        }
        else if (tscore_total >= 90 && tscore_total <= 91) {
            tscore_group = 61;
            score_group = 86;
        }
        else if (tscore_total >= 92 && tscore_total <= 97) {
            tscore_group = 62;
            score_group = 88;
        }
        else if (tscore_total >= 98 && tscore_total <= 101) {
            tscore_group = 63;
            score_group = 90;
        }
        else if (tscore_total >= 102 && tscore_total <= 103) {
            tscore_group = 64;
            score_group = 92;
        }
        else if (tscore_total >= 104 && tscore_total <= 104) {
            tscore_group = 54;
            score_group = 93;
        }
        else if (tscore_total >= 105 && tscore_total <= 106) {
            tscore_group = 66;
            score_group = 95;
        }
        else if (tscore_total >= 107 && tscore_total <= 107) {
            tscore_group = 67;
            score_group = 95;
        }
        else if (tscore_total >= 108 && tscore_total <= 109) {
            tscore_group = 68;
            score_group = 96;
        }
        else if (tscore_total >= 110 && tscore_total <= 112) {
            tscore_group = 69;
            score_group = 97;
        }
        else if (tscore_total >= 113 && tscore_total <= 117) {
            tscore_group = 70;
            score_group = 97;
        }
        else if (tscore_total >= 118 && tscore_total <= 122) {
            tscore_group = 71;
            score_group = 98;
        }
        else if (tscore_total >= 123 && tscore_total <= 1123) {
            tscore_group = 72;
            score_group = 98;
        }
        else if (tscore_total >= 124 && tscore_total <= 124) {
            tscore_group = 73;
            score_group = 99;
        }
        else if (tscore_total >= 125 && tscore_total <= 130) {
            tscore_group = 75;
            score_group = 99;
        }
        else if (tscore_total >= 131 && tscore_total <= 135) {
            tscore_group = 76;
            score_group = 99;
        }
        else if (tscore_total >= 136 && tscore_total <= 140) {
            tscore_group = 77;
            score_group = 99;
        }
        else if (tscore_total >= 141 && tscore_total <= 150) {
            tscore_group = 78;
            score_group = 99;
        }
        else if (tscore_total >= 151 && tscore_total <= 160) {
            tscore_group = 79;
            score_group = 99;
        }
        else if (tscore_total >= 161 ) {
            tscore_group = 80;
            score_group = 99;
        }
    }



    document.getElementById('tscore_total').innerHTML = tscore_total;
   
   
    classificacao_group = "";
    classificacao_group_int = 0;
    if (tscore_group >= 40 && tscore_group <= 59){ classificacao_group = classificacao_nivel_01; classificacao_group_int = 1;}
    if (tscore_group >= 60 && tscore_group <= 69){ classificacao_group = classificacao_nivel_02;
        classificacao_group_int = 2;}
    else if (tscore_group > 70){ classificacao_group = classificacao_nivel_03;classificacao_group_int=3;}


    document.getElementById('classificacao_total').innerHTML = classificacao_group;

    res_array_group[8] = tscore_group;
    res_array_score[8] = score_group;
    res_array_classificacao[8] = classificacao_group;
    res_array_classificacao_int[8] = classificacao_group_int;

}

function calc_spm_p() {

    tscore_total = 0;

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

    show_chart();


    document.getElementById('table_tscore_participaco_social').innerHTML = res_array_group[0];
    document.getElementById('table_classificacao_participacao_social').innerHTML = res_array_classificacao[0];
    document.getElementById('table_tscore_visao').innerHTML = res_array_group[1];
    document.getElementById('table_classificacao_visao').innerHTML = res_array_classificacao[1];
    document.getElementById('table_tscore_audicao').innerHTML = res_array_group[2];
    document.getElementById('table_classificacao_audicao').innerHTML = res_array_classificacao[2];
    document.getElementById('table_tscore_toque').innerHTML = res_array_group[3];
    document.getElementById('table_classificacao_toque').innerHTML = res_array_classificacao[3];
    document.getElementById('table_tscore_gosto_e_olfato').innerHTML = res_array_group[4];
    document.getElementById('table_classificacao_gosto_e_olfato').innerHTML = res_array_classificacao[4];
    document.getElementById('table_tscore_consciencia_corporal').innerHTML = res_array_group[5];
    document.getElementById('table_classificacao_consciencia_corporal').innerHTML = res_array_classificacao[5];
    document.getElementById('table_tscore_movimento_e_equilibrio').innerHTML = res_array_group[6];
    document.getElementById('table_classificacao_movimento_e_equilibrio').innerHTML = res_array_classificacao[6];
    document.getElementById('table_tscore_planeamento_motor_e_ideacao').innerHTML = res_array_group[7];
    document.getElementById('table_classificacao_planeamento_motor_e_ideacao').innerHTML = res_array_classificacao[7];
    document.getElementById('table_tscore_total').innerHTML = res_array_group[8];
    document.getElementById('table_classificacao_total').innerHTML = res_array_classificacao[8];

}


function show_chart() {
    

    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            title: 'SPM-p Casa',
        },
        //Initializing Primary Y Axis
        // primaryYAxis: {
        //     title: 'T-SCORE'
        // },
        title: "T-SCORE",
        //tooltip: {enable: true},
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { avaliacao: "Participação social", ponts: res_array_group[0] },
                    { avaliacao: "Visão", ponts: res_array_group[1] },
                    { avaliacao: "Audição", ponts: res_array_group[2] },
                    { avaliacao: "Toque", ponts: res_array_group[3] },
                    { avaliacao: "Gosto e Olfato", ponts: res_array_group[4] },
                    { avaliacao: "Consciência Corporal", ponts: res_array_group[5] },
                    { avaliacao: "Movimento e Equilibrio", ponts: res_array_group[6] },
                    { avaliacao: "Planeamento Motor e Ideação", ponts: res_array_group[7] },
                ],
                xName: 'avaliacao',
                yName: 'ponts',
                marker: {
                    dataLabel: { visible: true }
                }
                
            }
        ],
        tooltip: {enable: true},
        options: {
            animation: {
              onComplete: function () {
                console.log("Creating image")
                console.log(chart.toBase64Image());
              },
            },
        },
    });

    chart.appendTo('#chart_spm-p-casa');

    


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



