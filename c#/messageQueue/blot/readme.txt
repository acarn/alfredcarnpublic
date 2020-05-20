The basic idea of Blot is to help the programmer create their own library, in which there is a server component and a client component.


The server component is an application which would contain an object model of stub classes. This server component encompasses all the processing and memory usage that implements the library.


The client component is a class library which would contain an object model of proxy classes. These are minimal classes that forward method calls to their server-side counterparts, which themselves contain little processing or memory usage.


Client-server RPC communication uses Message Queueing.


An application would link to the client-side class library library to access the object model.

