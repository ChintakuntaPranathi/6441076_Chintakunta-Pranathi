public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 100 / 10 + 5 * 2 - 3;

        System.out.println("Result1 (10 + 5 * 2): " + result1); // 10 + (5*2) = 20
        System.out.println("Result2 ((10 + 5) * 2): " + result2); // (10+5)*2 = 30
        System.out.println("Result3 (100 / 10 + 5 * 2 - 3): " + result3); // 10 + 10 - 3 = 17
    }
}
