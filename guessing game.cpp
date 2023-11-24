#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main(){
int c;
srand(time(nullptr));
int number = (rand() % 100)+1;
int i = 5;
while (i > 0){



cout<< "Enter a number from 1-100: ";
cin >> c;
i-=1;

if (c == number){
cout <<" you guessed correctly\n";
cout << "The number is " << number << endl;
break;
}

if ((c == number -5) ||( c == number + 5)){
	cout << "You are very Warm\n";
}

if ((c <= number -10 )||( c >= number + 10)){
	cout<< "You are very COLD!!";
}
 if (c != number) {

cout << "Try again" << " you have " << i << " chances left" << number<< endl;
}if (i == 0){
	cout << "Wrong input\n Try again\n";
}



	
}}
