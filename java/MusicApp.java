interface Playable {
    void play();  
}
class Guitar implements Playable {
    public void play() {
        System.out.println("Playing the guitar: Strum strum!");
    }
}
class Piano implements Playable {
    public void play() {
        System.out.println("Playing the piano: Plink plonk!");
    }
}
public class Main {
    public static void main(String[] args) {
        Playable guitar = new Guitar();
        Playable piano = new Piano();
        guitar.play();
        piano.play();
    }
}
