package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting...");
        calculator = new Calculator();
    }


    @After
    public void tearDown() {
        System.out.println("Cleaning...");
        calculator = null;
    }

    @Test
    public void testAddition() {

        int a = 2, b = 3;


        int result = calculator.add(a, b);

        assertEquals(5, result);
    }

    @Test
    public void testMultiplication() {

        int a = 4, b = 5;

        int result = calculator.multiply(a, b);

        assertEquals(20, result);
    }
}
