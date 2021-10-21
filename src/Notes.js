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
    
