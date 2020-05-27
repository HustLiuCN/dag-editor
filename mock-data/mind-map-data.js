const DATA = {
	text: 'Platform',
	children: [
		// 实验相关
		{
			text: '实验',
			children: [
				{
					text: 'DAG图',
					children: [
						{
							text: '@antV/g6-editor', type: 'tech',
						}, {
							text: '定制化UI',
							children: [
								{
									text: '原始API延伸', type: 'tech',
								}, {
									text: '上层canvas自定义', type: 'tech',
								},
							],
						}, {
							text: 'Tensorflow',
							type: 'todo',
							children: [
								{ text: '深度网络可视化', type: 'tech' },
							],
						}, {
							text: '更多框架接入/拓展', type: 'todo',
						},
					],
				},
				{
					text: '参数配置',
					children: [
						{
							text: '算子参数',
							children: [
								{
									text: '算子组件抽象',
									type: 'tech',
									children: [
										{ text: 'UI封装', type: 'tech' },
										{ text: '逻辑解耦', type: 'tech' },
									],
								},
								{
									text: '自定义算子',
									children: [
										{ text: '自定义组件', type: 'tech' },
										{ text: '自定义参数', type: 'tech' },
									],
								},
							],
						}, {
							text: '实验参数',
						},
					],
				},
				{
					text: '数据流',
					children: [
						{
							text: '数据继承',
							children: [
								{
									text: '准确性',
									children: [
										{ text: '超集 --> 严格收敛', type: 'tech' },
									],
								}, {
									text: '高效性',
									children: [
										{ text: '缓存', type: 'tech' },
									],
								},
							],
						}, {
							text: '数据验证',
							children: [
								{ text: '表单验证', type: 'tech' },
								{ text: '逻辑验证', type: 'tech' },
							],
						}, {
							text: '数据扩展',
							children: [
								{ text: '字段类型', type: 'tech' },
								{ text: '新字段', type: 'tech' },
							],
						},
					],
				},
				{
					text: '版本/快照',
					children: [
						{ text: '管理' },
						{ text: '切换' },
					],
				},
			],
		},
		// 调度
		{
			text: '任务调度',
			children: [
				{
					text: '调度管理',
					children: [
						{
							text: '调度配置',
							children: [
								{
									text: '不同类型算子配置抽象', type: 'tech',
								},
							],
						}, {
							text: '调度周期',
							children: [
								{
									text: 'cron 表达式',
									children: [
										{ text: '用户输入 ->(降低成本提高体验)-> 可视化配置', type: 'tech' },
									],
								}, {
									text: '其他', type: 'todo',
								}
							],
						}
					],
				}, {
					text: '任务执行',
					children: [
						{
							text: '部分执行调度', type: 'todo',
							children: [
								{ text: '数据流分隔', type: 'tech' },
								{ text: '状态保存', type: 'tech' },
							],
						}, {
							text: '执行结果',
							children: [
								{
									text: '结果数据(动态)可视化', type: 'tech',
								}, {
									text: '模型评估/对比', type: 'todo',
								},
							],
						}, {
							text: '日志',
							children: [
								{ text: '展示/筛选/过滤' },
								{
									text: '排查/定位',
									type: 'todo',
									children: [
										{ text: '定位到具体执行节点', type: 'tech' },
										{ text: '定位到具体结果展示', type: 'tech' },
									],
								}, {
									text: '重跑',
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
