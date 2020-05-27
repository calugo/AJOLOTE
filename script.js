//PubNub
var pubnub = new PubNub({
    publish_key: 'pub-c-f36b6693-3670-4288-ad29-63335c57dcf7',
    subscribe_key: 'sub-c-0c5d50ea-fb04-11e6-8fcb-0619f8945a4f'
});

var status= 'Fuera del aire, volvemos pronto'
// Our labels along the x-axis
//var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
//var africa = [86,114,106,106,107,111,133,221,783,2478];
//var asia = [282,350,411,502,635,809,947,1402,3700,5267];
//var europe = [168,170,178,190,203,276,408,547,675,734];
//var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
//var northAmerica = [6,3,2,2,7,26,82,172,312,433];

var wlen=[];
var sts1=[];
var sts2=[];
var Rf=[];

//var ctx = document.getElementById("myChart");
//var ctx2 = document.getElementById("myChart2");
//var ctx3 = document.getElementById("myChart3");
var bbx = document.getElementById("box1");
var channel = 'ajolote';
box1.innerHTML = status;

////////////////////////////////
pubnub.addListener({
         message: function(obj) {
             console.log(obj)

             if (obj[0] != '')
             {
               //status= 'Status: Streaming!'
               var q=obj.message
               status=q
               box1.innerHTML = status;
               console.log(q)
            }
            else{
              status= 'Offline'
              box1.innerHTML = status;
            }
         }});

pubnub.subscribe({channels:[channel]});
