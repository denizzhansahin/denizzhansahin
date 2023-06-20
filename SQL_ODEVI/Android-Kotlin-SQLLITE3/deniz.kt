package com.example.denizhan_sql_lite

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        try{

            //veri tabanı oluşturma
            val veritabani = this.openOrCreateDatabase("Denizhan",Context.MODE_PRIVATE,null)
            //tablo oluşturma
            veritabani.execSQL("CREATE TABLE IF NOT EXISTS Bilgiler(id INTEGER PRIMARY KEY, isim VARCHAR, soyisim VARCHAR)")

            //ekleme
            //veritabani.execSQL("INSERT INTO Bilgiler(isim,soyisim) VALUES('denizhan','sahin')")
            //veritabani.execSQL("INSERT INTO Bilgiler(isim,soyisim) VALUES('denizhan','sahin')")
            //veritabani.execSQL("INSERT INTO Bilgiler(isim,soyisim) VALUES('batuhan','sonmez')")
            //veritabani.execSQL("INSERT INTO Bilgiler(isim,soyisim) VALUES('abdulkerim','akman')")
            //veritabani.execSQL("INSERT INTO Bilgiler(isim,soyisim) VALUES('benim adım yok','benim soyadım yok')")

            val cursor = veritabani.rawQuery("SELECT * FROM Bilgiler",null)
            val idColumIndex = cursor.getColumnIndex("id")
            val isimColumnIndex = cursor.getColumnIndex("isim")
            val soyisimColumnIndex = cursor.getColumnIndex("soyisim")

            //cursor ile yazdırma
            while(cursor.moveToNext())
            {
                println("ID : ${cursor.getInt(idColumIndex)}")
                println("Isim : ${cursor.getString(isimColumnIndex)}")
                println("Soyisim : ${cursor.getString(soyisimColumnIndex)}")
            }

            //silme
            //veritabani.execSQL("DELETE FROM Bilgiler WHERE id=3")

            //guncelleme
            //veritabani.execSQL("UPDATE Bilgiler SET isim = 'Koca Yusuf' WHERE id = 2")

            cursor.close()


        }catch (e:Exception)
        {
            e.printStackTrace()
        }
    }
}
