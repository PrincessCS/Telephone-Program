# Telephone-Package

### A telephone package using Javascript Observer Pattern

1. A telephone class is created with 3 public methods - AddPhoneNumber, RemovePhoneNumber, and DialPhoneNumber.
  
2. The telephone class is updated, so it uses the observer pattern (have methods to add, remove and notify observers)
  
3. A class for the observer is created and it includes a method that can be called by the telephone class to notify it.
  
4. The telephone class notify the observers any time a phone number is dialed.
  
5. Two observers are to the telephone class:

 * The first prints the phone number.
 * The second one prints `Now Dialling 2347023232.
