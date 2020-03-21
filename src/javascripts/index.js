// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import "bootstrap"

function displayMessage() {
    var txt = document.getElementById("name").value;
    alert("Welcome " + txt);
}
function reset() {
    document.getElementById("form").reset();
}
