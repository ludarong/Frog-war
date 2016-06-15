(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("map",
{ "height":10,
 "layers":[
        {
         "data":[0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
         "height":10,
         "name":"\u5757\u5c42 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }],
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":50,
 "tilesets":[
        {
         "firstgid":1,
         "image":"..\/..\/..\/Downloads\/3-1.png",
         "imageheight":146,
         "imagewidth":293,
         "margin":0,
         "name":"3-1",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":50,
         "tilewidth":50
        },{
         "firstgid":2,
         "image":"..\/..\/..\/Downloads\/3-2.png",
         "imageheight":146,
         "imagewidth":293,
         "margin":0,
         "name":"3-1",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":50,
         "tilewidth":50
        }],
 "tilewidth":50,
 "version":1,
 "width":10
});