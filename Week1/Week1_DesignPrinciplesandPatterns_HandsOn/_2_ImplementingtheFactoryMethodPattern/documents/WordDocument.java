package Week1.Week1_DesignPrinciplesandPatterns_HandsOn._2_ImplementingtheFactoryMethodPattern.documents;


public class WordDocument implements Document {
    public void open() {
        System.out.println("Accessing the Word document");
    }
}