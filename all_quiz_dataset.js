const questions_java_script =[
    {
        question:"What does DOM stand for in JavaScript?",
        answers:[
            {text:"(a)Document Object Model",correct:true},
            {text:"(b)Document Order Model",correct:false},
            {text:"(c)Document Object Manipulation",correct:false},
            {text:"(d)Document Objective Model",correct:false},
        ]
    },
    {
        question:"Which keyword is used to declare variables in JavaScript?",
        answers:[
            {text:"a) var",correct:false},
            {text:"b) let",correct:false},
            {text:"c) const ",correct:false},
            {text:"d) All of the above ",correct:true},
        ]
    },
    {
        question:"What will be the result of typeof null in JavaScript?",
        answers:[
            {text:"a) 'object'",correct:true},
            {text:"b) 'null'",correct:false},
            {text:"c) undefined",correct:false},
            {text:"d) string",correct:false},
        ]
    },    {
        question:"How do you add a comment in JavaScript?",
        answers:[
            {text:"a) b and c",correct:true},
            {text:"b) /* This is a comment */",correct:false},
            {text:"c) // This is a comment",correct:false},
            {text:"d) ' This is a comment '",correct:false},
        ]
    },    {
        question:"Which method is used to add a new element to the end of an array?",
        answers:[
            {text:"a) push()",correct:true},
            {text:"b) pop()",correct:false},
            {text:"c) shift()",correct:false},
            {text:"d) unshift()",correct:false},
        ]
    },    {
        question:"What is the output of console.log(3 + 2 + '7') in JavaScript?",
        answers:[
            {text:"a) 57",correct:false},
            {text:"b) 12",correct:false},
            {text:"c) '57'",correct:true},
            {text:"d) 7",correct:false},
        ]
    },    {
        question:"What will be the output of console.log(0 == '0') in JavaScript?",
        answers:[
            {text:"a) true",correct:true},
            {text:"b) false",correct:false},
            {text:"c) null",correct:false},
            {text:"d) undefined",correct:false},
        ]
    },    {
        question:"Which of the following is a correct way to check if a variable is undefined in JavaScript?",
        answers:[
            {text:"a) if (variable == undefined)",correct:false},
            {text:"b) if (variable === undefined)",correct:false},
            {text:"c) if (typeof variable === 'undefined')",correct:true},
            {text:"d) All of the above",correct:false},
        ]
    },    {
        question:"What is the purpose of the setTimeout() function in JavaScript?",
        answers:[
            {text:"a) To execute a function after a specified number of milliseconds",correct:true},
            {text:"b) To repeat a function at regular intervals",correct:false},
            {text:"c) To delay the execution of a function indefinitely",correct:false},
            {text:"d) To stop the execution of a function",correct:false},
        ]
    },    {
        question:"What does the this keyword refer to in JavaScript?",
        answers:[
            {text:"a) It refers to the current function being executed.",correct:false},
            {text:"b) It refers to the global object.",correct:false},
            {text:"c) It refers to the object that owns the current code.",correct:true},
            {text:"d) It refers to the parent object of the current object.",correct:false},
        ]
    },    {
        question:"Which method is used to remove the last element from an array in JavaScript?",
        answers:[
            {text:"a) pop() ",correct:true},
            {text:"b) push()",correct:false},
            {text:"c) shift()",correct:false},
            {text:"d) unshift()",correct:false},
        ]
    },    {
        question:"What will be the output of console.log(1 + '1') in JavaScript?",
        answers:[
            {text:"a) 2",correct:false},
            {text:"b) 11",correct:true},
            {text:'c) "2"',correct:false},
            {text:'"d) 11"',correct:false},
        ]
    },    {
        question:"What does JSON stand for in JavaScript?",
        answers:[
            {text:"a) JavaScript Oriented Notation",correct:false},
            {text:"b) JavaScript Object Notation ",correct:true},
            {text:"c) JavaScript Ordered Notation",correct:false},
            {text:"d) JavaScript Overhead Notation",correct:false},
        ]
    },    {
        question:"Which operator is used to concatenate strings in JavaScript?",
        answers:[
            {text:"a) +",correct:false},
            {text:"b) ++",correct:false},
            {text:"c) & ",correct:true},
            {text:"d) -",correct:false},
        ]
    },
    {
        question:"What is the output of console.log(typeof []) in JavaScript?",
        answers:[
            {text:"a) array",correct:false},
            {text:"b) object",correct:true},
            {text:"c) array",correct:false},
            {text:"d) undefined",correct:false},
        ]
    },
    {
        question:"What is the purpose of the map() function in JavaScript?",
        answers:[
            {text:"a) To iterate over an array and perform an operation on each element.",correct:true},
            {text:"b) To filter elements of an array based on a condition.",correct:false},
            {text:"c) To reduce an array to a single value.",correct:false},
            {text:"d) To sort elements of an array.",correct:false},
        ]
    },
    {
        question:"Which of the following is a correct way to declare a JavaScript function?",
        answers:[
            {text:"a) function myFunction() {} ",correct:true},
            {text:"b) var myFunction = function() {}",correct:false},
            {text:"c) const myFunction = () => {}",correct:false},
            {text:"d) All of the above",correct:false},
        ]
    },
    {
        question:"What will be the result of console.log(typeof NaN) in JavaScript?",
        answers:[
            {text:"a) number",correct:true},
            {text:"b) NaN",correct:false},
            {text:"c) undefined",correct:false},
            {text:"d) string",correct:false},
        ]
    },
    {
        question:"Which method is used to convert a string to lowercase in JavaScript?",
        answers:[
            {text:"a) toLowerCase() ",correct:true},
            {text:"b) toLower()",correct:false},
            {text:"c) lowerCase()",correct:false},
            {text:"d) convertLowerCase()",correct:false},
        ]
    },
    {
        question:"What is the output of console.log(0.1 + 0.2 === 0.3) in JavaScript?",
        answers:[
            {text:"a) true",correct:false},
            {text:"b) false",correct:true},
            {text:"c) undefined",correct:false},
            {text:"d) null",correct:false},
        ]
    },
    {
        question:"What does the bind() method do in JavaScript?",
        answers:[
            {text:"a) It creates a new array with the results of calling a provided function on every element in the array.",correct:false},
            {text:"b) It attaches an event handler function to an HTML element.",correct:false},
            {text:"c) It creates a new function that, when called, has its this keyword set to the provided value. ",correct:true},
            {text:"d) It removes the last element from an array and returns it.",correct:false},
        ]
    },
    {
        question:"What will be the output of console.log(+'2' + 3) in JavaScript?",
        answers:[
            {text:"a) 5",correct:false},
            {text:"b) 23",correct:true},
            {text:"c) '23'",correct:false},
            {text:"d) 2",correct:false},
        ]
    },
    {
        question:"What is the output of console.log(typeof null) in JavaScript?",
        answers:[
            {text:"a) null",correct:false},
            {text:"b) undefined",correct:false},
            {text:"c) object",correct:true},
            {text:"d) number",correct:false},
        ]
    },
    {
        question:"Which operator is used to access properties of an object in JavaScript?",
        answers:[
            {text:"a) .",correct:false},
            {text:"b) :",correct:false},
            {text:"c) ->",correct:false},
            {text:"d) . ",correct:true},
        ]
    },
    {
        question:"What is the purpose of the reduce() function in JavaScript?",
        answers:[
            {text:"a) To iterate over an array and perform an operation on each element.",correct:false},
            {text:"b) To filter elements of an array based on a condition.",correct:false},
            {text:"c) To reduce an array to a single value. ",correct:true},
            {text:"d) To sort elements of an array.",correct:false},
        ]
    },

];




