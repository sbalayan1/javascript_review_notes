What is JavaScript? 

    // -> lightweight, interpreted, or just-in-time complied programming language with first-class functions. 
    
    // -> is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (eg. functional programming) styles. 

What is just-in-time or JIT? 
    // - aka dynamic translation or run-time compilation 

    // - is a way of executing computer code that involves compilation during execution of a program (at run time) rather than before execution.
    
    // - This may consist of source code translation but is more commonly bytecode translation to machine code, which is then executed directly.

    // -  A system implementing a JIT compiler typically continuously analyses the code being executed and identifies parts of the code where the speedup gained from compilation or recompilation would outweigh the overhead of compiling that code.

    // - JIT compilation is a combination of the two traditional approaches to translation to machine code—ahead-of-time compilation (AOT), and interpretation—and combines some advantages and drawbacks of both.[2] 
    
    // - Roughly, JIT compilation combines the speed of compiled code with the flexibility of interpretation, with the overhead of an interpreter and the additional overhead of compiling and linking (not just interpreting). 
    
    // - JIT compilation is a form of dynamic compilation, and allows adaptive optimization such as dynamic recompilation and microarchitecture-specific speedups.

What is compilation or a compiler?

    // In computing, a compiler is a computer program that translates computer code written in one programming language (the source language) into another language (the target language). The name "compiler" is primarily used for programs that translate source code from a high-level programming language to a lower level language (e.g. assembly language, object code, or machine code) to create an executable program.

What is recompilation? 

    //  dynamic recompilation is a feature of some emulators and virtual machines, where the system may recompile some part of a program during execution. By compiling during execution, the system can tailor the generated code to reflect the program's run-time environment, and potentially produce more efficient code by exploiting information that is not available to a traditional static compiler.

    // Most dynamic recompilers are used to convert machine code between architectures at runtime. This is a task often needed in the emulation of legacy gaming platforms. In other cases, a system may employ dynamic recompilation as part of an adaptive optimization strategy to execute a portable program representation such as Java or .NET Common Language Runtime bytecodes. 

What is an interpreter? 
    // The interpreter is similar to a compiler, as it is a translator used to convert high-level programming language to low-level programming language. The difference is that it converts the program one line of code at a time and reports errors when detected, while also doing the conversion. An interpreter is faster than a compiler as it immediately executes the code upon reading the code. It is often used as a debugging tool for software development as it can execute a single line of code at a time. An interpreter is also more portable than a compiler as it is processor-independent, you can work between different hardware architectures.

What is an assembler? 
    // An assembler is a translator used to translate assembly language into machine language. It has the same function as a compiler for the assembly language but works like an interpreter. Assembly language is difficult to understand as it is a low-level programming language. An assembler translates a low-level language, such as an assembly language to an even lower-level language, such as the machine code.

What is run-time? 

Bytecode vs Machine Code 
    // need to watch videos on bytecode and machine code 

What are first-class functions? 
    // A programming language is said to have First-class functions when functions in that language are treated like any other variable.

    // ex. first-class functions can be returned by another function, assigned as a value to a variable, and can be passed as an argument to other functions

What are higher-order functions?
    // functions that returns a function

    // you are able to do this because you treat the returned function as a value

    // Invoking higher order functions 

    1. Using a variable 
        // -> You have to use another variable. If you invoked sayHello directly, it would return the function itself without invoking its returned function.

            const sayHello = function() {
                return function() {
                console.log("Hello!");
                }
            }
            const myFunc = sayHello();
            myFunc();
            // Hello!

    2. Using double parentheses. 
        // We are using double parentheses ()() to invoke the returned function as well.
            
        function sayHello() {
            return function() {
               console.log("Hello!");
            }
         }
         sayHello()();
         // Hello!
        
What is proto-typed based? 

What are object-oriented, imperative, and declarative styles? 

What is an object? 
    // An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.)

    example of an Object Literal aka an object whose contents are written out vs. from instantiated classes

    const cat = {
        name: 'arthur',
        age: 3, 
        gender: 'male'
    }

What is this? -> refering to the 'this' keyword

    A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

    In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

    Global Context

        -> In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

    Function Context

        -> Inside a function, the value of this depends on how the function is called.

        Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser 

        -> In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined. 

        To set the value of this to a particular value when calling a function, use call(), or apply(). 

    Class Context 

        -> The behavior of this in classes and functions is similar, since classes are functions under the hood. But there are some differences and caveats.

        Within a class constructor, this is a regular object. All non-static methods within the class are added to the prototype of this.  Static methods are not properties of this. They are properties of the class itself.


        -> Unlike base class constructors, derived constructors have no initial this binding. Calling  super() creates a this binding within the constructor and essentially has the effect of evaluating the following line of code, where Base is the inherited class:

            this = new Base();
        
        Derived classes must not return before calling super(), unless they return an Object or have no constructor at all.

What is the constructor method? 


What does charCodeAt do? 