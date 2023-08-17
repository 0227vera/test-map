module.exports = {

  // note: 地址管理
  'address/get': 'address_controller@getList',
  'address/update': 'address_controller@update',
  'address/delete': 'address_controller@delete',
  'address/create': 'address_controller@create',

  // note: 发布相关
  'release/get': 'release_controlle@getList',
  'release/delete': 'release_controlle@delete',
  'release/create': 'release_controlle@create',
  'release/update': 'release_controlle@update',
  'release/getonebyid': 'release_controlle@getOne',

  // note: 用户管理
  'user/get': 'user_controlle@getList',
  'user/delete': 'user_controlle@delete',
  'user/create': 'user_controlle@create',
  'user/update': 'user_controlle@update',
  'user/currentcole': 'user_controlle@getOne',

  // node: 固定配置
  'admin/getconstant': 'constant_controlle@getOne',
  // note: 管理员权限
  'admin/isadmin': 'admin/base_admin_controller@isAdmin',

  // 公司信息
  'admin/get_company_info': 'admin/company_controller@getOne',
  'admin/update_company_info': 'admin/company_controller@update'
}
