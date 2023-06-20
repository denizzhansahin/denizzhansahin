import sqlite3


#baglanma veya oluşturma
isim_db = input("Veritabanı ismi yaz :")
vt = sqlite3.connect(str(isim_db)+".sqlite3")
#imleç oluştur
im = vt.cursor()


print("-----------------------------------")
print("-----------------------------------")
print("-----------------------------------")

print("TABLO GOSTERMEK İÇİN                          : goster")
print("DEGER EKLEMEK   İÇİN                          : ekle")
print("SILMEK İÇİN                                   : sil")
print("GUNCELLEME İÇİN                               : guncelle")
print("TABLO OLUŞTURMAK İÇİN sadece bir kez kullanın : olustur")
print("\n")
print("İŞLEMİ BİTİMEK İÇİN                           : 0")

print("-----------------------------------")
ne=1

while(ne!=0):
    print("-----------------------------------")
    ne = input("Ne yapacaksın?    :     ")

    if(ne=="0"):
        break

    if(ne=="olustur"):
        #tablo oluştur
        tablo_sql = """CREATE TABLE kisisel_bilgilerim (isim TEXT, soyisim TEXT,telno,adres VARCHAR,bolum VARCHAR,Id INTEGER PRIMARY KEY AUTOINCREMENT)"""
        im.execute(tablo_sql)
        print("kisisel_bilgilerim tablosu oluşturuldu\n")
        print("Sütunlar : isim TEXT, soyisim TEXT,telno,adres VARCHAR,bolum VARCHAR,Id INTEGER PRIMARY KEY AUTOINCREMENT\n")
        vt.commit()

    if(ne=="goster"):
        #tablo göster
        tablo_sql_goster = 'SELECT * FROM kisisel_bilgilerim'
        im.execute(tablo_sql_goster)
        deger=im.fetchall()
        print(deger)
        vt.commit()

    elif(ne=="sil"):
        #silme
        def sil():
            deger = int(input("hangi id silinecek :  "))

            def silme(task):
                sql = ''' DELETE FROM kisisel_bilgilerim 
                        WHERE id = ?'''
                
                im.execute(sql, task)
                vt.commit()
                

            silme((deger,))
        sil()

    elif(ne=="ekle"):
        #deger ekle
        for i in range(1):
            
            isim = input("İsim yaz :  ")
            soyisim = input("Soyisim yaz :  ")
            telno = input("Telno yaz :  ")
            adres = input("Adres yaz :  ")
            bolum = input("Bolum yaz :  ")
            id = str(input("ID yaz :  "))
            
            """
            isim = "deniz"
            soyisim = "sahin"
            telno = "45235432"
            adres = "yozgat"
            bolum = "bilgisayar"
            id = 12
            """
            veriler = [(isim,soyisim,telno,adres,bolum,id)]
            
            for veri in veriler:
                im.execute("""INSERT INTO kisisel_bilgilerim VALUES(?, ?, ?, ?, ?,?)""", veri)
                vt.commit()

    elif(ne=="guncelle"):
        #deger guncelle - soyad
        ne = input("Guncellenecek sütun seç :   ")

        if(ne=="soyisim"):
            def soyisim_update():
                deger = int(input("hangi id guncellenecek :  "))
                g= input("yeni soyad :  ")

                def soyisim_guncelle(task):
                    sql = ''' UPDATE kisisel_bilgilerim
                            SET soyisim = ? 
                            WHERE id = ?'''
                    
                    im.execute(sql, task)
                    vt.commit()
                    

                soyisim_guncelle((g,deger))
            soyisim_update()
        if(ne=="isim"):
            def isim_update():
                deger = int(input("hangi id guncellenecek :   "))
                g= input("yeni isim :  ")

                def isim_guncelle(task):
                    sql = ''' UPDATE kisisel_bilgilerim
                            SET isim = ? 
                            WHERE id = ?'''
                    
                    im.execute(sql, task)
                    vt.commit()
                    

                isim_guncelle((g,deger))
            isim_update()

        if(ne=="telno"):
            def tel_update():
                deger = int(input("hangi id guncellenecek :  "))
                g= input("yeni telno : ")

                def tel_guncelle(task):
                    sql = ''' UPDATE kisisel_bilgilerim
                            SET telno = ? 
                            WHERE id = ?'''
                    
                    im.execute(sql, task)
                    vt.commit()
                    

                tel_guncelle((g,deger))
            tel_update()

        if(ne=="adres"):
            def adres_update():
                deger = int(input("hangi id guncellenecek :  "))
                g= input("yeni adres : ")

                def adres_guncelle(task):
                    sql = ''' UPDATE kisisel_bilgilerim
                            SET adres = ? 
                            WHERE id = ?'''
                    
                    im.execute(sql, task)
                    vt.commit()
                    

                adres_guncelle((g,deger))
            adres_update()

        if(ne=="bolum"):
            def bolum_update():
                deger = int(input("hangi id guncellenecek : "))
                g= input("yeni bolum : ")

                def bolum_guncelle(task):
                    sql = ''' UPDATE kisisel_bilgilerim
                            SET bolum = ? 
                            WHERE id = ?'''
                    
                    im.execute(sql, task)
                    vt.commit()
                    

                bolum_guncelle((g,deger))
            bolum_update()

        print("-----------------------------------")