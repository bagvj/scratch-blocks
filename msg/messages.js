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
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file, either run "build.py" from the parent directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a tripple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq.json, and they show up in the translation console.
 */

/// {{Notranslate}} Hue value for all logic blocks.
Blockly.Msg.LOGIC_HUE = '210';
/// {{Notranslate}} Hue value for all loop blocks.
Blockly.Msg.LOOPS_HUE = '120';
/// {{Notranslate}} Hue value for all math blocks.
Blockly.Msg.MATH_HUE = '230';
/// {{Notranslate}} Hue value for all text blocks.
Blockly.Msg.TEXTS_HUE = '160';
/// {{Notranslate}} Hue value for all list blocks.
Blockly.Msg.LISTS_HUE = '260';
/// {{Notranslate}} Hue value for all colour blocks.
Blockly.Msg.COLOUR_HUE = '20';
/// {{Notranslate}} Hue value for all variable blocks.
Blockly.Msg.VARIABLES_HUE = '330';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.PROCEDURES_HUE = '290';

/// default name - A simple, general default name for a variable, preferably short.
/// For more context, see
/// [[Translating:Blockly#infrequent_message_types]].\n{{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = '项目';
/// button text - Button that sets a calendar to today's date.\n{{Identical|Today}}
Blockly.Msg.TODAY = '今天';

// Context menus.
/// context menu - Make a copy of the selected block (and any blocks it contains).\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = '重复';
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = '添加备注';
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = '删除备注';
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = '外部输入';
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = '内联输入';
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = '删除块';
/// context menu - Permanently delete the %1 selected blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = '删除 %1 块';
/// confirmation prompt - Question the user if they really wanted to permanently delete all %1 blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_ALL_BLOCKS = '删除所有 %1 块';
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = '清理块';
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = '折叠块';
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = '折叠所有块';
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = '展开块';
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = '展开所有块';
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = '禁用块';
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = '启用块';
/// context menu - Provide helpful information about the selected block.\n{{Identical|Help}}
Blockly.Msg.HELP = '帮助';
/// context menu - Undo the previous action.\n{{Identical|Undo}}
Blockly.Msg.UNDO = '撤销';
/// context menu - Undo the previous undo action.\n{{Identical|Redo}}
Blockly.Msg.REDO = '重做';

// Variable renaming.
/// prompt - This message is only seen in the Opera browser.  With most browsers, users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this, so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = '更改数值:';
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = '重命名变量...';
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].\n\nParameters:\n* %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = '将所有 "%1" 变量重命名为:';

// Variable creation
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_VARIABLE = '创建变量...';
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = '新变量名:';
/// alert - Tells the user that the name they entered is already in use.
Blockly.Msg.VARIABLE_ALREADY_EXISTS = '名为 "%1" 的变量已存在.'
/// alert - Tells the user that the name they entered is already in use for another type.
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = '名为 "%1" 的变量已经在类型为 "%2" 中存在.';
/// alert - Tells the user that the name they entered is already in use for a procedure.
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = '名为 "%1" 的程序已存在.'

// List creation
/// button text - Text on the button used to launch the list creation dialogue.
Blockly.Msg.NEW_LIST = '创建列表...';

// Variable deletion.
/// confirm -  Ask the user to confirm their deletion of multiple uses of a variable.
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = '删除 %1 变量的 "%2" 个使用?';
/// alert - Tell the user that they can't delete a variable because it's part of the definition of a function.
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = '无法删除变量 "%1" ,因为它是过程 "%2" 定义的一部分.';
/// dropdown choice - Delete the currently selected variable.
Blockly.Msg.DELETE_VARIABLE = '删除 "%1" 变量';

