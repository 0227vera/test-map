const BaseModel = require('./base_model.js');

class AddressModel extends BaseModel {

}

// 集合名
AddressModel.CL = "warrior_release"

AddressModel.DB_STRUCTURE = {
  _pid: 'string|true',
  category: 'string|true',
  categoryName: 'string|true',
  price: 'string|true',
  priceUnit: 'string|true',
  status: 'string|true',
  callnum: 'int|false',
  poi: 'object|true',
  tel: 'string|true',
  ownTime: 'int|false',
  ownTimeName: 'string|false',
  images: 'array|false',
  note: 'string|false',
  OPENID: 'string|true',
  RELEASE_ID: 'string|true',
  RELEASE_ADD_TIME: 'int|false',
  RELEASE_EDIT_TIME: 'int|false',
  RELEASE_ADD_IP: 'string|false',
  RELEASE_EDIT_IP: 'string|false'
}

// 字段前缀
AddressModel.FIELD_PREFIX = "RELEASE_"

module.exports = AddressModel
