var quotes = ["In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus", "When one burns one's bridges, what a very nice fire it makes. - Dylan Thomas", "I read the newspapers avidly, it is my one continuous source of fiction. - Nye Bevan", "Regard all art critics as useless and dangerous. - Manifesto of the Futurists", "I talk to God but the sky is empty - Sylvia Plath", "The only interesting answers are those which destroy the question - Susan Sontag"];
function getQuote () {
  var quoteReturned = quotes[Math.floor(Math.random()*quotes.length)];
  console.log(quoteReturned);
  document.getElementById("quote").innerHTML = quoteReturned;
}
