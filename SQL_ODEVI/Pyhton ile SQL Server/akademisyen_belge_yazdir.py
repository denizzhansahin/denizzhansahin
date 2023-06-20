from fpdf import FPDF
import pypyodbc
import pandas as pd

#ODBC - MS SQL SERVER
connection = pypyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=localhost;DATABASE=OgrenciVeriTabani;UID=sa;PWD=12345Deniz')
cursor = connection.cursor()

egitim_cursor = connection.cursor()
yuksek_cursor = connection.cursor()
dr_cursor = connection.cursor()
try:

    #tablo göster
    tablo_sql_goster = 'SELECT * FROM [OgrenciVeriTabani].[dbo].[AkademisyenKurumsalVeriTablosu] WHERE AkademisyenID=?'
    id = int(input("AkademisyenID yaziniz :  "))
    cursor.execute(tablo_sql_goster,(id,))
    deger_tablo=cursor.fetchall()
    

    #egitim
    egitim_sql_goster = 'SELECT * FROM [OgrenciVeriTabani].[dbo].[AkademisyenEgitimVeriTablosu] WHERE AkademisyenID=?'
    egitim_cursor.execute(egitim_sql_goster,(id,))
    egitim_tablo=egitim_cursor.fetchall()
    connection.commit()

    #yuksek lisans
    yuksek_sql_goster = 'SELECT * FROM [OgrenciVeriTabani].[dbo].[AkademisyenYuksekLisansVeriTablosu] WHERE AkademisyenID=?'
    yuksek_cursor.execute(yuksek_sql_goster,(id,))
    yuksek_tablo=yuksek_cursor.fetchall()
    connection.commit()

    #doktora
    doktora_sql_goster = 'SELECT * FROM [OgrenciVeriTabani].[dbo].[AkademisyenDoktoraVeriTablosu] WHERE AkademisyenID=?'
    dr_cursor.execute(doktora_sql_goster,(id,))
    doktora_tablo=dr_cursor.fetchall()
    connection.commit()

except:
            print("islem2")



class PDF(FPDF):
    def header(self):
        # Logo
        self.image('img/logo_bozok.png', 10, 10, 30)
        # Arial bold 15
        self.set_font('Arial', 'B', 15)
        # Move to the right
        self.cell(50)
        # Title
        self.cell(10, 10, 'Yozgat Bozok Üniversitesi Personel Belgesi')
        # Line break
        self.ln(20)

    # Page footer
    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Arial italic 8
        self.set_font('Arial', 'I', 8)
        # Page number
        self.cell(0, 10, 'Yozgat Bozok Universitesi ' + str(self.page_no()) + '/{nb}', 0, 0, 'C')

# Instantiation of inherited class
pdf = PDF()
pdf.alias_nb_pages()
pdf.add_page()
pdf.set_font('Arial', '', 12)

#Bilgiler
deger = 0
deger_isim= ["AkademisyenID","KimlikID","Isim","Soyisim","Adres ","Telefon Numarasi","Kisisel E-Posta","Uyruk","Cinsiyet","Sehir","Dogdugu Gunu","Dogdugu Ay","Dogdugu Yil"]
pdf.cell(0,35,"Akademisyen Kimlik Bilgileri")
pdf.cell(0,20," ",0,1)

pdf.line(10, 50, 200, 50)
for i in range(13):
    deger_isim_value = deger_isim[i]
    bilgi=deger_tablo[0][i]
    pdf.cell(0,8,"{} : \t\t {}".format(deger_isim_value,bilgi),0,1)

#Gorev
deger = 0
deger_gorev= ["Fakulte","Bolum/ Program Adi","Ogretim Turu","Lisans Turu","Gorev Turu","Kurumsal E-Posta","Gorev Baslama Gun","Gorev Baslama Ay ","Gorev Baslama Yil"]
pdf.cell(0,35,"Akademisyen Gorev Bilgileri")
pdf.cell(0,20," ",0,1)

pdf.line(10, 175, 200, 175)
for i in range(13,22):
    deger_gorev_value = deger_gorev[i-13]
    bilgi_gorev=deger_tablo[0][i]
    pdf.cell(0,8,"{}  : \t\t {}".format(deger_gorev_value,bilgi_gorev),0,1)

#Egitim
deger = 0
deger_egitim= [" ","Universite","Bolum/ Program Adi","Ogretim Turu","Lisans Turu","Fakulte","Sehir","Baslama Gun","Baslama Ay ","Baslama Yil","Bitirme Gun","Bitirme Ay ","Bitirme Yil"]
pdf.cell(0,35,"Akademisyen Egitim Bilgileri")
pdf.cell(0,20," ",0,1)

pdf.line(10, 50, 200, 50)
for i in range(1,13):
    deger_egitim_value = deger_egitim[i]
    bilgi_egitim=egitim_tablo[0][i]
    pdf.cell(0,8,"{}  : \t\t {}".format(deger_egitim_value,bilgi_egitim),0,1)


#yuksek lisans
deger = 0
yuksek_egitim= [" ","Universite","Bolum/ Program Adi","Fakulte","Sehir","Baslama Gun","Baslama Ay ","Baslama Yil","Bitirme Gun","Bitirme Ay ","Bitirme Yil"]
pdf.cell(0,35,"Akademisyen Yuksek Lisans Bilgileri")
pdf.cell(0,20," ",0,1)

pdf.line(10, 166, 200, 166)
for i in range(1,11):
    deger_yuksek_value = yuksek_egitim[i]
    bilgi_yuksek=yuksek_tablo[0][i]
    pdf.cell(0,8,"{}  : \t\t {}".format(deger_yuksek_value,bilgi_yuksek),0,1)


#doktora
deger = 0
doktora_egitim= [" ","Universite","Bolum/ Program Adi","Fakulte","Sehir","Baslama Gun","Baslama Ay ","Baslama Yil","Bitirme Gun","Bitirme Ay ","Bitirme Yil"]
pdf.cell(0,35,"Akademisyen Doktora Bilgileri")
pdf.cell(0,20," ",0,1)

pdf.line(10, 50, 200, 50)
for i in range(1,11):
    deger_doktora_value = doktora_egitim[i]
    bilgi_doktora=doktora_tablo[0][i]
    pdf.cell(0,8,"{}  : \t\t {}".format(deger_doktora_value,bilgi_doktora),0,1)


"""
pdf.line(10, 40, 110, 40)
pdf.cell(1,50,"Isim : \t {}".format(deger),0,1)
pdf.line(10, 60, 110, 60)
pdf.cell(1,70,"Isim : \t {}".format(deger),0,1)
pdf.line(10, 70, 110, 70)
"""

pdf.output(str(deger_tablo[0][0])+'.pdf', 'F')
