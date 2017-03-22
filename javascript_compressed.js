// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.JavaScript=new Blockly.Generator("JavaScript");Blockly.JavaScript.addReservedWords("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
Blockly.JavaScript.ORDER_ATOMIC=0;Blockly.JavaScript.ORDER_NEW=1.1;Blockly.JavaScript.ORDER_MEMBER=1.2;Blockly.JavaScript.ORDER_FUNCTION_CALL=2;Blockly.JavaScript.ORDER_INCREMENT=3;Blockly.JavaScript.ORDER_DECREMENT=3;Blockly.JavaScript.ORDER_BITWISE_NOT=4.1;Blockly.JavaScript.ORDER_UNARY_PLUS=4.2;Blockly.JavaScript.ORDER_UNARY_NEGATION=4.3;Blockly.JavaScript.ORDER_LOGICAL_NOT=4.4;Blockly.JavaScript.ORDER_TYPEOF=4.5;Blockly.JavaScript.ORDER_VOID=4.6;Blockly.JavaScript.ORDER_DELETE=4.7;
Blockly.JavaScript.ORDER_DIVISION=5.1;Blockly.JavaScript.ORDER_MULTIPLICATION=5.2;Blockly.JavaScript.ORDER_MODULUS=5.3;Blockly.JavaScript.ORDER_SUBTRACTION=6.1;Blockly.JavaScript.ORDER_ADDITION=6.2;Blockly.JavaScript.ORDER_BITWISE_SHIFT=7;Blockly.JavaScript.ORDER_RELATIONAL=8;Blockly.JavaScript.ORDER_IN=8;Blockly.JavaScript.ORDER_INSTANCEOF=8;Blockly.JavaScript.ORDER_EQUALITY=9;Blockly.JavaScript.ORDER_BITWISE_AND=10;Blockly.JavaScript.ORDER_BITWISE_XOR=11;Blockly.JavaScript.ORDER_BITWISE_OR=12;
Blockly.JavaScript.ORDER_LOGICAL_AND=13;Blockly.JavaScript.ORDER_LOGICAL_OR=14;Blockly.JavaScript.ORDER_CONDITIONAL=15;Blockly.JavaScript.ORDER_ASSIGNMENT=16;Blockly.JavaScript.ORDER_COMMA=17;Blockly.JavaScript.ORDER_NONE=99;
Blockly.JavaScript.ORDER_OVERRIDES=[[Blockly.JavaScript.ORDER_FUNCTION_CALL,Blockly.JavaScript.ORDER_MEMBER],[Blockly.JavaScript.ORDER_FUNCTION_CALL,Blockly.JavaScript.ORDER_FUNCTION_CALL],[Blockly.JavaScript.ORDER_MEMBER,Blockly.JavaScript.ORDER_MEMBER],[Blockly.JavaScript.ORDER_MEMBER,Blockly.JavaScript.ORDER_FUNCTION_CALL],[Blockly.JavaScript.ORDER_LOGICAL_NOT,Blockly.JavaScript.ORDER_LOGICAL_NOT],[Blockly.JavaScript.ORDER_MULTIPLICATION,Blockly.JavaScript.ORDER_MULTIPLICATION],[Blockly.JavaScript.ORDER_ADDITION,
Blockly.JavaScript.ORDER_ADDITION],[Blockly.JavaScript.ORDER_LOGICAL_AND,Blockly.JavaScript.ORDER_LOGICAL_AND],[Blockly.JavaScript.ORDER_LOGICAL_OR,Blockly.JavaScript.ORDER_LOGICAL_OR]];
Blockly.JavaScript.init=function(a){Blockly.JavaScript.definitions_=Object.create(null);Blockly.JavaScript.functionNames_=Object.create(null);Blockly.JavaScript.variableDB_?Blockly.JavaScript.variableDB_.reset():Blockly.JavaScript.variableDB_=new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);var d=[];a=a.variableList;if(a.length){for(var b=0;b<a.length;b++)d[b]=Blockly.JavaScript.variableDB_.getName(a[b],Blockly.Variables.NAME_TYPE);Blockly.JavaScript.definitions_.variables="var "+d.join(", ")+
";"}};Blockly.JavaScript.finish=function(a){var d=[],b;for(b in Blockly.JavaScript.definitions_)d.push(Blockly.JavaScript.definitions_[b]);delete Blockly.JavaScript.definitions_;delete Blockly.JavaScript.functionNames_;Blockly.JavaScript.variableDB_.reset();return d.join("\n\n")+"\n\n\n"+a};Blockly.JavaScript.scrubNakedValue=function(a){return a+";\n"};Blockly.JavaScript.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.JavaScript.scrub_=function(a,d){var b="";if(!a.outputConnection||!a.outputConnection.targetConnection){var e=a.getCommentText();(e=Blockly.utils.wrap(e,Blockly.JavaScript.COMMENT_WRAP-3))&&(b=a.getProcedureDef?b+("/**\n"+Blockly.JavaScript.prefixLines(e+"\n"," * ")+" */\n"):b+Blockly.JavaScript.prefixLines(e+"\n","// "));for(var c=0;c<a.inputList.length;c++)a.inputList[c].type==Blockly.INPUT_VALUE&&(e=a.inputList[c].connection.targetBlock())&&(e=Blockly.JavaScript.allNestedComments(e))&&(b+=
Blockly.JavaScript.prefixLines(e,"// "))}c=a.nextConnection&&a.nextConnection.targetBlock();c=Blockly.JavaScript.blockToCode(c);return b+d+c};
Blockly.JavaScript.getAdjusted=function(a,d,b,e,c){b=b||0;c=c||Blockly.JavaScript.ORDER_NONE;a.workspace.options.oneBasedIndex&&b--;var g=a.workspace.options.oneBasedIndex?"1":"0";a=0<b?Blockly.JavaScript.valueToCode(a,d,Blockly.JavaScript.ORDER_ADDITION)||g:0>b?Blockly.JavaScript.valueToCode(a,d,Blockly.JavaScript.ORDER_SUBTRACTION)||g:e?Blockly.JavaScript.valueToCode(a,d,Blockly.JavaScript.ORDER_UNARY_NEGATION)||g:Blockly.JavaScript.valueToCode(a,d,c)||g;if(Blockly.isNumber(a))a=parseFloat(a)+b,
e&&(a=-a);else{if(0<b){a=a+" + "+b;var f=Blockly.JavaScript.ORDER_ADDITION}else 0>b&&(a=a+" - "+-b,f=Blockly.JavaScript.ORDER_SUBTRACTION);e&&(a=b?"-("+a+")":"-"+a,f=Blockly.JavaScript.ORDER_UNARY_NEGATION);f=Math.floor(f);c=Math.floor(c);f&&c>=f&&(a="("+a+")")}return a};