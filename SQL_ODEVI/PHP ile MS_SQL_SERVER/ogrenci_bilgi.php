<?php

	$server = "localhost";
	$dbname = "OgrenciVeriTabani";
	$dbuser = "sa";
	$dbpwd = "12345Deniz";
	global $baglan;

	try {
		 $baglan = new PDO("dblib:host=mssql;dbname=$dbname", "$dbuser","$dbpwd");;
	} catch ( PDOException $e ){
		echo $e->getMessage();
	}
  if ($baglan) {
    echo "Bağlantı Başarılı";
  }else {
    echo "Başarısız";
  }
