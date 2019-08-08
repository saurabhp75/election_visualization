!function(t){"use strict";const e=(t,e)=>{const{colorValues:r,colorLabels:a,labelRectSize:s,labelSpacing:o,labelTextOffset:l,onColorClick:n,selectedColorValue:i,selectedConstituency:p}=e;t.selectAll(".tick").remove();const d=t.selectAll(".tick").data(r);d.exit().remove();const c=d.enter().append("g").attr("class","tick");c.merge(d).attr("transform",(t,e)=>`translate(0, ${e*o})`).attr("opacity",t=>!i||t===i||p?1:.2).on("click",t=>n(t===i?null:t)),c.append("rect").merge(d.select("rect")).attr("fill",(t,e)=>r[e]).attr("width",s).attr("height",s),c.append("text").merge(d.select("text")).text((t,e)=>a[e]).attr("dy","1.2em").attr("x",l)},r=()=>{const e=t.select("svg");return{width:+e.attr("width"),height:+e.attr("height")}},a=t.geoMercator().scale(6e4).center([77.15,28.65]).translate([r().width/2,r().height/2]),s=t.geoPath().projection(a),o=(e,r)=>{console.log("choroplethMap called");const{features:a,colorScale:o,selectedColorValue:l,onConstituencyClick:n,selectedConstituency:i,div:p,partyMap:d,selectedFeature:c}=r,u=e.selectAll("path").data(a,t=>t.properties.ASM_NAME),h=u.enter().append("path").attr("class","constituency").attr("d",s);"Top parties"===c?h.merge(u).attr("fill",t=>((t,e,r,a)=>{let s;return s=null===t.properties.Party||""===t.properties.Party?"black":r===t.properties.ASM_NAME?"yellow":a.hasOwnProperty(t.properties.Party)?e(t.properties.Party):e("Others")})(t,o,i,d)).attr("opacity",t=>((t,e,r,a,s)=>{let o;return o=r?r===a(t.properties.Party)?1:.2:1})(t,0,l,o)).classed("highlighted",t=>l&&l===o(t.properties.Party)).on("click",t=>n(t.properties.ASM_NAME===i?null:t.properties.ASM_NAME)).on("mouseover",t=>{p.transition().duration(300).style("opacity",.7),p.html("<p><strong>"+t.properties.ASM_NAME+"</strong></p><table><tbody><tr><td class='wide'>MP:</td><td>"+t.properties.Candidate+"</td></tr><tr><td>Party:</td><td>"+t.properties.Party+"</td></tr></td></tr></tbody></table>").style("left",event.pageX+"px").style("top",event.pageY-30+"px")}).on("mouseout",function(){p.transition().duration(300).style("opacity",0)}):"Assets"===c?h.merge(u).attr("fill",t=>((t,e,r)=>{let a;return a=t.properties.Assets_num?r===t.properties.ASM_NAME?"yellow":e(t.properties.Assets_num):"black"})(t,o,i)).attr("opacity",t=>((t,e,r,a)=>{let s;return r?(s=r!=a(t.properties.Assets_num)?.2:1,null===t.properties.Assets_num&&(s=.2)):s=1,s})(t,0,l,o)).classed("highlighted",t=>l&&l===o(t.properties.Assets_num)).on("click",t=>n(t.properties.ASM_NAME===i?null:t.properties.ASM_NAME)).on("mouseover",e=>{p.transition().duration(300).style("opacity",.7),p.html("<p><strong>"+e.properties.ASM_NAME+"</strong></p><table><tbody><tr><td class='wide'>MP:</td><td>"+e.properties.Candidate+"</td></tr><tr><td>Assets:</td><td>₹"+t.format(",.2r")(e.properties.Assets_num)+"</td></tr><tr><td>Party:</td><td>"+e.properties.Party+"</td></tr></td></tr></tbody></table>").style("left",event.pageX+"px").style("top",event.pageY-30+"px")}).on("mouseout",function(){p.transition().duration(300).style("opacity",0)}):"Criminal Case(s)"===c?h.merge(u).attr("fill",t=>((t,e,r)=>{let a;return a=null===t.properties.Criminal_C?"black":r===t.properties.ASM_NAME?"yellow":e(t.properties.Criminal_C)})(t,o,i)).attr("opacity",t=>((t,e,r,a)=>{let s;return r?(s=r!=a(t.properties.Criminal_C)?.2:1,null===t.properties.Criminal_C&&(s=.2)):s=1,s})(t,0,l,o)).classed("highlighted",t=>l&&l===o(t.properties.Criminal_C)).on("click",t=>n(t.properties.ASM_NAME===i?null:t.properties.ASM_NAME)).on("mouseover",t=>{p.transition().duration(300).style("opacity",.7),p.html("<p><strong>"+t.properties.ASM_NAME+"</strong></p><table><tbody><tr><td class='wide'>MP:</td><td>"+t.properties.Candidate+"</td></tr><tr><td>Criminal case(s):</td><td>"+t.properties.Criminal_C+"</td></tr><tr><td>Party:</td><td>"+t.properties.Party+"</td></tr></td></tr></tbody></table>").style("left",event.pageX+"px").style("top",event.pageY-30+"px")}).on("mouseout",function(){p.transition().duration(300).style("opacity",0)}):"Education"===c&&h.merge(u).attr("fill",t=>((t,e,r)=>{let a;return a=null===t.properties.Criminal_C?"black":r===t.properties.ASM_NAME?"yellow":e(t.properties.edu)})(t,o,i)).attr("opacity",t=>((t,e,r,a)=>{let s;return r?(s=r!=a(t.properties.edu)?.2:1,0===t.properties.edu&&(s=.2)):s=1,s})(t,0,l,o)).classed("highlighted",t=>l&&l===o(t.properties.edu)).on("click",t=>n(t.properties.ASM_NAME===i?null:t.properties.ASM_NAME)).on("mouseover",t=>{p.transition().duration(300).style("opacity",.7),p.html("<p><strong>"+t.properties.ASM_NAME+"</strong></p><table><tbody><tr><td class='wide'>MP:</td><td>"+t.properties.Candidate+"</td></tr><tr><td>Education:</td><td>"+t.properties.Education+"</td></tr><tr><td>Party:</td><td>"+t.properties.Party+"</td></tr></td></tr></tbody></table>").style("left",event.pageX+"px").style("top",event.pageY-30+"px")}).on("mouseout",function(){p.transition().duration(300).style("opacity",0)})},l=(e,r)=>{const{selectedConstituency:a,selectedColorValue:s,features:o,colorValues:l,colorLabels:n,selectedFeature:i}=r,p=((e,r,a,s,o,l)=>{if(!e&&!r)return["Click on legend bar or Map"];if(e){const r=a.filter(t=>t.properties.ASM_NAME===e),s=r[0].properties.ASM_NAME,o=null===r[0].properties.Candidate?"No data":r[0].properties.Candidate,l=null===r[0].properties.Party?"No data":r[0].properties.Party,n=null===r[0].properties.Education?"No data":r[0].properties.Education,i=null===r[0].properties.Criminal_C?"No data":r[0].properties.Criminal_C,p=r[0].properties.Assets_num?r[0].properties.Assets_num:"No data";return["Constituency: "+s,"MP: "+o,"Assets(Rs.): "+t.format(",.2r")(p),"Criminal case(s): "+i,"Education: "+n,"Party: "+l]}if(r){const t=s.indexOf(r);return"Assets"===l?[`MP(s) with assets:  ${o[t]}`]:"Criminal Case(s)"===l?[`MPs with ${o[t]} criminal case(s)`]:"Education"===l?[`MPs with education:  ${o[t]}`]:"Top parties"===l?[`Constituencies won by: ${o[t]}`]:["This should not be displayed"]}})(a,s,o,l,n,i);e.selectAll("tspan").remove(),e.selectAll("tspan").data(p).enter().append("tspan").attr("x","0").attr("dy","1.5rem").text(t=>t)};let n,i,p,d,c,u,h,y="Assets";let g,m,A,C,f,M,b,E;const P=(t,e,r,a,s,o)=>{E=((t,e,r,a,s,o)=>{const l=e.reduce(function(t,e){return t.length>e.length?t:e});return{width:r+a+5*(o.length>l.length?o:l).length+a,height:s*(t.length+2)}})(t,e,r,a,s,o),(A=v.selectAll(".colorLegend").data([o])).exit().remove(),A=A.enter().append("g").merge(A).attr("class","colorLegend").attr("transform",`translate(10, ${x-E.height})`),(M=A.selectAll("rect").data([o])).exit().remove(),M.enter().append("rect").merge(M).attr("x",-r).attr("y",-r).attr("width",E.width).attr("height",E.height).attr("fill","red").attr("rx",r).attr("stroke","black").attr("stroke-width",1).attr("opacity",.3),(C=A.selectAll(".legendTitle").data([o])).exit().remove();const l=C.enter().append("g").merge(C).attr("class","legendTitle").selectAll("text").data([o]);l.enter().append("text").merge(l).text(o),(f=A.selectAll(".legendBody").data([o])).exit().remove(),b=f.enter().append("g").attr("transform",`translate(0, ${s/2})`).attr("class","legendBody").merge(f)};t.select("#menus").call((t,e)=>{const{options:r,onOptionClicked:a}=e;let s=t.selectAll("select").data([null]);const o=(s=s.enter().append("select").merge(s).on("change",function(){a(this.value)})).selectAll("option").data(r);o.enter().append("option").merge(o).attr("value",t=>t).text(t=>t)},{options:["Assets","Criminal Case(s)","Education","Top parties"],onOptionClicked:t=>{p=null,n=null,y=t,V(),L()}});const _=d3.select("body").append("div").attr("class","tooltip").style("opacity",0),v=t.select("svg"),x=v.attr("height"),w=v.attr("width"),k=v.append("g"),S=v.append("g").attr("transform",`translate(${w-370-15},20)`),N=S.selectAll("rect").data([null]);N.enter().append("rect").merge(N).attr("width",370).attr("height",170).attr("fill","red").attr("stroke","black").attr("stroke-width",1).attr("rx",10).attr("opacity",.3);const T=S.selectAll("text").data([null]),O=T.enter().append("text").attr("class","infoText").attr("transform","translate(10,5)").merge(T);v.append("rect").attr("x",0).attr("y",0).attr("height",r().height).attr("width",r().width).style("stroke","black").style("fill","none").style("stroke-width",1);v.call(t.zoom().on("zoom",()=>{k.attr("transform",t.event.transform),_.attr("transform",t.event.transform)}));const V=()=>{"Top parties"===y?(c=["#228b22","#FFA500"],u=d=["AAP","BJP"],(h=t.scaleOrdinal()).domain(d).range(c),P(c,u,30,40,30,g="Top parties")):"Assets"===y?(h=t.scaleThreshold(),d=[1e7,1e8,2e8,3e8],c=["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],u=["< 1 Crore","1 - 10 Cr.","10 - 20 Cr.","20 - 30 Cr.","> 30 Cr."],h.domain(d).range(c),c.reverse(),u.reverse(),P(c,u,30,40,30,g="Assets(Rs.)")):"Criminal Case(s)"===y?(d=[1,2,5,10],c=["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],u=["None","1","2 - 4","5 - 9","> 9"],(h=t.scaleThreshold()).domain(d).range(c),c.reverse(),u.reverse(),P(c,u,30,40,30,g="Criminal Case(s)")):"Education"===y&&(d=[1,2,3,4],c=["#edf8e9","#bae4b3","#74c476","#238b45"],u=["Others","School","Graduate","Post Graduate"],(h=t.scaleOrdinal()).domain(d).range(c),c.reverse(),u.reverse(),P(c,u,30,40,30,g="Education"))},$=t=>{p&&(p=null),n=t,L()},F=t=>{n&&(n=null),p=t,L()};(()=>t.json("https://raw.githubusercontent.com/saurabhp75/saurabhp75.github.io/master/data/merged_delhi_map.json").then(t=>{return t.features}))().then(t=>{(t=>{t.forEach(t=>{"Post Graduate"===t.properties.Education?t.properties.edu=4:"Graduate Professional"===t.properties.Education||"Graduate"===t.properties.Education?t.properties.edu=3:"12th Pass"===t.properties.Education||"10th Pass"===t.properties.Education||"8th Pass"===t.properties.Education||"5th Pass"===t.properties.Education?t.properties.edu=2:"Others"===t.properties.Education?t.properties.edu=1:t.properties.edu=0})})(i=t),m=(t=>{let e=t.reduce((t,e)=>{let r=e.properties.Party;return t.hasOwnProperty(r)||(t[r]=0),t[r]++,t},{}),r=[];for(let t in e)r.push([t,e[t]]);r.sort(function(t,e){return e[1]-t[1]}),r=r.slice(0,5);const a={};for(var s=0;s<r.length;++s)a[r[s][0]]=r[s][1];return a})(i),V(),L()});const L=()=>{console.log("render called"),k.call(o,{features:i,colorScale:h,selectedColorValue:n,onConstituencyClick:F,selectedConstituency:p,div:_,partyMap:m,selectedFeature:y}),b.call(e,{colorValues:c,colorLabels:u,labelRectSize:30,labelSpacing:30,labelTextOffset:40,onColorClick:$,selectedColorValue:n,selectedConstituency:p,selectedFeature:y}),O.call(l,{selectedConstituency:p,selectedColorValue:n,features:i,colorValues:c,colorLabels:u,selectedFeature:y})}}(d3);
//# sourceMappingURL=delhiBundle.js.map