export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/list',
              },
              {
                name: '客流数据',
                routes: [
                  {
                    name: '实时客流',
                    icon: 'table',
                    path: '/realtimetrack',
                    component: './RealTimeTrack',
                  },
                  {
                  name: '客流详情',
                  icon: 'table',
                  path: '/detailflow',
                  component: './TableList',
                  },
                ]
              },
              {
                name: '用户分析',
                routes: [
                  {
                    name: '用户画像',
                    icon: 'table',
                    path: '/persona',
                    component: './TableList',
                  },
                  {
                    name: '用户明细',
                    icon: 'table',
                    path: '/userdetail',
                    component: './RealTimeTrack',
                  },
                ]
              },
              {
                name: '配置管理',
                routes: [
                  {
                    name: '门店管理',
                    icon: 'table',
                    path: '/storemanage',
                    component: './TableList',
                  },
                  {
                    name: '设备配置',
                    icon: 'table',
                    path: '/devicemanage',
                    component: './RealTimeTrack',
                  },
                ]
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
