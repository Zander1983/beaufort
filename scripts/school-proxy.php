<?php


    $context = $_GET['context'];
    $feed_domain = $_GET['feed_domain'];
    $photoset_id = $_GET['photoset_id'];
    $flickr_api_key = $_GET['flickr_api_key'];
    $flickr_user_id = $_GET['flickr_user_id'];

    $feeds["home"]  = '/wp-json/posts';
    $feeds["news"]  = '/wp-json/posts';
    
    $feeds['events'] = 'https://www.google.com/calendar/feeds/dife.edu@gmail.com/public/full?orderby=starttime&sortorder=ascending&max-results=10&futureevents=true';

    $feeds['albums']= 'http://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key='.$flickr_api_key.'&user_id='.$flickr_user_id;
    $feeds['photos'] = 'http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key='.$flickr_api_key.'&user_id='.$flickr_user_id.'&extras=url_sq,url_t,url_s,url_m,url_o&photoset_id='.$photoset_id;
 
    
    if(!$context) $context = "home";
    
    $xml = file_get_contents($feed_domain.$feeds[$context]);   

    echo $xml;
    
    
    

