import java.sql.*;

public class StudentDAO {
    private final String url = "jdbc:mysql://localhost:3306/school";
    private final String user = "root";
    private final String password = "your_password"; // Replace with your actual password

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, user, password);
    }

    public void insertStudent(int id, String name, int age) {
        String query = "INSERT INTO students (id, name, age) VALUES (?, ?, ?)";

        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {

            pstmt.setInt(1, id);
            pstmt.setString(2, name);
            pstmt.setInt(3, age);

            int rows = pstmt.executeUpdate();
            System.out.println(rows + " student(s) inserted.");

        } catch (SQLException e) {
            System.out.println("Insert failed.");
            e.printStackTrace();
        }
    }

    public void updateStudent(int id, String newName, int newAge) {
        String query = "UPDATE students SET name = ?, age = ? WHERE id = ?";

        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {

            pstmt.setString(1, newName);
            pstmt.setInt(2, newAge);
            pstmt.setInt(3, id);

            int rows = pstmt.executeUpdate();
            System.out.println(rows + " student(s) updated.");

        } catch (SQLException e) {
            System.out.println("Update failed.");
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        StudentDAO dao = new StudentDAO();

        // Insert a student
        dao.insertStudent(1, "Alice", 20);

        // Update the student
        dao.updateStudent(1, "Alice Johnson", 21);
    }
}