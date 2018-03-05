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

goog.provide('Blockly.Blocks.looks');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['looks_sayforsecs'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "说 %1  %2 秒",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_say'] = {
  /**
   * Block to say.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "说 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_thinkforsecs'] = {
  /**
   * Block to think for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "思考 %1  %2 秒",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_think'] = {
  /**
   * Block to think.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "思考 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_show'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "显示",
        "category": Blockly.Categories.looks,
        "extensions": ["colours_looks", "shape_statement"]
      });
  }
};

Blockly.Blocks['looks_hide'] = {
  /**
   * Hide block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "隐藏",
        "category": Blockly.Categories.looks,
        "extensions": ["colours_looks", "shape_statement"]
      });
  }
};

Blockly.Blocks['looks_effect_menu_options'] = [
  ['颜色', 'COLOR'],
  ['超广角镜头', 'FISHEYE'],
  ['旋转', 'WHIRL'],
  ['像素化', 'PIXELATE'],
  ['马赛克', 'MOSAIC'],
  ['亮度', 'BRIGHTNESS'],
  ['虚像', 'GHOST']
];

Blockly.Blocks['looks_changeeffectby'] = {
  /**
   * Block to change graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将 %1 特效增加 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": Blockly.Blocks['looks_effect_menu_options']
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_seteffectto'] = {
  /**
   * Block to set graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将 %1 特效设定为 %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": Blockly.Blocks['looks_effect_menu_options']
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_cleargraphiceffects'] = {
  /**
   * Block to clear graphic effects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "清除所有图像效果",
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changesizeby'] = {
  /**
   * Block to change size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将角色的大小增加 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setsizeto'] = {
  /**
   * Block to set size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将角色的大小设定为 %1 %",
      "args0": [
        {
          "type": "input_value",
          "name": "SIZE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_size'] = {
  /**
   * Block to report size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "大小",
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_costume'] = {
  /**
   * Costumes drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "COSTUME",
            "options": [
              ['造型1', 'COSTUME1'],
              ['造型2', 'COSTUME2']
            ]
          }
        ],
        "colour": Blockly.Colours.looks.secondary,
        "colourSecondary": Blockly.Colours.looks.secondary,
        "colourTertiary": Blockly.Colours.looks.tertiary,
        "extensions": ["output_string"]
      });
  }
};

Blockly.Blocks['looks_switchcostumeto'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将造型切换为 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COSTUME"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextcostume'] = {
  /**
   * Block to switch the sprite's costume to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "下一个造型",
        "category": Blockly.Categories.looks,
        "extensions": ["colours_looks", "shape_statement"]
      });
  }
};

Blockly.Blocks['looks_switchbackdropto'] = {
  /**
   * Block to switch the backdrop to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将背景切换为 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdrops'] = {
  /**
   * Backdrop list
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "looks_backdrops",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
              ['背景1', 'BACKDROP1']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_gotofrontback'] = {
  /**
   * "Go to front/back" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "移到 %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "FRONT_BACK",
            "options": [
              ['前面', 'front'],
              ['后后', 'back']
            ]
          }
        ],
        "category": Blockly.Categories.looks,
        "extensions": ["colours_looks", "shape_statement"]
      });
  }
};

Blockly.Blocks['looks_goforwardbackwardlayers'] = {
  /**
   * "Go forward/backward [Number] Layers" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "下移 %1 %2 层",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FORWARD_BACKWARD",
          "options": [
            ['前景', 'forward'],
            ['背景', 'backward']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdropnumbername'] = {
  /**
   * Block to report backdrop's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "背景名称 %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            ['数字', 'number'],
            ['名字', 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_costumenumbername'] = {
  /**
   * Block to report costume's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "造型 %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            ['数字', 'number'],
            ['名字', 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_switchbackdroptoandwait'] = {
  /**
   * Block to switch the backdrop to the selected one and wait.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "将背景切换为 %1 并等待",
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextbackdrop'] = {
  /**
   * Block to switch the backdrop to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "下一个背景",
        "category": Blockly.Categories.looks,
        "extensions": ["colours_looks", "shape_statement"]
      });
  }
};
