Step 1: Write and Compile a Simple Java Program
Create a file named HelloWorld.java:
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, decompiler!");
    }
}
Compile it using:

javac HelloWorld.java
This will generate a HelloWorld.class file in the same directory.

Step 2: Use a Decompiler
JD-GUI (GUI-based)
Download JD-GUI from: https://java-decompiler.github.io

Open JD-GUI.

Drag and drop HelloWorld.class into JD-GUI.

You will see the decompiled Java code.

Step 3: Analyze Decompiled Source
You should see something similar to:

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, decompiler!");
    }
}
