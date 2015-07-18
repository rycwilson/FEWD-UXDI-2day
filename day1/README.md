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


The front-end developer's job is to program the layout and functionality of a website. This is accomplished by writing code in HTML, CSS, and Javascript.  In developer lingo, the collection of HTML, CSS, and Javascript files that bring a page to life are called **assets**


- **HTML** describes the structure and the semantic content of a web document. It is the scaffold that adds various layout elements to your website.
- **CSS** is a set of style properties that give your page its look and feel
- **JavaScript** adds interactivity to the page.  When the user clicks a button, or submits a form, or there is some other kind of **event**, Javascript knows what to do.

### Assets and the Request/Response cycle


Demo it in Chrome Dev Tools

<br>

## Back-end Web Development
<hr>
- Provides core behind-the-scenes functionality
	- Manage user accounts
	- Database operations - CRUD (Create, Read, Update, Destroy)
	- Reliability 
	- Security 
	- Tends to me a more complex undertaking than front-end development
- Languages
	- Ruby
	- Python
	- PHP
	- C++
	


## Developer Tools
<hr>

- Text Editor 
- Chrome Developer Tools
 	- Inspect HTML elements and CSS styly properties
	- Debug Javascript
	- Program "what-if" scenarios
	- Examine network activity
- Git
	- Version control
	- Collaberation
- CSS Frameworks
	- Bootstrap
	- Foundation	
- Javascript Libraries
	- jQuery
	- Underscore
	


## What is the benefit of UX Designers understanding FEWD?

- Communicate with your development partner 
- Add to existing website 
- Work with Axure-generated HTML, CSS, and JS
	
<br>		
	
	

##HTML
<hr>

**Elements** are the basic HTML building blocks of a web page.  

**Attributes** modify an element in some way 

**Tags** define the element and any attributes it has

<br>

![alt text](https://github.com/rycwilson/FEWD-UXDI-2day/blob/master/img/html_element.png?raw=true)

<br>

- Most elements have attributes that provide additional meaning or behavior

![alt text](https://github.com/rycwilson/FEWD-UXDI-2day/blob/master/img/element_attribute.png?raw=true)]


<br>

##Common  HTML Elements
<hr>

####Required elements - \<html>, \<head>, \<body>
- **\<html>** encompasses everything in the document, tells the browser it's reading an HTML document
- **\<head>** is a section for data about the document.  Tags here aren't displayed on the page
- **\<body>** is the content of the page that will be displayed in the browser
- **<!DOCTYPE html>** identifies the doc as HTML5
- **\<title>** creates a title to be displayed in the browser tab

```
<!DOCTYPE html>
<html>
<head>
  <title>Document</title>
</head>
<body>
  <!-- Contents of the page go here -->
</body>
</html>
```


####\<div>
- A generic container that helps organize content on the page. 
- An arbitrary number of other elements can be nested inside of a \<div>, including other \<div> elements

```
<div>
  contents
</div>
```

####\<input>

####\<form>

####\<p>

####\<button>
####\<ul>

####\<img>

####Including CSS with HTML
```
<link rel="stylesheet" href="/path/to/main.css">
```

####Linking Javascript with HTML



- show some common elements
- 
- show how an attribute can ch
- Syntax
	- Elements, tags, attributes
	- Commenting and indenting
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