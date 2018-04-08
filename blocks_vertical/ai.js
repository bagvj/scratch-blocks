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

goog.provide('Blockly.Blocks.ai');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['ai_recognitionspeech'] = {
  init: function() {
    this.jsonInit({
      message0: "识别语言文件",
      category: Blockly.Categories.ai,
      extensions: ["colours_ai", "output_number"]
    })
  }
};

Blockly.Blocks['ai_listentome']= { 
  init: function() { 
    this.jsonInit({ 
      message0: "你听我说(需麦克风)", 
      category: Blockly.Categories.ai, 
      extensions: ["colours_ai", "output_number"] 
    }) 
  } 
};

Blockly.Blocks['ai_playAudio']= { 
  init: function() { 
    this.jsonInit({ 
      message0: "播放 %1", 
      args0: [{ 
        type: "input_value", name: "MESSAGE" 
      }], 
      category: Blockly.Categories.ai, 
      extensions: ["colours_ai", "shape_statement"] 
    }) 
  } 
};

Blockly.Blocks['ai_of'] = {
  init: function() {
    this.jsonInit({
      message0: "%1 进行 %2",
      args0: [{
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
          ["上传图片", "upload_imge"],
          ["拍照", "photograph"]
        ]
      }, { type: "input_value", name: "OBJECT" }],
      output: !0,
      category: Blockly.Categories.ai,
      outputShape: Blockly.OUTPUT_SHAPE_ROUND,
      extensions: ["colours_ai"]
    })
  }
};

Blockly.Blocks['ai_of_object_menu'] = {
  init: function() {
    this.jsonInit({
      message0: "%1",
      args0: [{
        type: "field_dropdown",
        name: "OBJECT",
        options: [
          ["文字识别", "reco_world"],
          ["人脸识别", "reco_face"],
          ["菜品识别", "reco_food"],
          ["车辆识别", "reco_car"],
          ["动物识别", "reco_animal"],
          ["植物识别", "reco_plant"],
          ["logo识别", "reco_logo"],
          ["图像主体", "reco_imge"],
          ["颜色识别", "reco_colour"]
        ]
      }],
      extensions: ["colours_ai", "output_string"]
    })
  }
};
