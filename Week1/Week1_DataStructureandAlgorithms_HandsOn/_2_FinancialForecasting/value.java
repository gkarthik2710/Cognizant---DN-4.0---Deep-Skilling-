package Week1.Week1_DataStructureandAlgorithms_HandsOn._2_FinancialForecasting;

import java.util.Scanner;

public class value {
    public static double forecastValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        } else {
            return forecastValue(presentValue, growthRate, years - 1) * (1 + growthRate);
        }
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Current Value: ");
        double presentValue = scanner.nextDouble();
        System.out.print("Growth Percentage ");
        double growthRate = scanner.nextDouble();
        System.out.print("Enter Time Period (Years): ");
        int years = scanner.nextInt();
        double futureValue = forecastValue(presentValue, growthRate, years);
        System.out.printf("Estimated Future Value: %.2f\n", futureValue);
        scanner.close();
    }
}