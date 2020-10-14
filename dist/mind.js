/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"mind": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/demo/mind.ts","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mock-data/mind-map-data.js":
/*!************************************!*\
  !*** ./mock-data/mind-map-data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DATA = {
  text: 'Platform',
  children: [// 实验相关
  {
    text: '实验',
    children: [{
      text: 'DAG图',
      children: [{
        text: '@antV/g6-editor',
        type: 'tech'
      }, {
        text: '定制化UI',
        children: [{
          text: '原始API延伸',
          type: 'tech'
        }, {
          text: '上层canvas自定义',
          type: 'tech'
        }]
      }, {
        text: 'Tensorflow',
        type: 'todo',
        children: [{
          text: '深度网络可视化',
          type: 'tech'
        }]
      }, {
        text: '更多框架接入/拓展',
        type: 'todo'
      }]
    }, {
      text: '参数配置',
      children: [{
        text: '算子参数',
        children: [{
          text: '算子组件抽象',
          type: 'tech',
          children: [{
            text: 'UI封装',
            type: 'tech'
          }, {
            text: '逻辑解耦',
            type: 'tech'
          }]
        }, {
          text: '自定义算子',
          children: [{
            text: '自定义组件',
            type: 'tech'
          }, {
            text: '自定义参数',
            type: 'tech'
          }]
        }]
      }, {
        text: '实验参数'
      }]
    }, {
      text: '数据流',
      children: [{
        text: '数据继承',
        children: [{
          text: '准确性',
          children: [{
            text: '超集 --> 严格收敛',
            type: 'tech'
          }]
        }, {
          text: '高效性',
          children: [{
            text: '缓存',
            type: 'tech'
          }]
        }]
      }, {
        text: '数据验证',
        children: [{
          text: '表单验证',
          type: 'tech'
        }, {
          text: '逻辑验证',
          type: 'tech'
        }]
      }, {
        text: '数据扩展',
        children: [{
          text: '字段类型',
          type: 'tech'
        }, {
          text: '新字段',
          type: 'tech'
        }]
      }]
    }, {
      text: '版本/快照',
      children: [{
        text: '管理'
      }, {
        text: '切换'
      }]
    }]
  }, // 调度
  {
    text: '任务调度',
    children: [{
      text: '调度管理',
      children: [{
        text: '调度配置',
        children: [{
          text: '不同类型算子配置抽象',
          type: 'tech'
        }]
      }, {
        text: '调度周期',
        children: [{
          text: 'cron 表达式',
          children: [{
            text: '用户输入 ->(降低成本提高体验)-> 可视化配置',
            type: 'tech'
          }]
        }, {
          text: '其他',
          type: 'todo'
        }]
      }]
    }, {
      text: '任务执行',
      children: [{
        text: '部分执行调度',
        type: 'todo',
        children: [{
          text: '数据流分隔',
          type: 'tech'
        }, {
          text: '状态保存',
          type: 'tech'
        }]
      }, {
        text: '执行结果',
        children: [{
          text: '结果数据(动态)可视化',
          type: 'tech'
        }, {
          text: '模型评估/对比',
          type: 'todo'
        }]
      }, {
        text: '日志',
        children: [{
          text: '展示/筛选/过滤'
        }, {
          text: '排查/定位',
          type: 'todo',
          children: [{
            text: '定位到具体执行节点',
            type: 'tech'
          }, {
            text: '定位到具体结果展示',
            type: 'tech'
          }]
        }, {
          text: '重跑'
        }]
      }]
    }]
  } // 日志
  ]
};
/* harmony default export */ __webpack_exports__["default"] = (DATA);

/***/ }),

/***/ "./src/demo/mind.ts":
/*!**************************!*\
  !*** ./src/demo/mind.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(/*! ../index */ "./src/index.ts");
const mind_map_data_1 = __webpack_require__(/*! @data/mind-map-data */ "./mock-data/mind-map-data.js");
const color_1 = __webpack_require__(/*! ../color */ "./src/color.ts");
new index_1.Mind({
    data: mind_map_data_1.default,
    options: {
        toolbar: '#toolbar',
        legends: {
            // type: { name, color }
            'default': { name: '业务场景', color: color_1.default.blue },
            'tech': { name: '技术应用', color: color_1.default.green },
            'todo': { name: 'TODO', color: color_1.default.red }
        },
        lineType: 'curve',
    },
});
const oCodeBtn = document.getElementById('code-btn');
const oBg = document.querySelector('.popup-bg');
oCodeBtn.addEventListener('click', () => {
    const o = document.querySelector('.popup');
    o && o.classList.add('show');
});
oBg.addEventListener('click', () => {
    const o = document.querySelector('.popup');
    o && o.classList.remove('show');
});


/***/ })

/******/ });
//# sourceMappingURL=mind.js.map