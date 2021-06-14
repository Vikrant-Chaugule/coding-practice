/* 
 Read  integers from stdin and then print them to stdout. Each integer must be printed on a new line
 There are lines of input, and each line contains a single integer.
*/

// Example

// Sample Input
// 42
// 100
// 125


// Sample Output
// 42
// 100
// 125


import java.util.*;

public class PrintNumbers {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter three numbers");

        System.out.print("1. ");
        int a = scan.nextInt();

        System.out.print("2. ");
        int b = scan.nextInt();

        System.out.print("3. ");
        int c = scan.nextInt();

        System.out.println("You printed : ");
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}