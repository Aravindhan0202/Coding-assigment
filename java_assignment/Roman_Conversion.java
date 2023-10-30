package assignment;
import java.util.Scanner;
public class Roman_Conversion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Roman_Conversion obj=new Roman_Conversion();
		Scanner s=new Scanner(System.in);
		System.out.println("Enter The Roman Value");
		String input=s.nextLine();
		System.out.println("The Roman Value converted to string is"+obj.NumCon(input));
	}
   int number(char roman) {
	if(roman=='I') {
		return 1;
	}
	if(roman=='V') {
		return 5;
	}
	if(roman=='X') {
		return 10;
	}
	if(roman=='L') {
		return 50;
	}
	if(roman=='C') {
		return 100;
	}
	if(roman=='D') {
		return 500;
	}
	if(roman=='M') {
		return 1000;
	}
	return -1;   
   }
   int NumCon(String input) {
	   int sum=0;
	   int  length=input.length();
	   for(int i=0;i<length;i++) {
		   int s1=number(input.charAt(i));
		   if(i+1<length) {
			int s2=number(input.charAt(i+1));
			if(s1>=s2) {
				sum+=s1;
			}
			else {
				sum-=s1;
			}
		   }
		   else {
			   sum+=s1;
		   }
	   }
	   return sum;
	   
   }
}
