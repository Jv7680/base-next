import { ROLE_USER } from '@/utils/enums/enum';
import useAuth from './useAuth';
import { Department, Role } from '@/utils/permission';

export const usePermission = () => {
  const { metaData } = useAuth();

  const isAdmin = metaData?.role === Role.Admin;

  // Manager
  const isManager = metaData?.role === Role.Manager;
  const isTelecomProductManager =
    metaData?.role === Role.Manager &&
    metaData?.department === Department.TelecomProduct;
  const isCustomerServiceManager =
    metaData?.role === Role.Manager &&
    metaData?.department === Department.CustomerService;
  const isOperationManager =
    metaData?.role === Role.Manager &&
    metaData?.department === Department.Operation;
  const isB2BManager =
    metaData?.role === Role.Manager && metaData?.department === Department.B2B;
  const isEcomManager =
    metaData?.role === Role.Manager &&
    metaData?.department === Department.Ecommerce;
  const isFinanceManager =
    metaData?.role === Role.Manager &&
    metaData?.department === Department.Finance;

  // By Department
  const isOperationDepartment = metaData?.department === Department.Operation;
  const isTelecomProductDepartment =
    metaData?.department === Department.TelecomProduct;
  const isCustomerServiceDepartment =
    metaData?.department === Department.CustomerService;
  const isEcomDepartment = metaData?.department === Department.Ecommerce;
  const isB2BDepartment = metaData?.department === Department.B2B;
  const isFinanceDepartment = metaData?.department === Department.Finance;

  // Viewer
  const isViewer = metaData?.role === Role.Viewer;

  return {
    // Role
    isAdmin,
    isManager,

    // Manger
    isTelecomProductManager,
    isCustomerServiceManager,
    isOperationManager,
    isB2BManager,
    isEcomManager,
    isFinanceManager,

    // Viewer
    isViewer,

    // Department
    isOperationDepartment,
    isTelecomProductDepartment,
    isCustomerServiceDepartment,
    isEcomDepartment,
    isB2BDepartment,
    isFinanceDepartment,
  };
};
