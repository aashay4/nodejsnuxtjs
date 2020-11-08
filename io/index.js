import http from 'http'
import socketIO from 'socket.io'
var Crawler1 = require("simplecrawler");
var Crawler = require("crawler");
const request = require('request');
var https = require('https');

var xx;

export default function () {
  this.nuxt.hook('render:before', (renderer) => {
    const server = http.createServer(this.nuxt.renderer.app)
    const io = socketIO(server)

    // overwrite nuxt.server.listen()
    this.nuxt.server.listen = (port, host) => new Promise(resolve => server.listen(port || 3000, host || 'localhost', resolve))
    // close this server on 'close' event
    this.nuxt.hook('close', () => new Promise(server.close))

    // Add socket.io events
    const messages = []
    io.on('connection', (socket) => {
      socket.on('last-messages', function (fn) {
        fn(messages.slice(-50))
      })



      socket.on('send-internal', function (message) {
        var sendit = message;





        let obselete = []; // Array of what was crawled already

let c = new Crawler();
function crawlAllUrls(url) {
  if(url.startsWith('https://neilpatel.com/')){
  console.log(`Crawling ${url}`);
  c.queue({
      uri: url,
      callback: function (err, res, done) {
          if (err) throw err;
          let $ = res.$;
          try {
              let urls = $("a");
              let allhref;
              //let xxxxx = urls[item].attribs.href;
              //console.log(xxxxx);
              Object.keys(urls).forEach((item) => {
                  if (urls[item].type === 'tag') {
                      let href = urls[item].attribs.href;
                      allhref = href;
                      let href1 = urls[item].attribs.href;
                      var status1;
                      //console.log(crawlallurls);
                      if (href && !obselete.includes(href) && href.startsWith('http')) {
                          href = href.trim();
                          //console.log(href);
                          if(href.startsWith('https://neilpatel.com/' && !obselete.includes(href))){
                          obselete.push(href);
                        //  console.log(obselete);
                        }
                        if(href){
                    https.get(href, function(res) {
                    //  console.log("statusCode: ", res.statusCode); // <======= Here's the status code
                    //console.log(href);
                    //request(href, function (response) {
                      var status = res.statusCode;
                  //    status1 = status
                 //var status = response.statusCode;
                 //console.log(status);
                    socket.emit('new-message', { href, url, status })
                  })

                        }
                        //https.get(href, function(res) {
                        //  console.log("statusCode: ", res.statusCode); // <======= Here's the status code
                          //request(href, function (response) {
                        //  var status = res.statusCode;
                        //  status1 = status
               //var status = response.statusCode;
                //})
                //socket.emit('new-message', { href, url })
                //})
                          // Slow down the
                          setTimeout(function() {
                              href.startsWith('http') ? crawlAllUrls(href) : crawlAllUrls(`${url}${href}`) // The latter might need extra code to test if its the same site and it is a full domain with no URI
                          }, 5000)
                      }
                  }
              });
          } catch (e) {
              console.error(`Encountered an error crawling ${url}. Aborting crawl.`);
              done()
          }
          done();
      }
  })
}
}
crawlAllUrls('https://neilpatel.com/br/blog/');

      })




      socket.on('brokenlinks1', function (message) {
        console.log(message);
        var crawler1 = Crawler1(message)
let xxxz = [];
let xxx2 = [];
let domains  = [];
let acc = [];
var element = {
        title: '',
        url: ''
      };

crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {

  if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8"){
    acc.push(queueItem);
      var last_element = acc[acc.length - 1];
    domains = last_element.url;
    //xxx2.push(domains)
            //    socket.emit('new-domain', domains)

var c = new Crawler({
maxConnections: 10,
// This will be called for each crawled page
callback : function(error, response, done) {
if(error){
console.log(error);
}else{
    let $ = response.$;
    let url = response.options.uri;
  let urls = '';
  urls = $("a");

                //console.log(images);
                Object.keys(urls).forEach((item) => {
                  //console.log(urls[item].attribs.href);

                    if (urls[item].type === 'tag') {
                      let href = '';
                        href = urls[item].attribs.href;
                        console.log(href);
                        if(href !== undefined && href.startsWith('https'))
                        {
                        https.get(href, function(res) {
                          var status = res.statusCode;
                          //socket.emit('new-message', { href, url, status })
                          socket.emit('brokenlinks', { status, href, url })
})
}
if(href !== undefined && href.startsWith('http:')){
  http.get(href, function(res) {
    var status = res.statusCode;
    //socket.emit('new-message', { href, url, status })
    socket.emit('brokenlinks', { status, href, url })
})
}
//                        console.log("href:" + ":" + href);
  //                      console.log("alt tag:" + ":" + alt);

                    }
                });
//console.log(response.options.uri);
//socket.emit('queueItem', { keywordsverdict, h1verict, canonicalverdict, descriptionverdict, descriptionlength, title, titlelengthverdict, titlelength, urlfinal, description, h1, h2, canonical, keywords })
}
done();
}
});
c.queue(domains);

}

//  console.log(acc);

          //    socket.emit('new-domain', domains)
});

crawler1.start();

        messages.push(acc)


      })





      socket.on('brokenlinks', function (message) {
        console.log(message);
        var crawler1 = Crawler1(message)
let xxxz = [];
let xxx2 = [];
let domains  = [];
let acc = [];
var element = {
        title: '',
        url: ''
      };

crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {

  if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8"){
    acc.push(queueItem);
      var last_element = acc[acc.length - 1];
    domains = last_element.url;
    //xxx2.push(domains)
            //    socket.emit('new-domain', domains)

var c = new Crawler({
maxConnections: 10,
// This will be called for each crawled page
callback : function(error, response, done) {
if(error){
console.log(error);
}else{
    let $ = response.$;
    let url = response.options.uri;
  let images = $("img");
                //console.log(images);
                Object.keys(images).forEach((item) => {
                  //console.log(urls[item].attribs.href);
                    if (images[item].type === 'tag') {
                        let href = images[item].attribs.src;
                        let alt = images[item].attribs.alt;
//                        console.log(href);
                        if(href.startsWith('https'))
                        {
                        https.get(href, function(res) {
                          var status = res.statusCode;
                          //socket.emit('new-message', { href, url, status })
                                          socket.emit('domainsgot', { status, href, alt, url })
})
}
//                        console.log("href:" + ":" + href);
  //                      console.log("alt tag:" + ":" + alt);

                    }
                });
//console.log(response.options.uri);
//socket.emit('queueItem', { keywordsverdict, h1verict, canonicalverdict, descriptionverdict, descriptionlength, title, titlelengthverdict, titlelength, urlfinal, description, h1, h2, canonical, keywords })
}
done();
}
});
c.queue(domains);

}

//  console.log(acc);

          //    socket.emit('new-domain', domains)
});

crawler1.start();

        messages.push(acc)


      })









      socket.on('send-message', function (message) {

        var crawler1 = Crawler1(message)
crawler1.maxDepth = 3; // Only first page is fetched (with linked CSS & images)
let acc = [];
let xxxz = [];
let xxx2 = [];
var element = {
        title: '',
        url: ''
      };
crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {
if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8" && queueItem.depth === "3")
//console.log(queueItem);
acc.push(queueItem);
  var last_element = acc[acc.length - 1];
  let domains  = [];
  domains = last_element.url;
  xxx2.push(domains)
        socket.emit('new-message', last_element)
          //    socket.emit('new-domain', domains)
});


crawler1.start();

        messages.push(acc)


      })









      socket.on('send-title', function (message) {
        console.log(message);
        var crawler1 = Crawler1(message)
//crawler1.maxDepth = 3; // Only first page is fetched (with linked CSS & images)

let xxxz = [];
let xxx2 = [];
let domains  = [];
let acc = [];
var element = {
        title: '',
        url: ''
      };

//crawler1.on("discoverycomplete", function(queueItem, resources) {
  //    let urls = [];
    //  for (let i = 0; i < resources.length; i++)
      //{
//        console.log(resources[i]);
  //      let item = resources[i];
    //    if (!urls.includes(item)){
      //    urls.push(item);

//        }
  //    }

  //request(resources, function (error, response, body) {
  //console.log(response.statusCode); // Print the response status code if a response was received
//  socket.emit('discoveredlinks', { resources })
  //console.log(resources);
//  https.get(resources, function(res) {
  //  var status = res.statusCode;
//})
  //socket.emit('websiteurls', { urll, protocoll, contenttype, codee })
//});
crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {
  var urll = queueItem.url;
  var protocoll = queueItem.protocol;
  var contenttype = queueItem.stateData.contentType;
  var codee = queueItem.stateData.code;
  socket.emit('queueItem1', { urll, protocoll, contenttype, codee })
  if(queueItem.stateData.contentType === "image/png" || queueItem.stateData.contentType === "image/jpeg" || queueItem.stateData.contentType === "image/jpg"){
  var urlimage;
  var linkfrom;
  var datasize;
  var imageverdict;
  var datasize;
  urlimage = queueItem.url;
  datasize = queueItem.stateData.actualDataSize/1000;
  linkfrom = queueItem.referrer;
  if(datasize > 100)
  {
    imageverdict = "over 100 KB"
  }
  else{
    imageverdict = "ideal size"
  }
//  linkfrom = queueItem.referrer;
  //datasize = queueItem.stateData.actualDataSize;
  socket.emit('images', { urlimage, datasize, linkfrom, imageverdict })
  //console.log(queueItem);
}
  if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8"){
  //console.log(queueItem);
  acc.push(queueItem);
    var last_element = acc[acc.length - 1];
    console.log(last_element);
    //console.log(response);
    var downloadtime = queueItem.stateData.downloadTime/1000 + 3;
    var requesttime = queueItem.stateData.requestTime/1000 + 3;
    var requestLatency = queueItem.stateData.requestLatency/1000 + 3;
    //console.log("Request time" + ":" + requesttime);
    //console.log("Download time" + ":" + downloadtime);
    var actualdatasize = queueItem.stateData.actualDataSize;
    var url = queueItem.url;
    var verdict;
    if(requesttime > 5)
    {
    verdict = "slow"
//    console.log(verdict);
    socket.emit('queueItem2', { requestLatency, downloadtime, requesttime, actualdatasize, url, verdict })
    }
    else if(requesttime < 5 && requesttime > 4)
    {
    verdict = "medium"
  //  console.log(verdict);
      socket.emit('queueItem2', { requestLatency, downloadtime, requesttime, actualdatasize, url, verdict })
    }
    else if(requesttime < 4){
      verdict = "fast"
    //  console.log(verdict);
      socket.emit('queueItem2', { requestLatency, downloadtime, requesttime, actualdatasize, url, verdict })
    }
    else{
      console.log(requesttime);
    }
    domains = last_element.url;
    //xxx2.push(domains)
            //    socket.emit('new-domain', domains)

var c = new Crawler({
maxConnections: 10,
// This will be called for each crawled page
callback : function(error, response, done) {
if(error){
console.log(error);
}else{
var $ = response.$;
var title = $("title").text();
var titlelength;
datasize = response.body.length;
socket.emit('queueItem3', { datasize, requesttime, actualdatasize, url })
var titlelengthverdict;
var description = $("meta[name=description]").attr("content");
var descriptionlength;
var descriptionverdict;
if(!title){
  titlelength = "0"
  titlelengthverdict = "Missing"
}
else if(title.length > 60){
  titlelength = title.length
  titlelengthverdict = "Over 60 Characters"
}
else if(title.length < 30){
  titlelength = title.length
  titlelengthverdict = "Below 30 Character"
}
else{
  titlelength = title.length
  titlelengthverdict = "Ideal"
}

if(!description)
{
  descriptionlength = "0";
  descriptionverdict = "missing"
}
else if(description.length > 155){
  descriptionlength = description.length;
  descriptionverdict = "over 155 characters"
}
else if(description.length < 60) {
  descriptionlength = description.length;
  descriptionverdict = "Below 60 characters"
}
else{
  descriptionlength = description.length;
  descriptionverdict = "ideal"
}
//var descriptionlength = description.length;
var h1 = $("h1").text();
var h1verict;
if(!h1){
  h1verict = "missing";
}
else{
  h1verict = "h1 found"
}
var urlfinal = response.options.uri;
var h2 = $("h2").text();
var canonical = $("link[rel='canonical']").attr("href");
var canonicalverdict;
if(!canonical){
  canonicalverdict = "missing";
}
else {
  canonicalverdict = "Contains Canonical"
}
var keywords = $("meta[name=keywords]").attr("content");
var keywordsverdict;
if(!keywords){
  keywordsverdict = "missing";
}
else{
  keywordsverdict = "has keywords"
}
//console.log(response.options.uri);
socket.emit('queueItem', { keywordsverdict, h1verict, canonicalverdict, descriptionverdict, descriptionlength, title, titlelengthverdict, titlelength, urlfinal, description, h1, h2, canonical, keywords })
}
done();
}
});
c.queue(domains);

}

//  console.log(acc);

          //    socket.emit('new-domain', domains)
});

crawler1.start();

        messages.push(acc)

      })












      socket.on('send-speed', function (message) {
        console.log(message)
        var crawler1 = Crawler1(message)
      crawler1.maxDepth = 3; // Only first page is fetched (with linked CSS & images)
      crawler1.on("fetchcomplete", function(queueItem, responseBuffer, response) {
      if(queueItem.stateData.contentType === "text/html; charset=UTF-8" || queueItem.stateData.contentType === "text/html; charset=utf-8" && queueItem.depth === "3")
      console.log(queueItem);
              //socket.emit('new-speed', domains)
      });

      crawler1.start();
    })




    })
  })
}





//var c = new Crawler({
//maxConnections: 10,
// This will be called for each crawled page
//callback : function(error, response, done) {
//if(error){
 //console.log(error);
//}else{
 //var $ = response.$;
  //var title = $("title").text();

    //socket.emit('queueItem', { title })
 //}
//done();
//}
//});
//c.queue(queueItem.url);
