(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{KJsh:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("p0pE")),u=a(r("d6i3")),c=r("Sg7V"),i={namespace:"userAndDashboardWorkplace",state:{currentUser:void 0,projectNotice:[],activities:[],radarData:[]},effects:{init:u.default.mark(function e(t,r){var a;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.put,e.next=3,a({type:"fetchUserCurrent"});case 3:return e.next=5,a({type:"fetchProjectNotice"});case 5:return e.next=7,a({type:"fetchActivitiesList"});case 7:return e.next=9,a({type:"fetchChart"});case 9:case"end":return e.stop()}},e)}),fetchUserCurrent:u.default.mark(function e(t,r){var a,n,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(c.queryCurrent);case 3:return i=e.sent,e.next=6,n({type:"save",payload:{currentUser:i}});case 6:case"end":return e.stop()}},e)}),fetchProjectNotice:u.default.mark(function e(t,r){var a,n,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(c.queryProjectNotice);case 3:return i=e.sent,e.next=6,n({type:"save",payload:{projectNotice:Array.isArray(i)?i:[]}});case 6:case"end":return e.stop()}},e)}),fetchActivitiesList:u.default.mark(function e(t,r){var a,n,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(c.queryActivities);case 3:return i=e.sent,e.next=6,n({type:"save",payload:{activities:Array.isArray(i)?i:[]}});case 6:case"end":return e.stop()}},e)}),fetchChart:u.default.mark(function e(t,r){var a,n,i,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(c.fakeChartData);case 3:return i=e.sent,s=i.radarData,e.next=7,n({type:"save",payload:{radarData:s}});case 7:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){var r=t.payload;return(0,n.default)({},e,r)},clear:function(){return{currentUser:void 0,projectNotice:[],activities:[],radarData:[]}}}},s=i;t.default=s},Sg7V:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryProjectNotice=i,t.queryActivities=p,t.fakeChartData=o,t.queryCurrent=d;var n=a(r("d6i3")),u=a(r("1l/V")),c=a(r("sy1d"));function i(){return s.apply(this,arguments)}function s(){return s=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/project/notice"));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return f=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/activities"));case 1:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function o(){return l.apply(this,arguments)}function l(){return l=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/fake_chart_data"));case 1:case"end":return e.stop()}},e)})),l.apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return h=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.default)("/api/currentUser"));case 1:case"end":return e.stop()}},e)})),h.apply(this,arguments)}}}]);