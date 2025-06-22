package com.example.ecommerce.search;

import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
                new Product(104, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Footwear"),
                new Product(101, "T-shirt", "Apparel"),
                new Product(103, "Book", "Stationery"),
                new Product(105, "Text Book", "Stationery")
        };
        System.out.println("Linear Search Result:");
        Product result1 = SearchHelper.linearSearch(products, 103);
        System.out.println(result1 != null ? result1 : "Product not found");
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        System.out.println("Binary Search Result:");
        Product result2 = SearchHelper.binarySearch(products, 103);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
