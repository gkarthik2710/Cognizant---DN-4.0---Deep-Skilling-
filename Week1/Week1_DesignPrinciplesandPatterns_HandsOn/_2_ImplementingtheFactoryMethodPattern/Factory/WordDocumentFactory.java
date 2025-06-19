package Week1.Week1_DesignPrinciplesandPatterns_HandsOn._2_ImplementingtheFactoryMethodPattern.Factory;

import Week1.Week1_DesignPrinciplesandPatterns_HandsOn._2_ImplementingtheFactoryMethodPattern.documents.Document;
import Week1.Week1_DesignPrinciplesandPatterns_HandsOn._2_ImplementingtheFactoryMethodPattern.documents.WordDocument;

public class WordDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}