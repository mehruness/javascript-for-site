!function () {
  const useState = React.useState;

  const SHAPES = [
      
    [
  "Comment",
  `

  <style>
/* dit is commentaar voor CSS */
</style>

<!-- dit is commentaar voor HTML -->

<script>
// dit is commentaar voor Javascript
</script>

`],		  
	  
	   
	  

   [
  "Lijsten",
  `

<ol>
<li>Eerste item </li>
<li>Tweede item </li>
<li>Derde item </li>
</ol>


<br>
<ul>
<li>Eerste item </li>
<li>Tweede item </li>
<li>Derde item </li>
</ul>
<br>

<br>
<ul>
<li> Items: <ol> <li> Eerste item </li> <li> Tweede item </li> </ol>
<li> Testen: <ol> <li> Test 1 </li> <li> Test 2 </li> </ol>
</ul>
<br>
<ul>
<li> Frisdranken: </li>
<li> Biermerken: </li>
<ul>
<li> Amstel </li>
<li> Brand </li>
<li> Grolsch </li>
<li> Heineken </li>
</ul>
</li>
<li> Koffie of thee </li>
</ul>

<br>

<dl>
<dt>HTML </dt>
<dd>Staat voor: Hyper Text Markup Language </dd>
<dt> CSS </dt>
<dd>Staat voor: Cascading Style Sheets </dd>
</dl>
<br>



`],	      
 
   [
  "Links",
  `

  <style>

a {
color: black;
}

b {
color: red;
}

</style>
<a href="mailto:test@voorbeeld.nl">Verzend mail</a>
<br>
<a href="https://www.google.nl/" target="_blank">Naar google</a>
<br>
<b>(OP DE ONDERSTAANDE CODE NIET KLIKKEN IN DEZE EDITOR I.V.M. EEN BUG!)</b> 
<p> kopieer de code naar een externe editor voor interactie. </p>
<br>
<a href="#bottom">Naar onderen: </a> 
<br>
<p id="bottom">Dit is de link van A tag hierboven.</p>
<br>
<br>






`],	       
      
   [
  "Table",
  `


<table border="1" style="">
<thead>
<tr>
<th> Datum: </th>
<th> Inkomsten: </th>
<th> Uitgaven: </th>
</tr>
</thead>
<tbody>
<tr> <td>1 Januari</td> <td>$200</td> <td>$10</td> </tr>
<tr> <td>2 Januari</td> <td>$250</td> <td>$100</td> </tr>
<tr> <td>3 Januari</td> <td>$250</td> <td>$50</td> </tr>
<tr> <td>4 Januari</td> <td>$300</td> <td>$40</td> </tr>
<tr> <td>5 Januari</td> <td>$100</td> <td>$500</td> </tr>
<tr> <td>6 Januari</td> <td>$200</td> <td>$200</td> </tr>
<tr> <td>7 Januari</td> <td>$150</td> <td>$300</td> </tr>
<tr> <td>8 Januari</td> <td>$100</td> <td>$50</td> </tr>
<tr> <td>9 Januari</td> <td>$150</td> <td>$30</td> </tr>
<tr> <td>10 Januari</td> <td>$50</td> <td>$100</td> </tr>
<tr> <td>11 Januari</td> <td colspan="2">$50</td> </tr>
<tr> <td>12 Januari</td> <td>$200</td> <td>$10</td> </tr>
<tr> <td>13 Januari</td> <td>$250</td> <td>$5</td> </tr>
<tr> <td>14 Januari</td> <td>$250</td> <td>$100</td> </tr>
<tr> <td>15 Januari</td> <td>$100</td> <td>$20</td> </tr>
<tr> <td>16 Januari</td> <td>$50</td> <td>$25</td> </tr>
<tr> <td>17 Januari</td> <td>$200</td> <td>$25</td> </tr>
</tbody>
<tfoot>
<tr> <th>Totaal:</th> </th><th> 2850 </th> <th> 1535 </th> </tr>
</tfoot>
</table>





`],
	
   [
  "Form",
  `
<fieldset>
<legend>Jouw mening: </legend>
<label> Datum: <br> <input type="date" required="required"/> </label>
<br>
<label> Naam: <br> <input type="text" placeholder="Naam:" size="40" required="required"/> </label>
<br>
<label> Leeftijd: <br> <input type="number" placeholder="Leeftijd:" size="40" required="required"/> </label>
<br>
<label> Wat vond je van deze tutorial? <br> <input type="radio" name="mening" value="mening1">Goed</input> <input type="radio" name="mening" value="mening2">Slecht</input>  </label>
<br>
<select name="selecties">
<option value="test 5">selectie 1</option>
<option value="test 6">selectie 2</option>
<option value="test 7">selectie 3</option>
</select>
<br>
<input type="text" placeholder="Ik ben een tekstveld van 66 lang en kan maar 5 tekens accepteren" size="66" maxlength="5" />
<br>
<input type="number" placeholder="Ik ben een numeriek veld van 90 lang en kan alleen nummers tussen 3 en 20 accepteren" size="90" min="3" max="20" />
<br>
<input type="password" placeholder="Ik ben een paswoord veld van 40 lang" size="40" />
<br>
<input type="file" size="10" />
<br>
<label> Opmerkingen: <br> <textarea placeholder="Opmerkingen"/> </label>
<br>
<button type="button">Verzend</button>
</fieldset>



`],	 	  

	  
   [
  "Meters",
  `

    <meter id="meter1" min="0" low="20" high="90" max="100" value="15"></meter>
   <br> <br>
    <meter id="meter2" min="0" low="20" high="90" max="100" value="70"></meter>
     <br> <br>
    <progress value="50" max="100"> </progress>



`],	 	  
	

  
  
  ];


	
	

  function App(props) {
    const [app, updateApp] = useState({
      currentIndex: 0,
      lastIndex: -1,
      direction: 0 });


    return (
      React.createElement("div", { style: { border: '4px solid grey', maxWidth: "1000px" }, className: "wrapper" },
	  React.createElement("div", { style: { border: "0px solid black", height: "50px", maxWidth: "1000px",   }  }, 
	   
				 
	 				 ),
	  
						  
      React.createElement("div", { className: "intro" },
      React.createElement("h1", { style: { color: 'beige', textShadow: '2px 2px black' } }, "HTML carousel"),
      React.createElement("h2", null, "Basis en gevorderd"),					  
      React.createElement("p", null, " Veel succes en happy coding! ",
	  React.createElement("span", null, " "), ","),
      React.createElement("B", {style: {color: "red", backgroundColor: "black" } }, "Klik op een afbeelding om de code te kopiëren!"), 
	  React.createElement("B", {style: {color: "white", position: "absolute", top: "600px", left: "200px" } }, "Voorbeeld code:") ),
	  
				  


      React.createElement(Carousel, {
        direction: app.direction,
        currentIndex: app.currentIndex,
        lastIndex: app.currentIndex,
        updateApp: updateApp,
        shapes: props.shapes }),


      React.createElement(Code, {
        direction: app.direction,
        lastShape: props.shapes[app.lastIndex],
        currentShape: props.shapes[app.currentIndex],
        shapes: props.shapes })));



  }

	
	
	
	
  function Carousel(props) {
    function showNext(index) {
      let lastIndex =
      index < 0 ?
      0 :
      index === props.shapes.length ?
      props.shapes.length - 1 :
      index;
      let currentIndex = index + 1 === props.shapes.length ? 0 : index + 1;
      props.updateApp({ currentIndex, lastIndex, direction: 1 });
    }

    function showPrevious(index) {
      let lastIndex = index < 0 ? 0 : index;
      let currentIndex = index - 1 < 0 ? props.shapes.length - 1 : index - 1;
      props.updateApp({ currentIndex, lastIndex, direction: -1 });
    }

    return (
      React.createElement("div", { style: {    },
        className: "carousel carousel--" + props.shapes[props.currentIndex][0] },

      React.createElement("div", {
        onClick: () => showPrevious(props.currentIndex),
        className: "controls controls--back" },

      React.createElement("span", null)),


      React.createElement(Slide, { shape: props.shapes[props.currentIndex] }),

      React.createElement("div", {
        onClick: () => showNext(props.currentIndex),
        className: "controls controls--next" },

      React.createElement("span", null))));



  }

  function Slide(props) {
    const [copyMessage, setCopyMessage] = useState(false);

    function copyCSS(shapeCSS) {
      navigator.clipboard.writeText(shapeCSS).then(
      () => {
        console.log("Code gekopieërd");

        setCopyMessage(true);

        setTimeout(setCopyMessage, 2000, false);
      },
      () => {
        console.log("Error");
      });

    }

    return (
      React.createElement("div", { key: props.shape[0], className: "slide slide--" + props.shape[0] },
      React.createElement("h6", {
        className: "slide__copy-message " + (copyMessage ? "show" : "nope") }, "Code gekopieërd"),




      React.createElement("div", {
        onClick: () => copyCSS(props.shape[1]),
        className: "slide__shape slide__shape--" + props.shape[0] })));



  }

  function Code(props) {
    return (
      React.createElement("div",  { className: "code-wrapper code-wrapper--" + props.currentShape[0] },
	  				  
      React.createElement("pre", {
        key: props.currentShape[0],
        className:
        "code code--active" + (
        props.direction < 0 ? " slide-left" : " slide-right") },


      props.currentShape[1]),


      props.lastShape &&
      React.createElement("pre", {
        key: props.lastShape[0],
        className:
        "code code--last" + (
        props.direction < 0 ? " slide-left" : " slide-right") },


      props.lastShape[1])));

  }
	
	
	
// Body Style:
	document.getElementsByTagName('body')[0].style.background = " radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px ";
	    document.getElementsByTagName('body')[0].style.backgroundSize = " 16px 16px ";
    document.getElementsByTagName('body')[0].style.backgroundColor = " #282828 ";
	    document.getElementsByTagName('body')[0].style.minHeight = " 100vh ";
	


	
  ReactDOM.render(React.createElement(App, { shapes: SHAPES }), document.getElementById("app"));
}();	
