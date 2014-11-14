define(function (require) {
    
    var mode = "dev";
  
    if(mode==="dev"){
        var push_server_url = "http://localhost/schoolspace.me";  
    }
    else{
        var push_server_url = "http://push.schoolspace.ie";                    
    }

    return { 
        project_title : "beaufort", 
        project_number : "271894031293", 
        push_server_url : push_server_url,
        standard_device_id : "63843", 
        standard_api_key : "hv7Vgd4jsbb",
        school_name : "Loreto High School Beaufort",
        twitter_handle : "markkelly1983",
        gmail : 'loretohighschoolrathfarnam@gmail.com',
        is_push : false,
        mode : mode,

    /********device id and api key for browser testing*********/
        test_device_id : 87,
        test_api_key : 'mlQnpa9c'
        
    }
        
});
  

