(this["webpackJsonpmovie-site"]=this["webpackJsonpmovie-site"]||[]).push([[0],{136:function(e,t,r){},137:function(e,t,r){},138:function(e,t,r){},139:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(27),s=r.n(a),i=(r(83),r(84),r(85),r(24)),o=r(160),u=r(161),j=r(162),l=r(140),d=r(141),h=r(142),p=r(143),b=r(144),O=r(145),x=r(146),f=r(1),m=function(){return Object(f.jsxs)(o.a,{nav:!0,inNavbar:!0,children:[Object(f.jsx)(u.a,{nav:!0,caret:!0,children:"Movies"}),Object(f.jsxs)(j.a,{right:!0,children:[Object(f.jsx)(l.a,{href:"/movies/popular",children:"Popular"}),Object(f.jsx)(l.a,{href:"/movies/now-playing",children:"Now Playing"}),Object(f.jsx)(l.a,{href:"/movies/upcoming",children:"Upcoming"}),Object(f.jsx)(l.a,{href:"/movies/top-rated",children:"Top rated"})]})]})},v=function(){return Object(f.jsxs)(o.a,{nav:!0,inNavbar:!0,children:[Object(f.jsx)(u.a,{nav:!0,caret:!0,children:"TV Shows "}),Object(f.jsxs)(j.a,{right:!0,children:[Object(f.jsx)(l.a,{href:"/shows/popular",children:"Popular"}),Object(f.jsx)(l.a,{href:"/shows/airing-today",children:"Airing Today"}),Object(f.jsx)(l.a,{href:"/shows/on_the_air",children:"On TV"}),Object(f.jsx)(l.a,{href:"/shows/top-rated",children:"Top rated"})]})]})},w=function(){return Object(f.jsxs)(o.a,{nav:!0,inNavbar:!0,children:[Object(f.jsx)(u.a,{nav:!0,caret:!0,children:"People"}),Object(f.jsx)(j.a,{right:!0,children:Object(f.jsx)(l.a,{href:"/people/popular",children:"Popular people"})})]})},g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(f.jsx)("div",{children:Object(f.jsxs)(d.a,{color:"light",light:!0,expand:"md",children:[Object(f.jsx)(h.a,{href:"/",children:"Movies Site"}),Object(f.jsx)(p.a,{onClick:function(){return c(!r)}}),Object(f.jsxs)(b.a,{isOpen:r,navbar:!0,children:[Object(f.jsxs)(O.a,{className:"mr-auto",navbar:!0,children:[Object(f.jsx)(m,{}),Object(f.jsx)(v,{}),Object(f.jsx)(w,{})]}),Object(f.jsx)(x.a,{children:"Login"})]})]})})},_=r(15),y=r(13),S=r(147),k=r(148),N=r(149),L=r(150),E=r(151),A=r(72),C="TRENDING_LOAD",D="TRENDING_LOAD_SUCCESS",T="TRENDING_LOAD_FAIL",I="POPULAR_LOAD",P="POPULAR_LOAD_SUCCESS",R="POPULAR_LOAD_FAIL",U="SEARCH_LOAD",F="SEARCH_LOAD_SUCCESS",M="SEARCH_LOAD_FAIL",V="SHOWS_LOAD",W="SHOWS_LOAD_SUCCESS",z="SHOWS_LOAD_FAIL",B="PEOPLE_LOAD",H="PEOPLE_LOAD_SUCCESS",G="PEOPLE_LOAD_FAIL",q="MOVIE_LOAD",X="MOVIE_LOAD_SUCCESS",J="MOVIE_LOAD_FAIL",Y="REVIEWS_LOAD",K="REVIEWS_LOAD_SUCCESS",Q="REVIEWS_LOAD_FAIL",Z="RECOMMENDATIONS_LOAD",$="RECOMMENDATIONS_LOAD_SUCCESS",ee="RECOMMENDATIONS_LOAD_FAIL",te=function(e){return{type:P,popular:e}},re=(r(63),function(e){var t=e.item,r=e.history;return Object(f.jsxs)(S.a,{md:"2",xs:"6",onClick:function(){return r.push("/movie/".concat(t.id))},style:{cursor:"pointer"},children:[Object(f.jsx)(k.a,{inverse:!0,children:Object(f.jsx)(N.a,{src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.poster_path),alt:"Card image cap"})}),Object(f.jsx)("h6",{className:"text-black",children:t.original_title||t.title}),Object(f.jsx)("p",{children:new Date(t.release_date).toLocaleDateString()})]})}),ne=function(){var e=Object(n.useState)("movie"),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(_.c)((function(e){return e.populars})),s=a.popular,o=(a.loading,Object(_.b)()),u=Object(y.f)();return Object(n.useEffect)((function(){o({type:I,popularType:r})}),[r,o]),Object(f.jsxs)("div",{children:[Object(f.jsxs)(L.a,{children:[Object(f.jsx)("h3",{children:"What's popular"}),Object(f.jsxs)(E.a,{size:"sm",children:[Object(f.jsx)(A.a,{color:"primary",style:{marginRight:2},size:"sm",onClick:function(){return c("movie")},children:"Streaming"}),Object(f.jsx)(A.a,{color:"secondary",size:"sm",onClick:function(){return c("tv")},children:"On Tv"})]})]}),Object(f.jsx)(L.a,{className:"flex-nowrap flex-row trending flex-1",children:s.map((function(e){return Object(f.jsx)(re,{item:e,history:u},e.id)}))})]})},ce=r(152),ae=r(153),se=r(163),ie=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(y.f)();return Object(f.jsxs)("div",{style:{backgroundImage:"url(https://pbs.twimg.com/profile_banners/35701585/1585337833/600x200)",backgroundSize:"cover",paddingTop:116,marginTop:-56,paddingBottom:176,paddingLeft:24,paddingRight:24},children:[Object(f.jsx)("h1",{className:"text-white",children:"Welcome ."}),Object(f.jsx)("h5",{className:"text-white",children:"Millions of movies, TV shows and people to discover. Explore now."}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(ce.a,{children:[Object(f.jsx)(ae.a,{value:r,placeholder:"Search for a movie, TV show , person ...",onChange:function(e){return c(e.target.value)}}),Object(f.jsx)(se.a,{addonType:"append",children:Object(f.jsx)(A.a,{color:"success",onClick:function(){return a.push("/search?query=".concat(r))},children:"Search"})})]})]})},oe=function(e){var t=e.item,r=e.history;return Object(f.jsxs)(S.a,{md:"2",xs:"6",onClick:function(){return r.push("/movie/".concat(t.id))},style:{cursor:"pointer"},children:[Object(f.jsx)(k.a,{inverse:!0,children:Object(f.jsx)(N.a,{src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.poster_path),alt:"Card image cap"})}),Object(f.jsx)("h6",{className:"text-black",children:t.original_title||t.title}),Object(f.jsx)("p",{children:new Date(t.release_date).toLocaleDateString()})]})},ue=function(){var e=Object(n.useState)("day"),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(_.c)((function(e){return e.trendings})),s=a.trendings,o=(a.loading,Object(_.b)()),u=Object(y.f)();return Object(n.useEffect)((function(){o({type:C,timeWindow:r})}),[r,o]),Object(f.jsxs)("div",{className:"flex-1",children:[Object(f.jsxs)("div",{className:"clearfix mt-5 mb-2",children:[Object(f.jsx)("h4",{className:"float-left",children:"Trending"}),Object(f.jsx)(A.a,{color:"primary",size:"sm",onClick:function(){return c("day")},children:"Today"})," ",Object(f.jsx)(A.a,{color:"secondary",size:"sm",onClick:function(){return c("week")},children:"This week"})]}),Object(f.jsx)(L.a,{className:"flex-nowrap flex-row trending flex-1",children:s.map((function(e){return Object(f.jsx)(oe,{item:e,history:u},e.id)}))})]})},je=r(154),le=function(){return Object(f.jsxs)(je.a,{fluid:!0,children:[Object(f.jsx)(ie,{}),Object(f.jsx)("br",{}),Object(f.jsx)(ue,{}),Object(f.jsx)("br",{}),Object(f.jsx)(ne,{})]})},de=r(25),he=r(77),pe={trendings:[],loading:!1,error:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{trendings:[],loading:!0,error:!1};case D:return{trendings:t.trendings,loading:!1,error:!1};case T:return{trendings:[],loading:!1,error:!0};default:return e}},Oe={popular:[],loading:!1,error:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{popular:[],loading:!0,error:!1};case P:return{popular:t.popular,loading:!1,error:!1};case R:return{popular:[],loading:!1,error:!0};default:return e}},fe={results:[],loading:!1,error:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return{results:[],loading:!0,error:!1};case F:return{results:t.results,loading:!1,error:!1};case M:return{results:[],loading:!1,error:!0};default:return e}},ve={shows:[],loading:!1,error:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{shows:[],loading:!0,error:!1};case W:return{shows:t.shows,loading:!1,error:!1};case z:return{shows:[],loading:!1,error:!0};default:return e}},ge={people:[],loading:!1,error:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return{people:[],loading:!0,error:!1};case H:return{people:t.people,loading:!1,error:!1};case G:return{people:[],loading:!1,error:!0};default:return e}},ye={movie:{},loading:!1,error:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{movie:{},loading:!0,error:!1};case X:return{movie:t.movie,loading:!1,error:!1};case J:return{movie:{},loading:!1,error:!0};default:return e}},ke={reviews:[],loading:!1,error:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{reviews:[],loading:!0,error:!1};case K:return{reviews:t.reviews,loading:!1,error:!1};case Q:return{reviews:[],loading:!1,error:!0};default:return e}},Le={recommendations:[],loading:!1,error:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return{recommendations:[],loading:!0,error:!1};case $:return{recommendations:t.recommendations,loading:!1,error:!1};case ee:return{recommendations:[],loading:!1,error:!0};default:return e}},Ae=Object(de.c)({trendings:be,populars:xe,search:me,shows:we,people:_e,movie:Se,reviews:Ne,recommendations:Ee}),Ce=r(6),De=r.n(Ce),Te=r(10),Ie=r(18),Pe=r(19),Re=r.n(Pe),Ue="https://api.themoviedb.org/3",Fe=function(e){return"".concat(Ue,"/").concat(e,"?api_key=d9a1f141ddec95a6af5324e99ba4c5d9")},Me=function(){var e=Object(Ie.a)(De.a.mark((function e(){var t,r,n=arguments;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"day",e.prev=1,e.next=4,Re.a.get(Fe("trending/all/".concat(t)));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Ve=De.a.mark(ze),We=De.a.mark(Be);function ze(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(Me,e.timeWindow);case 3:return t=r.sent,r.next=6,Object(Te.c)({type:D,trendings:t});case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)({type:T});case 12:case"end":return r.stop()}}),Ve,null,[[0,8]])}function Be(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(C,ze);case 2:case"end":return e.stop()}}),We)}var He=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.get(Fe("".concat(t,"/popular")));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Ge=De.a.mark(Xe),qe=De.a.mark(Je);function Xe(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(He,e.popularType);case 3:return t=r.sent,r.next=6,Object(Te.c)(te(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)(te());case 12:case"end":return r.stop()}}),Ge,null,[[0,8]])}function Je(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(I,Xe);case 2:case"end":return e.stop()}}),qe)}var Ye=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re.a.get("".concat(Fe("search/multi"),"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ke=De.a.mark(Ze),Qe=De.a.mark($e);function Ze(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(Ye,e.searchTerm);case 3:return t=r.sent,r.next=6,Object(Te.c)({type:F,results:t});case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)({type:M});case 12:case"end":return r.stop()}}),Ke,null,[[0,8]])}function $e(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(U,Ze);case 2:case"end":return e.stop()}}),Qe)}var et=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re.a.get("".concat(Fe("tv/".concat(t))));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),tt=function(e){return{type:W,shows:e}},rt=De.a.mark(ct),nt=De.a.mark(at);function ct(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(et,e.showType);case 3:return t=r.sent,r.next=6,Object(Te.c)(tt(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)({type:z});case 12:case"end":return r.stop()}}),rt,null,[[0,8]])}function at(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(V,ct);case 2:case"end":return e.stop()}}),nt)}var st=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.get(Fe("person/".concat(t)));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),it=function(e){return{type:H,people:e}},ot=De.a.mark(jt),ut=De.a.mark(lt);function jt(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(st,e.peopleType);case 3:return t=r.sent,r.next=6,Object(Te.c)(it(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)({type:G});case 12:case"end":return r.stop()}}),ot,null,[[0,8]])}function lt(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(B,jt);case 2:case"end":return e.stop()}}),ut)}var dt=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re.a.get("".concat(Ue,"/movie/").concat(t,"?api_key=d9a1f141ddec95a6af5324e99ba4c5d9"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ht=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re.a.get("".concat(Ue,"/movie/").concat(t,"?api_key=d9a1f141ddec95a6af5324e99ba4c5d9"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pt=function(e){return{type:X,movie:e}},bt=De.a.mark(xt),Ot=De.a.mark(ft);function xt(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(ht,e.movieId);case 3:return t=r.sent,r.next=6,Object(Te.c)(pt(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)({type:J});case 12:case"end":return r.stop()}}),bt,null,[[0,8]])}function ft(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(q,xt);case 2:case"end":return e.stop()}}),Ot)}var mt=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re.a.get("".concat(Fe("movie/".concat(t,"/reviews"))));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),vt=function(e){return{type:K,reviews:e}},wt=De.a.mark(_t),gt=De.a.mark(yt);function _t(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(mt,e.movieId);case 3:return t=r.sent,r.next=6,Object(Te.c)(vt(t));case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)({type:Q});case 12:case"end":return r.stop()}}),wt,null,[[0,8]])}function yt(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(Y,_t);case 2:case"end":return e.stop()}}),gt)}var St=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re.a.get("".concat(Fe("movie/".concat(t,"/recommendations"))));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),kt=De.a.mark(Lt),Nt=De.a.mark(Et);function Lt(e){var t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Te.b)(St,e.movieId);case 3:return t=r.sent,r.next=6,Object(Te.c)({type:$,recommendations:t});case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,Object(Te.c)({type:ee});case 12:case"end":return r.stop()}}),kt,null,[[0,8]])}function Et(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)(Z,Lt);case 2:case"end":return e.stop()}}),Nt)}var At=De.a.mark(Ct);function Ct(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.a)([Be(),Je(),$e(),at(),lt(),ft(),yt(),Et()]);case 2:case"end":return e.stop()}}),At)}var Dt=function(){var e=Object(he.a)(),t=Object(de.e)(Ae,Object(de.d)(Object(de.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));return e.run(Ct),t},Tt=r(33),It=r(155),Pt=r(156),Rt=r(157),Ut=r(158),Ft=function(e){var t=e.movieItem;return Object(f.jsx)(S.a,{md:"2",xs:"6",children:Object(f.jsxs)(k.a,{className:"mt-2",children:[Object(f.jsx)(N.a,{top:!0,src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.poster_path),alt:"Card image cap"}),Object(f.jsxs)(It.a,{children:[Object(f.jsx)(Pt.a,{tag:"h6",className:"text-nowrap text-truncate",style:{width:"100%"},children:t.title}),Object(f.jsx)(Rt.a,{tag:"p",className:"mb-2 text-muted",children:new Date(t.release_date).toLocaleDateString()})]})]})})},Mt=function(){var e=Object(y.h)().term,t=Object(n.useState)([]),r=Object(i.a)(t,2),c=r[0],a=r[1],s=function(){var e=Object(Ie.a)(De.a.mark((function e(t){var r,n;return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.replace("-","_"),e.prev=1,e.next=4,dt(r);case 4:n=e.sent,a(n),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){s(e)}),[e]);return Object(f.jsxs)(je.a,{children:[Object(f.jsx)("h1",{className:"mt-4 mb-4",children:"".concat(function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace("-"," ")}(e)," Movies")}),Object(f.jsx)(L.a,{className:"flex-row",children:Object(f.jsx)(Ut.a,{children:c.map((function(e){return Object(f.jsx)(Ft,{movieItem:e},e.id)}))})})]})},Vt=r(159),Wt=(r(136),function(e){var t=e.item;return Object(f.jsxs)(k.a,{className:"flex-1 flex-row mt-2 mb-2",children:[Object(f.jsx)("img",{width:"9%",height:"116",alt:"item.original_name",src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.poster_path)}),Object(f.jsxs)(It.a,{children:[Object(f.jsx)("h6",{children:t.original_name||t.original_title}),Object(f.jsx)(Vt.a,{className:"text",children:t.overview})]})]})}),zt=function(){var e=new URLSearchParams(Object(y.g)().search),t=Object(n.useState)(e.get("query")),r=Object(_.c)((function(e){return e.search})).results,c=Object(_.b)();return Object(n.useEffect)((function(){c(function(e){return{type:U,searchTerm:e}}(t))}),[c,t]),Object(f.jsx)(je.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Results"}),Object(f.jsx)(S.a,{className:"flex-nowrap flex-row trending flex-1",children:r.map((function(e){return Object(f.jsx)(Wt,{item:e},e.id)}))})]})})},Bt=function(e){var t=e.showItem;return Object(f.jsx)(S.a,{md:"2",xs:"6",children:Object(f.jsxs)(k.a,{className:"mt-2",children:[Object(f.jsx)(N.a,{top:!0,src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.poster_path),alt:"Card image cap"}),Object(f.jsxs)(It.a,{children:[Object(f.jsx)(Pt.a,{tag:"h6",className:"text-nowrap text-truncate",style:{width:"100%"},children:t.name}),Object(f.jsx)(Rt.a,{tag:"p",className:"mb-2 text-muted",children:new Date(t.release_date).toLocaleDateString()})]})]})})},Ht=function(){var e=Object(y.h)().term,t=e.replace("-","_"),r=Object(_.c)((function(e){return e.shows})).shows,c=Object(_.b)();Object(n.useEffect)((function(){c({type:V,showType:t})}),[c,t]);return Object(f.jsxs)(je.a,{children:[Object(f.jsx)("h1",{className:"mt-4 mb-4",children:"".concat(function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace("-"," ")}(e)," Shows")}),Object(f.jsx)(L.a,{className:"flex-row",children:Object(f.jsx)(Ut.a,{children:r.map((function(e){return Object(f.jsx)(Bt,{showItem:e},e.id)}))})})]})},Gt=function(e){var t=e.personItem;return Object(f.jsx)(S.a,{md:"2",xs:"5",children:Object(f.jsxs)(k.a,{className:"mt-2",children:[Object(f.jsx)(N.a,{top:!0,src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.profile_path),alt:"Card image cap"}),Object(f.jsxs)(It.a,{children:[Object(f.jsx)(Pt.a,{tag:"h6",className:"text-nowrap text-truncate",style:{width:"100%"},children:t.name}),Object(f.jsx)(Rt.a,{tag:"p",className:"mb-2 text-muted",children:t.known_for[0].original_title})]})]})})},qt=function(){var e=Object(y.h)().term,t=e.replace("-","_"),r=Object(_.c)((function(e){return e.people})).people,c=Object(_.b)();Object(n.useEffect)((function(){c({type:B,peopleType:t})}),[c,t]);return Object(f.jsxs)(je.a,{children:[Object(f.jsx)("h1",{className:"mt-4 mb-4",children:"".concat(function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace("-"," ")}(e)," People")}),Object(f.jsx)(L.a,{className:"flex-row",children:Object(f.jsx)(Ut.a,{children:r.map((function(e){return Object(f.jsx)(Gt,{personItem:e},e.id)}))})})]})},Xt=r(78),Jt=(r(137),function(e){var t=e.recommendation;return Object(f.jsxs)(S.a,{md:"2",xs:"6",style:{cursor:"pointer"},children:[Object(f.jsx)(k.a,{inverse:!0,children:Object(f.jsx)(N.a,{src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.poster_path),alt:"Card image cap"})}),Object(f.jsx)("h6",{className:"text-black",children:t.original_title||t.title}),Object(f.jsx)("p",{children:new Date(t.release_date).toLocaleDateString()})]})}),Yt=function(e){var t=e.review;return Object(f.jsx)(L.a,{children:Object(f.jsx)(k.a,{className:"mt-2 p-2",style:{backgroundColor:"white"},children:Object(f.jsxs)(L.a,{children:[Object(f.jsx)("img",{src:"".concat(t.author_details.avatar_path).substring(1),alt:"Card cap",style:{width:76,height:76,borderRadius:48,marginLeft:16,marginTop:16}}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)("h6",{className:"text-nowrap text-truncate",style:{width:"100%"},children:t.author}),Object(f.jsx)("p",{className:"mb-2  content",children:t.content}),Object(f.jsx)("p",{className:"mb-2 text-muted",children:new Date(t.created_at).toLocaleDateString()})]})]})})},t.id)},Kt=function(e){var t=e.movie;return Object(f.jsx)(S.a,{md:"2",xs:"6",children:Object(f.jsx)(k.a,{inverse:!0,children:Object(f.jsx)(N.a,{src:"https://www.themoviedb.org/t/p/w440_and_h660_face".concat(t.poster_path),alt:"Card image cap"})})})},Qt=function(e){var t=e.movie;return Object(f.jsxs)(S.a,{style:{marginTop:16},className:"text-white",children:[Object(f.jsx)("h4",{children:"".concat(t.original_title||t.title," (").concat(new Date(t.release_date).getFullYear(),")")}),Object(f.jsx)(L.a,{className:"ml-1 ",children:t.genres&&t.genres.map((function(e){return Object(f.jsxs)("p",{children:[e.name," ,"]},e.id)}))}),Object(f.jsx)("h5",{children:"Overview"}),Object(f.jsx)("p",{children:t.overview})]})},Zt=function(e){return{backgroundImage:"url(".concat("https://www.themoviedb.org/t/p/w440_and_h660_face".concat(e.backdrop_path),")"),backgroundRepeat:"no-repeat",paddingTop:116,paddingBottom:76,paddingLeft:24,width:"100%",backgroundSize:"cover"}},$t=function(){var e=Object(y.h)().id,t=Object(_.c)((function(e){return e.movie})).movie,r=Object(_.c)((function(e){return e.reviews})).reviews,c=Object(_.c)((function(e){return e.recommendations})).recommendations,a=Object(_.b)();return Object(n.useEffect)((function(){a({type:q,movieId:e}),a(function(e){return{type:Y,movieId:e}}(e)),a(function(e){return{type:Z,movieId:e}}(e))}),[a,e]),Object(f.jsxs)("main",{children:[Object(f.jsxs)(L.a,{className:"flex-1",style:Object(Xt.a)({},Zt(t)),children:[Object(f.jsx)(Kt,{movie:t}),Object(f.jsx)(Qt,{movie:t})]}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)("h4",{className:"text-black",style:{marginTop:32},children:"Reviews"}),r.map((function(e){return Object(f.jsx)(Yt,{review:e})}))]}),Object(f.jsxs)(S.a,{children:[Object(f.jsx)("h4",{className:"text-black",style:{marginTop:32},children:"Recommendations"}),Object(f.jsx)(L.a,{className:"mt-4 flex-nowrap flex-row recommendations flex-1",children:c.map((function(e){return Object(f.jsx)(Jt,{recommendation:e},e.id)}))})]})]})},er=(r(138),function(){return Object(f.jsx)(S.a,{children:Object(f.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",alt:"logo",style:{height:76}})})}),tr=function(){return Object(f.jsxs)(S.a,{children:[Object(f.jsx)("h5",{children:"THE BASICS"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/about",children:"About TMDB"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/about/staying-in-touch",children:"Contact Us"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/talk",children:"Support Forums"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/documentation/api",children:"API"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://status.themoviedb.org/",children:"System Status"})})]})},rr=function(){return Object(f.jsxs)(S.a,{children:[Object(f.jsx)("h5",{children:"GET INVOLVED"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/bible",children:"Contribution Bible"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/apps",children:"3rd Party Applications"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/movie/new",children:"Add New Movie"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/tv/new",children:"Add New TV Show"})})]})},nr=function(){return Object(f.jsxs)(S.a,{children:[Object(f.jsx)("h5",{children:"Community"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/documentation/community/guidelines",children:"Guidelines"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/discuss",children:"Discussions"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/leaderboard",children:"Leaderboard"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://twitter.com/themoviedb",children:"Twitter"})})]})},cr=function(){return Object(f.jsxs)(S.a,{children:[Object(f.jsx)("h5",{children:"Legal"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/terms-of-use",children:"Terms of use"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/documentation/api/terms-of-use",children:"API Terms of Use"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://www.themoviedb.org/privacy-policy",children:"Privacy Policy"})})]})},ar=function(){return Object(f.jsx)(S.a,{style:{backgroundColor:"midnightblue",color:"white"},children:Object(f.jsxs)(L.a,{style:{padding:32,paddingTop:64},children:[Object(f.jsx)(er,{}),Object(f.jsx)(tr,{}),Object(f.jsx)(rr,{}),Object(f.jsx)(nr,{}),Object(f.jsx)(cr,{})]})})},sr=Dt();var ir=function(){return Object(f.jsx)(_.a,{store:sr,children:Object(f.jsx)(Tt.a,{children:Object(f.jsxs)(je.a,{fluid:!0,children:[Object(f.jsx)(g,{}),Object(f.jsxs)(y.c,{children:[Object(f.jsx)(y.a,{path:"/people/:term",children:Object(f.jsx)(qt,{})}),Object(f.jsx)(y.a,{path:"/movies/:term",children:Object(f.jsx)(Mt,{})}),Object(f.jsx)(y.a,{path:"/shows/:term",children:Object(f.jsx)(Ht,{})}),Object(f.jsx)(y.a,{path:"/search",children:Object(f.jsx)(zt,{})}),Object(f.jsx)(y.a,{path:"/movie/:id",children:Object(f.jsx)($t,{})}),Object(f.jsx)(y.a,{path:"/",children:Object(f.jsx)(le,{})})]}),Object(f.jsx)(ar,{})]})})})},or=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,164)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.Fragment,{children:Object(f.jsx)(ir,{})}),document.getElementById("root")),or()},63:function(e,t,r){}},[[139,1,2]]]);
//# sourceMappingURL=main.82f2f978.chunk.js.map