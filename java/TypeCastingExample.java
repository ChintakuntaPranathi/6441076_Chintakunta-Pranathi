public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.78;
        int myInt = (int) myDouble; 
        System.out.println("Original double value: " + myDouble);
        System.out.println("After casting to int: " + myInt);

        int anotherInt = 25;
        double castedDouble = anotherInt;
        System.out.println("Original int value: " + anotherInt);
        System.out.println("After casting to double: " + castedDouble);
    }
}
