from fpdf import FPDF
import pypyodbc
import pandas as pd

#ODBC - MS SQL SERVER
connection = pypyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER=localhost;DATABASE=OgrenciVeriTabani;UID=sa;PWD=12345Deniz')
cursor = connection.cursor()

try:

    #tablo göster
    tablo_sql_goster = 'SELECT * FROM [OgrenciVeriTabani].[dbo].[OgrenciTablosu] WHERE OgrenciID=?'
    id = int(input("OgrenciID yaziniz :  "))
    cursor.execute(tablo_sql_goster,(id,))
    deger_tablo=cursor.fetchall()
    print(deger_tablo,"\n")
    connection.commit()
except:
            print("islem2")

print(type(deger_tablo))
print(type(deger_tablo[0]))
print(len(deger_tablo[0]))
print((deger_tablo[0])[0])

class PDF(FPDF):
    def header(self):
        # Logo
        self.image('img/logo_bozok.png', 10, 10, 30)
        # Arial bold 15
        self.set_font('Arial', 'B', 15)
        # Move to the right
        self.cell(50)
        # Title
        self.cell(10, 10, 'Yozgat Bozok Üniversitesi Ogrenci Belgesi')
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

#OgrenciBilgiler
deger = 0
deger_isim= ["OgrenciID","KimlikID","Isim","Soyisim","Adres","Telefon Numarasi","Kisisel E-Posta","Uyruk","Cinsiyet","Sehir","Dogdugu Gunu","Dogdugu Ay","Dogdugu Yil"]
pdf.cell(0,35,"Ogrenci Kimlik Bilgileri")
pdf.cell(0,20," ",0,1)

pdf.line(10, 50, 200, 50)
for i in range(13):
    deger_isim_value = deger_isim[i]
    bilgi=deger_tablo[0][i]
    pdf.cell(0,8,"{} : \t\t {}".format(deger_isim_value,bilgi),0,1)

#OgrenciEgitim
deger = 0
deger_egitim= ["Fakulte","Bolum/ Program Adi","Ogretim Turu","Ogrenci Turu","Okul E-Posta","DGS Durumu","Yatay Gecis Durumu","Kayit Gun","Kayit Ay","Kayit Yil"]
pdf.cell(0,35,"Ogrenci Egitim Bilgileri")
pdf.cell(0,20," ",0,1)

pdf.line(10, 175, 200, 175)
for i in range(13,23):
    deger_egitim_value = deger_egitim[i-13]
    bilgi_egitim=deger_tablo[0][i]
    pdf.cell(0,8,"{}  : \t\t {}".format(deger_egitim_value,bilgi_egitim),0,1)

"""
pdf.line(10, 40, 110, 40)
pdf.cell(1,50,"Isim : \t {}".format(deger),0,1)
pdf.line(10, 60, 110, 60)
pdf.cell(1,70,"Isim : \t {}".format(deger),0,1)
pdf.line(10, 70, 110, 70)
"""

pdf.output(str(deger_tablo[0][0])+'.pdf', 'F')