// Colour Blocks.
/// url - Information about colour.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
Blockly.Msg.COLOUR_PICKER_TOOLTIP = '从调色板中选择一种颜色.';
/// url - A link that displays a random colour each time you visit it.
Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
/// block text - Title of block that generates a colour at random.
Blockly.Msg.COLOUR_RANDOM_TITLE = '随机颜色';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = '随机选择一种颜色.';
/// url - A link for color codes with percentages (0-100%) for each component, instead of the more common 0-255, which may be more difficult for beginners.
Blockly.Msg.COLOUR_RGB_HELPURL = 'http://www.december.com/html/spec/colorper.html';
/// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TITLE = '颜色';
/// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Red}}
Blockly.Msg.COLOUR_RGB_RED = '红色';
/// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_GREEN = '绿色';
/// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Blue}}
Blockly.Msg.COLOUR_RGB_BLUE = '蓝色';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TOOLTIP = '配置红、绿、蓝的颜色值. 所有数值必须在0-100之间.';
/// url - A useful link that displays blending of two colors.
Blockly.Msg.COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
/// block text - A verb for blending two shades of paint.
Blockly.Msg.COLOUR_BLEND_TITLE = '混合';
/// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR1 = '颜色 1';
/// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR2 = '颜色 2';
/// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first color; the remaining proportion is of the second colour.  For example, if the first colour is red and the second color blue, a ratio of 1 would yield pure red, a ratio of .5 would yield purple (equal amounts of red and blue), and a ratio of 0 would yield pure blue.\n{{Identical|Ratio}}
Blockly.Msg.COLOUR_BLEND_RATIO = '比率';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
Blockly.Msg.COLOUR_BLEND_TOOLTIP = '将两种颜色以给定比例（0.0 - 1.0）混合在一起.';

// Loop Blocks.
/// url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow http://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].\n\nParameters:\n* %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = '重复 %1 次';
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops].\n{{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = '执行';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = '重复执行语句.';
/// url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop], if present, or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = '重复';
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = '重复直到';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = '当值为true时,则执行语句.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = '当值为false时,则执行语句.';

/// url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop], if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = '使变量 "%1" 具有从开始编号到结束编号的值，以指定的间隔计数，并执行指定的块.';
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2),
/// ending with a (usually higher) number in a range (%3), and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = '计数 %1 从 %2 到 %3 每次 %4';
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

/// url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
/// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
/// Sequentially assigns every item in array %2 to the valiable %1.
Blockly.Msg.CONTROLS_FOREACH_TITLE = '对于列表 %2 中的每个项 %1 ';
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = '对于列表中的每个项，将变量 "%1" 设置为该项，然后执行语句.';

/// url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow], if it exists.
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
/// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = '跳出循环';
/// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = '开始下一次循环';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = '跳出包含的循环.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = '跳过本次循环,并继续执行.';
/// warning - The user has tried placing a block outside of a loop (for each, while, repeat, etc.), but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = '警告:此块只能在循环中使用.';

// Logic Blocks.
/// url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else], if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = '如果值为真,则执行语句.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = '如果值为真,则执行第一个语句块. 否则,执行第二个语句块.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = '如果第一个值为真,则执行第一个语句块. 否则,如果第二个值为真,则执行第二个语句块.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = '如果第一个值为真,则执行第一个语句块. 否则,如果第二个值为真,则执行第二个语句块. 如果没有值为真,则执行最后一个语句块.';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended, but not essential, that this have text in common with the translation of 'else if'\n{{Identical|If}}
Blockly.Msg.CONTROLS_IF_MSG_IF = '如果';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words "otherwise if" would probably be clearer than "else if", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = '否则,如果';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word "otherwise" would probably be superior to "else", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = '否则';
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = '添加,删除或重新排序部分以重新配置此如果块.';
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = '向如果块添加条件.';
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = '向如果块添加不成立时的条件.';

/// button text - Text on a button inside a dialogue window, which will accept or acknowledge the contents of the dialogue when pressed.
Blockly.Msg.IOS_OK = '确定';
/// button text - Text on a button inside a dialogue window, which will close or cancel the dialogue when pressed.
Blockly.Msg.IOS_CANCEL = '取消';
/// alert - Title text for an error dialogue.
Blockly.Msg.IOS_ERROR = '错误';
/// header text - Title of a section that displays a list of parameters (aka. "inputs") that have been defined for a procedure. This is used inside a dialogue window to configure a procedure.
Blockly.Msg.IOS_PROCEDURES_INPUTS = '输入';
/// button text - Text on a button which will add a parameter (aka. "input") to a procedure. This is used inside a dialogue window to configure a procedure. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_PROCEDURES_ADD_INPUT = '+ 添加输入';
/// option text - Text describing an option to allow statements to be added within a procedure. This is used inside a dialogue window to configure a procedure.
Blockly.Msg.IOS_PROCEDURES_ALLOW_STATEMENTS = '允许声明语句';
/// alert - Error message when duplicate parameters (aka. "inputs") have been defined on a procedure. This is used inside a dialogue window to configure procedure parameters.
Blockly.Msg.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = '这个函数有重复的输入.';
/// button text - Text on a button which will open a variable creation dialogue when pressed. NOTE: The "+" should be preserved at the beginning of the text.
Blockly.Msg.IOS_VARIABLES_ADD_VARIABLE = '+ 添加变量';
/// button text - Text on a button inside a variable creation dialogue, which will add a variable when pressed.
Blockly.Msg.IOS_VARIABLES_ADD_BUTTON = '添加';
/// button text - Text on a button inside a variable rename dialogue, which will rename a variable when pressed.
Blockly.Msg.IOS_VARIABLES_RENAME_BUTTON = '重命名';
/// button text - Text on a button inside a variable deletion dialogue, which will delete a variable when pressed.
Blockly.Msg.IOS_VARIABLES_DELETE_BUTTON = '删除';
/// placeholder text - Placeholder text used inside a text input, where a variable name should be entered.
Blockly.Msg.IOS_VARIABLES_VARIABLE_NAME = '变量名';
/// alert - Error message that is displayed when the user attempts to create a variable without a name.
Blockly.Msg.IOS_VARIABLES_EMPTY_NAME_ERROR = '不能使用一个空的变量名.';

/// url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = '如果两个输入相等,则返回真.';
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = '如果两个输入不相等,则返回真.';
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = '如果第一个输入小于第二个输入,则返回真.';
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = '如果第一个输入小于或等于第二个输入,则返回真.';
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = '如果第一个输入大于第二个输入,则返回真.';
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = '如果第一个输入大于或等于第二个输入,则返回真.';

/// url - Information about the Boolean conjunction ("and") and disjunction ("or") operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic], if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = '如果两个输入均为真,则返回真.';
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].\n{{Identical|And}}
Blockly.Msg.LOGIC_OPERATION_AND = '与';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = '如果至少有一个输入为真,则返回真.';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].\n{{Identical|Or}}
Blockly.Msg.LOGIC_OPERATION_OR = '或';

