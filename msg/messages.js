/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 *
 * After modifying this file, run `npm run translate` from the root directory
 * to regenerate `./msg/json/en.json`.
 */
'use strict';

goog.provide('Blockly.Msg.en');
goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = "重复执行";
Blockly.Msg.CONTROL_REPEAT = "重复执行 %1";
Blockly.Msg.CONTROL_IF = "如果 %1 那么";
Blockly.Msg.CONTROL_ELSE = "否则";
Blockly.Msg.CONTROL_STOP = "停止";
Blockly.Msg.CONTROL_STOP_ALL = "全部";
Blockly.Msg.CONTROL_STOP_THIS = "当前脚本";
Blockly.Msg.CONTROL_STOP_OTHER = "角色的其他脚本";
Blockly.Msg.CONTROL_WAIT = "等待 %1 秒";
Blockly.Msg.CONTROL_WAITUNTIL = "在 %1 前一直等待";
Blockly.Msg.CONTROL_REPEATUNTIL = "重复执行直到 %1";
Blockly.Msg.CONTROL_WHILE = "循环 %1";
Blockly.Msg.CONTROL_FOREACH = "for each %1 in %2";
Blockly.Msg.CONTROL_STARTASCLONE = "当作为克隆体启动时";
Blockly.Msg.CONTROL_CREATECLONEOF = "克隆 %1";
Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF = "自己";
Blockly.Msg.CONTROL_DELETETHISCLONE = "删除本克隆体";
Blockly.Msg.CONTROL_COUNTER = "计数器";
Blockly.Msg.CONTROL_INCRCOUNTER = "增加计数";
Blockly.Msg.CONTROL_CLEARCOUNTER = "清空计数";
Blockly.Msg.CONTROL_ALLATONCE = "一次性";

// Data blocks
Blockly.Msg.DATA_SETVARIABLETO = "将 %1 设置为 %2";
Blockly.Msg.DATA_CHANGEVARIABLEBY = "将 %1 增加 %2";
Blockly.Msg.DATA_SHOWVARIABLE = "显示变量 %1";
Blockly.Msg.DATA_HIDEVARIABLE = "隐藏变量 %1";
Blockly.Msg.DATA_ADDTOLIST = "将 %1 添加到 %2";
Blockly.Msg.DATA_DELETEOFLIST = "去掉 %2 的第 %1 位";
Blockly.Msg.DATA_INSERTATLIST = "将 %1 插入到 %3 的第 %2 位";
Blockly.Msg.DATA_REPLACEITEMOFLIST = "把 %2 的第 %1 位替换为 %3";
Blockly.Msg.DATA_ITEMOFLIST = " %2 的第 %1 位";
Blockly.Msg.DATA_LENGTHOFLIST = " %1 的长度";
Blockly.Msg.DATA_LISTCONTAINSITEM = "%1 包含 %2?";
Blockly.Msg.DATA_SHOWLIST = "显示列表 %1";
Blockly.Msg.DATA_HIDELIST = "隐藏列表 %1";
Blockly.Msg.DATA_INDEX_ALL = "全部";
Blockly.Msg.DATA_INDEX_LAST = "最后";
Blockly.Msg.DATA_INDEX_RANDOM = "随机";

// Event blocks
Blockly.Msg.EVENT_WHENFLAGCLICKED = "当 %1 被点击时";
Blockly.Msg.EVENT_WHENTHISSPRITECLICKED = "当角色被点击时";
Blockly.Msg.EVENT_WHENSTAGECLICKED = "当舞台被点击时";
Blockly.Msg.EVENT_WHENBROADCASTRECEIVED = "当接收到 %1";
Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO = "当背景切换到 %1";
Blockly.Msg.EVENT_WHENGREATERTHAN = "当 %1 > %2";
Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER = "计时器";
Blockly.Msg.EVENT_BROADCAST = "广播 %1";
Blockly.Msg.EVENT_BROADCASTANDWAIT = "广播 %1 并等待";
Blockly.Msg.EVENT_WHENKEYPRESSED = "当 %1 键被按下时";
Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE = "空格";
Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT = "左箭头";
Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT = "右箭头";
Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN = "下箭头";
Blockly.Msg.EVENT_WHENKEYPRESSED_UP = "上箭头";
Blockly.Msg.EVENT_WHENKEYPRESSED_ANY = "任意";

// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = "说 %1  %2 秒";
Blockly.Msg.LOOKS_SAY = "说 %1";
Blockly.Msg.LOOKS_THINKFORSECS = "思考 %1  %2 秒";
Blockly.Msg.LOOKS_THINK = "思考 %1";
Blockly.Msg.LOOKS_SHOW = "显示";
Blockly.Msg.LOOKS_HIDE = "隐藏";
Blockly.Msg.LOOKS_HIDEALLSPRITES = "隐藏所有角色";
Blockly.Msg.LOOKS_EFFECT_COLOR = "颜色";
Blockly.Msg.LOOKS_EFFECT_FISHEYE = "超广角镜头";
Blockly.Msg.LOOKS_EFFECT_WHIRL = "旋转";
Blockly.Msg.LOOKS_EFFECT_PIXELATE = "像素化";
Blockly.Msg.LOOKS_EFFECT_MOSAIC = "马赛克";
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = "亮度";
Blockly.Msg.LOOKS_EFFECT_GHOST = "虚像";
Blockly.Msg.LOOKS_CHANGEEFFECTBY = "将 %1 特效增加 %2";
Blockly.Msg.LOOKS_SETEFFECTTO = "将 %1 特效设定为 %2";
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = "清除所有图像效果";
Blockly.Msg.LOOKS_CHANGESIZEBY = "将角色的大小增加 %1";
Blockly.Msg.LOOKS_SETSIZETO = "将角色的大小设定为 %1 %";
Blockly.Msg.LOOKS_SIZE = "大小";
Blockly.Msg.LOOKS_CHANGESTRETCHBY = "change stretch by %1";
Blockly.Msg.LOOKS_SETSTRETCHTO = "set stretch to %1 %";
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = "将造型切换为 %1";
Blockly.Msg.LOOKS_NEXTCOSTUME = "下一个造型";
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = "将背景切换为 %1";
Blockly.Msg.LOOKS_GOTOFRONTBACK = "移到 %1";
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = "前面";
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = "后面";
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = "下移 %1 %2 层";
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = "前景";
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = "背景";
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = "背景名称 %1";
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = "造型 %1";
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = "序号";
Blockly.Msg.LOOKS_NUMBERNAME_NAME = "名字";
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = "将背景切换为 %1 并等待";
Blockly.Msg.LOOKS_NEXTBACKDROP = "下一个背景";
Blockly.Msg.LOOKS_PREVIOUSBACKDROP = "前一个背景";

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = "移动 %1 步";
Blockly.Msg.MOTION_TURNLEFT = "向左旋转 %1 %2 度";
Blockly.Msg.MOTION_TURNRIGHT = "向右旋转 %1 %2 度";
Blockly.Msg.MOTION_POINTINDIRECTION = "面向 %1 方向";
Blockly.Msg.MOTION_POINTTOWARDS = "面向 %1";
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = "鼠标指针";
Blockly.Msg.MOTION_GOTO = "移到 %1";
Blockly.Msg.MOTION_GOTO_POINTER = "鼠标指针";
Blockly.Msg.MOTION_GOTO_RANDOM = "随机位置";
Blockly.Msg.MOTION_GOTOXY = "移到 x: %1 y: %2";
Blockly.Msg.MOTION_GLIDESECSTOXY = "在 %1 秒内滑行到 x: %2 y: %3";
Blockly.Msg.MOTION_GLIDETO = "在 %1 秒内滑行到 %2";
Blockly.Msg.MOTION_GLIDETO_POINTER = "鼠标指针";
Blockly.Msg.MOTION_GLIDETO_RANDOM = "随机位置";
Blockly.Msg.MOTION_CHANGEXBY = "将x坐标增加 %1";
Blockly.Msg.MOTION_SETX = "将x坐标设定为 %1";
Blockly.Msg.MOTION_CHANGEYBY = "将y坐标增加 %1";
Blockly.Msg.MOTION_SETY = "将y坐标设定为 %1";
Blockly.Msg.MOTION_IFONEDGEBOUNCE = "碰到边缘就反弹";
Blockly.Msg.MOTION_SETROTATIONSTYLE = "将旋转模式设定为 %1";
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = "左-右翻转";
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = "不翻转";
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = "任意";
Blockly.Msg.MOTION_XPOSITION = "x坐标";
Blockly.Msg.MOTION_YPOSITION = "y坐标";
Blockly.Msg.MOTION_DIRECTION = "方向";
Blockly.Msg.MOTION_SCROLLRIGHT = "向右滚动 %1";
Blockly.Msg.MOTION_SCROLLUP = "向上滚动 %1";
Blockly.Msg.MOTION_ALIGNSCENE = "场景对齐 %1";
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = "左下";
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = "右下";
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = "中间";
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = "左上";
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = "右上";
Blockly.Msg.MOTION_XSCROLL = "x方向滚动";
Blockly.Msg.MOTION_YSCROLL = "y方向滚动";

