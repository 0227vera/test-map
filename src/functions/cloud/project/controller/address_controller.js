const BaseController = require('./base_controller')
const AddressManagerService = require('../service/address_service.js')

class AddressManagerController extends BaseController {
  async getList() {
    const where = {
      OPENID: this._openId
    }
    const service = new AddressManagerService()
    const res = await service.getList(where)
    return res
  }

  async create() {
    const service = new AddressManagerService()
    const params = Object.assign({}, this._event.params, {
      OPENID: this._openId
    })
    const res = await service.create(params)
    return res
  }

  async update() {
    const service = new AddressManagerService()
    const res = await service.update(this._event.params)
    return res
  }

  async delete() {
    const service = new AddressManagerService()
    const res = await service.delete(this._event.params)
    return res
  }
}

module.exports = AddressManagerController