/// url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/// block text - This is a unary operator that returns ''false'' when the input is ''true'', and ''true'' when the input is ''false''.
/// \n\nParameters:\n* %1 - the input (which should be either the value "true" or "false")
Blockly.Msg.LOGIC_NEGATE_TITLE = '否 %1';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = '如果输入为假,则返回真. 如果输入为真,则返回假.';

/// url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''.\n{{Identical|True}}
Blockly.Msg.LOGIC_BOOLEAN_TRUE = '真';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''.\n{{Identical|False}}
Blockly.Msg.LOGIC_BOOLEAN_FALSE = '假';
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = '返回真或假.';

/// url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type], if it exists in your language; otherwise, do not worry about translating this advanced concept.
Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
/// block text - In computer languages, ''null'' is a special value that indicates that no value has been set.  You may use your language's word for "nothing" or "invalid".\n{{Identical|Null}}
Blockly.Msg.LOGIC_NULL = '空';
/// tooltip - This should use the word from the previous message.
Blockly.Msg.LOGIC_NULL_TOOLTIP = '返回空.';

/// url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
/// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages, this is called a ''''predicate''''.
Blockly.Msg.LOGIC_TERNARY_CONDITION = '测试';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = '如果为真';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = '如果为假';
/// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = '检查"测试"中的条件. 如果条件为真,则返回"如果为真"值; 否则返回"如果为假"值.';

// Math Blocks.
/// url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/// tooltip - Any positive or negative number, not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = '一个数字.';

