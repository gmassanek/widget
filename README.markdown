## Easy Widget

### Code to give to a consumer

There are two lines that your cunsumer would need to include in their site:

```html

    <script type="text/javascript" src="http://www.mywebste.com/widget.js"></script>
    <div id="widget" race_token="54qF234jasdfj2dfdssf"></div>

```

This will import the widget js from your server.  When it runs, it will inject the popup.js code
(which includes jquery min) into the user's header.

Set the variables in the widget.js file to point back to your app's callback url, with whichever
tokens are required.
