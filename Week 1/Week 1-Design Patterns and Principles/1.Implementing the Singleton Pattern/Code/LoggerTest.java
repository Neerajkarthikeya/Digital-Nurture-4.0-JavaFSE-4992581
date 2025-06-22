package com.example.logger;

public class LoggerTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        logger1.log("This is the first log message from logger1.");
        logger2.log("This is the second log message from logger2.");
        if (logger1 == logger2) {
            System.out.println("Both logger1 and logger2 refer to the same instance of Logger.");
        } else {
            System.out.println("Different Logger instances exist!");
        }
    }
}
