/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

'use strict';

goog.provide('Blockly.Blocks.sensing');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['sensing_touchingobject'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "碰到 %1?",
      "args0": [
        {
          "type": "input_value",
          "name": "TOUCHINGOBJECTMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_touchingobjectmenu'] = {
  /**
   * "Touching [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TOUCHINGOBJECTMENU",
            "options": [
              ['mouse-pointer', '_mouse_'],
              ['edge', '_edge_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_touchingcolor'] = {
  /**
   * Block to Report if its touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "碰到 %1 颜色?",
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_coloristouchingcolor'] = {
  /**
   * Block to Report if a color is touching a certain Color.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "颜色 %1 碰到 %2?",
      "args0": [
        {
          "type": "input_value",
          "name": "COLOR"
        },
        {
          "type": "input_value",
          "name": "COLOR2"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_distanceto'] = {
  /**
   * Block to Report distance to another Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "到 %1 的距离",
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCETOMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_distancetomenu'] = {
  /**
   * "Distance to [Object]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "DISTANCETOMENU",
            "options": [
              ['mouse-pointer', '_mouse_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_askandwait'] = {
  /**
   * Block to ask a question and wait
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "询问 %1 并且等待",
      "args0": [
        {
          "type": "input_value",
          "name": "QUESTION"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_answer'] = {
  /**
   * Block to report answer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "回答",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_keypressed'] = {
  /**
   * Block to Report if a key is pressed.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "按键 %1 是否按下?",
      "args0": [
        {
          "type": "input_value",
          "name": "KEY_OPTION"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_keyoptions'] = {
  /**
   * Options for Keys
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "KEY_OPTION",
          "options": [
              // [localization, language-independent saved value]
              ['space', 'space'],
              ['left arrow', 'left arrow'],
              ['right arrow', 'right arrow'],
              ['down arrow', 'down arrow'],
              ['up arrow', 'up arrow'],
              ['any', 'any'],
              ['a', 'a'],
              ['b', 'b'],
              ['c', 'c'],
              ['d', 'd'],
              ['e', 'e'],
              ['f', 'f'],
              ['g', 'g'],
              ['h', 'h'],
              ['i', 'i'],
              ['j', 'j'],
              ['k', 'k'],
              ['l', 'l'],
              ['m', 'm'],
              ['n', 'n'],
              ['o', 'o'],
              ['p', 'p'],
              ['q', 'q'],
              ['r', 'r'],
              ['s', 's'],
              ['t', 't'],
              ['u', 'u'],
              ['v', 'v'],
              ['w', 'w'],
              ['x', 'x'],
              ['y', 'y'],
              ['z', 'z'],
              ['0', '0'],
              ['1', '1'],
              ['2', '2'],
              ['3', '3'],
              ['4', '4'],
              ['5', '5'],
              ['6', '6'],
              ['7', '7'],
              ['8', '8'],
              ['9', '9']
          ]
        }
      ],
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_mousedown'] = {
  /**
   * Block to Report if the mouse is down.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "下移鼠标?",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

Blockly.Blocks['sensing_mousex'] = {
  /**
   * Block to report mouse's x position
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "mouse x",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_mousey'] = {
  /**
   * Block to report mouse's y position
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "鼠标y的坐标",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_loudness'] = {
  /**
   * Block to report loudness
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "响度",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_videoon'] = {
  /**
   * Block to Report the Video [Motion/Direction] of the Stage or Sprite (Not added Sprite's Option).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "视频侦测 %1 在 %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEOONMENU1"
        },
        {
          "type": "input_value",
          "name": "VIDEOONMENU2"
        }
      ],
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_videoonmenuone'] = {
  /**
   * "Video [Motion/Direction] of [Stage]" First Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOONMENU1",
            "options": [
              ['motion', 'MOTION'],
              ['direction', 'DIRECTION']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};
Blockly.Blocks['sensing_videoonmenutwo'] = {
  /**
   * "Video [Motion/Direction] of [Stage]" Second Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOONMENU2",
            "options": [
              ['stage', 'STAGE']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_videotoggle'] = {
  /**
   * Block to toggle video
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将摄像头 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VIDEOTOGGLEMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_videotogglemenu'] = {
  /**
   * "Turn Video [On/Off/On-flipped]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VIDEOTOGGLEMENU",
            "options": [
              ['on', 'ON'],
              ['off', 'OFF'],
              ['on-flipped', 'ONFLIPPED']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_setvideotransparency'] = {
  /**
   * Block to set the video transparency to a certain percent
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将视频透明度设置为 %1%",
      "args0": [
        {
          "type": "input_value",
          "name": "TRANSPARENCY"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_timer'] = {
  /**
   * Block to report timer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "计时器",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_resettimer'] = {
  /**
   * Block to reset timer
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "计时器清零",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_of_property_menu'] = {
  /**
   * "_ of *" properties menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "PROPERTY",
            "options": [
              ['x位置', 'x position'],
              ['y位置', 'y position'],
              ['方向', 'direction'],
              ['造型 #', 'costume #'],
              ['造型名', 'costume name'],
              ['大小', 'size'],
              ['音量', 'volume'],
              ['背景 #', 'backdrop #'],
              ['背景名', 'backdrop name']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_of_object_menu'] = {
  /**
   * "* of _" object menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OBJECT",
            "options": [
              ['Sprite1', 'Sprite1'],
              ['舞台', '_stage_']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};


Blockly.Blocks['sensing_of'] = {
  /**
   * Block to report properties of sprites.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 of %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PROPERTY"
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "output": true,
      "category": Blockly.Categories.sensing,
      "outputShape": Blockly.OUTPUT_SHAPE_ROUND,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing"]
    });
  }
};

Blockly.Blocks['sensing_current'] = {
  /**
   * Block to Report the current option.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "目前 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CURRENTMENU"
        }
      ],
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_currentmenu'] = {
  /**
   * "Current [Options]" Block Menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "CURRENTMENU",
            "options": [
              ['年', 'YEAR'],
              ['月', 'MONTH'],
              ['日期', 'DATE'],
              ['一周第几天', 'DAYOFWEEK'],
              ['小时', 'HOUR'],
              ['分钟', 'MINUTE'],
              ['秒', 'SECOND']
            ]
          }
        ],
        "extensions": ["colours_sensing", "output_string"]
      });
  }
};

Blockly.Blocks['sensing_dayssince2000'] = {
  /**
   * Block to report days since 2000
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "自2000年以来的天数",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_username'] = {
  /**
   * Block to report user's username
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "用户名",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};
