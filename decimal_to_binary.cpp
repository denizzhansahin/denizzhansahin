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
/* 1'den 300'e kadar olan say�lar�n 2 ile kalan�n� hesaplay�p daha sonra ilgili basamaklar� 10 ile �arpar ve ikilik say� sistemine g�re yazd�r�r.
Say� bitene kadar s�rekli tekrarlar ve di�er say�y� da ayn� �ekilde yapar */

