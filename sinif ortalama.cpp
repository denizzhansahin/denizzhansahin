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
printf("SINIFTAK� �GRENC� SAYISINI YAZINIZ. DAHA SONRA NOTLARI G�R�N�Z. �GRENC� VE SINIF DURUMU SONUCLARI EKRANA GELECEKT�R.\n");
printf("NOT G�R�S� 0'DAN K���K VE 100'DEN B�Y�K OLAMAZ. \nSINIF MEVCUDU 0'DAN K���K OLAMAZ.\n�grenci say�s�n� giriniz: ");
scanf("%d", &kisi);

while(sayici<=kisi){
	printf("Not giriniz: ");
	scanf("%d", &nott);
	toplam=toplam+nott;
	sayici=sayici+1;
           	if(nott<=50)
        	printf("   ��RENC� BA�ARISIZ\n");
        	else printf("   ��RENC� BASARILI\n");
	
}
ortalama=toplam/kisi;
printf("\nSINIF ORTALAMASI: %d\n", ortalama);
	if(ortalama<=50)
	printf("SINIF BA�ARISIZ\n");
	else printf("SINIF BA�ARILI\n");
return 0;
}
