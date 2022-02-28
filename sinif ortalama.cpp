#include <stdio.h>
#include <locale.h>
#include <conio.h>
#include <windows.h>
int main(){
	setlocale(LC_ALL, "turkish");
	system(" color f9");
int sayici,kisi,toplam,ortalama,nott;
sayici=1;
toplam=0;
ortalama=0;
nott=0;
printf("SINIFTAKÝ ÖGRENCÝ SAYISINI YAZINIZ. DAHA SONRA NOTLARI GÝRÝNÝZ. ÖGRENCÝ VE SINIF DURUMU SONUCLARI EKRANA GELECEKTÝR.\n");
printf("NOT GÝRÝSÝ 0'DAN KÜÇÜK VE 100'DEN BÜYÜK OLAMAZ. \nSINIF MEVCUDU 0'DAN KÜÇÜK OLAMAZ.\nÖgrenci sayýsýný giriniz: ");
scanf("%d", &kisi);

while(sayici<=kisi){
	printf("Not giriniz: ");
	scanf("%d", &nott);
	toplam=toplam+nott;
	sayici=sayici+1;
           	if(nott<=50)
        	printf("   ÖÐRENCÝ BAÞARISIZ\n");
        	else printf("   ÖÐRENCÝ BASARILI\n");
	
}
ortalama=toplam/kisi;
printf("\nSINIF ORTALAMASI: %d\n", ortalama);
	if(ortalama<=50)
	printf("SINIF BAÞARISIZ\n");
	else printf("SINIF BAÞARILI\n");
return 0;
}