/// {{optional}}\nmath - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/// {{optional}}\nmath - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/// {{optional}}\nmath - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/// {{optional}}\nmath - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/// {{optional}}\nmath - The symbol for the binary operation exponentiation.  Specifically, if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R, multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = '正弦';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = '余弦';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = '正切';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = '反正弦';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = '反余弦';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = '反正切';

/// url - Information about addition, subtraction, multiplication, division, and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = '返回两个数字的和.';
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = '返回两个数字的差值.';
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = '返回两个数的乘积.';
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = '返回两个数的商.';
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = '返回第一个数字的第二个数字的幂的值.';

/// url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example, the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = '平方根';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = '返回数字的平方根.';
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example, the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information, see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = '绝对';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = '返回数字的绝对值.';

/// tooltip - Calculates '''0-n''', where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = '返回数字的否.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = '返回数字的自然对数.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = '返回一个数字的以10为底的对数.';
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_%28mathematical_constant%29 e] by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = '返回一个数字的幂.';
/// tooltip - Multiplies 10 by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = '返回以10为底的数字的幂.';

/// url - Information about the trigonometric functions sine, cosine, tangent, and their inverses (ideally using degrees, not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = '返回度的正弦（不是弧度）.';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = '返回度的余弦（不是弧度）.';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = '返回度的正切（不是弧度）.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function], using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = '返回数字的反正弦值.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = '返回数字的反余弦值.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = '返回数字的反正切值.';

/// url - Information about the mathematical constants Pi (π), e, the golden ratio (φ), √ 2, √ 1/2, and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = '返回公共常数之一: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…),  ∞ (无穷).';
/// dropdown - A number is '''even''' if it is a multiple of 2.  For example, 4 is even (yielding true), but 3 is not (false).
Blockly.Msg.MATH_IS_EVEN = '是偶数';
/// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example, 3 is odd (yielding true), but 4 is not (false).  The opposite of "odd" is "even".
Blockly.Msg.MATH_IS_ODD = '是奇数';
/// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example, 5 is prime, but 6 is not because 2 × 3 = 6.
Blockly.Msg.MATH_IS_PRIME = '是素数';
/// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example, 5 is whole, but 5.1 is not.
Blockly.Msg.MATH_IS_WHOLE = '是整数';
/// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_POSITIVE = '是正数';
/// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_NEGATIVE = '是负数';
/// dropdown - A number x is divisible by y if y goes into x evenly.  For example, 10 is divisible by 5, but 10 is not divisible by 3.
Blockly.Msg.MATH_IS_DIVISIBLE_BY = '是整除';
/// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even, odd, prime, whole, positive, negative, or divisible by a given value.
Blockly.Msg.MATH_IS_TOOLTIP = '检查数字是否为偶数,奇数,素数,整数,正数,负数或是否可被某个数除. 返回真或假.';

/// url - Information about incrementing (increasing the value of) a variable.
/// For other languages, just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g., if the variable named 'item' had the value 5, change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = '将 %1 改为 %2';
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - This updates the value of the variable by adding to it the following numeric input.\n\nParameters:\n* %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = '向变量 "%1" 添加数字.';

/// url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = '向上或向下舍入数字.';
/// dropdown - This rounds its input to the nearest whole number.  For example, 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = '取舍';
/// dropdown - This rounds its input up to the nearest whole number.  For example, if the input was 2.2, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = '向上取舍';
/// dropdown - This rounds its input down to the nearest whole number.  For example, if the input was 3.8, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = '向下取舍';

