import { NgModule } from "@angular/core";
import { x } from './x';
import { xngcomponent } from './x.ngcomponent';
import { xclass } from './x.class';
import { xbutton } from './x.button';
import { xcalendar_event } from './x.calendar_event';
import { xcalendar_form_add } from './x.calendar_form_add';
import { xcalendar_form_edit } from './x.calendar_form_edit';
import { xcalendar_daysheader } from './x.calendar_daysheader';
import { xcalendar_weeksheader } from './x.calendar_weeksheader';
import { xcalendar_list } from './x.calendar_list';
import { xcalendar_day } from './x.calendar_day';
import { xcalendar_days } from './x.calendar_days';
import { xcalendar_month } from './x.calendar_month';
import { xcalendar } from './x.calendar';
import { xcalendar_week } from './x.calendar_week';
import { xcalendar_weeks } from './x.calendar_weeks';
import { xcalendar_dayview } from './x.calendar_dayview';
import { xcalendar_daysview } from './x.calendar_daysview';
import { xcalendar_monthview } from './x.calendar_monthview';
import { xcalendar_multiview } from './x.calendar_multiview';
import { xcalendar_weekview } from './x.calendar_weekview';
import { xcalendar_weeksview } from './x.calendar_weeksview';
import { xcarousel } from './x.carousel';
import { xcartesian } from './x.cartesian';
import { xinteraction } from './x.interaction';
import { xpolar } from './x.polar';
import { xspacefilling } from './x.spacefilling';
import { xcomponent } from './x.component';
import { xcontainer } from './x.container';
import { xd3_canvas } from './x.d3_canvas';
import { xd3_heatmap } from './x.d3_heatmap';
import { xd3_pack } from './x.d3_pack';
import { xd3_partition } from './x.d3_partition';
import { xd3_sunburst } from './x.d3_sunburst';
import { xd3_treemap } from './x.d3_treemap';
import { xdataview } from './x.dataview';
import { xindexbar } from './x.indexbar';
import { xlist } from './x.list';
import { xnestedlist } from './x.nestedlist';
import { xdraw } from './x.draw';
import { xsurface } from './x.surface';
import { xcheckboxfield } from './x.checkboxfield';
import { xdatepickerfield } from './x.datepickerfield';
import { xdatepickernativefield } from './x.datepickernativefield';
import { xemailfield } from './x.emailfield';
import { xfield } from './x.field';
import { xfilefield } from './x.filefield';
import { xfileinput } from './x.fileinput';
import { xhiddenfield } from './x.hiddenfield';
import { xinput } from './x.input';
import { xnumberfield } from './x.numberfield';
import { xpasswordfield } from './x.passwordfield';
import { xpickerfield } from './x.pickerfield';
import { xradiofield } from './x.radiofield';
import { xsearchfield } from './x.searchfield';
import { xselectfield } from './x.selectfield';
import { xsinglesliderfield } from './x.singlesliderfield';
import { xsliderfield } from './x.sliderfield';
import { xspinnerfield } from './x.spinnerfield';
import { xtextfield } from './x.textfield';
import { xtextareafield } from './x.textareafield';
import { xtextareainput } from './x.textareainput';
import { xtextinput } from './x.textinput';
import { xtogglefield } from './x.togglefield';
import { xurlfield } from './x.urlfield';
import { xfieldset } from './x.fieldset';
import { xformpanel } from './x.formpanel';
import { xgrid } from './x.grid';
import { xheadercontainer } from './x.headercontainer';
import { xpagingtoolbar } from './x.pagingtoolbar';
import { xtree } from './x.tree';
import { xlabel } from './x.label';
import { xtreelist } from './x.treelist';
import { xloadmask } from './x.loadmask';
import { xmask } from './x.mask';
import { xmedia } from './x.media';
import { xmenu } from './x.menu';
import { xmessagebox } from './x.messagebox';
import { xnavigationview } from './x.navigationview';
import { xpanel } from './x.panel';
import { xpanelheader } from './x.panelheader';
import { xpaneltitle } from './x.paneltitle';
import { xdatepicker } from './x.datepicker';
import { xpicker } from './x.picker';
import { xpickerslot } from './x.pickerslot';
import { xpivotgrid } from './x.pivotgrid';
import { xpivotrangeeditor } from './x.pivotrangeeditor';
import { xsegmentedbutton } from './x.segmentedbutton';
import { xsheet } from './x.sheet';
import { xslider } from './x.slider';
import { xthumb } from './x.thumb';
import { xtoggleslider } from './x.toggleslider';
import { xspacer } from './x.spacer';
import { xtabbar } from './x.tabbar';
import { xtabpanel } from './x.tabpanel';
import { xtab } from './x.tab';
import { xtooltip } from './x.tooltip';
import { xtitle } from './x.title';
import { xtitlebar } from './x.titlebar';
import { xtoolbar } from './x.toolbar';
import { xgauge } from './x.gauge';
import { xvideo } from './x.video';
import { xviewport } from './x.viewport';
import { xwidget } from './x.widget';

