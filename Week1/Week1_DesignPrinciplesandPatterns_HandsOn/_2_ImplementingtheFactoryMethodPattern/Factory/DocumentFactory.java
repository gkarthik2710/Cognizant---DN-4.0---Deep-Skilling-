package Week1.Week1_DesignPrinciplesandPatterns_HandsOn._2_ImplementingtheFactoryMethodPattern.Factory;

import Week1.Week1_DesignPrinciplesandPatterns_HandsOn._2_ImplementingtheFactoryMethodPattern.documents.Document;

public abstract class DocumentFactory {
    public abstract Document createDocument();
}