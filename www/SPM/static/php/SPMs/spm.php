<?php

include('../connection.php');


class SPM{


    protected $dbconn;
 
    public function __construct(){
            $this->dbconn = new DbConnection();
    }
   

    
    public function check_table_spms(){        
        
        


        // SPM_TYPE --0 CASA   1 ESCOLA   2 SPMpCASA  3 SPMpESCOLA
        $query = "CREATE TABLE IF NOT EXISTS spms (
            id int(11) AUTO_INCREMENT,
            UTENTE_ID int(11) NOT NULL,
            SPM_TYPE int(1) NOT NULL, 
            AVALIATION_DATE DATE NOT NULL,
            QUESTION_01 int(1) NOT NULL,QUESTION_02 int(1) NOT NULL,QUESTION_03 int(1) NOT NULL,QUESTION_04 int(1) NOT NULL,
            QUESTION_05 int(1) NOT NULL,QUESTION_06 int(1) NOT NULL,QUESTION_07 int(1) NOT NULL,QUESTION_08 int(1) NOT NULL,QUESTION_09 int(1) NOT NULL,QUESTION_10 int(1) NOT NULL,
            QUESTION_11 int(1) NOT NULL,QUESTION_12 int(1) NOT NULL,QUESTION_13 int(1) NOT NULL,QUESTION_14 int(1) NOT NULL,
            QUESTION_15 int(1) NOT NULL,QUESTION_16 int(1) NOT NULL,QUESTION_17 int(1) NOT NULL,QUESTION_18 int(1) NOT NULL,QUESTION_19 int(1) NOT NULL,QUESTION_20 int(1) NOT NULL,
            QUESTION_21 int(1) NOT NULL,QUESTION_22 int(1) NOT NULL,QUESTION_23 int(1) NOT NULL,QUESTION_24 int(1) NOT NULL,
            QUESTION_25 int(1) NOT NULL,QUESTION_26 int(1) NOT NULL,QUESTION_27 int(1) NOT NULL,QUESTION_28 int(1) NOT NULL,QUESTION_29 int(1) NOT NULL,QUESTION_30 int(1) NOT NULL,
            QUESTION_31 int(1) NOT NULL,QUESTION_32 int(1) NOT NULL,QUESTION_33 int(1) NOT NULL,QUESTION_34 int(1) NOT NULL,
            QUESTION_35 int(1) NOT NULL,QUESTION_36 int(1) NOT NULL,QUESTION_37 int(1) NOT NULL,QUESTION_38 int(1) NOT NULL,QUESTION_39 int(1) NOT NULL,QUESTION_40 int(1) NOT NULL,
            QUESTION_41 int(1) NOT NULL,QUESTION_42 int(1) NOT NULL,QUESTION_43 int(1) NOT NULL,QUESTION_44 int(1) NOT NULL,
            QUESTION_45 int(1) NOT NULL,QUESTION_46 int(1) NOT NULL,QUESTION_47 int(1) NOT NULL,QUESTION_48 int(1) NOT NULL,QUESTION_49 int(1) NOT NULL,QUESTION_50 int(1) NOT NULL,
            QUESTION_51 int(1) NOT NULL,QUESTION_52 int(1) NOT NULL,QUESTION_53 int(1) NOT NULL,QUESTION_54 int(1) NOT NULL,
            QUESTION_55 int(1) NOT NULL,QUESTION_56 int(1) NOT NULL,QUESTION_57 int(1) NOT NULL,QUESTION_58 int(1) NOT NULL,QUESTION_59 int(1) NOT NULL,QUESTION_60 int(1) NOT NULL,
            QUESTION_61 int(1) NOT NULL,QUESTION_62 int(1) NOT NULL,QUESTION_63 int(1) NOT NULL,QUESTION_64 int(1) NOT NULL,
            QUESTION_65 int(1) NOT NULL,QUESTION_66 int(1) NOT NULL,QUESTION_67 int(1) NOT NULL,QUESTION_68 int(1) NOT NULL,QUESTION_69 int(1) NOT NULL,QUESTION_70 int(1) NOT NULL,
            QUESTION_71 int(1) NOT NULL,QUESTION_72 int(1) NOT NULL,QUESTION_73 int(1) NOT NULL,QUESTION_74 int(1) NOT NULL,
            QUESTION_75 int(1) NOT NULL,
            AVALIATION_REASON  varchar(255),
            GROUP_PS_SCORE int(1) NOT NULL,GROUP_VIS_SCORE int(1) NOT NULL,GROUP_AUD_SCORE int(1) NOT NULL,GROUP_TOQ_SCORE int(1) NOT NULL,GROUP_GO_SCORE int(1) NOT NULL,
            GROUP_CONSCCORP_SCORE int(1) NOT NULL,GROUP_MOVEQU_SCORE int(1) NOT NULL,GROUP_PLAMI_SCORE int(1) NOT NULL,GROUP_TOTAL_SCORE int(1) NOT NULL,
            GROUP_PS_TSCORE int(1) NOT NULL,GROUP_VIS_TSCORE int(1) NOT NULL,GROUP_AUD_TSCORE int(1) NOT NULL,GROUP_TOQ_TSCORE int(1) NOT NULL,GROUP_GO_TSCORE int(1) NOT NULL,
            GROUP_CONSCCORP_TSCORE int(1) NOT NULL,GROUP_MOVEQU_TSCORE int(1) NOT NULL,GROUP_PLAMI_TSCORE int(1) NOT NULL,GROUP_TOTAL_TSCORE int(1) NOT NULL,
            GROUP_PS_COMENTARIO int(1) NOT NULL,GROUP_VIS_COMENTARIO int(1) NOT NULL,GROUP_AUD_COMENTARIO int(1) NOT NULL,GROUP_TOQ_COMENTARIO int(1) NOT NULL,GROUP_GO_COMENTARIO int(1) NOT NULL,
            GROUP_CONSCCORP_COMENTARIO int(1) NOT NULL,GROUP_MOVEQU_COMENTARIO int(1) NOT NULL,GROUP_PLAMI_COMENTARIO int(1) NOT NULL,GROUP_TOTAL_COMENTARIO int(1) NOT NULL,

            SPM_TABLEINSERT_DATE DATE NOT NULL,
            PRIMARY KEY  (ID)
            )";

