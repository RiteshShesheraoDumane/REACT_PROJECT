//table of any number
import java.util.Scanner;
public class First{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter any number:");
        int n=sc.nextInt();
        for( int i=1 ;i<=10;i++)
        System.out.println( (n*i));
    }
}