/// url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
Blockly.Msg.MATH_ONLIST_HELPURL = '';
/// dropdown - This computes the sum of the numeric elements in the list.  For example, the sum of the list {1, 4} is 5.
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = '求和';
/// tooltip - Please use the same term for "sum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = '返回列表中所有数字的总和.';
/// dropdown - This finds the smallest (minimum) number in a list.  For example, the smallest number in the list [-5, 0, 3] is -5.
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = '求最小值';
/// tooltip - Please use the same term for "min" or "minimum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = '返回列表中最小的数字.';
/// dropdown - This finds the largest (maximum) number in a list.  For example, the largest number in the list [-5, 0, 3] is 3.
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = '求最大值';
/// tooltip
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = '返回列表中最大的数字.';
/// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example, the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1, 2, 3, 4] is 2.5 (10/4).
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = '求平均值';
/// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = '返回列表中数值的平均值（算术平均值）.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example, the median of the list {1, 2, 7, 12, 13} is 7.
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = '求个数';
/// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = '返回列表中的中位数.';
/// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example, the modes of the list {1, 3, 9, 3, 9}  are {3, 9}.
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = '求众数';
/// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = '返回列表中的众数.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = '求标准偏差';
/// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = '返回列表的标准偏差.';
/// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = '求随机数';
/// tooltip - Please use same term for 'random' as in previous entry.
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = '从列表中返回一个随机元素.';

/// url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example, the remainder of 10 divided by 3 is 1.\n\nParameters:\n* %1 - the dividend (10, in our example)\n* %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = ' %1 ÷ %2 的余数';
/// tooltip - For example, the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = '返回两个数相除的余数.';

/// url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_%28graphics%29';
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example, if the number 150 is constrained to be between 5 and 100, the result will be 100.
///\n\nParameters:\n* %1 - the value to constrain (e.g., 150)\n* %2 - the minimum value (e.g., 5)\n* %3 - the maximum value (e.g., 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = '将 %1 限定在 %2 到 %3 之间';
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L'', the result is ''L''.  If ''x'' is greater than ''H'', the result is ''H''.  Otherwise, the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = '将数字限制在指定限制范围（闭区间）之间.';

/// url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example, if the range is from 5 to 7, this returns 5, 6, or 7 with equal likelihood. %1 is a placeholder for the lower number, %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = '取 %1 到 %2 的随机数';
/// tooltip - Return a random integer between two values specified as inputs.  For example, if one input was 7 and another 9, any of the numbers 7, 8, or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = '返回两个指定限制（闭区间）之间的随机整数.';

/// url - Information about how computers generate random numbers (specifically, numbers in the range from 0 to just below 1).
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = '取随机分数';
/// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = '返回0.0（包括）和1.0（不包含）之间的随机分数.';

// Text Blocks.
/// url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = '一个字母,一个字或一行文字.';

/// url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = '创建文本';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = '通过连接任意数量的项来创建一段文本.';

/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.\n{{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = '连接';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = '添加,删除或重新排序部分以重新配置此文本块.';
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = '向文本中添加项.';

/// url - This and the other text-related URLs are going to be hard to translate.  As always, it is okay to leave untranslated or paste in the English-language URL.  For these URLs, you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block input text - Message preceding the name of a variable to which text should be appended.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_TO = '到';
/// block input text - Message following the variable and preceding the piece of text that should
/// be appended, as shown below.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_APPENDTEXT = '附加文本';
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.\n\nParameters:\n* %1 - the name of the variable to which text should be appended
Blockly.Msg.TEXT_APPEND_TOOLTIP = '将一些文本附加到变量 "%1".';

/// url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
/// \n\nParameters:\n* %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = ' %1 的长度';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = '返回所提供文本中的字母数（包括空格）.';

/// url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
/// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
/// \n\nParameters:\n* %1 - the piece of text to test for emptiness
Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 是空的';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = '如果提供的文本为空，则返回真.';

/// url - Information about finding a character in a piece of text.
Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode. See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = '返回第二个文本中第一个文本的第一个/最后一个出现的索引。 如果未找到文本，则返回 %1 .';
/// block text - Title of blocks allowing users to find text.  See
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = '在文本中';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = '查找文本的第一次出现';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].  This would
/// replace "find first occurrence of text" below.  (For more information on
/// how common text is factored out of dropdown menus, see
/// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
/// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = '查找上次出现的文本';
/// block text - Optional text to follow the rightmost block in a
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text in text ... find block]
/// (after the "a" in the below picture).  This will be the empty string in most languages.
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_TAIL = '';