@NgModule({
	exports: [
		x,
		xngcomponent,
		xbutton,
		xcalendar_event,
		xcalendar_form_add,
		xcalendar_form_edit,
		xcalendar_daysheader,
		xcalendar_weeksheader,
		xcalendar_list,
		xcalendar_day,
		xcalendar_days,
		xcalendar_month,
		xcalendar,
		xcalendar_week,
		xcalendar_weeks,
		xcalendar_dayview,
		xcalendar_daysview,
		xcalendar_monthview,
		xcalendar_multiview,
		xcalendar_weekview,
		xcalendar_weeksview,
		xcarousel,
		xcartesian,
		xinteraction,
		xpolar,
		xspacefilling,
		xcomponent,
		xcontainer,
		xd3_canvas,
		xd3_heatmap,
		xd3_pack,
		xd3_partition,
		xd3_sunburst,
		xd3_treemap,
		xdataview,
		xindexbar,
		xlist,
		xnestedlist,
		xdraw,
		xsurface,
		xcheckboxfield,
		xdatepickerfield,
		xdatepickernativefield,
		xemailfield,
		xfield,
		xfilefield,
		xfileinput,
		xhiddenfield,
		xinput,
		xnumberfield,
		xpasswordfield,
		xpickerfield,
		xradiofield,
		xsearchfield,
		xselectfield,
		xsinglesliderfield,
		xsliderfield,
		xspinnerfield,
		xtextfield,
		xtextareafield,
		xtextareainput,
		xtextinput,
		xtogglefield,
		xurlfield,
		xfieldset,
		xformpanel,
		xgrid,
		xheadercontainer,
		xpagingtoolbar,
		xtree,
		xlabel,
		xtreelist,
		xloadmask,
		xmask,
		xmedia,
		xmenu,
		xmessagebox,
		xnavigationview,
		xpanel,
		xpanelheader,
		xpaneltitle,
		xdatepicker,
		xpicker,
		xpickerslot,
		xpivotgrid,
		xpivotrangeeditor,
		xsegmentedbutton,
		xsheet,
		xslider,
		xthumb,
		xtoggleslider,
		xspacer,
		xtabbar,
		xtabpanel,
		xtab,
		xtooltip,
		xtitle,
		xtitlebar,
		xtoolbar,
		xgauge,
		xvideo,
		xviewport,
		xwidget
 ],
	declarations: [
		x,
		xngcomponent,
		xbutton,
		xcalendar_event,
		xcalendar_form_add,
		xcalendar_form_edit,
		xcalendar_daysheader,
		xcalendar_weeksheader,
		xcalendar_list,
		xcalendar_day,
		xcalendar_days,
		xcalendar_month,
		xcalendar,
		xcalendar_week,
		xcalendar_weeks,
		xcalendar_dayview,
		xcalendar_daysview,
		xcalendar_monthview,
		xcalendar_multiview,
		xcalendar_weekview,
		xcalendar_weeksview,
		xcarousel,
		xcartesian,
		xinteraction,
		xpolar,
		xspacefilling,
		xcomponent,
		xcontainer,
		xd3_canvas,
		xd3_heatmap,
		xd3_pack,
		xd3_partition,
		xd3_sunburst,
		xd3_treemap,
		xdataview,
		xindexbar,
		xlist,
		xnestedlist,
		xdraw,
		xsurface,
		xcheckboxfield,
		xdatepickerfield,
		xdatepickernativefield,
		xemailfield,
		xfield,
		xfilefield,
		xfileinput,
		xhiddenfield,
		xinput,
		xnumberfield,
		xpasswordfield,
		xpickerfield,
		xradiofield,
		xsearchfield,
		xselectfield,
		xsinglesliderfield,
		xsliderfield,
		xspinnerfield,
		xtextfield,
		xtextareafield,
		xtextareainput,
		xtextinput,
		xtogglefield,
		xurlfield,
		xfieldset,
		xformpanel,
		xgrid,
		xheadercontainer,
		xpagingtoolbar,
		xtree,
		xlabel,
		xtreelist,
		xloadmask,
		xmask,
		xmedia,
		xmenu,
		xmessagebox,
		xnavigationview,
		xpanel,
		xpanelheader,
		xpaneltitle,
		xdatepicker,
		xpicker,
		xpickerslot,
		xpivotgrid,
		xpivotrangeeditor,
		xsegmentedbutton,
		xsheet,
		xslider,
		xthumb,
		xtoggleslider,
		xspacer,
		xtabbar,
		xtabpanel,
		xtab,
		xtooltip,
		xtitle,
		xtitlebar,
		xtoolbar,
		xgauge,
		xvideo,
		xviewport,
		xwidget
 ]
})
export class xModule { }
	