let menu = {};

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '首页',
  path: '/',
  icon: 'fa fa-tachometer',
};


/**
 * 字体图标
 * @type {{name: string, icon: string, children: {}}}
 */
menu.font_icon = {
  name: '新建',
  icon: 'fa fa-th',
  children: {}
};
let icon = menu.font_icon.children;

icon.font_awesome = {
  name: '文本',
  path: '/font_awesome',

};
icon.element_icon = {
  name: '文件夹',
  path: '/element_icon',
};

/**
 * 内容管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.content_manage = {
  name: '下载',
  icon: 'fa fa-file-text-o',
  children: {}
};

let ContentManage = menu.content_manage.children;

ContentManage.source = {
  name: '源码',
  path: '/post_manage',
};

ContentManage.pdf = {
  name: 'pdf',
  path: '/post_manage',
}
/**
 * 用户管理
 * @type {{name: string, icon: string, children: {}}}
 *
menu.user_manage = {
  name: '用户管理',
  icon: 'fa fa-user-circle-o',
  children: {}
};
let UserManage = menu.user_manage.children;

UserManage.user = {
  name: '用户列表',
  path: '/user_manage',
};*/


/**
 * 分类管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.category_manage = {
  name: '同步管理',
  icon: 'fa fa-sitemap',
  children: {}
};
let CategoryManage = menu.category_manage.children;

CategoryManage.category = {
  name: 'GitHub',
  path: '/category_manage',
};



menu.permission_manage = {
  name: '用户组',
  icon: 'fa fa-qrcode',
  children: {}
};
let PermissionManage = menu.permission_manage.children;

PermissionManage.role = {
  name: '成员管理',
  path: '/role_manage',
};

PermissionManage.permission = {
  name: '权限列表',
  path: '/permission_list',
};

export default menu;

if(process.env.NODE_ENV=='development'){

  menu.development_tools = {
    name: '设置',
    icon: 'fa fa-wrench',
    children: {}
  };

  let DevelopmentTools = menu.development_tools.children;

  DevelopmentTools.engin = {
    name: '编译引擎',
    path: '/build_code',
  };

  DevelopmentTools.main_tex = {
    name: '主文档',
    path: '',
  };

  DevelopmentTools.spell = {
    name: '拼写检查',
    path: '',
  };

  DevelopmentTools.complete = {
    name: '自动补全',
    path: '',
  };

  DevelopmentTools.theme = {
    name: '主题',
  };

  DevelopmentTools.font = {
    name: '字体设置',
  };
  
  DevelopmentTools.count = {
    name: '字数统计',
  };


}
