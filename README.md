a simple dag editor tool for web

[Demo](https://stillbold.com/demos/dag-editor/demos/editor.html)

[GitHub](https://github.com/HustLiuCN/dag-editor)

# usage

## install

``yarn add simple-dag-editor``

## init

```javascript
import { Editor } from 'simple-dag-editor'

const editor = new Editor({
  container: string, // editor container dom selector
  page: string,  // editor canvas page container dom selector
  itempanel: string,  // editor items panel container dom selector
})
```

## register shape

`` editor.registerShape(shapeName, shape) ``

```javascript
interface IShape {
  shape: string,  // shape name
  w: number,  // width
  h: number,  // height
  name: string, // node-item shown text
  anchors: IAnchor,
  [customProp: string]: any,  // any custom define property
}
interface IAnchor {
  input?: number,     // input count
  output?: number,    // output count
}
```

## callback

```javascript
interface INode extends IShape {
  x: number,  // canvas position
  y: number,  // canvas postion
}

interface IEdge {
  id: string,
  source: string,   // source node id
  sourceAnchorIndex: number,
  target: string,   // target node id
  targetAnchorIndex: number,
}
```

```javascript
interface callback {
  selectedNodeChange: (node: INode) => void,
  nodeAdded: (node: INode) => void,
  nodeDeleted: (nodeId: string) => void,
  edgeAdded: (edge: IEdge) => void,
  edgeDeleted: (edge: IEdge) => void,
}
```

**`` editor.on(`${callbackEventName}`, callback) ``**

### TODO
- ~~`nodeDeleted`~~
- ~~`nodeAdded`~~
- ~~**select edge**~~
- ~~**delete edge**~~
- ~~`edgeAdded` & `edgeDeleted` callback~~
- ~~**drag canvas**~~
- **scale**
