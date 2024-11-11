function generate() {
  var quotes = {
    " —Albert Einstein":
      '"We cannot solve problems with the kind of thinking we employed when we came up with them." ',

    " —Mahatma Gandhi":
      " “Learn as if you will live forever, live like you will die tomorrow.” ",
    "—Mark Twain":
      "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
    " —Eleanor Roosevelt":
      "“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” ",

    " —Norman Vincent Peale":
      "“When you change your thoughts, remember to also change your world.” ",
  };

  var authors = Object.keys(quotes);


  var author = authors[Math.floor(Math.random()* authors.length)]

  var quote=quotes[author]

   document.getElementById("quote").innerHTML = quote


   document.getElementById("author").innerHTML= author
}
