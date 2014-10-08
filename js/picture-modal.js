var modal = function (targetClickElementName, name) {
    
    if ($(name).length === 0) {
        throw new Error(name + ' does not exist!');
    }
    
    var modalBgClassName = 'modal-background';
    
    $(targetClickElementName).click(function() {
        $(name).css({'display': 'block'});
        $('html, body').css({overflow: 'hidden'});
    });

    $('.close').click(function(e) {
        close();
    });
    
    $('.' + modalBgClassName).click(function (e) {
        if ($(e.target).hasClass(modalBgClassName) === true) {
            close();
        }
    });
    
    function close() {
         $(name).css({'display': 'none'});
         $('html, body').css({overflow: 'visible'});
    };

};