package Week1.Week1_DataStructureandAlgorithms_HandsOn._1_E_CommercePlatformSearchFunction;

import java.util.Scanner;

public class BinarySearch {

    public static void sortProducts(Product[] products) {
        int n = products.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (products[j].productName.compareToIgnoreCase(products[j + 1].productName) > 0) {
                    Product temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int comparison = products[mid].productName.compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
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

        sortProducts(productList);

        System.out.print("Find your product (Binary Search method): ");
        String nameToSearch = scanner.nextLine();

        Product result = binarySearch(productList, nameToSearch);

        if (result != null) {
            System.out.println("Search result: Product found");
            result.display();
        } else {
            System.out.println("Search result: Product not found");
        }

        scanner.close();
    }
}