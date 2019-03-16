/*
name: LinkIt
author: Joel Mora
version: 0.1.0
license: MIT
*/

(function($) {
    $.fn.linkIt = function(options) { // $ is the html object that is being selected
                                      // options are the json data that the user inputs (href, text, target)
        //Default Settings
        var settings = $.extend({ //Sets the base settings and then overwrite them with the users options
            href: null,
            text: null,
            target: '_blank'
        }, options);

        //Validation
        if(settings.href == null) { //The user did not select a link
            console.log('You need an href option for LinkIt to work');
            return this; //End plugin
        }

        return this.each(function() { //will return for every instance of linkIt
            var object = $(this); //Sets the html object initially selected to an object variable

            if (settings.text == null) { //if the user did not put preferred text in the plugin call then default to the full name of the html object selected
                settings.text = object.text();
            }
            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });

        
    }
}(jQuery));