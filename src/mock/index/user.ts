export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => ({
      code: 200,
      data: {
        name: '张三',
        role: 'R_ADMIN'
      }
    })
  },
  {
    url: '/api/user/list',
    method: 'get',
    response: () => ({
      code: 200,
      msg: '请求成功',
      data: {
        records: [
          {
            id: 1,
            createBy: '阎芳',
            createTime: '1991-07-08 00:46:48',
            updateBy: '卢娟',
            updateTime: '2025-03-30 19:18:42',
            status: '3',
            userName: 'Paul',
            userGender: '男',
            nickName: '蔡霞',
            userPhone: '15132564712',
            userEmail: 'e.phgysthx@blqfavd.pn',
            userRoles: ['R_ADMIN']
          },
          {
            id: 2,
            createBy: '武秀兰',
            createTime: '1978-06-03 18:29:01',
            updateBy: '冯超',
            updateTime: '1970-03-24 00:56:24',
            status: '3',
            userName: 'Timothy',
            userGender: '男',
            nickName: '万军',
            userPhone: '13698156269',
            userEmail: 'y.boivv@brn.af',
            userRoles: ['R_SUPER']
          },
          {
            id: 3,
            createBy: '李勇',
            createTime: '2012-02-04 21:18:00',
            updateBy: '谢秀兰',
            updateTime: '1982-02-17 16:08:50',
            status: '4',
            userName: 'Nancy',
            userGender: '男',
            nickName: '尹平',
            userPhone: '17897687573',
            userEmail: 'g.htnux@naktazocvo.pm',
            userRoles: ['R_USER']
          },
          {
            id: 4,
            createBy: '姜涛',
            createTime: '1973-04-11 02:46:44',
            updateBy: '赖伟',
            updateTime: '1991-10-29 16:59:29',
            status: '4',
            userName: 'Daniel',
            userGender: '男',
            nickName: '袁明',
            userPhone: '14131775637',
            userEmail: 'g.abxpffdo@ahckkg.cv',
            userRoles: ['R_ADMIN']
          },
          {
            id: 5,
            createBy: '江强',
            createTime: '2011-06-25 18:34:04',
            updateBy: '曾娜',
            updateTime: '2016-08-12 23:17:51',
            status: '4',
            userName: 'Frank',
            userGender: '女',
            nickName: '傅丽',
            userPhone: '18575138171',
            userEmail: 'k.efsrpn@injkuu.biz',
            userRoles: ['R_ADMIN']
          },
          {
            id: 6,
            createBy: '梁磊',
            createTime: '2023-05-27 09:21:33',
            updateBy: '杨平',
            updateTime: '2019-02-05 07:16:32',
            status: '2',
            userName: 'Shirley',
            userGender: '女',
            nickName: '龚刚',
            userPhone: '18058114042',
            userEmail: 'w.fcejnkn@mwpuvn.re',
            userRoles: ['R_SUPER']
          },
          {
            id: 7,
            createBy: '钱敏',
            createTime: '2023-01-31 23:14:14',
            updateBy: '程伟',
            updateTime: '2003-03-16 21:10:35',
            status: '3',
            userName: 'Karen',
            userGender: '男',
            nickName: '罗强',
            userPhone: '16584534383',
            userEmail: 'e.ezcmo@nheo.sa',
            userRoles: ['R_ADMIN']
          },
          {
            id: 8,
            createBy: '贺芳',
            createTime: '1970-09-15 07:49:33',
            updateBy: '吴明',
            updateTime: '2025-06-16 10:02:01',
            status: '3',
            userName: 'Brian',
            userGender: '女',
            nickName: '傅霞',
            userPhone: '18233112162',
            userEmail: 's.nyfab@zln.pr',
            userRoles: ['R_SUPER']
          },
          {
            id: 9,
            createBy: '曾艳',
            createTime: '2021-11-01 23:59:48',
            updateBy: '易超',
            updateTime: '1982-02-18 19:55:39',
            status: '4',
            userName: 'Maria',
            userGender: '男',
            nickName: '杨敏',
            userPhone: '17041021678',
            userEmail: 'w.gydpbw@nsjvsjap.gb',
            userRoles: ['R_ADMIN']
          },
          {
            id: 10,
            createBy: '彭强',
            createTime: '2006-12-28 21:47:59',
            updateBy: '石伟',
            updateTime: '1998-01-14 18:14:22',
            status: '3',
            userName: 'Mary',
            userGender: '女',
            nickName: '侯涛',
            userPhone: '14282924528',
            userEmail: 'r.gcpw@dwrp.pa',
            userRoles: ['R_ADMIN']
          },
          {
            id: 11,
            createBy: '陈娜',
            createTime: '2025-09-26 03:18:24',
            updateBy: '邵娟',
            updateTime: '1986-10-08 19:17:35',
            status: '4',
            userName: 'Sandra',
            userGender: '男',
            nickName: '叶平',
            userPhone: '14282662731',
            userEmail: 'r.edkgsvd@qtuvuhnxl.us',
            userRoles: ['R_ADMIN']
          },
          {
            id: 12,
            createBy: '谭刚',
            createTime: '2016-10-08 23:43:25',
            updateBy: '毛杰',
            updateTime: '1975-09-25 18:48:05',
            status: '4',
            userName: 'Jose',
            userGender: '男',
            nickName: '邹杰',
            userPhone: '17601863234',
            userEmail: 'y.eyghd@mitvexahs.pg',
            userRoles: ['R_SUPER']
          },
          {
            id: 13,
            createBy: '傅静',
            createTime: '1984-07-15 19:26:43',
            updateBy: '崔伟',
            updateTime: '1982-10-05 14:28:37',
            status: '3',
            userName: 'Scott',
            userGender: '女',
            nickName: '丁杰',
            userPhone: '18863717323',
            userEmail: 'w.msvgtakk@qlinu.中国互联.公司',
            userRoles: ['R_SUPER']
          },
          {
            id: 14,
            createBy: '阎超',
            createTime: '1983-08-19 07:59:07',
            updateBy: '史艳',
            updateTime: '1983-03-30 04:50:57',
            status: '3',
            userName: 'Carol',
            userGender: '女',
            nickName: '郑磊',
            userPhone: '18581448756',
            userEmail: 'x.fukgwh@tdffcm.pt',
            userRoles: ['R_ADMIN']
          },
          {
            id: 15,
            createBy: '李娟',
            createTime: '1972-07-30 16:21:36',
            updateBy: '彭勇',
            updateTime: '2001-06-13 14:11:41',
            status: '3',
            userName: 'Mark',
            userGender: '男',
            nickName: '李明',
            userPhone: '17692274230',
            userEmail: 'j.lihq@xye.hk',
            userRoles: ['R_ADMIN']
          },
          {
            id: 16,
            createBy: '宋静',
            createTime: '2020-10-06 16:22:41',
            updateBy: '谢刚',
            updateTime: '1983-07-05 23:46:41',
            status: '2',
            userName: 'Mark',
            userGender: '女',
            nickName: '苏超',
            userPhone: '15375190585',
            userEmail: 'k.jxkiukowq@iypmekln.vn',
            userRoles: ['R_ADMIN']
          },
          {
            id: 17,
            createBy: '陆丽',
            createTime: '1982-12-17 16:11:50',
            updateBy: '石磊',
            updateTime: '1981-03-13 21:28:53',
            status: '2',
            userName: 'Michael',
            userGender: '女',
            nickName: '武涛',
            userPhone: '17112605865',
            userEmail: 's.vtnmlbz@att.fr',
            userRoles: ['R_ADMIN']
          },
          {
            id: 18,
            createBy: '沈平',
            createTime: '2018-06-30 01:10:00',
            updateBy: '许涛',
            updateTime: '1977-06-18 16:15:29',
            status: '1',
            userName: 'Frank',
            userGender: '女',
            nickName: '冯磊',
            userPhone: '19303126031',
            userEmail: 'd.elwdxpcch@idvwn.mc',
            userRoles: ['R_ADMIN']
          },
          {
            id: 19,
            createBy: '白刚',
            createTime: '1984-12-30 12:22:31',
            updateBy: '潘平',
            updateTime: '2023-01-01 17:27:14',
            status: '3',
            userName: 'William',
            userGender: '男',
            nickName: '蔡丽',
            userPhone: '16834528275',
            userEmail: 'b.essvgn@odjyhqtdy.li',
            userRoles: ['R_USER']
          },
          {
            id: 20,
            createBy: '张涛',
            createTime: '2002-03-15 05:33:52',
            updateBy: '傅敏',
            updateTime: '1987-11-10 19:08:46',
            status: '4',
            userName: 'Elizabeth',
            userGender: '女',
            nickName: '董杰',
            userPhone: '15665513767',
            userEmail: 'y.frojc@qriy.tn',
            userRoles: ['R_USER']
          }
        ],
        current: 1,
        size: 20,
        total: 200,
        _debug: {
          totalPages: 10,
          isLastPage: false,
          currentPageSize: 20,
          startIndex: 0
        }
      }
    })
  },
  {
    url: '/api/role/list',
    method: 'get',
    response: () => ({
      code: 200,
      msg: '请求成功',
      data: {
        records: [
          {
            roleId: 1,
            roleName: '运维',
            roleCode: 'R_DATA',
            description: '管理财务相关权限',
            enabled: true,
            createTime: '1978-11-20 12:20:36'
          },
          {
            roleId: 2,
            roleName: '财务',
            roleCode: 'R_DATA',
            description: '仅限浏览权限',
            enabled: false,
            createTime: '2016-07-24 08:48:00'
          },
          {
            roleId: 3,
            roleName: '普通用户',
            roleCode: 'R_ADMIN',
            description: '仅限浏览权限',
            enabled: false,
            createTime: '2004-09-26 04:52:15'
          },
          {
            roleId: 4,
            roleName: '运营',
            roleCode: 'R_TEST',
            description: '负责系统维护和更新',
            enabled: false,
            createTime: '1972-01-30 06:05:52'
          },
          {
            roleId: 5,
            roleName: '系统管理员',
            roleCode: 'R_FINANCE',
            description: '管理财务相关权限',
            enabled: true,
            createTime: '1985-12-28 11:22:13'
          },
          {
            roleId: 6,
            roleName: '普通用户',
            roleCode: 'R_SUPER',
            description: '仅限浏览权限',
            enabled: true,
            createTime: '1975-07-30 20:36:37'
          },
          {
            roleId: 7,
            roleName: '客服',
            roleCode: 'R_OPS',
            description: '管理营销活动权限',
            enabled: false,
            createTime: '2024-03-22 19:05:38'
          },
          {
            roleId: 8,
            roleName: '系统管理员',
            roleCode: 'R_DATA',
            description: '处理客户支持请求',
            enabled: true,
            createTime: '2006-12-24 23:59:36'
          },
          {
            roleId: 9,
            roleName: '运营',
            roleCode: 'R_FINANCE',
            description: '管理财务相关权限',
            enabled: false,
            createTime: '1970-02-22 11:50:38'
          },
          {
            roleId: 10,
            roleName: '财务',
            roleCode: 'R_DATA',
            description: '拥有数据分析权限',
            enabled: false,
            createTime: '1978-05-04 06:15:42'
          },
          {
            roleId: 11,
            roleName: '客服',
            roleCode: 'R_DATA',
            description: '拥有系统管理权限',
            enabled: false,
            createTime: '1990-04-18 07:43:22'
          },
          {
            roleId: 12,
            roleName: '运维',
            roleCode: 'R_OPS',
            description: '处理客户支持请求',
            enabled: false,
            createTime: '2024-05-26 13:41:26'
          },
          {
            roleId: 13,
            roleName: '系统管理员',
            roleCode: 'R_ADMIN',
            description: '管理项目相关权限',
            enabled: false,
            createTime: '1989-09-18 02:16:28'
          },
          {
            roleId: 14,
            roleName: '财务',
            roleCode: 'R_OPS',
            description: '处理客户支持请求',
            enabled: false,
            createTime: '1992-11-18 22:56:11'
          },
          {
            roleId: 15,
            roleName: '财务',
            roleCode: 'R_GUEST',
            description: '管理财务相关权限',
            enabled: true,
            createTime: '1978-07-14 17:58:14'
          },
          {
            roleId: 16,
            roleName: '财务',
            roleCode: 'R_TEST',
            description: '拥有数据分析权限',
            enabled: false,
            createTime: '1973-08-10 22:30:39'
          },
          {
            roleId: 17,
            roleName: '财务',
            roleCode: 'R_FINANCE',
            description: '拥有系统普通权限',
            enabled: true,
            createTime: '1977-12-04 00:49:57'
          },
          {
            roleId: 18,
            roleName: '访客',
            roleCode: 'R_GUEST',
            description: '拥有系统普通权限',
            enabled: false,
            createTime: '1986-06-09 05:44:15'
          },
          {
            roleId: 19,
            roleName: '访客',
            roleCode: 'R_USER',
            description: '拥有系统管理权限',
            enabled: true,
            createTime: '2003-10-06 11:38:28'
          },
          {
            roleId: 20,
            roleName: '运维',
            roleCode: 'R_OPS',
            description: '拥有数据分析权限',
            enabled: false,
            createTime: '1973-02-19 06:13:16'
          }
        ],
        current: 1,
        size: 20,
        total: 100,
        _debug: {
          totalPages: 5,
          isLastPage: false,
          currentPageSize: 20,
          startIndex: 0
        }
      }
    })
  },
  {
    url: '/api/v3/system/menus/simple',
    method: 'get',
    response: () => ({
      code: 200,
      msg: '请求成功',
      data: [
        {
          name: 'Dashboard',
          path: '/dashboard',
          component: '/index/index',
          meta: {
            title: 'menus.dashboard.title',
            icon: 'ri:pie-chart-line'
          },
          children: [
            {
              path: 'console',
              name: 'Console',
              component: '/dashboard/console',
              meta: {
                title: 'menus.dashboard.console',
                icon: 'ri:home-smile-2-line',
                keepAlive: false,
                fixedTab: true
              }
            }
          ]
        },
        {
          path: '/system',
          name: 'System',
          component: '/index/index',
          meta: {
            title: 'menus.system.title',
            icon: 'ri:user-3-line'
          },
          children: [
            {
              path: 'user',
              name: 'User',
              component: '/system/user',
              meta: {
                title: 'menus.system.user',
                icon: 'ri:user-line',
                keepAlive: true,
                roles: ['R_SUPER', 'R_ADMIN']
              }
            },
            {
              path: 'role',
              name: 'Role',
              component: '/system/role',
              meta: {
                title: 'menus.system.role',
                icon: 'ri:user-settings-line',
                keepAlive: true,
                roles: ['R_SUPER']
              }
            },
            {
              path: 'user-center',
              name: 'UserCenter',
              component: '/system/user-center',
              meta: {
                title: 'menus.system.userCenter',
                icon: 'ri:user-line',
                isHide: true,
                keepAlive: true,
                isHideTab: true
              }
            },
            {
              path: 'menu',
              name: 'Menus',
              component: '/system/menu',
              meta: {
                title: 'menus.system.menu',
                icon: 'ri:menu-line',
                keepAlive: true,
                roles: ['R_SUPER'],
                authList: [
                  {
                    title: '新增',
                    authMark: 'add'
                  },
                  {
                    title: '编辑',
                    authMark: 'edit'
                  },
                  {
                    title: '删除',
                    authMark: 'delete'
                  }
                ]
              }
            }
          ]
        },
        {
          path: '/result',
          name: 'Result',
          component: '/index/index',
          meta: {
            title: 'menus.result.title',
            icon: 'ri:checkbox-circle-line'
          },
          children: [
            {
              path: 'success',
              name: 'ResultSuccess',
              component: '/result/success',
              meta: {
                title: 'menus.result.success',
                icon: 'ri:checkbox-circle-line',
                keepAlive: true
              }
            },
            {
              path: 'fail',
              name: 'ResultFail',
              component: '/result/fail',
              meta: {
                title: 'menus.result.fail',
                icon: 'ri:close-circle-line',
                keepAlive: true
              }
            }
          ]
        },
        {
          path: '/exception',
          name: 'Exception',
          component: '/index/index',
          meta: {
            title: 'menus.exception.title',
            icon: 'ri:error-warning-line'
          },
          children: [
            {
              path: '403',
              name: '403',
              component: '/exception/403',
              meta: {
                title: 'menus.exception.forbidden',
                keepAlive: true,
                isFullPage: true
              }
            },
            {
              path: '404',
              name: '404',
              component: '/exception/404',
              meta: {
                title: 'menus.exception.notFound',
                keepAlive: true,
                isFullPage: true
              }
            },
            {
              path: '500',
              name: '500',
              component: '/exception/500',
              meta: {
                title: 'menus.exception.serverError',
                keepAlive: true,
                isFullPage: true
              }
            }
          ]
        }
      ]
    })
  }
]
