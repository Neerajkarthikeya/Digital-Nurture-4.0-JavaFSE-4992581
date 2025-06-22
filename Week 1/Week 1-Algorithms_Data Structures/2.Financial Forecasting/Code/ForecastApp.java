package com.example.finance;

public class ForecastApp {
    public static void main(String[] args) {
        double amount = 1000.0;
        double growthRate = 0.05; 
        int years = 5;

        double valueUsingRecursion = ForecastHelper.calculateFutureValueRecursive(amount, growthRate, years);
        double valueUsingFormula = ForecastHelper.calculateFutureValueFormula(amount, growthRate, years);

        System.out.println("Future Value-Recursive: $" + valueUsingRecursion);
        System.out.println("Future Value-Formula: $" + valueUsingFormula);
    }
}
