package Week1.Week1_DesignPrinciplesandPatterns_HandsOn._2_ImplementingtheFactoryMethodPattern.documents;


public class ExcelDocument implements Document {
    public void open() {
        System.out.println("Loading an Excel workbook");
    }
}