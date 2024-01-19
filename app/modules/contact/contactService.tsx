import AuthCurrentTenant from '../auth/authCurrentTenant';
import authAxios from '../shared/axios/authAxios';

export default class contactService {
  static async list() {
    const tenantId = await AuthCurrentTenant.get();
    const response = await authAxios.get(`/tenant/${tenantId}/category`);
    return response.data;
  }
}
