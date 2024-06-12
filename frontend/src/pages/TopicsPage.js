import React from 'react';

function TopicsPage() {
  return (
    <>
      <main>
        <section>
          <h2>Web Development Concepts</h2>
          <nav className="local">
            <a href="#servers">Web Servers</a>
            <a href="#frontendDesign">Frontend Design</a>
            <a href="#optimizingImages">Optimizing images</a>
            <a href="#favicons">Favicons</a>
            <a href="#cascadingStylesheets">Cascading Stylesheets</a>
            <a href="#JavaScript">JavaScript</a>
          </nav>
          <article id="servers">
            <h3>Web Servers</h3>
            <p>A designated home page is the main entry point for users. When a domain is accessed, web servers look for the default file, usually called <strong>index.html</strong>, to display. 
                In relation to languages, these files are created from a combination of <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. 
                The combination of these languages creates a homepage's style, structure, and interactivity. 
                When users enter a domain into their browser, the web server searches for this index.html file and serves its content as the homepage. 
                If the index file is not found, the server may display an error. </p>
            <p>The browser's Web Dev/Inspector Network tab reveals <strong>HTTP requests</strong> for webpage resources like HTML, CSS, and JavaScript, displaying request details such as <strong>method</strong>, <strong>URL</strong>, <strong>status code</strong>, <strong>date</strong>, and <strong>content-type</strong>. 
                The web server files included additional components like <strong>favicon.ico</strong> and <strong>styles.css</strong>, in addition to <strong>main.css</strong> and <strong>main.js</strong>. 
                However, files from the local computer only displayed main.css and main.js without any additional files. 
                Additionally, web server files showed a status code of <strong>404</strong> for main.css and main.js, while files from the local computer did not display a status code.</p>
            <p>The favicon.ico file usually receives a status code of <strong>200</strong> because it's a <strong>standard icon file</strong> expected by browsers. 
                Conversely, the main.css and main.js files have status codes of 404 because the server couldn't locate them at the specified URLs and on the server. 
                This is because in our <strong>template file</strong>, we are referencing a main.css and main.js file; however, we have not created such files. 
                The 404 status indicates the <strong>requested resource</strong> (CSS and JavaScript files) couldn't be found on the server.</p>
            <p>My <strong>scheme</strong> is denoted by "https://", which identifies the protocol the web client must use to request the resource. 
                "web.engr" serves as the <strong>subdomain</strong> of the <strong>host domain</strong> "oregonstate.edu", which identifies the specific server or network location hosting the website. 
                "/akbarmu/", represents the <strong>resources</strong>, such as files or directories, on the server.</p>
          </article>
          <article id="frontendDesign">
            <h3>Frontend Design</h3>
            <p>The concept of <strong>frontend design</strong> encompasses the creation of the <strong>user interface</strong> and user experience components of a website or web application. 
                Frontend design creates <strong>user-centric</strong> experiences by integrating visual aesthetics, <strong>GUI elements</strong>, and interactive functionalities. 
                To achieve an optimal visual design, it involves a cohesive <strong>color palette</strong>, <strong>typography choices</strong>, imagery selection, and intuitive <strong>navigation systems</strong>. 
                By harmonizing these components, frontend design ensures an engaging and seamless user journey, fostering positive interactions and <strong>user satisfaction</strong>.</p>
            <p>The Five "E"s of Usability</p>
            <dl>
                <dt>Effective</dt>
                <dd>The system should allow users to accomplish tasks quickly and easily.</dd>
                <dt>Efficient</dt>
                <dd>Users should be able to achieve their goals accurately and completely.</dd>
                <dt>Easy to navigate</dt>
                <dd>Users should be able to quickly understand how to use the system with minimal training or instruction.</dd>
                <dt>Error-free</dt>
                <dd>The system needs to be meticulously designed to minimize errors and ensure accessibility and availability are maintained.</dd>
                <dt>Enjoyable</dt>
                <dd>The system should capture users' attention and keep them engaged throughout the interaction.</dd>
            </dl> 
            <p>In this assignment, we focus on the following six layout tags:
            <strong>&lt;header&gt;</strong>: defines a header for the document or a section.
            <strong>&lt;nav&gt;</strong>: defines navigation links for the document.
            <strong>&lt;section&gt;</strong>: groups related content thematically. Sections typically begin with an <strong>&lt;h1&gt;</strong> headline describing their content. 
            <strong>&lt;article&gt;</strong>: represents a single, distinct topic, usually introduced with a <strong>&lt;h2&gt;</strong> headline. 
            Multiple articles within a section can be distinguished using <strong>ID selectors</strong>.
            <strong>&lt;footer&gt;</strong>: the footer, positioned below the main content, typically includes legal details, contact information, and links to important pages.
            <strong>&lt;main&gt;</strong>: denotes the primary content block, such as stories or tutorials. </p>
            <p>How Anchors Link to Content</p>
            <ol>
                <li>Linking to External Content: Use the <code>&lt;a href="http://example.com"&gt;External Link&lt;/a&gt;</code> syntax to link to content on external websites. 
                    This anchor element links to an external URL. When clicked, users are redirected to the specified page outside the current website.</li>
                <li>Linking to Internal Content: Use the <code>&lt;a href="#section-id"&gt;Internal Link&lt;/a&gt;</code> syntax to link to content within the same webpage using the ID of the target section. 
                    Clicking on the link will scroll the page to that specific section.</li>
                <li>Linking from Page to Page: Use the <code>&lt;a href="page.html"&gt;Page-to-Page Link&lt;/a&gt;</code> syntax to link from one webpage to another within the same website.
                    Clicking on the link will navigate the user to the specified page.</li>
            </ol>      
          </article>
          <article id="optimizingImages">
            <h3>Optimizing images</h3>
            <p><strong>Image optimization</strong> involves several key specifications to ensure optimal performance and user experience. Choosing the appropriate <strong>file format</strong> is crucial for optimizing images. Optimizing <strong>resolution</strong> ensures correct display without unnecessary file size bloat. 
                Image <strong>compression</strong> reduces file size without compromising visual quality, leading to faster load times. 
                <strong>Scaling</strong> resizes images for optimal display. Selecting the appropriate color mode is essential: <strong>RGB</strong> for photographs and <strong>indexed color</strong> for images with sharp edges. Adding descriptive files names aids <strong>search engine optimization (SEO)</strong> by providing categorization to search engines.</p>
            <p>For photos, the appropriate file formats are <strong>JPG</strong> (Joint Photographic Experts Group) and <strong>WebP</strong>. JPG offers efficient compression for photos while maintaining good quality. WebP provides even better <strong>compression</strong>, suitable for web use. For line art, <strong>PNG</strong>(Portable Network Graphics), <strong>SVG</strong> (Scalable Vector Graphics), and <strong>GIF</strong> (Graphics Interchange Format) are suitable. 
                PNG preserves line art with <strong>lossless</strong> compression, while SVG offers scalability and crispness for <strong>vector-based</strong> art. GIF is best for simple <strong>line art</strong> or animations with limited colors, though it may have larger file sizes compared to PNG. Only lossless image compression reduces file size without compromising visual quality.</p>
          </article> 
          <article id="favicons">
            <h3>Favicons</h3>
            <p> <strong>Favicons</strong>, are the small icons associated with websites. It's typically saved in <strong>ICO, PNG, GIF, or JPEG</strong> formats, favicons should be provided in multiple sizes (e.g., 16×16, 32×32, 64×64) to accommodate various display resolutions. Browsers use these icons to visually represent websites in bookmarks, tabs, and other UI elements, aiding users in recognizing the site. 
                To include a favicon on a website, one adds a link element in the head section of the HTML document, specifying the location of the favicon file by using the <strong>“rel”</strong> attribute. Placing the favicon file at the root directory of the website ensures easy accessibility for browsers. </p>
          </article> 
          <article id="cascadingStylesheets">
            <h3>Cascading Stylesheets</h3>
            <p>Incorporating <strong>stylesheets</strong> in websites and apps offers several benefits. Firstly, it ensures consistency in the visual presentation across multiple pages, providing users with a cohesive experience. Secondly, stylesheets facilitate the separation of concerns by allowing developers to separate style from content, resulting in cleaner code and easier maintenance. 
                Additionally, they offer flexibility by enabling easy updates to the website's appearance without modifying the underlying HTML. Moreover, stylesheets promote <strong>accessibility</strong> by providing mechanisms to enhance <strong>readability</strong> and <strong>usability</strong>. Finally, they contribute to efficiency by allowing for caching, leading to faster page load times and improved performance. </p>
            <p>Various methods exist for incorporating styles. The common approach involves external CSS files linked in the global <strong>&lt;head&gt;</strong> area of a website using <strong>&lt;link&gt;</strong> tags. These files provide styles across all website pages. Specific component stylesheets can be linked after the <strong>global file</strong> or imported within it using <strong>@import</strong>. Embedding styles directly in HTML or JavaScript files is possible, but usually reserved for one-off changes. 
            This can be done through <strong>&lt;style&gt;</strong> tags in HTML, inline with an attribute and value, or by manipulating the <strong>Document Object Model (DOM)</strong> in JavaScript.</p>
          </article> 
          <article id="JavaScript">
            <h3>JavaScript</h3>
            <p>In JavaScript, the main data types include strings, numbers, booleans, null, undefined, objects, and symbols. <strong>Objects</strong> are used to store collections of data and functions, arrays are special types of objects used to store ordered collections of data, and <strong>JSON (JavaScript Object Notation)</strong> is a lightweight data interchange format that's commonly used for transmitting data between a server and a web application. 
                <strong>Conditionals</strong> like if, else if, and else are used to make decisions based on conditions, while <strong>loops</strong> like for, while, and do-while are used to repeatedly execute a block of code until a condition is met. </p>
            <p><strong>Object-oriented programming (OOP</strong>) is a programming model centered around the concept of "objects," which encapsulate data and behavior. Objects are instances of classes, which define the properties and methods shared by all instances. OOP emphasizes modularity and reusability. <strong>Functional programming (FP)</strong> is a programming model where computation is treated as the evaluation of mathematical functions. FP emphasizes the use of pure functions, which produce the same output for a given input and have no side effects. 
                It focuses on composing functions and using higher-order functions to enable abstraction and code reuse. This leads to code that is concise and predictable.</p>
          </article> 
        </section>
      </main>
    </>
  );
}

export default TopicsPage;
