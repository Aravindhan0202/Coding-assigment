package assignment;
import java.util.Arrays;
import java.util.Random;
public class Shuffle {
    public static void ShuffleArray(int arr[]) {
    	Random rand=new Random();
    	int length=arr.length;
    	for(int i=length-1;i>0;i--) {
    		int j=rand.nextInt(i+1);
    		int temp=arr[i];
    	    arr[i]=arr[j];
    		arr[j]=temp;
    	}
    }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        int[] array= {1,2,3,4,5,6,7,8};
        ShuffleArray(array);
        System.out.println("Shuffled array is"+Arrays.toString(array));
	}

}