// Operators blocks
Blockly.Msg.OPERATORS_ADD = "%1 + %2";
Blockly.Msg.OPERATORS_SUBTRACT = "%1 - %2";
Blockly.Msg.OPERATORS_MULTIPLY = "%1 * %2";
Blockly.Msg.OPERATORS_DIVIDE = "%1 / %2";
Blockly.Msg.OPERATORS_RANDOM = "在 %1 到 %2 间随机选一个数";
Blockly.Msg.OPERATORS_GT = "%1 > %2";
Blockly.Msg.OPERATORS_LT = "%1 < %2";
Blockly.Msg.OPERATORS_EQUALS = "%1 = %2";
Blockly.Msg.OPERATORS_AND = "%1 与 %2";
Blockly.Msg.OPERATORS_OR = "%1 或 %2";
Blockly.Msg.OPERATORS_NOT = " %1 不成立";
Blockly.Msg.OPERATORS_JOIN = "连接 %1 %2";
Blockly.Msg.OPERATORS_LETTEROF = "连接 %1 %2";
Blockly.Msg.OPERATORS_LENGTH = " %1 的长度";
Blockly.Msg.OPERATORS_CONTAINS = "%1 包含 %2?";
Blockly.Msg.OPERATORS_MOD = "%1 除以 %2 的余数";
Blockly.Msg.OPERATORS_ROUND = "将 %1 四舍五入";
Blockly.Msg.OPERATORS_MATHOP = "%1  %2";
Blockly.Msg.OPERATORS_MATHOP_ABS = "绝对值";
Blockly.Msg.OPERATORS_MATHOP_FLOOR = "向下取整";
Blockly.Msg.OPERATORS_MATHOP_CEILING = "向上取整";
Blockly.Msg.OPERATORS_MATHOP_SQRT = "平方根";
Blockly.Msg.OPERATORS_MATHOP_SIN = "正弦";
Blockly.Msg.OPERATORS_MATHOP_COS = "余弦";
Blockly.Msg.OPERATORS_MATHOP_TAN = "正切";
Blockly.Msg.OPERATORS_MATHOP_ASIN = "反正弦";
Blockly.Msg.OPERATORS_MATHOP_ACOS = "反余弦";
Blockly.Msg.OPERATORS_MATHOP_ATAN = "反正切";
Blockly.Msg.OPERATORS_MATHOP_LN = "ln";
Blockly.Msg.OPERATORS_MATHOP_LOG = "log";
Blockly.Msg.OPERATORS_MATHOP_EEXP = "e ^";
Blockly.Msg.OPERATORS_MATHOP_10EXP = "10 ^";

// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = "定义 %1";

// Sensing blocks
Blockly.Msg.SENSING_TOUCHINGOBJECT = "碰到 %1?";
Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER = "鼠标指针";
Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE = "边缘";
Blockly.Msg.SENSING_TOUCHINGCOLOR = "碰到 %1 颜色?";
Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR = "颜色 %1 碰到 %2?";
Blockly.Msg.SENSING_DISTANCETO = "到 %1 的距离";
Blockly.Msg.SENSING_DISTANCETO_POINTER = "鼠标指针";
Blockly.Msg.SENSING_ASKANDWAIT = "询问 %1 并且等待";
Blockly.Msg.SENSING_ANSWER = "回答";
Blockly.Msg.SENSING_KEYPRESSED = "按键 %1 按下?";
Blockly.Msg.SENSING_MOUSEDOWN = "鼠标按下?";
Blockly.Msg.SENSING_MOUSEX = "鼠标x的坐标";
Blockly.Msg.SENSING_MOUSEY = "鼠标y的坐标";
Blockly.Msg.SENSING_SETDRAGMODE = "设置拖动模式 %1";
Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE = "可拖动";
Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE = "不可拖动";
Blockly.Msg.SENSING_LOUDNESS = "响度";
Blockly.Msg.SENSING_LOUD = "loud?";
Blockly.Msg.SENSING_TIMER = "计时器";
Blockly.Msg.SENSING_RESETTIMER = "计时器清零";
Blockly.Msg.SENSING_OF = "%2 的 %1";
Blockly.Msg.SENSING_OF_XPOSITION = "x位置";
Blockly.Msg.SENSING_OF_YPOSITION = "y位置";
Blockly.Msg.SENSING_OF_DIRECTION = "方向";
Blockly.Msg.SENSING_OF_COSTUMENUMBER = "造型 #";
Blockly.Msg.SENSING_OF_COSTUMENAME = "造型名字";
Blockly.Msg.SENSING_OF_SIZE = "尺寸";
Blockly.Msg.SENSING_OF_VOLUME = "音量";
Blockly.Msg.SENSING_OF_BACKDROPNUMBER = "背景 #";
Blockly.Msg.SENSING_OF_BACKDROPNAME = "背景名字";
Blockly.Msg.SENSING_CURRENT = "目前 %1";
Blockly.Msg.SENSING_CURRENT_YEAR = "年";
Blockly.Msg.SENSING_CURRENT_MONTH = "月";
Blockly.Msg.SENSING_CURRENT_DATE = "日";
Blockly.Msg.SENSING_CURRENT_DAYOFWEEK = "一周第几天";
Blockly.Msg.SENSING_CURRENT_HOUR = "时";
Blockly.Msg.SENSING_CURRENT_MINUTE = "分";
Blockly.Msg.SENSING_CURRENT_SECOND = "秒";
Blockly.Msg.SENSING_DAYSSINCE2000 = "自2000年以来的天数";
Blockly.Msg.SENSING_USERNAME = "用户名";
Blockly.Msg.SENSING_USERID = "用户id";

