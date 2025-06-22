package com.example.finance;

public class ForecastHelper {
    public static double calculateFutureValueRecursive(double amount, double rate, int years) {
        if (years == 0) {
            return amount;
        }
        return calculateFutureValueRecursive(amount * (1 + rate), rate, years - 1);
    }
    public static double calculateFutureValueFormula(double amount, double rate, int years) {
        return amount * Math.pow(1 + rate, years);
    }
}
