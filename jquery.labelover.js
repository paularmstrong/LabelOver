(function($) {
    
    $.fn.labelover = function() {
        
        this.each(function() {
            var $this = $(this);
            var $label = $this.prev('label');
            
            $this.parent().addClass('labelover');
            
            $this.focus(function() {
                if($this.val() == '') {
                    $label.stop().animate({ opacity: 0.4 }, 200);
                }
            }).blur(function() {
                if($this.val() == '') {
                    $label.stop().css({ display: 'block' }).animate({ opacity: 1 }, 200);
                }
            }).keydown(function() {
                if($label.css('opacity')) {
                    $label.stop().animate({ opacity: 0 }, 200, function() { $label.css({ display: 'none' }); });
                }
            });

            
            if ($this.val() != '') {
                $label.hide();
            }
            
        });
        
    }
    
})(jQuery);