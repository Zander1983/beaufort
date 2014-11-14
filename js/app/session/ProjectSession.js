define(function (require) {
    "use strict";

    var projectDetails = {
        flickr_link : "", 
        calendar_link : "" 
    };

var some_variables = (function () {

    return {
        setProjectDetails: function (obj) {
            projectDetails.flickr_link = obj.flickr_link;
            projectDetails.calendar_link = obj.calendar_link;
        },
        getProjectDetails: projectDetails
    };

})();

return some_variables;
});