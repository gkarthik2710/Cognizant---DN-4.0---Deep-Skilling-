package com.example.singleton;

public class Main {
    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Logging from logger1");
        logger2.log("Logging from logger2");


        if (logger1 == logger2) {
            System.out.println("Singleton works!,logger1 and logger2 are the same");
        } else {
            System.out.println("Singleton failed! Different instances exist.");
        }
    }
}