        //$result = mysqli_query($db,$query);

        echo "Execute query";
        
        if ($this->dbconn->connection->query($query) === TRUE) {
            echo "New table created successfully";
        } else {
            echo "Error: " . $query . "<br>" . $this->dbconn->connection->error;
        }

        echo "End check_table_terapeuta";

    }



    public function add_new_spm(int $utente_id,int $spm_type,string $avaliation_date,$question,$avaliation_reason,$score,$tscore,$comentario){
        
        
        //$sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";
        $date_avaliation = date("Y-m-d");

        $sql = "INSERT INTO spms (utente_id,spm_type,AVALIATION_DATE,
                    QUESTION_01,QUESTION_02,QUESTION_03,QUESTION_04,QUESTION_05,QUESTION_06,QUESTION_07,QUESTION_08,QUESTION_09,QUESTION_10
                  ,QUESTION_11,QUESTION_12,QUESTION_13,QUESTION_14,QUESTION_15,QUESTION_16,QUESTION_17,QUESTION_18,QUESTION_19,QUESTION_20
                  ,QUESTION_21,QUESTION_22,QUESTION_23,QUESTION_24,QUESTION_25,QUESTION_26,QUESTION_27,QUESTION_28,QUESTION_29,QUESTION_30
                  ,QUESTION_31,QUESTION_32,QUESTION_33,QUESTION_34,QUESTION_35,QUESTION_36,QUESTION_37,QUESTION_38,QUESTION_39,QUESTION_40
                  ,QUESTION_41,QUESTION_42,QUESTION_43,QUESTION_44,QUESTION_45,QUESTION_46,QUESTION_47,QUESTION_48,QUESTION_49,QUESTION_50
                  ,QUESTION_51,QUESTION_52,QUESTION_53,QUESTION_54,QUESTION_55,QUESTION_56,QUESTION_57,QUESTION_58,QUESTION_59,QUESTION_60
                  ,QUESTION_61,QUESTION_62,QUESTION_63,QUESTION_64,QUESTION_65,QUESTION_66,QUESTION_67,QUESTION_68,QUESTION_69,QUESTION_70
                  ,QUESTION_71,QUESTION_72,QUESTION_73,QUESTION_74,QUESTION_75,
                  AVALIATION_REASON,
                  GROUP_PS_SCORE ,GROUP_VIS_SCORE,GROUP_AUD_SCORE ,GROUP_TOQ_SCORE ,GROUP_GO_SCORE,
            GROUP_CONSCCORP_SCORE ,GROUP_MOVEQU_SCORE ,GROUP_PLAMI_SCORE,GROUP_TOTAL_SCORE ,
            GROUP_PS_TSCORE ,GROUP_VIS_TSCORE ,GROUP_AUD_TSCORE ,GROUP_TOQ_TSCORE,GROUP_GO_TSCORE ,
            GROUP_CONSCCORP_TSCORE ,GROUP_MOVEQU_TSCORE ,GROUP_PLAMI_TSCORE ,GROUP_TOTAL_TSCORE ,
            GROUP_PS_COMENTARIO ,GROUP_VIS_COMENTARIO ,GROUP_AUD_COMENTARIO ,GROUP_TOQ_COMENTARIO ,GROUP_GO_COMENTARIO ,
            GROUP_CONSCCORP_COMENTARIO ,GROUP_MOVEQU_COMENTARIO ,GROUP_PLAMI_COMENTARIO,GROUP_TOTAL_COMENTARIO ,
            SPM_TABLEINSERT_DATE) 
                  VALUES ('$utente_id','$spm_type','$avaliation_date',
                    '$question[0]','$question[1]','$question[2]','$question[3]','$question[4]','$question[5]','$question[6]','$question[7]','$question[8]','$question[9]',
                    '$question[10]','$question[11]','$question[12]','$question[13]','$question[14]','$question[15]','$question[16]','$question[17]','$question[18]','$question[19]',
                    '$question[20]','$question[21]','$question[22]','$question[23]','$question[24]','$question[25]','$question[26]','$question[27]','$question[28]','$question[29]',
                    '$question[30]','$question[31]','$question[32]','$question[33]','$question[34]','$question[35]','$question[36]','$question[37]','$question[38]','$question[39]',
                    '$question[40]','$question[41]','$question[42]','$question[43]','$question[44]','$question[45]','$question[46]','$question[47]','$question[48]','$question[49]',
                    '$question[50]','$question[51]','$question[52]','$question[53]','$question[54]','$question[55]','$question[56]','$question[57]','$question[58]','$question[59]',
                    '$question[60]','$question[61]','$question[62]','$question[63]','$question[64]','$question[65]','$question[66]','$question[67]','$question[68]','$question[69]',
                    '$question[70]','$question[71]','$question[72]','$question[73]','$question[74]',
                    '$avaliation_reason',
                    '$score[0]','$score[1]','$score[2]','$score[3]','$score[4]','$score[5]','$score[6]','$score[7]','$score[8]',
                    '$tscore[0]','$tscore[1]','$tscore[2]','$tscore[3]','$tscore[4]','$tscore[5]','$tscore[6]','$tscore[7]','$tscore[8]',
                    '$comentario[0]','$comentario[1]','$comentario[2]','$comentario[3]','$comentario[4]','$comentario[5]','$comentario[6]','$comentario[7]','$comentario[8]',
                    '$date_avaliation'
                    )";
        
        if ($this->dbconn->connection->query($sql) === TRUE) { 
            echo "New SPM added Successfuly...";
        } else {
            echo "ERROR adding to table.";
        }
    }

}
?>