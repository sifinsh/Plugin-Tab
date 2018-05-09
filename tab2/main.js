$(function(){

	var tabs = $(".tabs");

	tabs.each(function(){

		var tab = $(this),
			menu = tab.find(".menu li"),
			content = tab.find(".content>div");


		menu.hover(function(){

			var me = $(this),
				index = me.index();

			menu.removeClass("active");
			me.addClass("active");

			content.hide();
			content.eq(index).show();

		});

	});

});