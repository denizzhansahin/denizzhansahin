#include<stdio.h>


int main()
{
int i;
scanf("%d",&i);
int dizi[i];
int sayici,a;
int toplam=0,carpim=1,ortalama,enbuyuk,enkucuk;

for(sayici=0;sayici<i;sayici++){
	scanf("%d",&a);
	dizi[sayici]=a;
}


printf("\n");



for(sayici=0;sayici<i;sayici++){
	printf("%d.siradaki eleman :  %d\n",sayici+1,dizi[sayici]);
}

for(sayici=0;sayici<i;sayici++){
	toplam+=dizi[sayici];
}
for(sayici=0;sayici<i;sayici++){
	carpim*=dizi[sayici];
}

enkucuk=dizi[0];
for(sayici=0;sayici<i;sayici++){
	if(enkucuk>dizi[sayici])
	enkucuk=dizi[sayici];
	}

enbuyuk=dizi[0];
for(sayici=0;sayici<i;sayici++){
	if(enbuyuk<dizi[sayici])
	enbuyuk=dizi[sayici];
}




	printf("TOPLAM : %d\n", toplam);
	printf("CARPIM : %10d\n", carpim);
	printf("ORTALAMA : %d\n", toplam/i);
	printf("EN KUCUK DEGER : %d\n", enkucuk);
	printf("EN BUYUK DEGER : %d\n", enbuyuk);
	return 0;
}
