webpackJsonp([0],[,function(e,t){window.url="104.198.126.243:3000",window.statusUrl="52.68.45.211:3000"},,,,function(e,t,s){"use strict";var n=s(3),a=s.n(n),i=s(49),o=s(33),r=s.n(o),l=s(36),c=s.n(l),u=s(32),d=s.n(u),p=s(35),f=s.n(p),g=s(34),m=s.n(g),v=s(39),h=s.n(v),_=s(37),w=s.n(_),C=s(38),y=s.n(C);a.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Hello",component:r.a},{path:"/question",name:"Question",component:c.a},{path:"/dokaben",name:"Dokaben",component:d.a},{path:"/manage",name:"Manage",component:f.a},{path:"/login",name:"Login",component:m.a},{path:"/screen",name:"Screen",component:h.a},{path:"/ranking",name:"Ranking",component:w.a},{path:"/ready",name:"Ready",component:y.a}]})},function(e,t,s){s(18);var n=s(0)(s(7),s(40),null,null);e.exports=n.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"ようこそジャパリパークへ！"}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2);s.n(n);t.default={name:"hello",data:function(){return{msg:"ようこそジャパリパークへ！"}},mounted:function(){var e=window.localStorage.getItem("userId");console.log(e);var t=navigator.userAgent.toLowerCase(),s=t.indexOf("iphone")>-1,a=t.indexOf("ipad")>-1,i=t.indexOf("android")>-1&&t.indexOf("mobile")>-1,o=t.indexOf("android")>-1&&t.indexOf("mobile")==-1;n(".logo").on("click",function(){return e?(location.href="#ready",!1):(location.href="#login",!1)}),n.get("http://"+window.statusUrl+"/isAnswer").done(function(e){console.log(e),e===!0&&n.ajax("http://"+self.statusUrl+"/isAnswerChange",{method:"POST",type:"POST",cache:!1}).done(function(e){console.log(e),console.log("回答開始フラグがtrueだったのでリセットしました")})}),n(document).on("keyup",function(e){var t=e.keyCode;if(console.log(t),83===t)return!(s||a||i||o)&&(location.href="#screen",!1);if(82===t){if(s||a||i||o)return!1;location.href="#ranking"}else if(77==t)return!(s||a||i||o)&&(window.localStorage.removeItem("userId"),window.localStorage.removeItem("userName"),window.localStorage.removeItem("answerFlg"),location.reload(),!1);return!1})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),a=(s.n(n),s(1));s.n(a);t.default={name:"login",data:function(){return{msg:"ようこそジャパリパークへ！",url:"http://"+window.url}},methods:{login:function(e){var t=this,s=n("#userid").val();n.ajax(t.url+"/users?name="+s+"&user_point=0",{method:"POST",type:"POST",cache:!1}).done(function(e){var a=e.id;n.ajax(t.url+"/steps?user_id="+a+"&round_id=1&response_time=0&mistake_flg=false",{method:"POST",type:"POST",cache:!1}).done(function(e){alert("あなたの名前は"+s+"です．楽しいゲームを！"),window.localStorage.setItem("userName",s),window.localStorage.setItem("userId",a),window.localStorage.setItem("answerFlg",!1),location.href="#ready"})})}},mounted:function(){var e=this;window.localStorage.getItem("userId")&&(location.href="#ready"),n("#userid").focus(),n(".loginButton").on("click",function(t){e.login(t)})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),a=(s.n(n),s(1));s.n(a);t.default={name:"Manage",data:function(){var e=new Date,t=e.getMonth()+1,s=e.getDate(),n=new Date(2017,3,10),a=new Date(2017,2,25);return{month:t,day:s,daysLeft:Math.floor((n.getTime()-e.getTime())/864e5)+1,deadLineLeft:Math.floor((a.getTime()-e.getTime())/864e5)+1,msg:"メッセージバインディング",questions:[],url:"http://"+window.url,roundId:1,statusUrl:"http://"+window.statusUrl,isAnswerFlg:"",isSpecialFlg:"",isAnswerMessage:"",isSpecialMessage:""}},methods:{publishQuestion:function(e){console.log(e.id);var t,s=e.id,a=this;return n.each(a.questions,function(e){a.questions[e].id===s&&(t=a.questions[e].problemText)}),window.confirm("問題文："+t+"  この問題を出題しますか？")&&n.ajax(a.url+"/problems/doQuestions?id="+s,{method:"POST",type:"POST",cache:!1}).done(function(e){console.log(e),n.ajax(a.url+"/steps/clearLastData",{method:"POST",type:"POST",cache:!1}).done(function(e){alert("出題準備成功！")})}).fail(function(e){}),!1},changeSession:function(){var e=this;window.confirm("セッションを変更しますか？")&&n.ajax(e.url+"/rounds/changeSession?id="+e.roundId,{method:"POST",type:"POST",cache:!1}).done(function(t){console.log(t),e.roundId++,n.ajax(e.statusUrl+"/isSpecialChange",{method:"POST",type:"POST",cache:!1}).done(function(t){return t===!0?(e.isSpecialFlg=!0,e.isSpecialMessage="回答可能"):(e.isSpecialFlg=!1,e.isSpecialMessage="回答不可"),!1}),alert("セッション変更成功！")})}},mounted:function(){var e=this;e.questions=[],n.get(e.statusUrl+"/isAnswer").done(function(t){return t===!0?(e.isAnswerFlg=!0,e.isAnswerMessage="時間内"):(e.isAnswerFlg=!1,e.isAnswerMessage="時間外"),!1}),n.get(e.statusUrl+"/isSpecial").done(function(t){return t===!0?(e.isSpecialFlg=!0,e.isSpecialMessage="回答可能"):(e.isSpecialFlg=!1,e.isSpecialMessage="回答不可"),!1}),n.get(e.url+"/problems").done(function(t){var s=t;n.each(s,function(t){var n={};n.id=s[t].id,n.problemText=s[t].problem_text,e.questions.push(n)})}),n("#changeRound").on("click",function(){var t=n("#roundid").val();return window.confirm("ラウンドを変更しますか？")&&(isNaN(t)?alert("数値を入力してください"):n.ajax(e.url+"/steps/refleshRound?round_id="+t,{method:"POST",type:"POST",cache:!1}).done(function(s){console.log(s),e.roundId=t,alert("変更しました")})),!1}),n("#isAnswer").on("click",function(){return window.confirm("時間内/外フラグを変更しますか？")&&n.ajax(e.statusUrl+"/isAnswerChange",{method:"POST",type:"POST",cache:!1}).done(function(t){return t===!0?(e.answerFlg=!0,e.isAnswerMessage="時間内"):(e.answerFlg=!1,e.isAnswerMessage="時間外"),alert("時間内/外フラグを変更しました"),!1}),!1}),n("#isSpecial").on("click",function(){n.ajax(e.statusUrl+"/isSpecialChange",{method:"POST",type:"POST",cache:!1}).done(function(t){return t===!0?(e.isSpecialFlg=!0,e.isSpecialMessage="回答可能"):(e.isSpecialFlg=!1,e.isSpecialMessage="回答不可"),!1})}),n("#userReset").on("click",function(){window.confirm("全ユーザーの回答権をリセットしますか？")&&n.ajax(e.url+"/steps/revivalUser",{method:"POST",type:"POST",cache:!1}).done(function(){alert("全員復活です！"),n.ajax(e.statusUrl+"/isSpecialChange",{method:"POST",type:"POST",cache:!1}).done(function(t){return alert("ローカルのフラグも併せてリセットします"),t===!0?(e.isSpecialFlg=!0,e.isSpecialMessage="回答可能"):(e.isSpecialFlg=!1,e.isSpecialMessage="回答不可"),!1})})})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),a=(s.n(n),s(1));s.n(a);t.default={name:"question",self:this,data:function(){return{timer:10,startCountDown:"",startCountUp:"",responseTime:0,questionState:0,msg:"Welcome to Your Vue.js App",userId:"",url:"http://"+window.url,question:"",answer1:"",answer2:"",answer3:"",answer4:"",questionAnswer:0,answerId:[]}},methods:{greet:function(e){var t=this;if(0===this.questionState){this.questionState=1;var s=t.answerId[e];console.log(s),console.log(t.questionAnswer),s!=t.questionAnswer&&(console.log("hit"),window.localStorage.setItem("answerFlg",!0)),n.ajax(t.url+"/steps/answer?user_id="+t.userId+"&select_answer_id="+s,{method:"POST",type:"POST",cache:!1}).done(function(e){n("#questionWrapper").css("display","none"),n("#answerWrapper").css("display","none"),n(".question").addClass("done"),n(".answered").css("display","block"),clearInterval(this.startCountUp)}).fail(function(e){})}return!1},countDown:function(){return this.timer-=1,0===this.timer&&(n(".question").addClass("done"),n("#questionWrapper").css("display","none"),n("#answerWrapper").css("display","none"),clearInterval(this.startCountDown),clearInterval(this.startCountUp),alert("回答時間終了です！"),location.href="#ready"),!1},countUp:function(){this.responseTime+=.01}},mounted:function(){var e=this,t=window.localStorage.getItem("userId");e.responseTime=0,this.userId=t,null==t&&(location.href="/"),e.startCountDown=setInterval(e.countDown,1e3),e.startCountUp=setInterval(e.countUp,1),n.ajax(e.url+"/steps/getProblem?user_id="+e.userId,{method:"POST",type:"POST",cache:!1}).done(function(t){var s=t;e.question=s.problem.problem_text,n.each(s.answers,function(t){1==s.answers[t].answer_flg&&(e.questionAnswer=s.answers[t].id),e.answerId[t]=s.answers[t].id;var n=s.answers[t].answer_text;0===t?e.answer1=n:1===t?e.answer2=n:2===t?e.answer3=n:3===t&&(e.answer4=n)})})}}},function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),a=(s.n(n),s(1));s.n(a);e.jQuery=s(2),t.default={data:function(){return{gainFlg:!1,rankings:[],lastElement:0,url:"http://"+window.url,keySafety:0,startRanking:"../../static/startRoulette.wav",openTop:"../../static/winner.mp3",openBottom:"../../static/failer.mp3"}},mounted:function(){var e=this;e.keySafety=0,n.get("http://"+window.statusUrl+"/isAnswer").done(function(t){console.log(t),t===!0&&n.ajax("http://"+e.statusUrl+"/isAnswerChange",{method:"POST",type:"POST",cache:!1}).done(function(e){console.log(e),console.log("回答開始フラグがtrueだったのでリセットしました")})}),n(document).on("keyup",function(t){if(1===e.keySafety)return console.log("不可"),!1;var s=t.keyCode;if(83===s)return e.keySafety=1,location.href="#screen",!1;if(76===s)return e.keySafety=1,location.href="/",!1;if(90===s)e.keySafety=1,e.rankings.length>0&&(e.rankings.length=0),e.gainFlg=!0,n.ajax(e.url+"/users/ranking",{method:"POST",type:"POST",cache:!1}).done(function(t){document.getElementById("openTop").play();var s=t,a=s.length;n.each(s,function(t){var i={ranking:t+1,name:s[t].name,gain:s[t].user_point};if(e.rankings.push(i),9===t||t===a-1)return setTimeout(function(){for(var s=0;s<=t;s++)n(".ranking-list").eq(s).css("display","flex"),n(".ranking-list").eq(s).show(),n(".ranking-list").eq(s).addClass("anim-rev"+(s+1)),e.lastElement=s},500),e.keySafety=0,!1})}).fail(function(e){});else if(88===s)document.getElementById("openTop").play(),e.keySafety=1,e.rankings.length>0&&(e.rankings.length=0),n.ajax(e.url+"/steps/ranking",{method:"POST",type:"POST",cache:!1}).done(function(t){var s=t,a=s.steps.length;console.log(s),n(".time").show(),n.each(s.steps,function(t){var i={ranking:t+1,name:s.users[t].name,time:s.steps[t].last_answer_time};if(e.rankings.push(i),9===t||t===a-1)return setTimeout(function(){for(var s=0;s<=t;s++)n(".ranking-list").eq(s).css("display","flex"),n(".ranking-list").eq(s).show(),n(".ranking-list").eq(s).addClass("anim-rev"+(s+1)),e.lastElement=s},500),e.keySafety=0,!1})}).fail(function(e){});else if(67===s)e.keySafety=1,document.getElementById("openBottom").play(),e.rankings.length>0&&(e.rankings.length=0),n(".rankingWrapper").show(),n.ajax(e.url+"/steps/ranking",{method:"POST",type:"POST",cache:!1}).done(function(t){var s=t,a=s.steps.length;n(".time").show(),n.each(s.steps,function(t){var i={ranking:a-t,name:s.users[a-t-1].name,time:s.steps[a-t-1].last_answer_time};if(e.rankings.push(i),9===t||t===a-1)return setTimeout(function(){for(var s=0;s<=t;s++)n(".ranking-list").eq(s).css("display","flex"),n(".ranking-list").eq(s).show(),n(".ranking-list").eq(s).addClass("anim"+(s+1)),e.lastElement=s,console.log(e.lastElement)},500),e.keySafety=0,!1}),e.rankings=e.rankings.reverse()}).fail(function(e){});else if(68===s)e.keySafety=1,n(".ranking-list:last").css("opacity","1"),n(".ranking-list:last").removeClass("anim"+(e.lastElement+1)),n(".ranking-list:last").removeClass("anim-rev"+(e.lastElement+1)),n(".ranking-list:last").addClass("animation"),e.keySafety=0;else if(84===s)e.keySafety=1,n(".ranking-list:first").css("opacity","1"),n(".ranking-list:first").removeClass("anim1"),n(".ranking-list:first").removeClass("anim-rev1"),n(".ranking-list:first").addClass("animation"),e.keySafety=0;else{if(89!==s)return!1;e.keySafety=1,n(".yamawake").css("display","block"),e.keySafety=0}return!1})}}}).call(t,s(4))},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),a=(s.n(n),s(1)),i=(s.n(a),s(16));s.n(i);t.default={name:"hello",data:function(){return{timer:3,startCountDown:"",userPoint:"",msg:"ようこそジャパリパークへ！",message:"",url:window.url,statusUrl:window.statusUrl}},methods:{},mounted:function(){var e=this,t=window.localStorage.getItem("answerFlg"),s=window.localStorage.getItem("userId");n.get("http://"+e.url+"/users/"+s).done(function(t){var s=t;return e.userPoint=s.user_point,!1}),n.get("http://"+e.statusUrl+"/isCheck").done(function(s){var n=s.isAnswer,a=s.isSpecial;"false"==t?1==a&&1==n?(window.localStorage.setItem("answerFlg",!1),t="false",e.message="回答開始！"):e.message="回答開始！":1==a&&1==n?(window.localStorage.setItem("answerFlg",!1),t="false",e.message="回答開始！"):e.message="しばらくお待ち下さい。"}),n(".goAnswerButton").on("click",function(){n.get("http://"+e.statusUrl+"/isCheck").done(function(s){var n=s.isAnswer,a=s.isSpecial;"false"==t?1==a&&1==n?(window.localStorage.setItem("answerFlg",!1),t="false",location.href="#question"):1==n?location.href="#question":(e.message="回答開始！",alert("回答できるまでしばらくお待ち下さい")):1==a&&1==n?(window.localStorage.setItem("answerFlg",!1),t="false",e.message="回答開始！"):(e.message="しばらくお待ち下さい。",alert("回答できるまでしばらくお待ち下さい"))})}),n(".reset").on("click",function(){window.localStorage.removeItem("userId"),window.localStorage.removeItem("userName"),window.localStorage.removeItem("answerFlg"),alert("ローカルの情報をリセットしました.移動後リロードしてください．"),location.href="#"})}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),a=(s.n(n),s(1));s.n(a);t.default={data:function(){return{timer:10,text:"選択肢",startCountDown:"",answer:1,url:"http://"+window.url,statusUrl:window.statusUrl,problemText:"",answer1:"",answer2:"",answer3:"",answer4:"",image1:"",image2:"",image3:"",image4:"",imageDefault:"../assets/question_sample.jpg",keySafety:0,openQuestion:"../../static/count.mp3",timeUpSound:"../../static/ban1.mp3",answering:"../../static/answering.mp3",openAnswer:"../../static/openAnswer.mp3",quizStart:"../../static/quiz_start.mp3"}},methods:{countDown:function(){return this.timer-=1,0===this.timer&&(clearInterval(this.startCountDown),n.ajax("http://"+self.statusUrl+"/isAnswerChange",{method:"POST",type:"POST",cache:!1}).done(function(e){console.log(e),n(".imageWrapper").addClass("done"),n(".timeupText").fadeIn("fast"),document.getElementById("answering").pause()})),!1}},mounted:function(){n(".imageWrapper").css("display","none");var e=this;e.keySafety=0,document.getElementById("quizStart").play(),n.get("http://"+window.statusUrl+"/isAnswer").done(function(t){console.log(t),t===!0&&n.ajax("http://"+e.statusUrl+"/isAnswerChange",{method:"POST",type:"POST",cache:!1}).done(function(e){console.log(e),console.log("回答開始フラグがtrueだったのでリセットしました")})}),n.ajax(e.url+"/rounds/getRoundProblem",{method:"POST",type:"POST",cache:!1}).done(function(t){console.log(t);var s=t;e.problemText=s.problem.problem_text,n.each(s.answers,function(t){var a=s.answers[t].answer_text,i=s.answers[t].img_path;console.log(i),0===t?(e.answer1=a,e.image1=i,n(".question1").css("background-image","url("+e.image1+")"),void 0==e.image1&&n(".question1").css("background-image","url(/static/img/allstar_logo_top.3efcf97.png)")):1===t?(e.answer2=a,e.image2=i,n(".question2").css("background-image","url("+e.image2+")"),void 0==e.image2&&n(".question2").css("background-image","url(/static/img/allstar_logo_top.3efcf97.png)")):2===t?(e.answer3=a,e.image3=i,n(".question3").css("background-image","url("+e.image3+")"),void 0==e.image3&&n(".question3").css("background-image","url(/static/img/allstar_logo_top.3efcf97.png)")):3===t&&(e.answer4=a,e.image4=i,n(".question4").css("background-image","url("+e.image4+")"),void 0==e.image4&&n(".question4").css("background-image","url(/static/img/allstar_logo_top.3efcf97.png)")),s.answers[t].answer_flg===!0&&(e.answer=t+1,console.log("答えは "+e.answer+"です"))})});var e=this;0===this.state&&(n(".count:eq(0)").css("background-color","#8540bf"),n(".count:eq(1)").css("background-color","#fd0000"),n(".count:eq(2)").css("background-color","#00ff00"),n(".count:eq(3)").css("background-color","#f19149")),n(document).on("keyup",function(t){if(console.log(e.keySafety),1===e.keySafety)return console.log("不可"),!1;var s=t.keyCode;if(83===s);else{if(82===s)return e.keySafety=0,location.href="#ranking",!1;if(76===s)return e.keySafety=0,location.href="/",!1;if(89===s)e.keySafety=1,n(".imageWrapper").removeClass("done"),n(".timeupText").css("display","none"),e.keySafety=0;else if(65===s)e.keySafety=1,document.getElementById("openAnswer").play(),1===e.answer?(n(".question2").addClass("done"),n(".question3").addClass("done"),n(".question4").addClass("done")):2===e.answer?(n(".question1").addClass("done"),n(".question3").addClass("done"),n(".question4").addClass("done")):3===e.answer?(n(".question1").addClass("done"),n(".question2").addClass("done"),n(".question4").addClass("done")):4===e.answer&&(n(".question2").addClass("done"),n(".question3").addClass("done"),n(".question1").addClass("done")),e.keySafety=0;else{if(79!==s)return!1;n(".imageWrapper").css("display","block"),e.keySafety=1;var a=new Date;console.log(a);var i=Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds());console.log(i),n.ajax(e.url+"/rounds/setProblemDateTime?push_time="+i,{method:"POST",type:"POST",cache:!1}).done(function(t){n.ajax("http://"+e.statusUrl+"/isAnswerChange",{method:"POST",type:"POST",cache:!1}).done(function(t){console.log(t),document.getElementById("openQuestion").play(),e.startCountDown=setInterval(e.countDown,1e3),e.keySafety=0})})}}return!1})}}},function(e,t){!function(e){var t=function e(){var t,e=document.createElement("fakeelement"),s={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in s)if(void 0!==e.style[t])return s[t]},s=function(t,s,n){this.setting={axis:"y",reverse:!1,trigger:"click",speed:500,forceHeight:!1,forceWidth:!1,autoSize:!0,front:".front",back:".back"},this.setting=e.extend(this.setting,s),"string"!=typeof s.axis||"x"!==s.axis.toLowerCase()&&"y"!==s.axis.toLowerCase()||(this.setting.axis=s.axis.toLowerCase()),"boolean"==typeof s.reverse&&(this.setting.reverse=s.reverse),"string"==typeof s.trigger&&(this.setting.trigger=s.trigger.toLowerCase());var a=parseInt(s.speed);isNaN(a)||(this.setting.speed=a),"boolean"==typeof s.forceHeight&&(this.setting.forceHeight=s.forceHeight),"boolean"==typeof s.forceWidth&&(this.setting.forceWidth=s.forceWidth),"boolean"==typeof s.autoSize&&(this.setting.autoSize=s.autoSize),("string"==typeof s.front||s.front instanceof e)&&(this.setting.front=s.front),("string"==typeof s.back||s.back instanceof e)&&(this.setting.back=s.back),this.element=t,this.frontElement=this.getFrontElement(),this.backElement=this.getBackElement(),this.isFlipped=!1,this.init(n)};e.extend(s.prototype,{flipDone:function(e){var s=this;s.element.one(t(),function(){s.element.trigger("flip:done"),"function"==typeof e&&e.call(s.element)})},flip:function(e){if(!this.isFlipped){this.isFlipped=!0;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+(this.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}),this.backElement.css({transform:t+"(0deg)","z-index":"1"}),this.flipDone(e)}},unflip:function(e){if(this.isFlipped){this.isFlipped=!1;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+"(0deg)","z-index":"1"}),this.backElement.css({transform:t+(this.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),this.flipDone(e)}},getFrontElement:function(){return this.setting.front instanceof e?this.setting.front:this.element.find(this.setting.front)},getBackElement:function(){return this.setting.back instanceof e?this.setting.back:this.element.find(this.setting.back)},init:function(e){var t=this,s=t.frontElement.add(t.backElement),n="rotate"+t.setting.axis,a=2*t.element["outer"+("rotatex"===n?"Height":"Width")](),i={perspective:a,position:"relative"},o={transform:n+"("+(t.setting.reverse?"180deg":"-180deg")+")","z-index":"0",position:"relative"},r={"backface-visibility":"hidden","transform-style":"preserve-3d",position:"absolute","z-index":"1"};t.setting.forceHeight?s.outerHeight(t.element.height()):t.setting.autoSize&&(r.height="100%"),t.setting.forceWidth?s.outerWidth(t.element.width()):t.setting.autoSize&&(r.width="100%"),(window.chrome||window.Intl&&Intl.v8BreakIterator)&&"CSS"in window&&(i["-webkit-transform-style"]="preserve-3d"),s.css(r).find("*").css({"backface-visibility":"hidden"}),t.element.css(i),t.backElement.css(o),setTimeout(function(){var n=t.setting.speed/1e3||.5;s.css({transition:"all "+n+"s ease-out"}),"function"==typeof e&&e.call(t.element)},20),t.attachEvents()},clickHandler:function(t){t||(t=window.event),this.element.find(e(t.target).closest('button, a, input[type="submit"]')).length||(this.isFlipped?this.unflip():this.flip())},hoverHandler:function(){var t=this;t.element.off("mouseleave.flip"),t.flip(),setTimeout(function(){t.element.on("mouseleave.flip",e.proxy(t.unflip,t)),t.element.is(":hover")||t.unflip()},t.setting.speed+150)},attachEvents:function(){var t=this;"click"===t.setting.trigger?t.element.on(e.fn.tap?"tap.flip":"click.flip",e.proxy(t.clickHandler,t)):"hover"===t.setting.trigger&&(t.element.on("mouseenter.flip",e.proxy(t.hoverHandler,t)),t.element.on("mouseleave.flip",e.proxy(t.unflip,t)))},flipChanged:function(e){this.element.trigger("flip:change"),"function"==typeof e&&e.call(this.element)},changeSettings:function(e,t){var s=this,n=!1;if(void 0!==e.axis&&s.setting.axis!==e.axis.toLowerCase()&&(s.setting.axis=e.axis.toLowerCase(),n=!0),void 0!==e.reverse&&s.setting.reverse!==e.reverse&&(s.setting.reverse=e.reverse,n=!0),n){var a=s.frontElement.add(s.backElement),i=a.css(["transition-property","transition-timing-function","transition-duration","transition-delay"]);a.css({transition:"none"});var o="rotate"+s.setting.axis;s.isFlipped?s.frontElement.css({transform:o+(s.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}):s.backElement.css({transform:o+(s.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),setTimeout(function(){a.css(i),s.flipChanged(t)},0)}else s.flipChanged(t)}}),e.fn.flip=function(t,n){return"function"==typeof t&&(n=t),"string"==typeof t||"boolean"==typeof t?this.each(function(){var s=e(this).data("flip-model");"toggle"===t&&(t=!s.isFlipped),t?s.flip(n):s.unflip(n)}):this.each(function(){if(e(this).data("flip-model")){var a=e(this).data("flip-model");!t||void 0===t.axis&&void 0===t.reverse||a.changeSettings(t,n)}else e(this).data("flip-model",new s(e(this),t||{},n))}),this}}(jQuery)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(3),a=s.n(n),i=s(6),o=s.n(i),r=s(5);new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,s){e.exports=s.p+"static/img/4_title_timeUp.87948f0.png"},function(e,t,s){e.exports=s.p+"static/img/allstar_logo.f5e2ea9.png"},function(e,t,s){e.exports=s.p+"static/img/allstar_logo_top.3efcf97.png"},function(e,t,s){e.exports=s.p+"static/img/receive.134ca40.png"},function(e,t,s){e.exports=s.p+"static/img/yamawake.c8b7951.png"},function(e,t,s){s(22);var n=s(0)(s(8),s(44),"data-v-40c6aa20",null);e.exports=n.exports},function(e,t,s){s(21);var n=s(0)(s(9),s(43),"data-v-3f2fc6b0",null);e.exports=n.exports},function(e,t,s){s(20);var n=s(0)(s(10),s(42),"data-v-3299cfbf",null);e.exports=n.exports},function(e,t,s){s(19);var n=s(0)(s(11),s(41),"data-v-201652ff",null);e.exports=n.exports},function(e,t,s){s(26);var n=s(0)(s(12),s(48),"data-v-d9e11f00",null);e.exports=n.exports},function(e,t,s){s(23);var n=s(0)(s(13),s(45),"data-v-5621e68c",null);e.exports=n.exports},function(e,t,s){s(24);var n=s(0)(s(14),s(46),"data-v-58160cf9",null);e.exports=n.exports},function(e,t,s){s(25);var n=s(0)(s(15),s(47),"data-v-728a9a86",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"manage"},[s("header",[s("div",{staticClass:"titleWrapper"},[s("p",{staticClass:"title"},[e._v("Dashboard")]),e._v(" "),s("span",{staticClass:"subtitle"},[e._v("Admin Page")]),e._v(" "),s("span",{staticClass:"date"},[e._v(e._s(e.month)+"/"+e._s(e.day))])])]),e._v(" "),s("section",[e._m(0),e._v(" "),s("div",{staticClass:"card single"},[e._m(1),e._v(" "),s("div",{staticClass:"cardContent",attrs:{id:"changeSessionButton"},on:{click:e.changeSession}},[s("span",{staticClass:"cardButton"},[e._v("セッションを切り替える")])])]),e._v(" "),s("div",{staticClass:"card single"},[e._m(2),e._v(" "),s("div",{staticClass:"cardContent"},[s("span",{staticStyle:{"font-size":"24px"}},[e._v(e._s(e.roundId))])])]),e._v(" "),e._m(3),e._v(" "),s("div",{staticClass:"card single"},[e._m(4),e._v(" "),s("div",{staticClass:"cardContent"},[s("span",{staticStyle:{"font-size":"24px"}},[e._v(e._s(e.isAnswerMessage))]),e._v(" "),s("button",{staticClass:"changeRoundButton",attrs:{id:"isAnswer"}},[e._v("変更する")])])]),e._v(" "),s("div",{staticClass:"card single"},[e._m(5),e._v(" "),s("div",{staticClass:"cardContent"},[s("span",{staticStyle:{"font-size":"24px"}},[e._v(e._s(e.isSpecialMessage))]),e._v(" "),s("button",{staticClass:"changeRoundButton",attrs:{id:"isSpecial"}},[e._v("変更する")])])]),e._v(" "),e._m(6),e._v(" "),s("div",{staticClass:"card triple"},[e._m(7),e._v(" "),s("div",{staticClass:"cardContent",staticStyle:{padding:"0"}},[s("div",{staticClass:"tableWrapper"},[e._m(8),e._v(" "),e._l(e.questions,function(t,n){return s("ul",{staticClass:"cell cell-data"},[s("li",{staticClass:"item index",on:{click:function(s){e.publishQuestion(t)}}},[e._v("\n                            "+e._s(t.id)+"\n                        ")]),e._v(" "),s("li",{staticClass:"item"},[s("span",[e._v(e._s(t.problemText))])])])})],2)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"titleWrapper"},[s("p",{staticClass:"title"},[e._v("Dashboard")]),e._v(" "),s("span",{staticClass:"subtitle"},[e._v("2017/04 総会（オールスター感謝祭）管理・操作ページ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cardTitle"},[s("span",[e._v("セッション切り替え")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cardTitle"},[s("span",[e._v("現在のラウンド")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card single"},[s("div",{staticClass:"cardTitle"},[s("span",[e._v("ラウンド切り替え")])]),e._v(" "),s("div",{staticClass:"cardContent"},[s("input",{attrs:{type:"text",id:"roundid",name:"roundid",placeholder:"変更したいラウンドIDを入力",value:""}}),e._v(" "),s("button",{staticClass:"changeRoundButton",attrs:{id:"changeRound"}},[e._v("変更する")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cardTitle"},[s("span",[e._v("制限時間フラグ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cardTitle"},[s("span",[e._v("特例フラグ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card single"},[s("div",{staticClass:"cardTitle"},[s("span",[e._v("全ユーザー回答権リセットボタン")])]),e._v(" "),s("div",{staticClass:"cardContent"},[s("button",{staticClass:"changeRoundButton",attrs:{id:"userReset"}},[e._v("リセットする")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cardTitle"},[s("span",[e._v("問題・解答選択肢一覧")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"cell label"},[s("li",{staticClass:"item label"},[s("span",[e._v("問題ID")])]),e._v(" "),s("li",{staticClass:"item label"},[s("span",[e._v("問題文")])])])}]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("img",{staticClass:"logo",attrs:{src:s(28)}}),e._v(" "),n("div",{staticClass:"login-wrapper"},[n("input",{attrs:{type:"text",id:"userid",name:"userid",placeholder:"名前（フルネーム）を入力",value:""}}),e._v(" "),n("button",{staticClass:"loginButton"},[e._v("はじめる！")])])])}]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("img",{staticClass:"logo",attrs:{src:s(29)}})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dokaben loop komaochi"},[s("h1",[e._v("ドカベン")])])}]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ranking"},[s("ul",{staticClass:"rankingWrapper"},e._l(e.rankings,function(t){return s("li",{staticClass:"ranking-list"},[s("span",{staticClass:"nameRank"},[s("span",{staticClass:"number"},[e._v(e._s(t.ranking))]),e._v(" "),s("span",{staticClass:"name"},[e._v(e._s(t.name))])]),e._v(" "),e.gainFlg===!0?s("span",{staticClass:"count"},[s("span",{staticClass:"gain"},[e._v("獲得額："+e._s(t.gain)+"円")])]):e._e(),e._v(" "),e.gainFlg===!1?s("span",{staticClass:"count"},[s("span",{staticClass:"time",attrs:{id:"time"}},[e._v("回答時間："+e._s(t.time)+"秒")])]):e._e()])})),e._v(" "),e._m(0),e._v(" "),s("audio",{attrs:{id:"startRanking"}},[s("source",{attrs:{src:e.startRanking}}),e._v("\n         Your browser does not support the audio element.\n     ")]),e._v(" "),s("audio",{attrs:{id:"openTop"}},[s("source",{attrs:{src:e.openTop}}),e._v("\n          Your browser does not support the audio element.\n      ")]),e._v(" "),s("audio",{attrs:{id:"openBottom"}},[s("source",{attrs:{src:e.openBottom}}),e._v("\n           Your browser does not support the audio element.\n       ")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yamawake"},[n("img",{attrs:{src:s(31)}})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ready"},[s("div",{staticClass:"point"},[e._v("\n       あなたの獲得したポイント: "+e._s(e.userPoint)+"\n    ")]),e._v(" "),s("div",{staticClass:"reset"},[e._v("\n      りせっと\n    ")]),e._v(" "),s("div",{staticClass:"goAnswerButton"},[s("span",{staticClass:"message"},[e._v(e._s(e.message))])])])},staticRenderFns:[]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"screen"},[s("ul",{staticClass:"imageWrapper"},[s("li",{staticClass:"questionImage question1"},[s("span",{staticClass:"index one"},[e._v("1")]),e._v(" "),s("div",{staticClass:"questionImageText"},[s("span",{staticClass:"choice"},[e._v(e._s(e.answer1))]),e._v(" "),s("span",{staticClass:"selected"},[e._v("18")])])]),e._v(" "),s("li",{staticClass:"questionImage question2"},[s("span",{staticClass:"index two"},[e._v("2")]),e._v(" "),s("div",{staticClass:"questionImageText"},[s("span",{staticClass:"choice"},[e._v(e._s(e.answer2))]),e._v(" "),s("span",{staticClass:"selected"},[e._v("18")])])]),e._v(" "),s("li",{staticClass:"questionImage question3"},[s("span",{staticClass:"index three"},[e._v("3")]),e._v(" "),s("div",{staticClass:"questionImageText"},[s("span",{staticClass:"choice"},[e._v(e._s(e.answer3))]),e._v(" "),s("span",{staticClass:"selected"},[e._v("18")])])]),e._v(" "),s("li",{staticClass:"questionImage question4"},[s("span",{staticClass:"index four"},[e._v("4")]),e._v(" "),s("div",{staticClass:"questionImageText"},[s("span",{staticClass:"choice"},[e._v(e._s(e.answer4))]),e._v(" "),s("span",{staticClass:"selected"},[e._v("18")])])])]),e._v(" "),s("div",{staticClass:"questionText"},[s("div",{staticClass:"questionLogo"},[e._v("Q")]),e._v(" "),s("div",{staticClass:"questionInnerText"},[s("span",[e._v(e._s(e.problemText))])]),e._v(" "),s("div",{staticClass:"time"},[s("span",[e._v(e._s(e.timer))])])]),e._v(" "),e._m(0),e._v(" "),s("audio",{attrs:{id:"openQuestion"}},[s("source",{attrs:{src:e.openQuestion}}),e._v("\n          Your browser does not support the audio element.\n      ")]),e._v(" "),s("audio",{attrs:{id:"timeUpSound"}},[s("source",{attrs:{src:e.timeUpSound}}),e._v("\n           Your browser does not support the audio element.\n       ")]),e._v(" "),s("audio",{attrs:{id:"answering"}},[s("source",{attrs:{src:e.answering}}),e._v("\n            Your browser does not support the audio element.\n        ")]),e._v(" "),s("audio",{attrs:{id:"openAnswer"}},[s("source",{attrs:{src:e.openAnswer}}),e._v("\n             Your browser does not support the audio element.\n         ")]),e._v(" "),s("audio",{attrs:{id:"quizStart"}},[s("source",{attrs:{src:e.quizStart}}),e._v("\n              Your browser does not support the audio element.\n          ")])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeupText"},[n("img",{attrs:{src:s(27)}})])}]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question"},[s("div",{attrs:{id:"questionWrapper"}},[s("span",{staticClass:"questionLabel"},[e._v("Q")]),e._v(" "),s("div",{staticClass:"questionDescription"},[e._v("\n            "+e._s(e.question)+"\n        ")])]),e._v(" "),s("ul",{attrs:{id:"answerWrapper"}},[s("li",{staticClass:"answer",attrs:{value:"0"},on:{click:function(t){e.greet("0")}}},[s("span",{staticClass:"number one",attrs:{value:"0"}},[e._v("1")]),e._v(" "),s("span",{staticClass:"answerDescription",attrs:{value:"1"}},[e._v(e._s(e.answer1))])]),e._v(" "),s("li",{staticClass:"answer",attrs:{value:"1"},on:{click:function(t){e.greet("1")}}},[s("span",{staticClass:"number two",attrs:{value:"1"}},[e._v("2")]),e._v(" "),s("span",{staticClass:"answerDescription",attrs:{value:"2"}},[e._v(e._s(e.answer2))])]),e._v(" "),s("li",{staticClass:"answer",attrs:{value:"2"},on:{click:function(t){e.greet("2")}}},[s("span",{staticClass:"number three",attrs:{value:"2"}},[e._v("3")]),e._v(" "),s("span",{staticClass:"answerDescription",attrs:{value:"3"}},[e._v(e._s(e.answer3))])]),e._v(" "),s("li",{staticClass:"answer",attrs:{value:"3"},on:{click:function(t){e.greet("3")}}},[s("span",{staticClass:"number four",attrs:{value:"3"}},[e._v("4")]),e._v(" "),s("span",{staticClass:"answerDescription",attrs:{value:"4"}},[e._v(e._s(e.answer4))])])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answered"},[n("img",{attrs:{src:s(30)}})])}]}}],[17]);
//# sourceMappingURL=app.070e6952e0555c537f12.js.map