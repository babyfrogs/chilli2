(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{100:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return j}));var r=n(14),a=n(3),i=n(2),c=n.n(i),s=n(22),o=n(32),u=n(5),l=n(190),d=n(54),p=new s.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),b=new s.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]&&l[3],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,y(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return o=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),s=!0,console.log("Returning status",o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.e.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},m=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,o,u,l,d,b,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.c(r,t,{preflightCommitment:"recent"}),e.next=3,s.b.fetchIdl(p,a);case 3:return i=e.sent,o=new s.b(i,p,a),e.next=7,o.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),b=l-d,f=u.data.whitelistMintSettings&&u.data.whitelistMintSettings.presale&&(!u.data.goLiveDate||u.data.goLiveDate.toNumber()>(new Date).getTime()/1e3),e.abrupt("return",{id:n,program:o,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:b,isSoldOut:0===b,isActive:(f||u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3)&&(!u.data.endSettings||(u.data.endSettings.endSettingType.date?u.data.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.data.endSettings.number.toNumber())),isPresale:f,goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 13:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,p,f,m,j,y,k,O,w,S,T,P,A,E,R,M,C;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.e.Keypair.generate(),e.next=3,Object(d.d)(a.publicKey,n);case 3:if(i=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(d.d)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return p=e.t0,f=t.id,m=[],j=[a],y=[],e.t1=s.e.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=o.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 22:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,a.publicKey,0,n,n),e.t10=g(i,n,n,a.publicKey),e.t11=o.c.createMintToInstruction(o.b,a.publicKey,i,n,[],1),k=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=m,e.next=34,Object(d.f)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return m.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=m,e.next=42,Object(d.e)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return O=new s.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(d.d)(O,n);case 49:if(w=e.sent[0],m.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=s.e.Keypair.generate(),m.push({pubkey:O,isWritable:!0,isSigner:!1}),m.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),j.push(S),e.next=58,t.program.provider.connection.getAccountInfo(w);case 58:e.sent&&(k.push(o.c.createApproveInstruction(o.b,w,S.publicKey,n,[],1)),y.push(o.c.createRevokeInstruction(o.b,w,n,[])));case 60:return t.state.tokenMint&&(T=s.e.Keypair.generate(),j.push(T),m.push({pubkey:p,isWritable:!0,isSigner:!1}),m.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),k.push(o.c.createApproveInstruction(o.b,p,T.publicKey,n,[],t.state.price.toNumber())),y.push(o.c.createRevokeInstruction(o.b,p,n,[]))),e.next=63,x(a.publicKey);case 63:return P=e.sent,e.next=66,h(a.publicKey);case 66:return A=e.sent,e.next=69,v(f);case 69:return E=e.sent,R=Object(r.a)(E,2),M=R[0],C=R[1],e.t18=k,e.next=76,t.program.instruction.mintNft(C,{accounts:{candyMachine:f,candyMachineCreator:M,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:A,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:u.SystemProgram.programId,rent:s.e.SYSVAR_RENT_PUBKEY,clock:s.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:s.e.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:s.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:m.length>0?m:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[k,y],[j,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(10).Buffer)},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(15),i=n(3),c=n(2),s=n.n(c),o=n(5),u=n(90);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(i.a)(s.a.mark((function e(t,n,i,c){var l,d,p,f,g,m,h,x,v,j,y,k,O,w,S=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,d=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",p=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},g=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.e;case 7:if(m=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:g=e.sent;case 12:h=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=g.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),m.push(s)},x=0;case 14:if(!(x<i.length)){e.next=21;break}if("continue"!==h(x)){e.next=18;break}return e.abrupt("continue",18);case 18:x++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(m);case 23:v=e.sent,j=[],y={breakEarly:!1,i:0},console.log("Signed txns length",v.length,"vs handed in length",i.length),k=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=b({connection:t,signedTransaction:v[n]})).then((function(e){var t=e.txid;e.slot;p(t,n)})).catch((function(e){f(v[n],n),l===r.StopOnFailure&&(y.breakEarly=!0,y.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!y.breakEarly){e.next=19;break}return console.log("Died on ",y.i),e.t1=y.i,e.next=16,Promise.all(j);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:j.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),O=0;case 29:if(!(O<v.length)){e.next=37;break}return e.delegateYield(k(O),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:O++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(j);case 40:return e.t1=v.length,e.next=43,Promise.all(j);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},p=15e3;function b(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,u,l,b,f,m,x,j,y;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?p:a,o=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return b=e.sent,console.log("Started awaiting confirmation for",b),f=!1,Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(d()-u<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(b,c,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return x=null,e.prev=28,e.next=31,g(r,n,"single");case 31:x=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!x||!x.err){e.next=47;break}if(!x.logs){e.next=46;break}j=x.logs.length-1;case 39:if(!(j>=0)){e.next=46;break}if(!(y=x.logs[j]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+y.slice("Program log: ".length));case 43:--j,e.next=39;break;case 46:throw new Error(JSON.stringify(x.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",b,d()-u),e.abrupt("return",{txid:b,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t,n,r){var a,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return x.apply(this,arguments)}function x(){return x=Object(i.a)(s.a.mark((function e(t,n,r){var a,c,o,u,l,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",c=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(d,p){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(b){o=!0,console.error("WS error in setup",t,b)}case 2:if(o||!c){e.next=8;break}return Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,p(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}},213:function(e,t,n){},214:function(e,t){},216:function(e,t){},237:function(e,t){},238:function(e,t){},304:function(e,t,n){},305:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(0),s=n.n(c),o=n(26),u=n.n(o),l=(n(213),n(22)),d=n(18),p=n(3),b=n(14),f=n(98),g=n(2),m=n.n(g),h=n(78),x=n(346),v=n(354),j=n(340),y=n(352),k=n(5),O=n(183),w=n(127),S=n(100),T=n(344),P=n(341),A=n(191),E=n(336),R=n(359),M=n(17),C=Object(E.a)((function(e){return Object(R.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.5),marginRight:0,width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:e.spacing(1),marginRight:0,padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),K=function(e){var t=e.date,n=e.status,r=e.style,a=e.onComplete,i=C();return t?Object(M.jsx)(A.a,{date:t,onComplete:a,renderer:function(e){var t=e.days,a=e.hours,c=e.minutes,s=e.seconds;return a+=24*t,e.completed?n?Object(M.jsx)("span",{className:i.done,children:n}):null:Object(M.jsxs)("div",{className:i.root,style:r,children:[Object(M.jsxs)(j.a,{elevation:0,children:[Object(M.jsx)("span",{className:i.item,children:a<10?"0".concat(a):a}),Object(M.jsx)("span",{children:"hrs"})]}),Object(M.jsxs)(j.a,{elevation:0,children:[Object(M.jsx)("span",{className:i.item,children:c<10?"0".concat(c):c}),Object(M.jsx)("span",{children:"mins"})]}),Object(M.jsxs)(j.a,{elevation:0,children:[Object(M.jsx)("span",{className:i.item,children:s<10?"0".concat(s):s}),Object(M.jsx)("span",{children:"secs"})]})]})}}):null},_=n(54),N=function(e){var t,n,r=e.candyMachine;return Object(M.jsx)(T.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:Object(M.jsxs)(T.a,{container:!0,direction:"row",wrap:"nowrap",children:[r&&Object(M.jsxs)(T.a,{container:!0,direction:"row",wrap:"nowrap",children:[Object(M.jsxs)(T.a,{container:!0,direction:"column",children:[Object(M.jsx)(P.a,{variant:"body2",color:"textSecondary",children:"Remaining"}),Object(M.jsx)(P.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(null===r||void 0===r?void 0:r.state.itemsRemaining)})]}),Object(M.jsxs)(T.a,{container:!0,direction:"column",children:[Object(M.jsx)(P.a,{variant:"body2",color:"textSecondary",children:"Price"}),Object(M.jsx)(P.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:I(r)})]})]}),Object(M.jsx)(K,{date:Object(_.g)(null!==r&&void 0!==r&&r.state.goLiveDate?null===r||void 0===r?void 0:r.state.goLiveDate:null!==r&&void 0!==r&&r.state.isPresale?new l.a((new Date).getTime()/1e3):void 0),style:{justifyContent:"flex-end"},status:null===r||void 0===r||null===(t=r.state)||void 0===t||!t.isActive||null!==r&&void 0!==r&&null!==(n=r.state)&&void 0!==n&&n.isSoldOut?"COMPLETED":null!==r&&void 0!==r&&r.state.isPresale?"PRESALE":"LIVE"})]})})},I=function(e){var t,n,r=_.c.asNumber(e.state.isPresale&&null!==(t=e.state.whitelistMintSettings)&&void 0!==t&&t.discountPrice?null===(n=e.state.whitelistMintSettings)||void 0===n?void 0:n.discountPrice:e.state.price);return"\u25ce ".concat(r)},D=n(338),L=n(345),B=n(89),W=Object(h.default)(D.a)(r||(r=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),U=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=Object(B.useGateway)(),i=a.requestGatewayToken,s=a.gatewayStatus,o=Object(c.useState)(!1),u=Object(b.a)(o,2),l=u[0],d=u[1];Object(c.useEffect)((function(){s===B.GatewayStatus.ACTIVE&&l&&(t(),d(!1))}),[s,l,d,t]);return Object(M.jsx)(W,{disabled:(null===n||void 0===n?void 0:n.state.isSoldOut)||r||!(null!==n&&void 0!==n&&n.state.isActive),onClick:Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),null===n||void 0===n||!n.state.isActive||null===n||void 0===n||!n.state.gatekeeper){e.next=10;break}if(s!==B.GatewayStatus.ACTIVE){e.next=6;break}d(!0),e.next=8;break;case 6:return e.next=8,i();case 8:e.next=13;break;case 10:return e.next=12,t();case 12:d(!1);case 13:case"end":return e.stop()}}),e)}))),variant:"contained",children:null!==n&&void 0!==n&&n.state.isSoldOut?"SOLD OUT":r?Object(M.jsx)(L.a,{}):null!==n&&void 0!==n&&n.state.isPresale?"PRESALE MINT":"MINT"})},F=Object(h.default)(w.a)(a||(a=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),G=h.default.div(i||(i=Object(f.a)([""]))),Y=function(e){var t,n,r=Object(c.useState)(!1),a=Object(b.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(),u=Object(b.a)(o,2),l=u[0],f=u[1],g=Object(c.useState)({open:!1,message:"",severity:void 0}),h=Object(b.a)(g,2),w=h[0],T=h[1],P=e.rpcHost,A=Object(O.b)(),E=Object(c.useMemo)((function(){if(A&&A.publicKey&&A.signAllTransactions&&A.signTransaction)return{publicKey:A.publicKey,signAllTransactions:A.signAllTransactions,signTransaction:A.signTransaction}}),[A]),R=Object(c.useCallback)(Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(E){t.next=2;break}return t.abrupt("return");case 2:if(!e.candyMachineId){t.next=14;break}return t.prev=3,t.next=6,Object(S.c)(E,e.candyMachineId,e.connection);case 6:n=t.sent,f(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log("There was a problem fetching Candy Machine state"),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,10]])}))),[E,e.candyMachineId,e.connection]),C=function(){var t=Object(p.a)(m.a.mark((function t(){var n,r,a,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,s(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(A.connected&&null!==l&&void 0!==l&&l.program&&A.publicKey)){t.next=13;break}return t.next=6,Object(S.d)(l,A.publicKey);case 6:if(r=t.sent[0],a={err:!0},!r){t.next=12;break}return t.next=11,Object(S.b)(r,e.txTimeout,e.connection,!0);case 11:a=t.sent;case 12:a&&!a.err?T({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}):T({open:!0,message:"Mint failed! Please try again!",severity:"error"});case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),i=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(i="SOLD OUT!",window.location.reload()):312===t.t0.code&&(i="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?i="SOLD OUT!":t.t0.message.indexOf("0x135")&&(i="Insufficient funds to mint. Please fund your wallet."):i="Transaction Timeout! Please try again.",T({open:!0,message:i,severity:"error"});case 20:return t.prev=20,s(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){R()}),[E,e.candyMachineId,e.connection,R]),Object(M.jsxs)(x.a,{style:{marginTop:100},children:[Object(M.jsx)(x.a,{maxWidth:"xs",style:{position:"relative"},children:Object(M.jsx)(j.a,{style:{padding:24,backgroundColor:"#151A1F",borderRadius:6},children:A.connected?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(N,{candyMachine:l}),Object(M.jsx)(G,{children:null!==l&&void 0!==l&&l.state.isActive&&null!==l&&void 0!==l&&l.state.gatekeeper&&A.publicKey&&A.signTransaction?Object(M.jsx)(B.GatewayProvider,{wallet:{publicKey:A.publicKey||new k.PublicKey(S.a),signTransaction:A.signTransaction},gatekeeperNetwork:null===l||void 0===l||null===(t=l.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:P,options:{autoShowModal:!1},children:Object(M.jsx)(U,{candyMachine:l,isMinting:i,onMint:C})}):Object(M.jsx)(U,{candyMachine:l,isMinting:i,onMint:C})})]}):Object(M.jsx)(F,{children:"Connect Wallet"})})}),Object(M.jsx)(v.a,{open:w.open,autoHideDuration:6e3,onClose:function(){return T(Object(d.a)(Object(d.a)({},w),{},{open:!1}))},children:Object(M.jsx)(y.a,{onClose:function(){return T(Object(d.a)(Object(d.a)({},w),{},{open:!1}))},severity:w.severity,children:w.message})})]})},H=n(355),z=n(356),V=n(357),q=n(349),J=n(350),Z=n(358),Q=n(353),X=n(196),$=n(351),ee=Object(X.a)({palette:{type:"dark"}}),te=function(){try{return new l.e.PublicKey("3qGHLABecv6hvCSGCJuEG1Ar5SxxLP3ygLDeE2wJSce1")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),ne="mainnet-beta",re="https://solana-api.projectserum.com",ae=new l.e.Connection(re),ie=parseInt(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CANDY_MACHINE_ID:"3qGHLABecv6hvCSGCJuEG1Ar5SxxLP3ygLDeE2wJSce1",REACT_APP_SOLANA_NETWORK:"mainnet-beta",REACT_APP_SOLANA_RPC_HOST:"https://solana-api.projectserum.com"}).REACT_APP_CANDY_START_DATE,10),ce=function(){var e=Object(c.useMemo)((function(){return Object(k.clusterApiUrl)(ne)}),[]),t=Object(c.useMemo)((function(){return[Object(H.a)(),Object(z.a)(),Object(V.a)(),Object(q.a)({network:ne}),Object(J.a)({network:ne})]}),[]);return Object(M.jsx)($.a,{theme:ee,children:Object(M.jsx)(Z.a,{endpoint:e,children:Object(M.jsx)(Q.a,{wallets:t,autoConnect:!0,children:Object(M.jsx)(w.b,{children:Object(M.jsx)(Y,{candyMachineId:te,connection:ae,startDate:ie,txTimeout:3e4,rpcHost:re})})})})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};n(304);u.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(ce,{})}),document.getElementById("root")),se()},54:function(e,t,n){"use strict";(function(e){n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return m}));var r=n(3),a=n(2),i=n.n(a),c=n(22),s=n(32),o=n(5),u=function(e){if(e)return new Date(1e3*e.toNumber())},l=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),d={format:function(e){return e?l.format(e):"--"},asNumber:function(e){if(e)return e.toNumber()/o.LAMPORTS_PER_SOL}},p=new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),f=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],p);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(10).Buffer)}},[[305,1,2]]]);
//# sourceMappingURL=main.64e5d0f8.chunk.js.map