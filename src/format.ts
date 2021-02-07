export function buildData(params){
  const {edges, nodes} = params;
  const rootName = nodes.find(item=>item.id.indexOf('ROOT')>-1).id;
  const treeData = buildTreeData(edges);
  const treeArr = [1];
  treeData[rootName].path = [rootName];
  changeLevel(treeData[rootName]);
  const levelData = getLevelData(treeData);
  countEdges()
  getLocation();

  return { edges, nodes}

  // 计算每个节点左侧有多少条线
  function countEdges(){
      levelData.forEach((levelArr,levelIndex)=>{
          if(levelIndex === 0){
              levelArr[levelIndex].edgesCount = 0;
              treeData[rootName].edgesCount = 0;
              return;
          }
          levelArr = levelArr.reduce((allumulatorArr, current, index)=>{

              treeData[current.text].edgesCount = getEdgesCount(current); // 自己的分边

              const prevItem = allumulatorArr[index -1];
              if(index === 0){
                  const edgesArrCount = getTotalCount(current.path);
                  current.edgesCount = edgesArrCount;
              }else{
                  // 兄弟节点，不用处理
                  if(prevItem.father !== current.father){
                      // 历史路径对比
                      const sameAncestorIndex = findSameAncestor(prevItem.path, current.path);
                      const edgesArr = current.path.slice(sameAncestorIndex+1);
                      const edgesArrCount = getTotalCount(edgesArr);
                      current.edgesCount = edgesArrCount
                  }
              }
              treeData[current.text].edgesCount = current.edgesCount
              // 有前一个节点
              allumulatorArr.push(current);
              return allumulatorArr;
           }, [])
      })
  }

  function buildTreeData(originData) {
     // 0级节点有1个
    const data = {};
    originData.forEach((item) => {
      const { source, target } = item;
      if(target === rootName) return false;
      if (data.hasOwnProperty(target)) {
        if (!data.hasOwnProperty(source)) {
          // 有target，没source
          data[source] = {
            text: source,
            level: 0,
            children: []
          };
        }
        data[source].children.push(data[target]);
      } else {
        const hasSource = data.hasOwnProperty(source);
        const targetData = {
          text: target,
          level: hasSource ? data[source].level + 1 : 0,
          children: []
        };
        data[target] = targetData;
        // 没有 target，有source
        if (hasSource) {
          data[source].children.push(targetData);
        } else {
          data[source] = {
            text: source,
            level: 0,
            children: [targetData]
          };
        }
      }
    });
    return data;
  }
  // 修改层级，从root开始，递归修改children的层级，同时更新treeData
  function changeLevel(data) {
      const {children, level, text, path} = data;
    if (children && children.length > 0) {
      children.forEach((item) => {
      //   item.father = text;
        const preLevel = treeData[item.text].level;
        treeArr.push(item.text);

        treeData[item.text].count = treeArr.length;
        treeData[item.text].father = text;
        treeData[item.text].path = [...path, item.text];
        // 增加子节点的level
        if(preLevel < level + 1){
            treeData[item.text].level = level + 1;
            item.level = level + 1;
        }
        changeLevel(item);
      });
    }
    return treeData;
  }

  function getLevelData(data){
    const levelData = []
    Object.values(data).sort((prev, next)=>{
          return prev.count - next.count;
    }).forEach(item=>{
        const { level } = item;
        if(levelData[level]){
            levelData[level].push(item)
        }else{
            levelData[level] = [item]
        }
    })
    return levelData
  }

  function findSameAncestor(path1, path2){
      const newPath1 = [...path1].reverse();
      const newPath2 = [...path2].reverse();
      for(let i =1; i<newPath1.length; i++){
          if(newPath1[i] === newPath2[i]){
              return path1.length - i
          }
      }
  }

  function getEdgesCount(data){
      const match = data.children.find(item=> {
          return item.level > data.level + 1
      });

      return match && data.children?.length > 1 ? 1 : 0;
  }

  function getTotalCount(path){
      const newPath = path.slice(0, path.length - 1); // 不算自己
      return newPath.reduce((acc, current)=>{
          const edgesCount = getEdgesCount(treeData[current]);
          // const edgesCount = treeData[current].edgesCount; // 缓存
          return acc + edgesCount;
      }, 0);
  }

  function getLocation(){
    levelData.forEach((item, level)=>{
      item.forEach((innerItem)=>{
        const node = nodes.find(item=>item.id === innerItem.text );
        node._level = level;
        node._edgesCount = innerItem.edgesCount;
        node._father = innerItem.father;
        node._children = innerItem.children;
        node._path = innerItem.path;
      })
    })
  }
}
