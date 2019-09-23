#define ALSO 0
#define FELSO 300
#define LEPES 20
#include <stdio.h>
int main(void) {
  int fahr;
  printf("\nFahrenheit - Celsius atszamitas\n\n");
  printf("Fahrenheit - Celsius\n");
  printf("--------------------\n");
  for (fahr=FELSO;fahr>=ALSO;fahr=fahr-LEPES)
    printf("%10d%10.1f\n",fahr,(5.0/9.0)*(fahr-32));
  return 0;
}
