BEGIN
  FOR loan_rec IN (
    SELECT C.CustomerName, L.LoanID, L.DueDate
    FROM Loans L
    JOIN Customers C ON L.CustomerID = C.CustomerID
    WHERE L.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || loan_rec.CustomerName ||
                         ', your loan (ID: ' || loan_rec.LoanID ||
                         ') is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY') || '.');
  END LOOP;
END;