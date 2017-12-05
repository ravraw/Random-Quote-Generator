// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [

{ quote : 'move fast and break things.',
  source : 'Mark Zuckerberg',
  citation: 'From a interview with Business Insider',
  year: 2010,

},
{quote : 'Every new thing creates two new questions and two new opportunities ',
  source : 'Jeff Bezos',
  citation: 'TED talk',
  year: 2007},
{quote : 'It’s always about timing',
  source : 'Anna Wintour, editor-in-chief, Vogue',
  citation:'The Business of Fashion ',
  year: 2011,},
{quote : 'anyone who makes products has this simultaneous joy and, almost, shame looking at it',
  source : 'Ben Silbermann, founder, Pinterest',
  citation: 'interview with Inc.',
  year: 2012,},
{quote :"It's about the people you have, how you're led, and how much you get it." ,
  source : 'Steve Jobs',
  citation:'interview with Fortune',
  year: 1998,}

]


// returns a random quote , by generating a random index number .
function getRandomQuote(){

   var getRandomNumber = Math.floor((Math.random() * quotes.length ));
   return quotes[getRandomNumber];

}


// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
// printQuote constructs a string containing the different properties of the quote object using the  HTML template:
function printQuote(){

  var randomQuote = getRandomQuote();


  var html = '<p class="quote">' + randomQuote.quote + '</p>'
  html += '<p class="source">' + randomQuote.source +
  '<span class="citation">'+ randomQuote.citation + '</span>' +
  '<span class="year"> ' + randomQuote.year + '</span>' +
  '</p>'



   document.getElementById('quote-box').innerHTML = html ;

}



