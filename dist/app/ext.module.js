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
var ext_1 = require('./ext');
var ext_ngcomponent_1 = require('./ext.ngcomponent');
var ext_actionsheet_1 = require('./ext.actionsheet');
var ext_audio_1 = require('./ext.audio');
var ext_button_1 = require('./ext.button');
var ext_calendar_event_1 = require('./ext.calendar_event');
var ext_calendar_form_add_1 = require('./ext.calendar_form_add');
var ext_calendar_form_edit_1 = require('./ext.calendar_form_edit');
var ext_calendar_daysheader_1 = require('./ext.calendar_daysheader');
var ext_calendar_weeksheader_1 = require('./ext.calendar_weeksheader');
var ext_calendar_list_1 = require('./ext.calendar_list');
var ext_calendar_day_1 = require('./ext.calendar_day');
var ext_calendar_days_1 = require('./ext.calendar_days');
var ext_calendar_month_1 = require('./ext.calendar_month');
var ext_calendar_1 = require('./ext.calendar');
var ext_calendar_week_1 = require('./ext.calendar_week');
var ext_calendar_weeks_1 = require('./ext.calendar_weeks');
var ext_calendar_dayview_1 = require('./ext.calendar_dayview');
var ext_calendar_daysview_1 = require('./ext.calendar_daysview');
var ext_calendar_monthview_1 = require('./ext.calendar_monthview');
var ext_calendar_multiview_1 = require('./ext.calendar_multiview');
var ext_calendar_weekview_1 = require('./ext.calendar_weekview');
var ext_calendar_weeksview_1 = require('./ext.calendar_weeksview');
var ext_carousel_1 = require('./ext.carousel');
var ext_carouselindicator_1 = require('./ext.carouselindicator');
var ext_axis_1 = require('./ext.axis');
var ext_axis3d_1 = require('./ext.axis3d');
var ext_cartesian_1 = require('./ext.cartesian');
var ext_interaction_1 = require('./ext.interaction');
var ext_polar_1 = require('./ext.polar');
var ext_spacefilling_1 = require('./ext.spacefilling');
var ext_component_1 = require('./ext.component');
var ext_container_1 = require('./ext.container');
var ext_d3_canvas_1 = require('./ext.d3_canvas');
var ext_d3_heatmap_1 = require('./ext.d3_heatmap');
var ext_d3_pack_1 = require('./ext.d3_pack');
var ext_d3_partition_1 = require('./ext.d3_partition');
var ext_d3_sunburst_1 = require('./ext.d3_sunburst');
var ext_d3_treemap_1 = require('./ext.d3_treemap');
var ext_dataview_1 = require('./ext.dataview');
var ext_indexbar_1 = require('./ext.indexbar');
var ext_list_1 = require('./ext.list');
var ext_nestedlist_1 = require('./ext.nestedlist');
var ext_draw_1 = require('./ext.draw');
var ext_surface_1 = require('./ext.surface');
var ext_checkboxfield_1 = require('./ext.checkboxfield');
var ext_datepickerfield_1 = require('./ext.datepickerfield');
var ext_datepickernativefield_1 = require('./ext.datepickernativefield');
var ext_emailfield_1 = require('./ext.emailfield');
var ext_field_1 = require('./ext.field');
var ext_filefield_1 = require('./ext.filefield');
var ext_fileinput_1 = require('./ext.fileinput');
var ext_hiddenfield_1 = require('./ext.hiddenfield');
var ext_input_1 = require('./ext.input');
var ext_numberfield_1 = require('./ext.numberfield');
var ext_passwordfield_1 = require('./ext.passwordfield');
var ext_pickerfield_1 = require('./ext.pickerfield');
var ext_radiofield_1 = require('./ext.radiofield');
var ext_searchfield_1 = require('./ext.searchfield');
var ext_selectfield_1 = require('./ext.selectfield');
var ext_singlesliderfield_1 = require('./ext.singlesliderfield');
var ext_sliderfield_1 = require('./ext.sliderfield');
var ext_spinnerfield_1 = require('./ext.spinnerfield');
var ext_textfield_1 = require('./ext.textfield');
var ext_textareafield_1 = require('./ext.textareafield');
var ext_textareainput_1 = require('./ext.textareainput');
var ext_textinput_1 = require('./ext.textinput');
var ext_togglefield_1 = require('./ext.togglefield');
var ext_urlfield_1 = require('./ext.urlfield');
var ext_fieldset_1 = require('./ext.fieldset');
var ext_formpanel_1 = require('./ext.formpanel');
var ext_grid_1 = require('./ext.grid');
var ext_headercontainer_1 = require('./ext.headercontainer');
var ext_pagingtoolbar_1 = require('./ext.pagingtoolbar');
var ext_tree_1 = require('./ext.tree');
var ext_label_1 = require('./ext.label');
var ext_treelist_1 = require('./ext.treelist');
var ext_loadmask_1 = require('./ext.loadmask');
var ext_mask_1 = require('./ext.mask');
var ext_media_1 = require('./ext.media');
var ext_menu_1 = require('./ext.menu');
var ext_messagebox_1 = require('./ext.messagebox');
var ext_navigationview_1 = require('./ext.navigationview');
var ext_panel_1 = require('./ext.panel');
var ext_panelheader_1 = require('./ext.panelheader');
var ext_paneltitle_1 = require('./ext.paneltitle');
var ext_datepicker_1 = require('./ext.datepicker');
var ext_picker_1 = require('./ext.picker');
var ext_pickerslot_1 = require('./ext.pickerslot');
var ext_pivotgrid_1 = require('./ext.pivotgrid');
var ext_pivotrangeeditor_1 = require('./ext.pivotrangeeditor');
var ext_segmentedbutton_1 = require('./ext.segmentedbutton');
var ext_sheet_1 = require('./ext.sheet');
var ext_slider_1 = require('./ext.slider');
var ext_thumb_1 = require('./ext.thumb');
var ext_toggleslider_1 = require('./ext.toggleslider');
var ext_spacer_1 = require('./ext.spacer');
var ext_tabbar_1 = require('./ext.tabbar');
var ext_tabpanel_1 = require('./ext.tabpanel');
var ext_tab_1 = require('./ext.tab');
var ext_tooltip_1 = require('./ext.tooltip');
var ext_title_1 = require('./ext.title');
var ext_titlebar_1 = require('./ext.titlebar');
var ext_toolbar_1 = require('./ext.toolbar');
var ext_gauge_1 = require('./ext.gauge');
var ext_video_1 = require('./ext.video');
var ext_viewport_1 = require('./ext.viewport');
var ext_widget_1 = require('./ext.widget');
var ExtModule = (function () {
    function ExtModule() {
    }
    ExtModule = __decorate([
        core_1.NgModule({
            exports: [
                ext_1.ext,
                ext_ngcomponent_1.extngcomponent,
                ext_actionsheet_1.extactionsheet,
                ext_audio_1.extaudio,
                ext_button_1.extbutton,
                ext_calendar_event_1.extcalendar_event,
                ext_calendar_form_add_1.extcalendar_form_add,
                ext_calendar_form_edit_1.extcalendar_form_edit,
                ext_calendar_daysheader_1.extcalendar_daysheader,
                ext_calendar_weeksheader_1.extcalendar_weeksheader,
                ext_calendar_list_1.extcalendar_list,
                ext_calendar_day_1.extcalendar_day,
                ext_calendar_days_1.extcalendar_days,
                ext_calendar_month_1.extcalendar_month,
                ext_calendar_1.extcalendar,
                ext_calendar_week_1.extcalendar_week,
                ext_calendar_weeks_1.extcalendar_weeks,
                ext_calendar_dayview_1.extcalendar_dayview,
                ext_calendar_daysview_1.extcalendar_daysview,
                ext_calendar_monthview_1.extcalendar_monthview,
                ext_calendar_multiview_1.extcalendar_multiview,
                ext_calendar_weekview_1.extcalendar_weekview,
                ext_calendar_weeksview_1.extcalendar_weeksview,
                ext_carousel_1.extcarousel,
                ext_carouselindicator_1.extcarouselindicator,
                ext_axis_1.extaxis,
                ext_axis3d_1.extaxis3d,
                ext_cartesian_1.extcartesian,
                ext_interaction_1.extinteraction,
                ext_polar_1.extpolar,
                ext_spacefilling_1.extspacefilling,
                ext_component_1.extcomponent,
                ext_container_1.extcontainer,
                ext_d3_canvas_1.extd3_canvas,
                ext_d3_heatmap_1.extd3_heatmap,
                ext_d3_pack_1.extd3_pack,
                ext_d3_partition_1.extd3_partition,
                ext_d3_sunburst_1.extd3_sunburst,
                ext_d3_treemap_1.extd3_treemap,
                ext_dataview_1.extdataview,
                ext_indexbar_1.extindexbar,
                ext_list_1.extlist,
                ext_nestedlist_1.extnestedlist,
                ext_draw_1.extdraw,
                ext_surface_1.extsurface,
                ext_checkboxfield_1.extcheckboxfield,
                ext_datepickerfield_1.extdatepickerfield,
                ext_datepickernativefield_1.extdatepickernativefield,
                ext_emailfield_1.extemailfield,
                ext_field_1.extfield,
                ext_filefield_1.extfilefield,
                ext_fileinput_1.extfileinput,
                ext_hiddenfield_1.exthiddenfield,
                ext_input_1.extinput,
                ext_numberfield_1.extnumberfield,
                ext_passwordfield_1.extpasswordfield,
                ext_pickerfield_1.extpickerfield,
                ext_radiofield_1.extradiofield,
                ext_searchfield_1.extsearchfield,
                ext_selectfield_1.extselectfield,
                ext_singlesliderfield_1.extsinglesliderfield,
                ext_sliderfield_1.extsliderfield,
                ext_spinnerfield_1.extspinnerfield,
                ext_textfield_1.exttextfield,
                ext_textareafield_1.exttextareafield,
                ext_textareainput_1.exttextareainput,
                ext_textinput_1.exttextinput,
                ext_togglefield_1.exttogglefield,
                ext_urlfield_1.exturlfield,
                ext_fieldset_1.extfieldset,
                ext_formpanel_1.extformpanel,
                ext_grid_1.extgrid,
                ext_headercontainer_1.extheadercontainer,
                ext_pagingtoolbar_1.extpagingtoolbar,
                ext_tree_1.exttree,
                ext_label_1.extlabel,
                ext_treelist_1.exttreelist,
                ext_loadmask_1.extloadmask,
                ext_mask_1.extmask,
                ext_media_1.extmedia,
                ext_menu_1.extmenu,
                ext_messagebox_1.extmessagebox,
                ext_navigationview_1.extnavigationview,
                ext_panel_1.extpanel,
                ext_panelheader_1.extpanelheader,
                ext_paneltitle_1.extpaneltitle,
                ext_datepicker_1.extdatepicker,
                ext_picker_1.extpicker,
                ext_pickerslot_1.extpickerslot,
                ext_pivotgrid_1.extpivotgrid,
                ext_pivotrangeeditor_1.extpivotrangeeditor,
                ext_segmentedbutton_1.extsegmentedbutton,
                ext_sheet_1.extsheet,
                ext_slider_1.extslider,
                ext_thumb_1.extthumb,
                ext_toggleslider_1.exttoggleslider,
                ext_spacer_1.extspacer,
                ext_tabbar_1.exttabbar,
                ext_tabpanel_1.exttabpanel,
                ext_tab_1.exttab,
                ext_tooltip_1.exttooltip,
                ext_title_1.exttitle,
                ext_titlebar_1.exttitlebar,
                ext_toolbar_1.exttoolbar,
                ext_gauge_1.extgauge,
                ext_video_1.extvideo,
                ext_viewport_1.extviewport,
                ext_widget_1.extwidget
            ],
            declarations: [
                ext_1.ext,
                ext_ngcomponent_1.extngcomponent,
                ext_actionsheet_1.extactionsheet,
                ext_audio_1.extaudio,
                ext_button_1.extbutton,
                ext_calendar_event_1.extcalendar_event,
                ext_calendar_form_add_1.extcalendar_form_add,
                ext_calendar_form_edit_1.extcalendar_form_edit,
                ext_calendar_daysheader_1.extcalendar_daysheader,
                ext_calendar_weeksheader_1.extcalendar_weeksheader,
                ext_calendar_list_1.extcalendar_list,
                ext_calendar_day_1.extcalendar_day,
                ext_calendar_days_1.extcalendar_days,
                ext_calendar_month_1.extcalendar_month,
                ext_calendar_1.extcalendar,
                ext_calendar_week_1.extcalendar_week,
                ext_calendar_weeks_1.extcalendar_weeks,
                ext_calendar_dayview_1.extcalendar_dayview,
                ext_calendar_daysview_1.extcalendar_daysview,
                ext_calendar_monthview_1.extcalendar_monthview,
                ext_calendar_multiview_1.extcalendar_multiview,
                ext_calendar_weekview_1.extcalendar_weekview,
                ext_calendar_weeksview_1.extcalendar_weeksview,
                ext_carousel_1.extcarousel,
                ext_carouselindicator_1.extcarouselindicator,
                ext_axis_1.extaxis,
                ext_axis3d_1.extaxis3d,
                ext_cartesian_1.extcartesian,
                ext_interaction_1.extinteraction,
                ext_polar_1.extpolar,
                ext_spacefilling_1.extspacefilling,
                ext_component_1.extcomponent,
                ext_container_1.extcontainer,
                ext_d3_canvas_1.extd3_canvas,
                ext_d3_heatmap_1.extd3_heatmap,
                ext_d3_pack_1.extd3_pack,
                ext_d3_partition_1.extd3_partition,
                ext_d3_sunburst_1.extd3_sunburst,
                ext_d3_treemap_1.extd3_treemap,
                ext_dataview_1.extdataview,
                ext_indexbar_1.extindexbar,
                ext_list_1.extlist,
                ext_nestedlist_1.extnestedlist,
                ext_draw_1.extdraw,
                ext_surface_1.extsurface,
                ext_checkboxfield_1.extcheckboxfield,
                ext_datepickerfield_1.extdatepickerfield,
                ext_datepickernativefield_1.extdatepickernativefield,
                ext_emailfield_1.extemailfield,
                ext_field_1.extfield,
                ext_filefield_1.extfilefield,
                ext_fileinput_1.extfileinput,
                ext_hiddenfield_1.exthiddenfield,
                ext_input_1.extinput,
                ext_numberfield_1.extnumberfield,
                ext_passwordfield_1.extpasswordfield,
                ext_pickerfield_1.extpickerfield,
                ext_radiofield_1.extradiofield,
                ext_searchfield_1.extsearchfield,
                ext_selectfield_1.extselectfield,
                ext_singlesliderfield_1.extsinglesliderfield,
                ext_sliderfield_1.extsliderfield,
                ext_spinnerfield_1.extspinnerfield,
                ext_textfield_1.exttextfield,
                ext_textareafield_1.exttextareafield,
                ext_textareainput_1.exttextareainput,
                ext_textinput_1.exttextinput,
                ext_togglefield_1.exttogglefield,
                ext_urlfield_1.exturlfield,
                ext_fieldset_1.extfieldset,
                ext_formpanel_1.extformpanel,
                ext_grid_1.extgrid,
                ext_headercontainer_1.extheadercontainer,
                ext_pagingtoolbar_1.extpagingtoolbar,
                ext_tree_1.exttree,
                ext_label_1.extlabel,
                ext_treelist_1.exttreelist,
                ext_loadmask_1.extloadmask,
                ext_mask_1.extmask,
                ext_media_1.extmedia,
                ext_menu_1.extmenu,
                ext_messagebox_1.extmessagebox,
                ext_navigationview_1.extnavigationview,
                ext_panel_1.extpanel,
                ext_panelheader_1.extpanelheader,
                ext_paneltitle_1.extpaneltitle,
                ext_datepicker_1.extdatepicker,
                ext_picker_1.extpicker,
                ext_pickerslot_1.extpickerslot,
                ext_pivotgrid_1.extpivotgrid,
                ext_pivotrangeeditor_1.extpivotrangeeditor,
                ext_segmentedbutton_1.extsegmentedbutton,
                ext_sheet_1.extsheet,
                ext_slider_1.extslider,
                ext_thumb_1.extthumb,
                ext_toggleslider_1.exttoggleslider,
                ext_spacer_1.extspacer,
                ext_tabbar_1.exttabbar,
                ext_tabpanel_1.exttabpanel,
                ext_tab_1.exttab,
                ext_tooltip_1.exttooltip,
                ext_title_1.exttitle,
                ext_titlebar_1.exttitlebar,
                ext_toolbar_1.exttoolbar,
                ext_gauge_1.extgauge,
                ext_video_1.extvideo,
                ext_viewport_1.extviewport,
                ext_widget_1.extwidget
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ExtModule);
    return ExtModule;
}());
exports.ExtModule = ExtModule;
