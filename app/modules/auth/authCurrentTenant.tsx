// import { tenantSubdomain } from "../tenant/tenantSubdomain";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AuthCurrentTenant {
  static selectAndSaveOnStorageFor(currentUser: any) {
    if (!currentUser) {
      return null;
    }

    if (!currentUser.tenants) {
      return null;
    }

    const activeTenants = currentUser.tenants.filter(
      (tenantUser: {status: string}) => tenantUser.status === 'active',
    );

    if (!activeTenants || !activeTenants.length) {
      return null;
    }

    const tenantId = this.get();

    let tenant;

    if (tenantId) {
      tenant = activeTenants
        .map((tenantUser: {tenant: any}) => tenantUser.tenant)
        .find((tenant: {id: Promise<any>}) => tenant.id === tenantId);
    }

    tenant = tenant || activeTenants[0].tenant;

    this.set(tenant);
    return tenant;
  }

  static async get() {
    const tenantASString = (await AsyncStorage.getItem('tenant')) || null;
    if (tenantASString) {
      return JSON.parse(tenantASString).id;
    }

    return null;
  }

  static set(tenant: any) {
    if (!tenant) {
      return this.clear();
    }

    AsyncStorage.setItem('tenant', JSON.stringify(tenant));
  }

  static clear() {
    AsyncStorage.removeItem('tenant');
  }
}
