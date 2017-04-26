





function crearlistado(resp) {
   // var myObj ={"results":[{"poster_path":"\/tnmL0g604PDRJwGJ5fsUSYKFo9.jpg","title":"batman"}]}; 
    
    var myObj = resp;
    var imgUrl = "http://image.tmdb.org/t/p/w185//";
    
    var res = myObj.results;
    
        for(i=0; i<res.length;i++){
            document.getElementById("listapeliculas").innerHTML += "<div class='list-item'>" +

                "<div class='poster-container'><img src='" + 
                imgUrl + res[i].poster_path + 
                "'/></div><div class='detail-container'><p>" +
                res[i].title.substring(0, 9)+ " ...</p></div></div>  "; 
            //.substring(0, 9)

        }
    

}

function query(){
	
	$.ajax({  
       type: "GET",  
       url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14bc80b6dd67af99bfa2aba10e5e06d9",  
       dataType: "json",  
       success: function(resp){  
         // we have the response  
        crearlistado(resp);
       },  
       error: function(e){  
         alert('Error121212: ' + e);  
       }  
     });
	 
}