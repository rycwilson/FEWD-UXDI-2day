##Day 2

##Intro to Bootstrap

A few years back, some developers at Twitter created Bootstrap as a way to encourage UI consistency across Twitter's internal tools. Many other developers at Twitter started to contribute and Bootstrap was released to the world as an open-source poject in 2011.

Bootstrap is extremely popular and knowledge of at least one CSS framework is a very valuable skill to have. Bootstrap comes with a ton of features including:

- Reponsive Grid System
- CSS library for quick and easy styling
- UI components - HTML + CSS 
	- navigation
	- buttons
	- forms
	- etc.
- Javascript Plugins to make your page interactive

##What is Responsive Design?
They might already know


##Including Bootstrap with HTML
We need to include Bootstrap's CSS and Javascript libraries.  There are a few different ways to accomplish this, listed below.  In this class, we'll keep things easy and use the first approach.

NOTE  Bootstrap needs jQuery

1. CDN (Content Delivery Network - someone else hosts the library/framework and you access it via a URL)
2. Include the actual CSS and JS files - great for offline development
3. Bower - a package manager for front-end dependencies.  This is the approach a developer would likely take in order to create a robust, production application.

Demo - Show them the link to CDN available at Bootstrap's website

##Responsive Grid System

####Start with a container
To ensure all your Bootstrap styles behave properly, always put your content inside an element with a class "container" (usually `<div class="container">`). This will center your content and leave a small margin on the sides of the page. If you would like to use the full width of the screen (no margin) use `class="container-fluid"`

####Page layout using the Grid System
Bootstrap's grid system is based on the idea that a page layout for any given screen size is represented with 12 fluid **columns**.  Columns are almost always contained in **rows** ...

1. Create a row: 

	```
	 <div class="row"> ... </div>
	```
	
2. Inside your row, create a column for the targeted screen size: 
	- col-xs = < 768px
	- col-sm = < 992px
	- col-md = < 1200px
	- col-lg = > 1200px

Here's an example of a two-column layout that spans the width of the page.  Notice that the widths of the two columns add up to 12.  The column content of any row must always be less than or equal to 12.

```
 <div class="row">
   <div class="col-md-6">
     <p>I'm a medium-sized column</p>
    </div>
   <div class="col-md-6">
     <p>Me too!</p>
   </div>
 </div>
```

For other examples, check out the [Bootstrap docs](http://getbootstrap.com/css/#grid)  

You can also offset and nest your columns. When you offset a column, you add a column of whitespace and push the column to the right.  Example:

```
 <div class="row">
   <div class="col-md-3 col-md-offset-3">
     <p>This column occupies 1/4 of the page width and is moved to the right 
     by 1/4 of the page width</p>
   </div>
 </div>
```
Here is an example of nesting columns (putting one row inside another)

```
 <div class="row">
   <div class="col-md-6">
     Level 1: Column takes 1/2 the width of the page
     <div class="row">
       <div class="col-md-4">
         Level 2: This column takes 1/3 the width of its parent column
       </div>
       <div class="col-md-8">
         Level 2: This column takes 2/3 the width of its parent column
       </div>
     </div>
   </div>
 </div>
```

What would this actually look like?  Demo


####Typography
For a complete list: [Bootstrap Typography classes](http://getbootstrap.com/css/#type)

To align text, use these classes.  

```
 <p class="text-left">Left aligned text.</p>
 <p class="text-center">Center aligned text.</p>
 <p class="text-right">Right aligned text.</p>
 <p class="text-justify">Justified text.</p>
 <p class="text-nowrap">No wrap text.</p>
```
More useful typography classes...

```
 <p class="lead">This text will stand out in a paragraph</p>
```
```
 <small>This line of text is meant to be treated as fine print.</small>
```
```
 <p class="text-lowercase">Lowercased text.</p>
```
```
 <p class="text-uppercase">Uppercased text.</p>
```
```
 <p class="text-capitalize">Capitalized text.</p>
```


####Icons
Bootstrap comes with a set of icons that can be included in your page using the `<i></i>` tag. Check out these icons [here](http://getbootstrap.com/components/#glyphicons)

####Buttons
Bootstrap provides a wide selection of button sizes and colors.  Button classes can be applied not just to `<button>` elements, but also `<a>` and `<input>` elements

Sometimes you need to provide multiple classes to an element in order for Bootstrap to style it.  The button classes are an example of this:

```
 <!-- Standard button -->
 <button type="button" class="btn btn-default">Default</button>
 
 <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
 <button type="button" class="btn btn-primary">Primary</button>
 
 <!-- Contextual button for informational alert messages -->
 <button type="button" class="btn btn-info">Info</button>

 <!-- Indicates caution should be taken with this action -->
 <button type="button" class="btn btn-warning">Warning</button>
```  
... and so on.  See the [docs](http://getbootstrap.com/css/#buttons) for a comprehensive list of options.  Note you can add a third class denoting size to any of the above: `.btn-lg`, `.btn-sm`, `.btn-xs`

**Aside:** Why are we using type="button"?  Discuss

####Images 
Bootstrap helps you format images using classes like `.img-rounded` (rounds the corners), `img-circle` (makes the image a circle) and `.img-thumbnail` (adds a border). You can also add a class of `.img-responsive` to your image to make it scale well when the screen size changes (this sets its max-width to 100% of its parent element and the height to auto for maintaining aspect)

####Forms
Bootstrap is also very helpful when you need to style your forms. All textual `<input>`, `<textarea>`, and `<select>` elements with `.form-control` are set to width: 100% by default. Wrap labels and controls in `.form-group` for optimum spacing. You can create horizontal and inline forms and style each of your inputs and validations as well. Read more about form styling here

**Aside:** Form "controls"?  

####Javascript plug-ins
Bootstrap allows you to incorporate interactive behavior into your page with Javascript plug-ins.  While you would ultimately have to write some JS in order for these components to provide actual functionality within the application, you don't have to write JS if you're simply mocking up a UI.

Some examples:

- [Responsive Nav bars](http://getbootstrap.com/components/#navbar)
- [Dropdowns](http://getbootstrap.com/javascript/#dropdowns)
- [Popovers](http://getbootstrap.com/javascript/#popovers)
- [Modals](http://getbootstrap.com/javascript/#modals)
- [Carousels](http://getbootstrap.com/javascript/#carousel)

Always make sure you understand what the code is doing before copying and pasting it. Fortunately, this is not too challenging and Bootstrap has excellent documentation. As always, if you're confused or things are breaking - google around. Bootstrap is pretty much ubiquitous and it is likely that others have encountered and (hopefully) solved the issues you're dealing with.

##Bootstrap Lab
To put your new skills to practice, use Bootstrap to craft three different mock-ups.  Each one will be more challenging than the last!

Find the mock-ups in bootstrap/

-
-
-