// Sound blocks
Blockly.Msg.SOUND_PLAY = "播放声音 %1";
Blockly.Msg.SOUND_PLAYUNTILDONE = "播放声音 %1 直到播放完毕";
Blockly.Msg.SOUND_STOPALLSOUNDS = "停止所有声音";
Blockly.Msg.SOUND_SETEFFECTO = "设定音效 %1 到 %2";
Blockly.Msg.SOUND_CHANGEEFFECTBY = "改变音效 %1 为 %2";
Blockly.Msg.SOUND_CLEAREFFECTS = "清除音效";
Blockly.Msg.SOUND_EFFECTS_PITCH = "音高";
Blockly.Msg.SOUND_EFFECTS_PAN = "左/右声道";
Blockly.Msg.SOUND_CHANGEVOLUMEBY = "将音量增加 %1";
Blockly.Msg.SOUND_SETVOLUMETO = "将音量设定为 %1%";
Blockly.Msg.SOUND_VOLUME = "音量";

// Context menus
Blockly.Msg.DUPLICATE_BLOCK = '复制块';
Blockly.Msg.ADD_COMMENT = '添加备注';
Blockly.Msg.REMOVE_COMMENT = '删除备注';
Blockly.Msg.DELETE_BLOCK = '删除块';
Blockly.Msg.DELETE_X_BLOCKS = '删除 %1 块';
Blockly.Msg.DELETE_ALL_BLOCKS = '删除所有 %1 块';
Blockly.Msg.CLEAN_UP = '清理块';
Blockly.Msg.HELP = '帮助';
Blockly.Msg.UNDO = '撤销';
Blockly.Msg.REDO = '重做';
Blockly.Msg.EDIT_PROCEDURE = '编辑';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = '转到定义';
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = '说点什么';
Blockly.Msg.DUPLICATE_COMMENT = '复制备注';
Blockly.Msg.REMOVE_COMMENT = '删除备注';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = '颜色';
Blockly.Msg.COLOUR_SATURATION_LABEL = '饱和度';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = '明度';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = '更改数值:';
Blockly.Msg.RENAME_VARIABLE = '重命名变量...';
Blockly.Msg.RENAME_VARIABLE_TITLE = '将所有 "%1" 变量重命名为:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = '变量重命名';
Blockly.Msg.NEW_VARIABLE = '创建变量...';
Blockly.Msg.NEW_VARIABLE_TITLE = '新变量名:';
Blockly.Msg.VARIABLE_MODAL_TITLE = '新变量';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = '名为 "%1" 的变量已存在.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = '名为 "%1" 的变量已经在类型为 "%2" 中存在.';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = '删除 %1 变量的 "%2" 个使用?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = '无法删除变量 "%1" ,因为它是过程 "%2" 定义的一部分.';
Blockly.Msg.DELETE_VARIABLE = '删除 "%1" 变量';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = '创建一个块...';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = '名为 "%1" 的程序已存在.';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = '创建列表...';
Blockly.Msg.NEW_LIST_TITLE = '新列表名:';
Blockly.Msg.LIST_MODAL_TITLE = '新列表名:';
Blockly.Msg.LIST_ALREADY_EXISTS = '名为 "%1" 列表已存在.';
Blockly.Msg.RENAME_LIST_TITLE = '将所有 "%1" 列表重命为:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = '重命名列表';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = '新消息...';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = '新消息名:';
Blockly.Msg.BROADCAST_MODAL_TITLE = '新消息';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = '消息1';
