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

Clients and Servers are *cooperating* programs within an application.  In this class our focus is on web servers, but there are other kinds (e.g. email server, proxy server).  The client of a web server is a web browser, which may be running on a desktop, laptop, or mobile device.

With a few exceptions, all interactions between clients and servers are initiated by the client, which requests some resource or service from the server.  The conversation between client and server is known as the **Request/Response Cycle**.  The **protocol** (language) used in this conversation is HTTP, or HyperText Transfer Protocol.

###HTTP methods 

- **GET** - Retrieve data from the server
- **POST** - Send new data to the server
- **PUT** - Modify data that exists on the server
- **DELETE** - Delete data from the server
- These accomplish what is commonly known as **CRUD** - Create, Read, Update, Destroy
- Let's have a look with Chrome Dev Tools

[Further reading](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

###TCP/IP 

This is a lower-level protocol that HTTP runs on top of. Think of the "IP address" of a computer on the internet.  Computer networking is divided into distinct "layers" of abstraction.  HTTP sits at the top on the Application layer and TCP/IP spans across several lower layers.  If you want to learn more, check out the [OSI model](https://en.wikipedia.org/wiki/OSI_model).

###So what are Resources and Services?

- **Resource:** Documents, images, or collections of such.  Something that is identifiable.  Think of a URL - Uniform **Resource** Locator
- **Service:** A means of communcation between two applications, commonly known as an **API**, or Application Programming Interface.

<br>

##Front-end Web Development
The front-end developer's job is to program the layout and functionality of a website, i.e. what the user interacts with. This is accomplished by writing code in HTML, CSS, and Javascript.  In developer lingo, the collection of HTML, CSS, and Javascript files that bring a web page to life are called **assets**


- **HTML** describes the structure and the semantic content of a web document. It is the scaffold that adds various layout elements to your website.
- **CSS** is a set of style properties that give your page its look and feel
- **JavaScript** adds interactivity to the page.  When the user clicks a button, or submits a form, or there is some other kind of **event**, Javascript knows what to do.

###Assets and the Request/Response cycle
Demo - Chrome Dev Tools

<br>

##Back-end Web Development

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

<br>


## Developer Tools

###Sublime text editor
- productivity tools
	- linter: checks your syntax in real-time
	- auto code completion
	- snippets
- learn keyboard shortcuts as much as possible!

###Chrome Developer Tools	
- Inspect HTML elements and CSS style properties
- Debug Javascript
- Program "what-if" scenarios
- Examine network activity

###Git
- Version control
- Collaberation
- projects reside in repositories, or "repos"

###Frameworks
"Framework" is a generic term that describes a piece of software that is used to help developers build other software.  There are frameworks for both front-end and back-end development.  Some front-end frameworks:

- Bootstrap CSS
- Angular Javascript

###Javascript Libraries
Pre-canned functionality to boost a developer's productivity.  "Don't reinvent the wheel."

- jQuery
- Underscore

<br>

##HTML

**Elements** are the basic HTML building blocks of a web page.

**Attributes** modify an element in some way

**Tags** define the element and any attributes it has

<br>

![alt text](https://github.com/rycwilson/FEWD-UXDI-2day/blob/master/img/html_element.png?raw=true)

<br>

- Most elements have attributes that provide additional meaning or behavior

![alt text](https://github.com/rycwilson/FEWD-UXDI-2day/blob/master/img/element_attribute.png?raw=true)


<br>

##Common  HTML Elements
For a comprehensive list: [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)


###Required elements - \<html>, \<head>, \<body>
- `<!DOCTYPE html>` identifies the doc as HTML5
- `<html>` encompasses everything in the document, tells the browser to interpret the document as html
- `<head>` is a section for data about the document, or inclusion of other files (CSS, Javascript).  Tags here aren't displayed in the browser
- `<body>` is the content of the page that will be displayed in the browser
- `<title>` creates a title to be displayed in the browser tab

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

###\<div>
- Generic container that helps organize content on the page
- An arbitrary number of other elements can be nested inside of a `<div>`, including other `<div>` elements

```
 <div class='row'>
   <div class='column'>
     <!-- column 1 content here -->
   </div
   <div class='column'>
     <!-- column 2 content here -->
   </div
 </div>
```

###\<span>
- Generic container like a `<div>`, however `<span>` is for **inline** elements while `<div>` is for **block** elements
- usually used to single out some snippet of text for styling

```
 <p>This topic is <span class='important'>very important!</span></p>
```

###\<a>
- Anchor link: clickable link to any web page or to any element in the same page

```
 <!-- link to some external site -->
 <a href="http://google.com">Google</a>
```
```
 <!-- link to an anchor on the same page -->
 <a href="#target">Go to Section 3</a>
 ...
 <a id="target">Section 3</a>
```

###\<input>
- Interactive controls	for accepting user input.  There are several different types...
- The `type` attribute allows for different forms of user input (e.g. text, checkbox, radio button, date)
- Self-closing element, i.e. no closing tag is required

```
<label for="name">Name: </label>
<input type="text" id="name">
```
... will display this:

<label for="name">Name: </label>
<input type="text" id="name">

<br>

###\<form>
- Forms are one of the most common ways to send user input to a server
- Inputs contained within the form get sent to the server on **submit** event 
	- What triggers a submit?  usually `<input type="submit">` is clicked.  
- The inputs of a form are collectively referred to as **form controls**
- Two essential attributes...
	- `action` - this specifies where the data will be sent when it's submitted, or its **route**.  The server-side code will be set up to handle routes. If no action is specified, default will be the current page. 
	- `method` - this specifies the HTTP method used to handle the submit request. If none is specified, default is POST 
		- GET = retrieve data from the server (think of a Google Search)
		- POST = provide data to the server (think of filling out a user profile)
		- also PUT (update) and DELETE, but those get trickier
- Let's look at an example...

<br>


###\<h1> .. \<h6> - heading elements
```
 <h1>Largest Heading</h1>
 ...
 <h6>Smallest Heading</h6>
```

###\<p>
```
 <p>I'm a paragraph!</p>
```


###\<button>

```
<button type="submit">Click here!</button>
```


###\<ul>
- unordered list
- also `<ol>` for ordered lists

```
 <ul>My to-do list
   <li>item 1</li>
   <li>item 2</li>
   <li>item 3</li>
 </ul>
```


###\<img>
- display an image
- must specify the `src` attribute
- self-closing element (no closing tag needed)

```
<img src="/path/to/my_image.jpg">
```



###Including CSS with HTML
- including CSS from an external file:

```
<link rel="stylesheet" href="/path/to/main.css">
```

- including CSS internally:

```
 <head>
   <style>
     <!-- style rules here -->
   </style>
 </head
```

###Including Javascript with HTML
- put your javascript code between `<script>` tags, or...
- use the `src` attribute to specify an external file containing the javascript

```
 <script src="/path/to/app.js"></script>
```
<br>

##Cookie Recipe Lab

1. Open `day1/cookie_recipe_lab/cookie_recipe.html` in your Sublime Editor
2. Right-click the open file in Sublime and select `Open in Browser`
	- oops, needs some work
3. Let's use some of the tags we just learned about to make our recipe page more presentable
4. Reference [the docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference) as necessary
5. Bonus challenge
	- turn round bullet points into square bullet points

<br>

##HTML Form Lab

1. Open `html_form/index.html`
2. For each comment denoted by \<!-- --> replace the comment text with the correct HTML as per the instruction to create the form
3. Link to an external Google stylesheet in order to import a font-family.  Then change the font-family property in your CSS file to see the changes.
4. Use the autofocus attribute to place focus on the first input field when the page loads
4. Bonus: Use CSS to change the background color of the page. Experiment with using images as backgrounds as well.
5. Double Bonus: Review the CSS transition property documentation and try to create a small animation anywhere on the form. An example may be to highlight a border around a form field when it is clicked.

<br>


##DOM structure
"DOM" stand for Document Object Model - the developer's fancy term for the page

The DOM is structured like a tree

- Branches/Nodes
- Parent/Child relationships
- Demo Mozilla 3D viewer

<br>




##CSS - Cascading Style Sheets

###Including with HTML
There are several different ways to incorporate CSS rules into your HTML file.  It is best practice to include them from an external `.css` file (first option below), so that will be our focus.

- External `.css` file
	- Include a `<link>` to the CSS file in your `<head>` tag


```
<link rel="stylesheet" href="path/to/main.css">
```

- Internal `<style>` tag
	- Rules go in the `<style>` tag, which goes in the `<head>` tag
	- The rules will only apply to this page

```
<head>
  <title>My Page</title>
  <style>
    <!-- CSS rules go here -->
  </style>
</head>
```

- Inline
	- Style settings can be applied directly to an element through the `style` attribute
	- Separate settings by a semicolon, include as many as you like
	- This approach should be used sparingly

```
 <div style="background-color:blue; font-size:12">
   <!-- content here will have a blue background and a font size of 12 -->
 </div>
```
<br>

###What is a stylesheet?
A stylesheet consists of a collection of style **rules**.  Each rule contains an arbitrary number of **declarations** (or property settings) and is targeted at elements in the page that are matched by the rule **selector(s)**.

<br>

![alt text](https://github.com/rycwilson/FEWD-UXDI-2day/blob/master/img/css_syntax.png?raw=true)

Demo - Back to HTML Form exercise

###"Cascading"
CSS rules can come from a number of different sources.  Like:

- Browser default settings (user-agent stylesheet)
- Developer settings (`.css` files linked to the HTML)
	- CSS frameworks (e.g. Bootstrap)
	- developer's own `.css` file(s)
- User settings
	- user can change the browser defaults

With all these sources, it is inevitable that settings will overlap and conflict with one another.  For two or more settings that apply to the same element, the browser has to decide which setting to apply.  This is the meaning of "cascading."

So how does the browser decide? ...  

###Selectors and Specificity
In order to create a CSS rule, we first have to select the element(s) it applies to.  There are A LOT of different ways to do this, some more **specific** than others.  This is the solution to the "cascading" problem.  The browser will examine all the rules that apply to a given element and **compute** which one is most specific.  In the event that two rules are equi-specific, the LAST one that was loaded into the browser will win.

Here are the most common selectors in *decreasing* order of specificity

**ID** - Select the element with `id="my_element"`  

- Obviously, you'll want to avoid giving two elements the same ID.

```
 #my_element {
   border: 1px solid black
   ...
 }
```

**Class** - Select all elements with `class="my_class"`

```
.my_class {
 background-color: green;
 ...
}
```

**Type** - Select all `<p>` elements

```
p {
 font-family: Verdana;
 ...
}
```

**Universal** - Select everything!  You don't really want to use this, except perhaps for testing

```
* {
  ...
}
```
 
So, in order of specificity, we have:

**Most specific**

1. `!important` You can append this to any property setting and it will override all other settings, regardless of specificity.  Use this very rarely!  Like dropping a bomb on your stylesheets.
2. Inline styling - This is when you use the `style` attribute to style an element.  This approach should be used infrequently, as you want to separate CSS from HTML as much as possible.
3. ID - Also use infrequently.  Lots of IDs pollute your CSS.
4. Classes - Best practice!  The most common way of styling.
5. Type - Use for broad styling like font-size, padding, margin.

**Least specific**


###Selectors Exercise - Bento Box I (15 mins)
Partner up and work though levels 1-14

[Have fun!](http://flukeout.github.io)

<br>

###Pseudo-classes
A pseudo-class is a keyword that you append to a selector in order to specify not just which element(s) to target, but also the **state** of the element.  The state of the element can refer to:

- its relative location in the document tree, e.g. (`:first-child`)
- a user's actions, e.g. hovering over an element (`:hover`) or page navigation (`:visited`)    
- the content of the element, e.g. `:checked` for some input elements

Examples:

**:focus** - Select element(s) that have received focus

```
button:focus {
  border-color: red;
}
```

**:nth-child(n)** - Select element(s) that are the n'th children of their parent elements

```
<head>
  <style>
    <!-- this will select the milk -->
    li:nth-child(3) {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h2>Grocery list:</h2>
  <ul>
    <li>bread</li>
    <li>eggs</li>
    <li>milk</li>
    <li>broccoli</li
  </ul>
</body>
```

###Selectors Exercise - Bento Box II (20 mins)
Partner up and work though levels 15-26

[Have fun!](http://flukeout.github.io)

<br>

[Learn more about selectors](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

[Learn more about specificity](https://css-tricks.com/specifics-on-css-specificity/)

<br>



## CSS Properties
For a comprehensive list: [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

###The Box Model
Each HTML element in a web page is represented as a rectangular box. The box model describes the content of the space taken by an element. There are four essential edges in the model: margin, border, padding, and content.  The margin, border, and padding properties exist for ALL elements.  So let's start with those...

![alt text](https://github.com/rycwilson/FEWD-UXDI-2day/blob/master/img/box_model.png?raw=true)

###CSS Properties of the Box Model
- `margin`

```
 <!-- in order: top, right, bottom, left -->
 margin: 10px 5px 10px 5px;

 <!-- individual -->
 margin-top: 10px;
```
- `border`

```
 <!-- width, type, color -->
 border: 1px solid black

 <!-- individual -->
 border-top: 1px solid black;
```

- `padding` - similar to margin


####Other common CSS properties

- width
- height
- border* (lots)
- font* (lots)
- color (text color)
- background-color
- background-image
- text-align
- opacity 


###Display property
The `display` property defines whether an element occupies the entire width of the page (`display: block`), or can share space horizontally with other elements (`display: inline`). Different elements have different default values for `display`, all of which can be changed. For example, a `<span>` is by default an inline element while a `<div>` is a block element. 

Inline elements only occupy the space between their tags.  These three `<span>` elements will occupy the same line on the page:

```
<span> ... </span> <span> ... </span> <span> ... </span>
```
Some other inline elements are `<img>`, `<button>`, and `<input>`

<br>

Block-level elements like `<div>`s, `<p>`s, and `<h*>`s (headlines) take up the entire width of the page.  Successive block-level elements will end up stacking on top of each other, like so:

```
<div1></div1> 
<div2></div2> 
<div3></div3>
```

Properties like `width` and `height` can not be applied to `inline` elements. You can change this behavior (or, conversely, you can make a `block` element share horizontal space) by setting `display: inline-block`.  

###Position property

When you want to move elements around the page or set their position relative to a parent element or fixed within the browser window, you use the `position` property. An element's position can either be
 
- `static` (default, element falls into normal layout flow)
- `relative` 
- `absolute`
- `fixed`. 

Once the `position` property is applied to an element, that element has access to `top`, `left`, `right` and `bottom` properties which will move the element around. Absolutely positioned elements are in placed in relation to their parent container (if there is none, it is in relation to the browser window). Fixed positioning will fix the element to the page and ensure that it never moves.

The differences can be subtle and a bit tricky to comprehend, so I encourage you to [Read the docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position) and experiment.

Note: To center your text you can use `text-align:center` and to center block elements you can set `margin: 0 auto`


