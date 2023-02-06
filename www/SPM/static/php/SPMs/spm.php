<?php

include('connection.php');

class Account{


    protected $dbconn;
 
    public function __construct(){
            $this->dbconn = new DbConnection();
    }
   

    public function check_table_spms(){        
        
        
        $query = "CREATE TABLE IF NOT EXISTS spms (
            id int(11) AUTO_INCREMENT,
            UTENTE_ID int(11) NOT NULL,
            SPM_TYPE int(1) NOT NULL, --0 CASA   1 ESCOLA   2 SPMpCASA  3 SPMpESCOLA
            date DATE NOT NULL,
            QUESTION_01 int(1) NOT NULL,QUESTION_02 int(1) NOT NULL,QUESTION_03 int(1) NOT NULL,QUESTION_04 int(1) NOT NULL,
            QUESTION_05 int(1) NOT NULL,QUESTION_06 int(1) NOT NULL,QUESTION_07 int(1) NOT NULL,QUESTION_08 int(1) NOT NULL,QUESTION_09 int(1) NOT NULL,
            QUESTION_11 int(1) NOT NULL,QUESTION_12 int(1) NOT NULL,QUESTION_13 int(1) NOT NULL,QUESTION_14 int(1) NOT NULL,
            QUESTION_15 int(1) NOT NULL,QUESTION_16 int(1) NOT NULL,QUESTION_17 int(1) NOT NULL,QUESTION_18 int(1) NOT NULL,QUESTION_19 int(1) NOT NULL,
            QUESTION_21 int(1) NOT NULL,QUESTION_22 int(1) NOT NULL,QUESTION_23 int(1) NOT NULL,QUESTION_24 int(1) NOT NULL,
            QUESTION_25 int(1) NOT NULL,QUESTION_26 int(1) NOT NULL,QUESTION_27 int(1) NOT NULL,QUESTION_28 int(1) NOT NULL,QUESTION_29 int(1) NOT NULL,
            QUESTION_31 int(1) NOT NULL,QUESTION_32 int(1) NOT NULL,QUESTION_33 int(1) NOT NULL,QUESTION_34 int(1) NOT NULL,
            QUESTION_35 int(1) NOT NULL,QUESTION_36 int(1) NOT NULL,QUESTION_37 int(1) NOT NULL,QUESTION_38 int(1) NOT NULL,QUESTION_39 int(1) NOT NULL,
            QUESTION_41 int(1) NOT NULL,QUESTION_42 int(1) NOT NULL,QUESTION_43 int(1) NOT NULL,QUESTION_44 int(1) NOT NULL,
            QUESTION_45 int(1) NOT NULL,QUESTION_46 int(1) NOT NULL,QUESTION_47 int(1) NOT NULL,QUESTION_48 int(1) NOT NULL,QUESTION_49 int(1) NOT NULL,
            QUESTION_51 int(1) NOT NULL,QUESTION_52 int(1) NOT NULL,QUESTION_53 int(1) NOT NULL,QUESTION_54 int(1) NOT NULL,
            QUESTION_55 int(1) NOT NULL,QUESTION_56 int(1) NOT NULL,QUESTION_57 int(1) NOT NULL,QUESTION_58 int(1) NOT NULL,QUESTION_59 int(1) NOT NULL,
            QUESTION_61 int(1) NOT NULL,QUESTION_62 int(1) NOT NULL,QUESTION_63 int(1) NOT NULL,QUESTION_64 int(1) NOT NULL,
            QUESTION_65 int(1) NOT NULL,QUESTION_66 int(1) NOT NULL,QUESTION_67 int(1) NOT NULL,QUESTION_68 int(1) NOT NULL,QUESTION_69 int(1) NOT NULL,
            QUESTION_71 int(1) NOT NULL,QUESTION_72 int(1) NOT NULL,QUESTION_73 int(1) NOT NULL,QUESTION_74 int(1) NOT NULL,
            QUESTION_75 int(1) NOT NULL,
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

    public function add_new_spm(int $utente_id,int $spm_type,string $date, int[] $question){
        
        //$sql = "SELECT id FROM terapeuta WHERE email = '$email' and password = '$password'";

        $sql = "INSERT INTO spms (utente_id,spm_type,date,
                    question01,question02,question03,question04,question05,question06,question07,question08,question09,question10
                    ,question11,question12,question13,question14,question15,question16,question17,question18,question19,question20
                    ,question21,question22,question23,question24,question25,question26,question27,question28,question29,question30
                    ,question31,question32,question33,question34,question35,question36,question37,question38,question39,question40
                    ,question41,question42,question43,question44,question45,question46,question47,question48,question49,question50
                    ,question51,question52,question53,question54,question55,question56,question57,question58,question59,question60
                    ,question61,question62,question63,question64,question65,question66,question67,question68,question69,question70
                    ,question71,question72,question73,question74,question75) 
                    VALUES ('$utente_id','$spm_type','$date',
                    '$question[0]','$question[1]','$question[2]','$question[3]','$question[4]','$question[5]','$question[6]','$question[7]','$question[8]','$question[9]',
                    '$question[10]','$question[11]','$question[12]','$question[13]','$question[14]','$question[15]','$question[16]','$question[17]','$question[18]','$question[19]',
                    '$question[20]','$question[21]','$question[22]','$question[23]','$question[24]','$question[25]','$question[26]','$question[27]','$question[28]','$question[29]',
                    '$question[30]','$question[31]','$question[32]','$question[33]','$question[34]','$question[35]','$question[36]','$question[37]','$question[38]','$question[39]',
                    '$question[40]','$question[41]','$question[42]','$question[43]','$question[44]','$question[45]','$question[46]','$question[47]','$question[48]','$question[49]',
                    '$question[50]','$question[51]','$question[52]','$question[53]','$question[54]','$question[55]','$question[56]','$question[57]','$question[58]','$question[59]',
                    '$question[60]','$question[61]','$question[62]','$question[63]','$question[64]','$question[65]','$question[66]','$question[67]','$question[68]','$question[69]',
                    '$question[70]','$question[71]','$question[72]','$question[73]','$question[74]'
                    )";
        
        if ($this->dbconn->connection->query($sql) === TRUE) { 
            echo "New SPM added Successfuly...";
        } else {
            echo "ERROR adding to table.";
        }
    }


    

}
?>