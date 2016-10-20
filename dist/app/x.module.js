"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var x_1 = require('./x');
var x_ngcomponent_1 = require('./x.ngcomponent');
var x_button_1 = require('./x.button');
var x_calendar_event_1 = require('./x.calendar_event');
var x_calendar_form_add_1 = require('./x.calendar_form_add');
var x_calendar_form_edit_1 = require('./x.calendar_form_edit');
var x_calendar_daysheader_1 = require('./x.calendar_daysheader');
var x_calendar_weeksheader_1 = require('./x.calendar_weeksheader');
var x_calendar_list_1 = require('./x.calendar_list');
var x_calendar_day_1 = require('./x.calendar_day');
var x_calendar_days_1 = require('./x.calendar_days');
var x_calendar_month_1 = require('./x.calendar_month');
var x_calendar_1 = require('./x.calendar');
var x_calendar_week_1 = require('./x.calendar_week');
var x_calendar_weeks_1 = require('./x.calendar_weeks');
var x_calendar_dayview_1 = require('./x.calendar_dayview');
var x_calendar_daysview_1 = require('./x.calendar_daysview');
var x_calendar_monthview_1 = require('./x.calendar_monthview');
var x_calendar_multiview_1 = require('./x.calendar_multiview');
var x_calendar_weekview_1 = require('./x.calendar_weekview');
var x_calendar_weeksview_1 = require('./x.calendar_weeksview');
var x_carousel_1 = require('./x.carousel');
var x_cartesian_1 = require('./x.cartesian');
var x_interaction_1 = require('./x.interaction');
var x_polar_1 = require('./x.polar');
var x_spacefilling_1 = require('./x.spacefilling');
var x_component_1 = require('./x.component');
var x_container_1 = require('./x.container');
var x_d3_canvas_1 = require('./x.d3_canvas');
var x_d3_heatmap_1 = require('./x.d3_heatmap');
var x_d3_pack_1 = require('./x.d3_pack');
var x_d3_partition_1 = require('./x.d3_partition');
var x_d3_sunburst_1 = require('./x.d3_sunburst');
var x_d3_treemap_1 = require('./x.d3_treemap');
var x_dataview_1 = require('./x.dataview');
var x_indexbar_1 = require('./x.indexbar');
var x_list_1 = require('./x.list');
var x_nestedlist_1 = require('./x.nestedlist');
var x_draw_1 = require('./x.draw');
var x_surface_1 = require('./x.surface');
var x_checkboxfield_1 = require('./x.checkboxfield');
var x_datepickerfield_1 = require('./x.datepickerfield');
var x_datepickernativefield_1 = require('./x.datepickernativefield');
var x_emailfield_1 = require('./x.emailfield');
var x_field_1 = require('./x.field');
var x_filefield_1 = require('./x.filefield');
var x_fileinput_1 = require('./x.fileinput');
var x_hiddenfield_1 = require('./x.hiddenfield');
var x_input_1 = require('./x.input');
var x_numberfield_1 = require('./x.numberfield');
var x_passwordfield_1 = require('./x.passwordfield');
var x_pickerfield_1 = require('./x.pickerfield');
var x_radiofield_1 = require('./x.radiofield');
var x_searchfield_1 = require('./x.searchfield');
var x_selectfield_1 = require('./x.selectfield');
var x_singlesliderfield_1 = require('./x.singlesliderfield');
var x_sliderfield_1 = require('./x.sliderfield');
var x_spinnerfield_1 = require('./x.spinnerfield');
var x_textfield_1 = require('./x.textfield');
var x_textareafield_1 = require('./x.textareafield');
var x_textareainput_1 = require('./x.textareainput');
var x_textinput_1 = require('./x.textinput');
var x_togglefield_1 = require('./x.togglefield');
var x_urlfield_1 = require('./x.urlfield');
var x_fieldset_1 = require('./x.fieldset');
var x_formpanel_1 = require('./x.formpanel');
var x_grid_1 = require('./x.grid');
var x_headercontainer_1 = require('./x.headercontainer');
var x_pagingtoolbar_1 = require('./x.pagingtoolbar');
var x_tree_1 = require('./x.tree');
var x_label_1 = require('./x.label');
var x_treelist_1 = require('./x.treelist');
var x_loadmask_1 = require('./x.loadmask');
var x_mask_1 = require('./x.mask');
var x_media_1 = require('./x.media');
var x_menu_1 = require('./x.menu');
var x_messagebox_1 = require('./x.messagebox');
var x_navigationview_1 = require('./x.navigationview');
var x_panel_1 = require('./x.panel');
var x_panelheader_1 = require('./x.panelheader');
var x_paneltitle_1 = require('./x.paneltitle');
var x_datepicker_1 = require('./x.datepicker');
var x_picker_1 = require('./x.picker');
var x_pickerslot_1 = require('./x.pickerslot');
var x_pivotgrid_1 = require('./x.pivotgrid');
var x_pivotrangeeditor_1 = require('./x.pivotrangeeditor');
var x_segmentedbutton_1 = require('./x.segmentedbutton');
var x_sheet_1 = require('./x.sheet');
var x_slider_1 = require('./x.slider');
var x_thumb_1 = require('./x.thumb');
var x_toggleslider_1 = require('./x.toggleslider');
var x_spacer_1 = require('./x.spacer');
var x_tabbar_1 = require('./x.tabbar');
var x_tabpanel_1 = require('./x.tabpanel');
var x_tab_1 = require('./x.tab');
var x_tooltip_1 = require('./x.tooltip');
var x_title_1 = require('./x.title');
var x_titlebar_1 = require('./x.titlebar');
var x_toolbar_1 = require('./x.toolbar');
var x_gauge_1 = require('./x.gauge');
var x_video_1 = require('./x.video');
var x_viewport_1 = require('./x.viewport');
var x_widget_1 = require('./x.widget');
var xModule = (function () {
    function xModule() {
    }
    xModule = __decorate([
        core_1.NgModule({
            exports: [
                x_1.x,
                x_ngcomponent_1.xngcomponent,
                x_button_1.xbutton,
                x_calendar_event_1.xcalendar_event,
                x_calendar_form_add_1.xcalendar_form_add,
                x_calendar_form_edit_1.xcalendar_form_edit,
                x_calendar_daysheader_1.xcalendar_daysheader,
                x_calendar_weeksheader_1.xcalendar_weeksheader,
                x_calendar_list_1.xcalendar_list,
                x_calendar_day_1.xcalendar_day,
                x_calendar_days_1.xcalendar_days,
                x_calendar_month_1.xcalendar_month,
                x_calendar_1.xcalendar,
                x_calendar_week_1.xcalendar_week,
                x_calendar_weeks_1.xcalendar_weeks,
                x_calendar_dayview_1.xcalendar_dayview,
                x_calendar_daysview_1.xcalendar_daysview,
                x_calendar_monthview_1.xcalendar_monthview,
                x_calendar_multiview_1.xcalendar_multiview,
                x_calendar_weekview_1.xcalendar_weekview,
                x_calendar_weeksview_1.xcalendar_weeksview,
                x_carousel_1.xcarousel,
                x_cartesian_1.xcartesian,
                x_interaction_1.xinteraction,
                x_polar_1.xpolar,
                x_spacefilling_1.xspacefilling,
                x_component_1.xcomponent,
                x_container_1.xcontainer,
                x_d3_canvas_1.xd3_canvas,
                x_d3_heatmap_1.xd3_heatmap,
                x_d3_pack_1.xd3_pack,
                x_d3_partition_1.xd3_partition,
                x_d3_sunburst_1.xd3_sunburst,
                x_d3_treemap_1.xd3_treemap,
                x_dataview_1.xdataview,
                x_indexbar_1.xindexbar,
                x_list_1.xlist,
                x_nestedlist_1.xnestedlist,
                x_draw_1.xdraw,
                x_surface_1.xsurface,
                x_checkboxfield_1.xcheckboxfield,
                x_datepickerfield_1.xdatepickerfield,
                x_datepickernativefield_1.xdatepickernativefield,
                x_emailfield_1.xemailfield,
                x_field_1.xfield,
                x_filefield_1.xfilefield,
                x_fileinput_1.xfileinput,
                x_hiddenfield_1.xhiddenfield,
                x_input_1.xinput,
                x_numberfield_1.xnumberfield,
                x_passwordfield_1.xpasswordfield,
                x_pickerfield_1.xpickerfield,
                x_radiofield_1.xradiofield,
                x_searchfield_1.xsearchfield,
                x_selectfield_1.xselectfield,
                x_singlesliderfield_1.xsinglesliderfield,
                x_sliderfield_1.xsliderfield,
                x_spinnerfield_1.xspinnerfield,
                x_textfield_1.xtextfield,
                x_textareafield_1.xtextareafield,
                x_textareainput_1.xtextareainput,
                x_textinput_1.xtextinput,
                x_togglefield_1.xtogglefield,
                x_urlfield_1.xurlfield,
                x_fieldset_1.xfieldset,
                x_formpanel_1.xformpanel,
                x_grid_1.xgrid,
                x_headercontainer_1.xheadercontainer,
                x_pagingtoolbar_1.xpagingtoolbar,
                x_tree_1.xtree,
                x_label_1.xlabel,
                x_treelist_1.xtreelist,
                x_loadmask_1.xloadmask,
                x_mask_1.xmask,
                x_media_1.xmedia,
                x_menu_1.xmenu,
                x_messagebox_1.xmessagebox,
                x_navigationview_1.xnavigationview,
                x_panel_1.xpanel,
                x_panelheader_1.xpanelheader,
                x_paneltitle_1.xpaneltitle,
                x_datepicker_1.xdatepicker,
                x_picker_1.xpicker,
                x_pickerslot_1.xpickerslot,
                x_pivotgrid_1.xpivotgrid,
                x_pivotrangeeditor_1.xpivotrangeeditor,
                x_segmentedbutton_1.xsegmentedbutton,
                x_sheet_1.xsheet,
                x_slider_1.xslider,
                x_thumb_1.xthumb,
                x_toggleslider_1.xtoggleslider,
                x_spacer_1.xspacer,
                x_tabbar_1.xtabbar,
                x_tabpanel_1.xtabpanel,
                x_tab_1.xtab,
                x_tooltip_1.xtooltip,
                x_title_1.xtitle,
                x_titlebar_1.xtitlebar,
                x_toolbar_1.xtoolbar,
                x_gauge_1.xgauge,
                x_video_1.xvideo,
                x_viewport_1.xviewport,
                x_widget_1.xwidget
            ],
            declarations: [
                x_1.x,
                x_ngcomponent_1.xngcomponent,
                x_button_1.xbutton,
                x_calendar_event_1.xcalendar_event,
                x_calendar_form_add_1.xcalendar_form_add,
                x_calendar_form_edit_1.xcalendar_form_edit,
                x_calendar_daysheader_1.xcalendar_daysheader,
                x_calendar_weeksheader_1.xcalendar_weeksheader,
                x_calendar_list_1.xcalendar_list,
                x_calendar_day_1.xcalendar_day,
                x_calendar_days_1.xcalendar_days,
                x_calendar_month_1.xcalendar_month,
                x_calendar_1.xcalendar,
                x_calendar_week_1.xcalendar_week,
                x_calendar_weeks_1.xcalendar_weeks,
                x_calendar_dayview_1.xcalendar_dayview,
                x_calendar_daysview_1.xcalendar_daysview,
                x_calendar_monthview_1.xcalendar_monthview,
                x_calendar_multiview_1.xcalendar_multiview,
                x_calendar_weekview_1.xcalendar_weekview,
                x_calendar_weeksview_1.xcalendar_weeksview,
                x_carousel_1.xcarousel,
                x_cartesian_1.xcartesian,
                x_interaction_1.xinteraction,
                x_polar_1.xpolar,
                x_spacefilling_1.xspacefilling,
                x_component_1.xcomponent,
                x_container_1.xcontainer,
                x_d3_canvas_1.xd3_canvas,
                x_d3_heatmap_1.xd3_heatmap,
                x_d3_pack_1.xd3_pack,
                x_d3_partition_1.xd3_partition,
                x_d3_sunburst_1.xd3_sunburst,
                x_d3_treemap_1.xd3_treemap,
                x_dataview_1.xdataview,
                x_indexbar_1.xindexbar,
                x_list_1.xlist,
                x_nestedlist_1.xnestedlist,
                x_draw_1.xdraw,
                x_surface_1.xsurface,
                x_checkboxfield_1.xcheckboxfield,
                x_datepickerfield_1.xdatepickerfield,
                x_datepickernativefield_1.xdatepickernativefield,
                x_emailfield_1.xemailfield,
                x_field_1.xfield,
                x_filefield_1.xfilefield,
                x_fileinput_1.xfileinput,
                x_hiddenfield_1.xhiddenfield,
                x_input_1.xinput,
                x_numberfield_1.xnumberfield,
                x_passwordfield_1.xpasswordfield,
                x_pickerfield_1.xpickerfield,
                x_radiofield_1.xradiofield,
                x_searchfield_1.xsearchfield,
                x_selectfield_1.xselectfield,
                x_singlesliderfield_1.xsinglesliderfield,
                x_sliderfield_1.xsliderfield,
                x_spinnerfield_1.xspinnerfield,
                x_textfield_1.xtextfield,
                x_textareafield_1.xtextareafield,
                x_textareainput_1.xtextareainput,
                x_textinput_1.xtextinput,
                x_togglefield_1.xtogglefield,
                x_urlfield_1.xurlfield,
                x_fieldset_1.xfieldset,
                x_formpanel_1.xformpanel,
                x_grid_1.xgrid,
                x_headercontainer_1.xheadercontainer,
                x_pagingtoolbar_1.xpagingtoolbar,
                x_tree_1.xtree,
                x_label_1.xlabel,
                x_treelist_1.xtreelist,
                x_loadmask_1.xloadmask,
                x_mask_1.xmask,
                x_media_1.xmedia,
                x_menu_1.xmenu,
                x_messagebox_1.xmessagebox,
                x_navigationview_1.xnavigationview,
                x_panel_1.xpanel,
                x_panelheader_1.xpanelheader,
                x_paneltitle_1.xpaneltitle,
                x_datepicker_1.xdatepicker,
                x_picker_1.xpicker,
                x_pickerslot_1.xpickerslot,
                x_pivotgrid_1.xpivotgrid,
                x_pivotrangeeditor_1.xpivotrangeeditor,
                x_segmentedbutton_1.xsegmentedbutton,
                x_sheet_1.xsheet,
                x_slider_1.xslider,
                x_thumb_1.xthumb,
                x_toggleslider_1.xtoggleslider,
                x_spacer_1.xspacer,
                x_tabbar_1.xtabbar,
                x_tabpanel_1.xtabpanel,
                x_tab_1.xtab,
                x_tooltip_1.xtooltip,
                x_title_1.xtitle,
                x_titlebar_1.xtitlebar,
                x_toolbar_1.xtoolbar,
                x_gauge_1.xgauge,
                x_video_1.xvideo,
                x_viewport_1.xviewport,
                x_widget_1.xwidget
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], xModule);
    return xModule;
}());
exports.xModule = xModule;