/// url - Information about extracting characters (letters, number, symbols, etc.) from text.
Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
/// block text - Appears before the piece of text from which a letter (or number,
/// punctuation character, etc.) should be extracted, as shown below.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = '在文本中';
/// dropdown - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index should be obtained from the preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_START = '获取字母 #';
/// block text - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index from the end of a given piece of text should be obtained. See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_END = '从字母 # 开始';
/// block text - Indicates that the first letter of the following piece of text should be
/// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FIRST = '获取首字母';
/// block text - Indicates that the last letter (or number, punctuation mark, etc.) of the
/// following piece of text should be retrieved.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_LAST = '获取尾字母';
/// block text - Indicates that any letter (or number, punctuation mark, etc.) in the
/// following piece of text should be randomly selected.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_RANDOM = '获取随机字母';
/// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
/// a piece of text, as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
/// blocks] or shown below.  For most languages, this will be blank.
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TOOLTIP = '返回指定位置的字母.';

/// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = '返回文本的指定部分.';
/// url - Information about extracting characters from text.  Reminder: urls are the
/// lowest priority translations.  Feel free to skip.
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
/// block text - Precedes a piece of text from which a portion should be extracted.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = '在文本中';
/// dropdown - Indicates that the following number specifies the position (relative to the start
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = '从字母获取子字符串 #';
/// dropdown - Indicates that the following number specifies the position (relative to the end
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this and any other
/// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
/// on this block.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = '从字母 # 获取子字符串';
/// block text - Indicates that a region starting with the first letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = '从第一个字母获取子字符串';
/// dropdown - Indicates that the following number specifies the position (relative to
/// the start position) of the end of the region of text that should be obtained from the
/// preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = '到字母 #';
/// dropdown - Indicates that the following number specifies the position (relative to the
/// end position) of the end of the region of text that should be obtained from the preceding
/// piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = '到字母 # 结尾';
/// block text - Indicates that a region ending with the last letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = '到最后一个字母';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// extracting a region of text].  In most languages, this will be the empty string.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

/// url - Information about the case of letters (upper-case and lower-case).
Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
/// tooltip - Describes a block to adjust the case of letters.  For more information on this block,
/// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = '在不同条件中返回一个文本的副本.';
/// block text - Indicates that all of the letters in the following piece of text should be
/// capitalized.  If your language does not use case, you may indicate that this is not
/// applicable to your language.  For more information on this block, see
/// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = '到大写';
/// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = '到小写';
/// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = '到标题案例';

/// url - Information about trimming (removing) text off the beginning and ends of pieces of text.
Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
Blockly.Msg.TEXT_TRIM_TOOLTIP = '返回从一端或两端删除空格的文本副本.';
/// dropdown - Removes spaces from the beginning and end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
/// this nor the other options modify the original piece of text (that follows);
/// the block just returns a version of the text without the specified spaces.
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = '从两侧的修剪空格';
/// dropdown - Removes spaces from the beginning of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the right side.
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = '从左侧修剪空格';
/// dropdown - Removes spaces from the end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the left side.
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = '从右侧修剪空格';

/// url - Information about displaying text on computers.
Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
/// block text - Display the input on the screen.  See
/// [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
/// \n\nParameters:\n* %1 - the value to print
Blockly.Msg.TEXT_PRINT_TITLE = '打印 %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PRINT_TOOLTIP = '打印指定的文本,数字或其他值.';
/// url - Information about getting text from users.
Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
/// dropdown - Specifies that a piece of text should be requested from the user with
/// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = '提示包含消息的文本';
/// dropdown - Specifies that a number should be requested from the user with the
/// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = '提示带有消息的数字';
/// dropdown - Precedes the message with which the user should be prompted for
/// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = '提示用户输入数字.';
/// dropdown - Precedes the message with which the user should be prompted for some text.
/// See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = '提示用户输入一些文本.';

/// block text - Title of a block that counts the number of instances of
/// a smaller pattern (%1) inside a longer string (%2).
Blockly.Msg.TEXT_COUNT_MESSAGE0 = '在 %2 中计数 %1';
/// url - Information about counting how many times a string appears in another string.
Blockly.Msg.TEXT_COUNT_HELPURL = 'https://github.com/google/blockly/wiki/Text#counting-substrings';
/// tooltip - Short description of a block that counts how many times some text occurs within some other text.
Blockly.Msg.TEXT_COUNT_TOOLTIP = '计算某些文本在某些其他文本中出现的次数.';

