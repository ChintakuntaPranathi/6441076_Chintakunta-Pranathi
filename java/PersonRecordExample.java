import java.util.List;
public class PersonRecordExample {
    public record Person(String name, int age) {}
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 28);
        Person p2 = new Person("Bob", 35);
        Person p3 = new Person("Charlie", 22);
        List<Person> people = List.of(p1, p2, p3);
        System.out.println("All People:");
        people.forEach(System.out::println);
        System.out.println("\nPeople aged 30 or older:");
        people.stream()
              .filter(person -> person.age() >= 30)
              .forEach(System.out::println);
    }
}
