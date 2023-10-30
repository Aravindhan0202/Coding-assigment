package assignment;

import java.util.Scanner;

public class Pangram {

	public static boolean Pangram_Checker(String s) {
		String lowercase=s.toLowerCase();
		for(char letter='a';letter<='z';letter++) {
			if(lowercase.indexOf(letter)==-1) {
				return false;
			}
		}
		return true;
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
      Scanner sc= new Scanner(System.in);
      System.out.println("Enter the string");
      String sentence=sc.nextLine();
      boolean boo =Pangram_Checker(sentence);
      if(boo==true) {
    	  System.out.println(sentence+" is a pangram");
      }
      else {
    	  System.out.println(sentence+" is not  a pangram");
      }
	}

}
