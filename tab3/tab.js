;
(function () {
    $.fn.extend({
            tab: function (opt) {
                // 组件默认配置
                var defaults = {
                    initIndex: 0,
                    type: 'click',
                    tagBgcolor: ''
                };

                // 组件用户配置
                var option = $.extend(defaults, opt);

                // 为每个tab设置效果
                this.each(function () {
                    var $tab = $(this);
                    var $tabNavlist = $tab.find('.tab-navlist');
                    var $tabNavlistitem = $tab.find('.tab-navitem');
                    var $tabContentitem = $tab.find('.tab-contentitem');

                    var selectedIdx = option.initIndex;
                    var type = option.type;

                    $tabNavlistitem.on(type, function () {
                        // 当前要显示的tab序号
                        selectedIdx = $(this).index();

                        // 设置tag背景色
                        $tabNavlistitem
                            .eq(selectedIdx)
                            .css('background-color', option.tagBgcolor);

                        $tabNavlistitem
                            .not(':eq(' + selectedIdx + ')')
                            .css('background-color', '');

                        // 隐藏显示标签
                        $tabNavlistitem
                            .not(':eq(' + selectedIdx + ')')
                            .removeClass('tab-navitem__active');
                        $tabNavlistitem
                            .eq(selectedIdx)
                            .addClass('tab-navitem__active');

                        // 隐藏显示tab-content
                        $tabContentitem
                            .not(':eq(' + selectedIdx + ')')
                            .hide();
                        $tabContentitem
                            .eq(selectedIdx)
                            .show();
                    });

                    // 初始化选中标签
                    $tabNavlistitem.eq(selectedIdx)[type]();

                });
            }
        }

    );
})();