const questions_Htlm_quiz=[
    {
        question:"What does HTML stand for?",
        answers:[
            {text:"(a)Hyper Text Markup Language",correct:true},
            {text:"(b)High Text Markup Language",correct:false},
            {text:"(c)Hyperlink and Text Markup Language",correct:false},
            {text:"(d)Hyper Transfer Markup Language",correct:false},
        ]
    },
    {
        question:"What is the file extension for an HTML file?",
        answers:[
            {text:"(a) .html",correct:true},
            {text:"(b).htm",correct:false},
            {text:"(c).xml",correct:false},
            {text:"(d).web",correct:false},
        ]
    },
    {
        question:"Which tag is used to define a paragraph in HTML?",
        answers:[
            {text:"(a) p ",correct:true},
            {text:'(b)link',correct:false},
            {text:'(c)href',correct:false},
            {text:'(d)hyperlink',correct:false},
        ]
    },
    {
        question:"What is the purpose of the <img> tag?",
        answers:[
            {text:"(a)To define a hyperlink",correct:false},
            {text:"(b)To create a list",correct:false},
            {text:"(c)To define an image",correct:true},
            {text:"(d)To create a table",correct:false},
        ]
    }, 
    {
        question:"How do you create a line break in HTML?",
        answers:[
            {text:"(a)<break>",correct:false},
            {text:"(b)<lb>",correct:false},
            {text:"(c)<line>",correct:false},
            {text:"(c)<br>",correct:true},
        ]
    }, 
    {
        question:"What is the purpose of the <head> tag in HTML?",
        answers:[
            {text:"(a)To define a header for a document",correct:false},
            {text:"(b) To define the main content of the document",correct:false},
            {text:"(c)To define a section in the document",correct:false},
            {text:"(c) To define metadata for the document",correct:true},
        ]
    }, 
    {
        question:"How do you create a bullet point list in HTML?",
        answers:[
            {text:"(a)<ul>",correct:true},
            {text:"(b)<list>",correct:false},
            {text:"(c)<bullet>",correct:false},
            {text:"(d) <ol>",correct:false},
        ]
    },
    {
        question:"What is the purpose of the <table> tag in HTML?",
        answers:[
            {text:"(a)To define a list",correct:false},
            {text:"(b) To define a form",correct:false},
            {text:"(c)To define a table",correct:true},
            {text:"(d)To define an image",correct:false},
        ]
    }, 
    {
        question:"How do you create a comment in HTML?",
        answers:[
            {text:"(a)// This is a comment",correct:false},
            {text:"(b) /* This is a comment */",correct:false},
            {text:"(c)# This is a comment",correct:false},
            {text:"(c) <!-- This is a comment -->",correct:true},
        ]
    }, 
    {
        question:"Which tag is used to define an ordered list in HTML?",
        answers:[
            {text:"(a)<ol>",correct:true},
            {text:"(b)<ordered>",correct:false},
            {text:"(c)<list>",correct:false},
            {text:"(d) <ul>",correct:false},
        ]
    },
    
    {
        question:"What is the purpose of the <div> tag in HTML?",
        answers:[
            {text:"(a)To define a list",correct:false},
            {text:"(b) To create a hyperlink",correct:false},
            {text:"(c)To define a division or section in an HTML documen",correct:true},
            {text:"(d)To define an image",correct:false},
        ]
    },  
     {
        question:"How do you embed an image from an external source in HTML?",
        answers:[
            {text:"(a)<img link='image.jpg'>",correct:false},
            {text:"(b) <img src='image.jpg'>",correct:true},
            {text:"(c)<img href='image.jpg'>",correct:false},
            {text:"(c)<img url='image.jpg'>",correct:false},
        ]
    }, 
     
    {
        question:"What is the purpose of the alt attribute in the <img> tag?",
        answers:[
            {text:"(a)To specify the size of the image",correct:false},
            {text:"(b) To define the alignment of the image",correct:false},
            {text:"(c)To provide alternative text for the image",correct:true},
            {text:"(d) To specify the background color of the image",correct:false},
        ]
    }, 

    {
        question:"How do you create a hyperlink that opens in a new tab?",
        answers:[
            {text:'(a) <a href="url" target="_blank">Link</a>',correct:true},
            {text:'(b)<a href="url" target="_new">Link</a>',correct:false},
            {text:'(c)<a href="url" newtab>Link</a>',correct:false},
            {text:'(d) <a href="url" tab="_blank">Link</a>',correct:false},
        ]
    },

    {
        question:"What is the purpose of the HTML <footer> tag?",
        answers:[
            {text:"(a)To define a header for a document or section",correct:false},
            {text:"(b)To define a footer for a document or section",correct:true},
            {text:"(c) To create a hyperlink",correct:false},
            {text:"(c) To define a paragraph",correct:false},
        ]
    }, 
    
    {
        question:"What does the HTML <strong> tag do?",
        answers:[
            {text:"(a) It italicizes text",correct:false},
            {text:"(b)  It underlines text",correct:false},
            {text:"(c) It emphasizes text, typically displaying it in bold",correct:true},
            {text:"(d)  It creates a hyperlink",correct:false},
        ]
    }, 

    {
        question:"Which tag is used to define a header for a document or section in HTML?",
        answers:[
            {text:"(a) <title>",correct:false},
            {text:"(b) <h1>",correct:true},
            {text:"(c) <head>",correct:false},
            {text:"(c) <header>",correct:false},
        ]
    }, 

    {
        question:"How do you create a dropdown list in HTML?",
        answers:[
            {text:"(a) <dropdown>",correct:false},
            {text:'(b) <input type="dropdown">',correct:false},
            {text:"(c) <select>",correct:true},
            {text:'(d) <list>',correct:false},
        ]
    }, 

    {
        question:"Which tag is used to embed external content or another webpage within an HTML document?",
        answers:[
            {text:"(a) <iframe>",correct:true},
            {text:"(b) <include>",correct:false},
            {text:"(c) <object>",correct:false},
            {text:"(d) <embed>",correct:false},
        ]
    },

    {
        question:"What is the purpose of the HTML <nav> tag?",
        answers:[
            {text:"(a) To create a hyperlink",correct:false},
            {text:"(b) To define a section of navigation",correct:false},
            {text:"(c) To define a table",correct:false},
            {text:"(c) To define navigation links",correct:true},
        ]
    }, 

    {
        question:"Which tag is used to create a button in HTML?",
        answers:[
            {text:'(a) <input type="button">',correct:false},
            {text:"(b) <button>",correct:true},
            {text:"(c) <btn>",correct:false},
            {text:"(c) <submit>",correct:false},
        ]
    }, 

    {
        question:'What does the HTML <article> tag do?',
        answers:[
            {text:"(a) It creates a hyperlink",correct:false},
            {text:"(b) It defines a paragraph",correct:false},
            {text:"(c)  It defines a self-contained piece of content that could be distributed and reused independently",correct:true},
            {text:"(d) It defines a section of navigation",correct:false},
        ]
    }, 
    {
        question:"How do you create a subscript in HTML?",
        answers:[
            {text:"(a) <sub>",correct:true},
            {text:"(b) <italic>",correct:false},
            {text:"(c) <subscript>",correct:false},
            {text:"(d) <sup>",correct:false},
        ]
    },

    {
        question:"What is the purpose of HTML semantics?",
        answers:[
            {text:"(a) To specify the layout and design of a web page",correct:false},
            {text:"(b) To improve search engine optimization (SEO)",correct:false},
            {text:"(c) To create interactive elements",correct:false},
            {text:"(c) To define the structure and meaning of content",correct:true},
        ]
    }, 

      {
        question:"What is the purpose of the HTML <aside> tag?",
        answers:[
            {text:"(a) To create a sidebar or content that is tangentially related to the content around it",correct:true},
            {text:"(b) To define a section of navigation",correct:false},
            {text:"(c) To create a hyperlink",correct:false},
            {text:"(d) To define a footer for a document or section",correct:false},
        ]
    },
    {
        question:"How do you add a favicon to a website?",
        answers:[
            {text:"(a) <favicon>",correct:false},
            {text:"(b) <icon>",correct:false},
            {text:'(c) <img src="favicon.ico">',correct:false},
            {text:'(c) <link rel="icon" href="favicon.ico">',correct:true},
        ]
    }, 
    {
        question:"What is the purpose of the HTML <section> tag?",
        answers:[
            {text:"(a) To define a section of a document or application",correct:true},
            {text:"(b) To create a section of navigatio",correct:false},
            {text:"(c) To define a sidebar or content that is tangentially related to the content around it",correct:false},
            {text:"(d) To create a hyperlink",correct:false},
        ]
    },
    {
        question:"How do you create a text input field in HTML?",
        answers:[
            {text:"(a) <textfield>",correct:false},
            {text:'(b) <input type="text">',correct:true},
            {text:"(c) <textinput>",correct:false},
            {text:'(c) <input field="text">',correct:false},
        ]
    }, 
    {
        question:"What does the HTML <time> tag do?",
        answers:[
            {text:"(a) It creates a hyperlink",correct:false},
            {text:"(b) It defines a paragraph",correct:true},
            {text:"(c) <textinput>",correct:false},
            {text:"(c) It italicizes text",correct:false},
        ]
    }, 
    {
        question:"What is the purpose of the HTML <progress> tag?",
        answers:[
            {text:"(a) It creates a hyperlink",correct:false},
            {text:"(b) To define progress or completion status of a task",correct:true},
            {text:"(c) To define a paragraph",correct:false},
            {text:"(c) To define a header for a document or section",correct:false},
        ]
    }, 
    {
        question:"What is the purpose of the HTML <abbr> tag?",
        answers:[
            {text:"(a) To define an abbreviation or acronym",correct:true},
            {text:"(b) To create a hyperlink",correct:false},
            {text:"(c) To italicize text",correct:false},
            {text:"(d) To underline text",correct:false},
        ]
    },
    {
        question:"What is the purpose of the HTML <figure> tag?",
        answers:[
            {text:"(a) To create a figure or caption for an image or illustration",correct:true},
            {text:"(b) To define a section of navigation",correct:false},
            {text:"(c) To define a footer for a document or section",correct:false},
            {text:"(d) To create a hyperlink",correct:false},
        ]
    },
    {
        question:"How do you create a meta tag for character encoding in HTML?",
        answers:[
            {text:'(a) <meta encoding="UTF-8">',correct:false},
            {text:'(b) <meta charset="UTF-8">',correct:true},
            {text:'(c) <meta type="charset" content="UTF-8">',correct:false},
            {text:'(c) <meta charset="text/html">',correct:false},
        ]
    }, 

    {
        question:"What is the purpose of the HTML <figcaption> tag?",
        answers:[
            {text:"(a) To define a caption for a <figure> element",correct:true},
            {text:"(b) To italicize text",correct:false},
            {text:"(c) To define a paragraph",correct:false},
            {text:"(d) To create a hyperlink",correct:false},
        ]
    }, 
    {
        question:"How do you create a radio button in HTML?",
        answers:[
            {text:'(a) <input type="radio">',correct:true},
            {text:'(b) <radio>',correct:false},
            {text:'(c) <button type="radio">',correct:false},
            {text:"(d) <radiobutton>",correct:false},
        ]
    }, 
       {
            question:"What does the manifest attribute in the <html> tag define?",
            answers:[
                {text:"(a) Application cache manifest file",correct:true},
                {text:"(b) Document style",correct:false},
                {text:"(c) Document style",correct:false},
                {text:"(d) Document structure",correct:false},
            ]
        }, 
     
        {
            question:"Which HTML element is used for grouping and structuring content?",
            answers:[
                {text:"(a) <div>",correct:true},
                {text:"(b) <section>",correct:false},
                {text:"(c) <container>",correct:false},
                {text:"(d) <group>",correct:false},
            ]
        },
        {
            question:"What does the rel attribute define in the <link> element?",
            answers:[
                {text:"(a) Rendering style",correct:false},
                {text:"(b) Relationship between the current and linked document",correct:true},
                {text:"(c) Type of linked document",correct:false},
                {text:"(c) None of the above",correct:false},
            ]
        }, 
           {
            question:"Which element creates a clickable button in HTML?",
            answers:[
                {text:"(a) <click>",correct:false},
                {text:"(b) <button>",correct:true},
                {text:'(c) <input type="button">',correct:false},
                {text:"(c) <btn>",correct:false},
            ]
        },
        {
            question:"How can you create a responsive image in HTML?",
            answers:[
                {text:"(a) Using the <responsive-img> tag",correct:false},
                {text:"(b) Using the responsive attribute in <img>",correct:false},
                {text:"(c) None of the above",correct:false},
                {text:"(c) Using the <img> tag with srcset and sizes attributes",correct:true},
            ]
        }, 
        {
            question:"What is the purpose of aria-* attributes in HTML?",
            answers:[
                {text:"(a) Define document structure",correct:false},
                {text:"(b) Define link relationships",correct:false},
                {text:"(c) Enhance accessibility",correct:true},
                {text:"(c) Specify inline styles",correct:false},
            ]
        }, 
        {
            question:"Which attribute provides additional information about an element when the mouse hovers over it?",
            answers:[
                {text:"(a) tooltip",correct:false},
                {text:"(b) hoverinfo",correct:false},
                {text:"(c) title",correct:true},
                {text:"(c) info",correct:false},
            ]
        },
        {  
            question:"What differentiates the id attribute from the class attribute in HTML?",
            answers:[
                {text:"(a) id uniquely identifies an element, while class groups multiple elements",correct:true},
                {text:"(b) class uniquely identifies an element, while id groups multiple elements",correct:false},
                {text:"(c) Both uniquely identify elements but serve different purposes",correct:false},
                {text:"(c) None of the above",correct:false},
            ]
        },
        {
            question:"What does the <meta> tag provide in HTML?",
            answers:[
                {text:"(a) Scripting capabilities",correct:false},
                {text:"(b) Document structure",correct:false},
                {text:"(c) Metadata about the HTML document",correct:true},
                {text:"(c) Link relationships",correct:false},
            ]
        }, 
        {
            question:"Which HTML5 elements define structural sections of a webpage?",
            answers:[
                {text:"(a) <header>, <footer>, <nav>, and <aside>",correct:true},
                {text:"(b) <div> and <span>",correct:false},
                {text:"(c) <section> and <article>",correct:false},
                {text:"(c) All of the above",correct:false},
            ]
        }, 
        {
            question:"What does the lang attribute specify in HTML?",
            answers:[
                {text:"(a) Document language",correct:true},
                {text:"(b) Document style",correct:false},
                {text:"(c) Document structure",correct:false},
                {text:"(c) Document type",correct:false},
            ]
        }, 

        {
            question:"How can you create a table with a fixed header and scrollable body in HTML?",
            answers:[
                {text:"(a) Using JavaScript scroll events",correct:false},
                {text:"(b) Using the <table> tag with fixed dimensions",correct:false},
                {text:"(c) Using CSS position: sticky for the header and overflow: auto for the body",correct:true},
                {text:"(c) Using CSS position: fixed for the header",correct:false},
            ]
        }, 
        {
            question:"What is the purpose of the <canvas> element in HTML5?",
            answers:[
                {text:"(a) Draw graphics and animations",correct:true},
                {text:"(b) Embed external content",correct:false},
                {text:"(c) Create forms",correct:false},
                {text:"(c) Display images",correct:false},
            ]
        },
        {
            question:"How can you create a hyperlink that opens in a new tab/window?",
            answers:[
                {text:"(a) Using the window.open() JavaScript method",correct:false},
                {text:'(b) Using the target="_blank" attribute',correct:true},
                {text:'(c) Using the rel="external" attribute',correct:false},
                {text:"(c) None of the above",correct:false},
            ]
        },  
        {
            question:"What is the purpose of the contenteditable attribute in HTML?",
            answers:[
                {text:"(a) Enable inline editing of elements",correct:true},
                {text:"(b) Specify content length",correct:false},
                {text:"(c) Define content structure",correct:false},
                {text:"(c) Disable element content",correct:false},
            ]
        }, 
];


