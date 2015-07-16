##Day 1
<br>

| **Learning Objectives** |
| :---- |
| Understand the basics of HTTP and the Client/Server model |
| Distinguish between front-end and back-end development |
| Introduce development tools like Git, Sublime, and Chrome Developer Tools  |
| Learn and apply some basic HTML tags and CSS properties |
| Focus on terminology.  Be able to speak the developer's language |
| Establish a foundation for further research|

<br>


##HTTP and the Client/Server model
<hr>

Clients and Servers are *cooperating* programs within an application.  In this class our focus is on web servers, but there are other kinds (e.g. proxy server, FTP server).  The client of a web server is a web browser, which may be running on a desktop, laptop, or mobile device.

With a few exceptions, all interactions between clients and servers are initiated by the client, which requests some resource or service from the server.  The conversation between client and server is known as the **Request/Response Cycle**.  The **protocol** (language) used in this conversation is HTTP, or HyperText Transfer Protocol.  

####HTTP methods - GET, POST, PUT, DELETE
- Accomplish what is commonly known as CRUD - Create, Read, Update, Destroy
- Have a look with Chrome Dev Tools
   
####TCP/IP

This is a lower-level protocol that HTTP runs on top of. Think of the "IP address" of a computer on the internet.  Computer networking is divided into distinct "layers" of abstraction.  HTTP sits at the top on the Application layer and TCP/IP spans across several lower layers.  If you want to learn more, check out the [OSI model](https://en.wikipedia.org/wiki/OSI_model).

####So what are Resources and Services?  
######maybe just speak to this, not include it

- **Resource:** Documents, images, or collections of such.  Something that is identifiable
- **Service:** A means of communcation between two applications, commonly known as an API, or Application Programming Interface.

<br>

## Front-end Web Development
<hr>

The front-end developer is primarily concered with that part of a web application that exists in the client's browser, i.e. the front-end of the application.  A web page (or collection of pages) is pieced together with a set of files known as **assets**.  The assets work together to bring you the magic of a functioning web site.

- **HTML:** The structure of the page
- **CSS:** The styling of the page
- **Javascript:** The behavior of the page  
 
![alt text](https://github.com/rycwilson/FEWD-UXDI-2day/img/html_css_javascript.png "Components of a web site")


### Developer Tools

### The Request/Response cycle


Demo it in Chrome Dev Tools



<br>
	
- How does front-end development fit in?
	- What does a front-end developer do?
	- Difference between front-end and back-end?
	- Goals of FEWD
		- Accessability, usability, performance
	- What tools and technologies are used?
		- Technologies: HTML, CSS, Javascript 
		- Tools: Git, Sublime, Chrome Developer Tools
		- More: SASS
<br>

- Benefits of Designers knowing HTML and CSS, and maybe even JS
	- Add to existing website 
	- Work with Axure-generated HTML, CSS, and JS
<br>		
	
	
The Internet
-
- Let's give ourselves a backdrop
- TCP/IP, Domains (270 million!), Clients and Servers	
- HTTP - a Client/Server protocol, request *resources*
	- With some exceptions (e.g. web sockets), client always initializes interaction
		
HTML
-
- Elements, tags, attributes, commenting, common elements
- DOM structure
	- Node - Branch - Parent/Child elements
- 
- something else
- Axure to HTML



CSS
-

- Properties, Rules, Selectors, syntax
- Including with HTML, Sources
- "Cascading" -> Specificity
	- "Competing" might be more appropriate
	- With CSS coming from different sources, more than one stylesheet rule may apply to a given HTML element.  How does the page know which one to apply?  Answer: The one that is more *specific*
	- Different sources?
		- Author, user (if page style can be dynamically changed based on user input), CSS frameworks (e.g. Bootstrap), browser (may or may not be an *actual* stylesheet)
- Pseudo-classes
- Box Model
- External vs. internal vs. inline, priority, "Separation of Concerns"
- "Computed"?
- Layout: Display and Position properties
- What is "responsive" design?
- Power UP with SASS

_
<br>
Animation?
-