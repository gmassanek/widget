//var styles = document.createElement('link');
//styles.href = 'widget.css';
//styles.media = "screen";
//styles.rel = 'stylesheet';
//styles.type = 'text/css';
//document.getElementsByTagName('head')[0].appendChild(styles);

var script = document.createElement('script');
script.src = 'popup.js';
script.type = 'text/javascript';
script.onload = script.onreadystatechange = function(){
  $(function() {
    var unique_token = $(widget).attr('race_token');
    var popup_url = 'http://www.utellmewhen.com/widget/listener?rt=' + unique_token;
    //var popup_url = 'http://www.utellmewhen.com';
    var button = $("<input style='background: green' id='ytmw_input_button' type='submit' value='Tell Me When' />");
    var widget = $("#widget");
    var window_name = "uTellMeWhen";
    
    widget.html(button);
    $(button).popupWindow({ 
      windowURL: popup_url, 
      windowName: window_name
      //centerBrowser:1
    }); 
  });
}
document.getElementsByTagName('head')[0].appendChild(script);
