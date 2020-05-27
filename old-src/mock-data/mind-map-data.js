const DATA = {
	d: '平台',
	children: [
		// 实验相关
		{
			d: '实验',
			children: [
				{
					d: 'DAG图',
					children: [
						{
							d: '@antV/g6-editor', t: 'tech',
						}, {
							d: '定制化UI',
							children: [
								{
									d: '原始API延伸', t: 'tech',
								}, {
									d: '上层canvas自定义', t: 'tech',
								},
							],
						}, {
							d: 'Tensorflow',
							t: 'todo',
							children: [
								{ d: '深度网络可视化', t: 'tech' },
							],
						}, {
							d: '更多框架接入/拓展', t: 'todo',
						},
					],
				},
				{
					d: '参数配置',
					children: [
						{
							d: '算子参数',
							children: [
								{
									d: '算子组件抽象',
									t: 'tech',
									children: [
										{ d: 'UI封装', t: 'tech' },
										{ d: '逻辑解耦', t: 'tech' },
									],
								},
								{
									d: '自定义算子',
									children: [
										{ d: '自定义组件', t: 'tech' },
										{ d: '自定义参数', t: 'tech' },
									],
								},
							],
						}, {
							d: '实验参数',
						},
					],
				},
				{
					d: '数据流',
					children: [
						{
							d: '数据继承',
							children: [
								{
									d: '准确性',
									children: [
										{ d: '超集 --> 严格收敛', t: 'tech' },
									],
								}, {
									d: '高效性',
									children: [
										{ d: '缓存', t: 'tech' },
									],
								},
							],
						}, {
							d: '数据验证',
							children: [
								{ d: '表单验证', t: 'tech' },
								{ d: '逻辑验证', t: 'tech' },
							],
						}, {
							d: '数据扩展',
							children: [
								{ d: '字段类型', t: 'tech' },
								{ d: '新字段', t: 'tech' },
							],
						},
					],
				},
				{
					d: '版本/快照',
					children: [
						{ d: '管理' },
						{ d: '切换' },
					],
				},
			],
		},
		// 调度
		{
			d: '任务调度',
			children: [
				{
					d: '调度管理',
					children: [
						{
							d: '调度配置',
							children: [
								{
									d: '不同类型算子配置抽象', t: 'tech',
								},
							],
						}, {
							d: '调度周期',
							children: [
								{
									d: 'cron 表达式',
									children: [
										{ d: '用户输入 ->(降低成本提高体验)-> 可视化配置', t: 'tech' },
									],
								}, {
									d: '其他', t: 'todo',
								}
							],
						}
					],
				}, {
					d: '任务执行',
					children: [
						{
							d: '部分执行调度', t: 'todo',
							children: [
								{ d: '数据流分隔', t: 'tech' },
								{ d: '状态保存', t: 'tech' },
							],
						}, {
							d: '执行结果',
							children: [
								{
									d: '结果数据(动态)可视化', t: 'tech',
								}, {
									d: '模型评估/对比', t: 'todo',
								},
							],
						}, {
							d: '日志',
							children: [
								{ d: '展示/筛选/过滤' },
								{
									d: '排查/定位',
									t: 'todo',
									children: [
										{ d: '定位到具体执行节点', t: 'tech' },
										{ d: '定位到具体结果展示', t: 'tech' },
									],
								}, {
									d: '重跑',
								},
							],
						},
					],
				},
			],
		},
		// 日志

	],
}

export default DATA
