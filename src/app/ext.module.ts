import { NgModule } from "@angular/core";
import { ext } from './ext';
import { extngcomponent } from './ext.ngcomponent';
import { extclass } from './ext.class';
import { extactionsheet } from './ext.actionsheet';
import { extaudio } from './ext.audio';
import { extbutton } from './ext.button';
import { extcalendar_event } from './ext.calendar_event';
import { extcalendar_form_add } from './ext.calendar_form_add';
import { extcalendar_form_edit } from './ext.calendar_form_edit';
import { extcalendar_daysheader } from './ext.calendar_daysheader';
import { extcalendar_weeksheader } from './ext.calendar_weeksheader';
import { extcalendar_list } from './ext.calendar_list';
import { extcalendar_day } from './ext.calendar_day';
import { extcalendar_days } from './ext.calendar_days';
import { extcalendar_month } from './ext.calendar_month';
import { extcalendar } from './ext.calendar';
import { extcalendar_week } from './ext.calendar_week';
import { extcalendar_weeks } from './ext.calendar_weeks';
import { extcalendar_dayview } from './ext.calendar_dayview';
import { extcalendar_daysview } from './ext.calendar_daysview';
import { extcalendar_monthview } from './ext.calendar_monthview';
import { extcalendar_multiview } from './ext.calendar_multiview';
import { extcalendar_weekview } from './ext.calendar_weekview';
import { extcalendar_weeksview } from './ext.calendar_weeksview';
import { extcarousel } from './ext.carousel';
import { extcarouselindicator } from './ext.carouselindicator';
import { extaxis } from './ext.axis';
import { extaxis3d } from './ext.axis3d';
import { extcartesian } from './ext.cartesian';
import { extinteraction } from './ext.interaction';
import { extpolar } from './ext.polar';
import { extspacefilling } from './ext.spacefilling';
import { extcomponent } from './ext.component';
import { extcontainer } from './ext.container';
import { extd3_canvas } from './ext.d3_canvas';
import { extd3_heatmap } from './ext.d3_heatmap';
import { extd3_pack } from './ext.d3_pack';
import { extd3_partition } from './ext.d3_partition';
import { extd3_sunburst } from './ext.d3_sunburst';
import { extd3_treemap } from './ext.d3_treemap';
import { extdataview } from './ext.dataview';
import { extindexbar } from './ext.indexbar';
import { extlist } from './ext.list';
import { extnestedlist } from './ext.nestedlist';
import { extdraw } from './ext.draw';
import { extsurface } from './ext.surface';
import { extcheckboxfield } from './ext.checkboxfield';
import { extdatepickerfield } from './ext.datepickerfield';
import { extdatepickernativefield } from './ext.datepickernativefield';
import { extemailfield } from './ext.emailfield';
import { extfield } from './ext.field';
import { extfilefield } from './ext.filefield';
import { extfileinput } from './ext.fileinput';
import { exthiddenfield } from './ext.hiddenfield';
import { extinput } from './ext.input';
import { extnumberfield } from './ext.numberfield';
import { extpasswordfield } from './ext.passwordfield';
import { extpickerfield } from './ext.pickerfield';
import { extradiofield } from './ext.radiofield';
import { extsearchfield } from './ext.searchfield';
import { extselectfield } from './ext.selectfield';
import { extsinglesliderfield } from './ext.singlesliderfield';
import { extsliderfield } from './ext.sliderfield';
import { extspinnerfield } from './ext.spinnerfield';
import { exttextfield } from './ext.textfield';
import { exttextareafield } from './ext.textareafield';
import { exttextareainput } from './ext.textareainput';
import { exttextinput } from './ext.textinput';
import { exttogglefield } from './ext.togglefield';
import { exturlfield } from './ext.urlfield';
import { extfieldset } from './ext.fieldset';
import { extformpanel } from './ext.formpanel';
import { extgrid } from './ext.grid';
import { extheadercontainer } from './ext.headercontainer';
import { extpagingtoolbar } from './ext.pagingtoolbar';
import { exttree } from './ext.tree';
import { extlabel } from './ext.label';
import { exttreelist } from './ext.treelist';
import { extloadmask } from './ext.loadmask';
import { extmask } from './ext.mask';
import { extmedia } from './ext.media';
import { extmenu } from './ext.menu';
import { extmessagebox } from './ext.messagebox';
import { extnavigationview } from './ext.navigationview';
import { extpanel } from './ext.panel';
import { extpanelheader } from './ext.panelheader';
import { extpaneltitle } from './ext.paneltitle';
import { extdatepicker } from './ext.datepicker';
import { extpicker } from './ext.picker';
import { extpickerslot } from './ext.pickerslot';
import { extpivotgrid } from './ext.pivotgrid';
import { extpivotrangeeditor } from './ext.pivotrangeeditor';
import { extsegmentedbutton } from './ext.segmentedbutton';
import { extsheet } from './ext.sheet';
import { extslider } from './ext.slider';
import { extthumb } from './ext.thumb';
import { exttoggleslider } from './ext.toggleslider';
import { extspacer } from './ext.spacer';
import { exttabbar } from './ext.tabbar';
import { exttabpanel } from './ext.tabpanel';
import { exttab } from './ext.tab';
import { exttooltip } from './ext.tooltip';
import { exttitle } from './ext.title';
import { exttitlebar } from './ext.titlebar';
import { exttoolbar } from './ext.toolbar';
import { extgauge } from './ext.gauge';
import { extvideo } from './ext.video';
import { extviewport } from './ext.viewport';
import { extwidget } from './ext.widget';