/// block text - Title of a block that returns a copy of text (%3) with all
/// instances of some smaller text (%1) replaced with other text (%2).
Blockly.Msg.TEXT_REPLACE_MESSAGE0 = '将 %1 替换为 %3 中的 %2';
/// url - Information about replacing each copy text (or string, in computer lingo) with other text.
Blockly.Msg.TEXT_REPLACE_HELPURL = 'https://github.com/google/blockly/wiki/Text#replacing-substrings';
/// tooltip - Short description of a block that replaces copies of text in a large text with other text.
Blockly.Msg.TEXT_REPLACE_TOOLTIP = '替换某些其他文本中的某些文本的所有匹配项.';

/// block text - Title of block that returns a copy of text (%1) with the order
/// of letters and characters reversed.
Blockly.Msg.TEXT_REVERSE_MESSAGE0 = '取反 %1';
/// url - Information about reversing a letters/characters in text.
Blockly.Msg.TEXT_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Text#reversing-text';
/// tooltip - See [https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_REVERSE_TOOLTIP = '颠倒文本中字符的顺序.';

// Lists Blocks.
/// url - Information on empty lists.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = '创建空列表';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = '返回长度为0的列表,不包含数据记录';

/// url - Information on building lists.
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = '创建包含任意数量项的列表.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = '创建列表';
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block].\n{{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = '列表';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = '添加,删除或重新排序部分以重新配置此列表块.';
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = '将项添加到列表.';

/// url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_TOOLTIP = '创建由给定值重复指定次数组成的列表.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
/// https://github.com/google/blockly/wiki/Lists#create-list-with].
///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
Blockly.Msg.LISTS_REPEAT_TITLE = '创建项 %1 重复 %2 次的列表';

/// url - Information about how the length of a list is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = ' %1 的宽度';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = '返回列表的长度.';

/// url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
/// \n\nParameters:\n* %1 - the list to test
Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 是空的';
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = '如果列表为空，则返回真.';

/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
Blockly.Msg.LISTS_INLIST = '在列表中';

/// url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_FIRST = '查找项的第一次出现';
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_LAST = '查找项的最后一次出现';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = '返回列表中项的第一个/最后一个出现的索引. 如果找不到项,则返回 %1.';

Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = '获取';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a list], as opposed to merely getting
/// it without modifying the list.
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = '获取并删除';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a list].\n{{Identical|Remove}}
Blockly.Msg.LISTS_GET_INDEX_REMOVE = '删除';
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# 结尾';
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FIRST = '首';
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_LAST = '尾';
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_RANDOM = '随机';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a list].  In most languages, this will be the empty string.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// tooltip - Indicates the ordinal number that the first item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = '%1 是首项.';
/// tooltip - Indicates the ordinal number that the last item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = '%1 是尾项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = '返回列表中指定位置的项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = '返回列表中的首项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = '返回列表中的尾项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = '返回列表中的随机一项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = '删除并返回列表中指定位置的项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = '删除并返回列表中的首项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = '删除并返回列表中的尾项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = '删除并返回列表中的随机一项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = '删除列表中指定位置的项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = '删除列表中的首项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = '删除列表中的尾项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = '删除列表中的随机一项.';
/// url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = '组';
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
/// Inserts an item into a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INSERT = '插入在';
/// block text - The word(s) after the position in the list and before the item to be set/inserted.
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = '如';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = '在列表中的指定位置设置项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = '设置列表中的首项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = '设置列表中的尾项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = '设置列表中的随机一项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = '在列表中的指定位置插入项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = '在列表的开头插入项.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = '将项附加到列表的结尾.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = '在列表中随机插入项.';

/// url - Information describing extracting a sublist from an existing list.
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - Indicates that an index relative to the front of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = '得到子列表从 #';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = '从 # 获取子列表';
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
/// should begin with the list's first item.
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = '从第项获得子列表';
/// dropdown - Indicates that an index relative to the front of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = '到 #';
/// dropdown - Indicates that an index relative to the end of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = '到 # 结尾';
/// dropdown - Indicates that the '''last''' item in the given list should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
/// of the selected sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = '到结尾';
/// block text - This appears in the rightmost position ("tail") of the
/// sublist block, as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
/// In English and most other languages, this is the empty string.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = '创建列表的指定部分的副本.';

