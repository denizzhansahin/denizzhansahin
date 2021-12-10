#include <stdio.h>
 double to_bin(int sayi){
	int kalan,bsmk=1;
	double tmp=0;
	while(sayi>0){
		
		kalan=sayi%2;
		bsmk*=10;
		tmp+=kalan*bsmk;
		sayi/=2;
		
	}
return tmp;
	
}

int main(){
	int i;
	for(i=1; i<=300;i++){
		printf("%3d %15.0f\n",i,to_bin(i));
		}
	
	return 0;
}
/* 1'den 300'e kadar olan sayýlarýn 2 ile kalanýný hesaplayýp daha sonra ilgili basamaklarý 10 ile çarpar ve ikilik sayý sistemine göre yazdýrýr.
Sayý bitene kadar sürekli tekrarlar ve diðer sayýyý da ayný þekilde yapar */

