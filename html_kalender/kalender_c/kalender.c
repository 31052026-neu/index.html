# include <stdio.h>

int main () {

int zahl1;
int zahl2;

printf("Gib die erste Zahl ein:");
scanf("%d", &zahl1);

printf("Gib die erste Zahl ein:");
scanf("%d", &zahl2);

int ergebnis = zahl1 + zahl2;

printf("Das Ergebnis ist: %d\n", ergebnis);

return 0;
}