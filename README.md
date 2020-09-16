a simple dag editor tool for web

# usage

## init

```javascript
import { Editor } from './src/core'

const editor = new Editor({
  container: string, // editor container dom selector
  page: string,  // editor canvas page container dom selector
  itempanel: string,  // editor items panel container dom selector
})
```

## register shape

```javascript
interface IShape {
  shape: string,  // shape name
  w: number,  // width
  h: number,  // height  
  name: string, // node-item shown text
  anchors: IAnchor[],
  [customProp: string]: any,  // any custom define property
}
interface IAnchor extends Array<number | string> {
  [0]: number,  // relative x position to node-item
  [1]: number,  // relative y position to node-item
  [2]: 'input' | 'output',  // type of anchor
}

editor.registerShape(shapeName, shape)
```

## callback

```javascript
interface INode extends IShape {
  x: number,  // canvas position
  y: number,  // canvas postion
}
```

### selectedNodeChange

`` editor.on('selectedNodeChange', (node: Inode): void) ``

### TODO
- `nodeDeleted`
- `nodeAdded`
- ...
