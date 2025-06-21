package Week1.Week1_DataStructureandAlgorithms_HandsOn._1_E_CommercePlatformSearchFunction;

import java.util.Scanner;

public class LinearSearch {
    public static Product linearSearch(Product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(targetName)) {
                return products[i];
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] productList = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Book", "Education"),
            new Product(3, "Shoes", "Footwear"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Bed", "Household")
        };

        System.out.print("Find your product (Linear Search method): ");
        String nameToSearch = scanner.nextLine();

        Product result = linearSearch(productList, nameToSearch);

        if (result != null) {
            System.out.println("Search result: Product found");
            result.display();
        } else {
            System.out.println("Search result: Product not found");
        }

        scanner.close();
    }
}