/// {{optional}}\nurl - Information describing sorting a list.
Blockly.Msg.LISTS_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
/// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a list of items %3.\n{{Identical|Sort}}
Blockly.Msg.LISTS_SORT_TITLE = '分类 %1 %2 %3';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-list].
Blockly.Msg.LISTS_SORT_TOOLTIP = '排序列表的副本.';
/// sorting order or direction from low to high value for numeric, or A-Z for alphabetic.\n{{Identical|Ascending}}
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = '升序';
/// sorting order or direction from high to low value for numeric, or Z-A for alphabetic.\n{{Identical|Descending}}
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = '降序';
/// sort by treating each item as a number.
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = '数字';
/// sort by treating each item alphabetically, case-sensitive.
Blockly.Msg.LISTS_SORT_TYPE_TEXT = '字母';
/// sort by treating each item alphabetically, ignoring differences in case.
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = '字母,忽略大小写';

/// url - Information describing splitting text into a list, or joining a list into text.
Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
/// dropdown - Indicates that text will be split up into a list (e.g. "a-b-c" -> ["a", "b", "c"]).
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = '将文本拆分为清单';
/// dropdown - Indicates that a list will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = '将清单连接为文本';
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = '带分隔符';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
/// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = '将文本拆分为文本列表，在每个分隔符处分隔.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
/// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = '将文本列表添加到一个文本中，用分隔符分隔.';

/// url - Information describing reversing a list.
Blockly.Msg.LISTS_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Lists#reversing-a-list';
/// block text - Title of block that returns a copy of a list (%1) with the order of items reversed.
Blockly.Msg.LISTS_REVERSE_MESSAGE0 = '取反 %1';
/// tooltip - Short description for a block that reverses a copy of a list.
Blockly.Msg.LISTS_REVERSE_TOOLTIP = '反转列表的副本.';

/// grammar - Text that follows an ordinal number (a number that indicates
/// position relative to other numbers).  In most languages, such text appears
/// before the number, so this should be blank.  An exception is Hungarian.
/// See [[Translating:Blockly#Ordinal_numbers]] for more information.
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = '返回此变量的值.';
/// context menu - Selecting this creates a block to set (change) the value of this variable.
/// \n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = '创建 "设置 %1"';

/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.\n\nParameters:\n* %1 - the name of the variable.\n* %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = '设置 %1 到 %2';
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = '将此变量设置为等于输入.';
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.\n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = '创建 "获取 %1"';

// Procedures Blocks.
/// url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = '到';
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block, as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = '做点什么';
/// block text - This precedes the list of parameters on a function's defiition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = '与:';
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = '与:';
/// block text - This appears next to the function's "body", the blocks that should be
/// run when the function is called, as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = '创建没有输出的函数.';
/// Placeholder text that the user is encouraged to replace with a description of what their function does.
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = '描述这个函数...';
/// url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = '返回';
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = '用输出创建函数.';
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = '让语句';

/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = '警告:此函数具有重复的参数.';

/// url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = '运行用户定义的函数 "%1".';

/// url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.\n\nParameters:\n* %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = '运行用户定义的函数 "%1" 并使用其输出.';

/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term "inputs") to the function.  See
/// [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = '输入';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = '添加,删除或重新排序此函数的输入.';
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term "inputs") to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = '输入名称:';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = '向函数添加输入.';

/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = '突出显示函数定义';
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.\n\nParameters:\n* %1 - the name of the function.\n{{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = '创建 "%1"';

/// tooltip - If the first value is true, this causes the second value to be returned
/// immediately from the enclosing function.
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = '如果值为真,则返回第二个值.';
/// {{optional}}\nurl - Information about guard clauses.
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause';
/// warning - This appears if the user tries to use this block outside of a function definition.
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = '警告:此块只能在函数定义中使用.';