@NgModule({
	exports: [
		ext,
		extngcomponent,
		extactionsheet,
		extaudio,
		extbutton,
		extcalendar_event,
		extcalendar_form_add,
		extcalendar_form_edit,
		extcalendar_daysheader,
		extcalendar_weeksheader,
		extcalendar_list,
		extcalendar_day,
		extcalendar_days,
		extcalendar_month,
		extcalendar,
		extcalendar_week,
		extcalendar_weeks,
		extcalendar_dayview,
		extcalendar_daysview,
		extcalendar_monthview,
		extcalendar_multiview,
		extcalendar_weekview,
		extcalendar_weeksview,
		extcarousel,
		extcarouselindicator,
		extaxis,
		extaxis3d,
		extcartesian,
		extinteraction,
		extpolar,
		extspacefilling,
		extcomponent,
		extcontainer,
		extd3_canvas,
		extd3_heatmap,
		extd3_pack,
		extd3_partition,
		extd3_sunburst,
		extd3_treemap,
		extdataview,
		extindexbar,
		extlist,
		extnestedlist,
		extdraw,
		extsurface,
		extcheckboxfield,
		extdatepickerfield,
		extdatepickernativefield,
		extemailfield,
		extfield,
		extfilefield,
		extfileinput,
		exthiddenfield,
		extinput,
		extnumberfield,
		extpasswordfield,
		extpickerfield,
		extradiofield,
		extsearchfield,
		extselectfield,
		extsinglesliderfield,
		extsliderfield,
		extspinnerfield,
		exttextfield,
		exttextareafield,
		exttextareainput,
		exttextinput,
		exttogglefield,
		exturlfield,
		extfieldset,
		extformpanel,
		extgrid,
		extheadercontainer,
		extpagingtoolbar,
		exttree,
		extlabel,
		exttreelist,
		extloadmask,
		extmask,
		extmedia,
		extmenu,
		extmessagebox,
		extnavigationview,
		extpanel,
		extpanelheader,
		extpaneltitle,
		extdatepicker,
		extpicker,
		extpickerslot,
		extpivotgrid,
		extpivotrangeeditor,
		extsegmentedbutton,
		extsheet,
		extslider,
		extthumb,
		exttoggleslider,
		extspacer,
		exttabbar,
		exttabpanel,
		exttab,
		exttooltip,
		exttitle,
		exttitlebar,
		exttoolbar,
		extgauge,
		extvideo,
		extviewport,
		extwidget
 ],
	declarations: [
		ext,
		extngcomponent,
		extactionsheet,
		extaudio,
		extbutton,
		extcalendar_event,
		extcalendar_form_add,
		extcalendar_form_edit,
		extcalendar_daysheader,
		extcalendar_weeksheader,
		extcalendar_list,
		extcalendar_day,
		extcalendar_days,
		extcalendar_month,
		extcalendar,
		extcalendar_week,
		extcalendar_weeks,
		extcalendar_dayview,
		extcalendar_daysview,
		extcalendar_monthview,
		extcalendar_multiview,
		extcalendar_weekview,
		extcalendar_weeksview,
		extcarousel,
		extcarouselindicator,
		extaxis,
		extaxis3d,
		extcartesian,
		extinteraction,
		extpolar,
		extspacefilling,
		extcomponent,
		extcontainer,
		extd3_canvas,
		extd3_heatmap,
		extd3_pack,
		extd3_partition,
		extd3_sunburst,
		extd3_treemap,
		extdataview,
		extindexbar,
		extlist,
		extnestedlist,
		extdraw,
		extsurface,
		extcheckboxfield,
		extdatepickerfield,
		extdatepickernativefield,
		extemailfield,
		extfield,
		extfilefield,
		extfileinput,
		exthiddenfield,
		extinput,
		extnumberfield,
		extpasswordfield,
		extpickerfield,
		extradiofield,
		extsearchfield,
		extselectfield,
		extsinglesliderfield,
		extsliderfield,
		extspinnerfield,
		exttextfield,
		exttextareafield,
		exttextareainput,
		exttextinput,
		exttogglefield,
		exturlfield,
		extfieldset,
		extformpanel,
		extgrid,
		extheadercontainer,
		extpagingtoolbar,
		exttree,
		extlabel,
		exttreelist,
		extloadmask,
		extmask,
		extmedia,
		extmenu,
		extmessagebox,
		extnavigationview,
		extpanel,
		extpanelheader,
		extpaneltitle,
		extdatepicker,
		extpicker,
		extpickerslot,
		extpivotgrid,
		extpivotrangeeditor,
		extsegmentedbutton,
		extsheet,
		extslider,
		extthumb,
		exttoggleslider,
		extspacer,
		exttabbar,
		exttabpanel,
		exttab,
		exttooltip,
		exttitle,
		exttitlebar,
		exttoolbar,
		extgauge,
		extvideo,
		extviewport,
		extwidget
 ]
})
export class ExtModule { }
	