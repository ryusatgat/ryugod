//
// array.ss
// Arrays in SurgeScript
// Copyright 2017 Alexandre Martins <alemartf(at)gmail(dot)com>
//

// The following program will print all the elements of the array
// using different pieces of code
object "Application"
{
    array = [1, 2, 3, 4, 5];
    
    state "main"
    {
        Console.print("The array has " + array.length + " elements.");

        // Loop with for
        for(i = 0; i < array.length; i++)
            Console.print(array[i]);

        // Loop with foreach
        foreach(element in array)
            Console.print(element);

        // Loop with iterators
        it = array.iterator();
        while(it.hasNext()) {
            element = it.next();
            Console.print(element);
        }

        Application.exit();
    }
}