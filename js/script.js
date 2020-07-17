var old;
var menu = $("ol.example").sortable({
  group: 'nested',
  afterMove: function(placeholder, container) {
    if (old != container) {
      if (old)
        old.el.removeClass("active");
      container.el.addClass("active");
      old = container;
    }
  },
  onDrop: function($item, container, _super) {
    var data = menu.sortable("serialize").get();
    var jsonString = JSON.stringify(data, null, ' ');
    console.log(jsonString);
    container.el.removeClass("active");
    _super($item, container);
  }
});

$('#get-menu').on('click', function() {
  console.log('menu', $("ol.example").sortable("serialize"));
});

$('input').on('keyup keypress focus blur change', function() {
  $(this).css('width', (($(this).val().length + 1) * 7) + 'px');
}).trigger('change');
