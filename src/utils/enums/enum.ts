export enum PAGINATION {
  PAGE_SIZE = 20,
}

export enum DATA_TYPE_CODE {
  P_DAY_PASS = 'P-DayPass',
  F_FIXED_DATA = 'F-Fixed Data',
}

export enum SORT_ORDER {
  ASCEND = 'ascend',
  DESCEND = 'descend',
}

export enum ORDER_TOPUP_STATUS {
  INVALID = 'invalid',
  HAS_PACKAGE = 'hasPackage',
  NOT_APPROVE = 'notApprove',
  IN_PROCESSING = 'inProcessing',
  TOP_UP_SUCCESS = 'topUpSuccess',
  NEED_TOP_UP = 'needTopUp',
  NO_NEED_TO_TOP_UP = 'noNeedToTopUp',
  FAILED = 'failed',
}

export enum ORDER_ITEM_STATUS {
  INVALID = 'invalid',
  IN_PROCESSING = 'inProcessing',
  HAS_PACKAGE = 'hasPackage',
  TOP_UP_SUCCESS = 'topUpSuccess',
  NEED_TOP_UP = 'needTopUp',
  NO_NEED_TO_TOP_UP = 'noNeedToTopUp',
  FAILED = 'failed',
}

export enum ORDER_ITEM_TYPE {
  ESIM = 'E-eSIM',
  SIM_CARD = 'SIM',
  BLANK_SIM = 'Blank SIM',
}

export enum ORDER_PAYMENT_STATUS {
  PAID = 'paid',
  UNPAID = 'unPaid',
  AUTHORIZED = 'authorized',
}

export enum ICCID_STATUS {
  HAS_PACKAGE = 'hasPackage',
  NOT_TOP_UP_YET = 'notTopUpYet',
  INVALID = 'invalid',
}

export enum ORDER_BOOKMARK_STATUS {
  UN_BOOKMARK = 0,
  BOOKMARK = 1,
}

export enum SUPPLIER {
  BC = 'BC',
  JOYTEL = 'JY',
}

export enum ORDER_ITEM_TOP_UP_CODE {
  SUCCESS = 200,
}

export enum ORDER_SOURCE_NAME {
  TIKI = 'Tiki',
  TRAVELOKA = 'Traveloka',
  SHOPEE = 'Shopee',
  TIKTOK_SHOP = 'TiktokShop',
  MARKETING_KOL = 'MKT / KOL',
}

export enum STATUS_PRODUCT_TEXT {
  All = 'Tất cả',
  Active = 'Hoạt động',
  Inactive = 'Không hoạt động',
  Deleted = 'Đã xoá',
  Temporary = 'Bán tạm',
  Preparing = 'Chuẩn bị hàng',
  B2BOnly = 'Dành riêng cho B2B',
}

export enum STATUS_PRODUCT_VALUE {
  All = 'All',
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted',
  Temporary = 'Temporary',
  Preparing = 'Preparing',
  B2BOnly = 'B2BOnly',
}

export enum ROLE_USER {
  ADMIN = 'Admin',
  MANAGER = 'Manager',
  APPROVER = 'Approver',
  OPERATOR = 'Operator',
}

export enum NOTIFICATION_TYPE {
  VALIDATE_PRODUCT_DOES_NOT_EXIST = 'validate-product-does-not-exist',
  VALIDATE_PRODUCT_PRICE_DIFFERENCE = 'validate-product-price-difference',
}

export enum PERSISTENCE_KEY_TABLE {
  PRODUCT = 'product',
}

export enum FILTER_TYPE_DOM {
  SELECT = 'select',
  CHECK_BOX = 'checkBox',
  TEXT = 'text',
  SELECT_MULTIPLE = 'select_multiple',
  DAY = 'day',
}

export const STATUS_FILTER = {
  Active: {
    text: STATUS_PRODUCT_TEXT.Active,
    value: STATUS_PRODUCT_VALUE.Active,
  },
  Inactive: {
    text: STATUS_PRODUCT_TEXT.Inactive,
    value: STATUS_PRODUCT_VALUE.Inactive,
  },
  Deleted: {
    text: STATUS_PRODUCT_TEXT.Deleted,
    value: STATUS_PRODUCT_VALUE.Deleted,
  },
  Temporary: {
    text: STATUS_PRODUCT_TEXT.Temporary,
    value: STATUS_PRODUCT_VALUE.Temporary,
  },
  Preparing: {
    text: STATUS_PRODUCT_TEXT.Preparing,
    value: STATUS_PRODUCT_VALUE.Preparing,
  },
  B2BOnly: {
    text: STATUS_PRODUCT_TEXT.B2BOnly,
    value: STATUS_PRODUCT_VALUE.B2BOnly,
  },
};

// Klook email
export enum ORDER_CREATION_STATUS {
  SUCCESS = 'success',
  FAILED = 'failed',
  COMPLETED = 'completed',
  PROCESSING = 'processing',
}

// Woocommerce order.
export enum FulfillmentProcess {
  All = 'All',
  None = 'None',
  Processing = 'Processing',
  Failed = 'Failed',
  Completed = 'Completed',
  Pending = 'Pending',
  Cancelled = 'Canceled',
}

export enum FulfillmentStep {
  PurchaseEsim = 'Purchase Esim',
  PurchaseEsimComplete = 'Purchase Esim Complete',
  RedeemCoupon = 'Redeem Coupon',
  RedeemCouponComplete = 'Redeem Coupon Complete',
  SentEmail = 'Sent Email',
}

export enum SystemStep {
  CreateSapoOrder = 'Create sapo order',
}

export enum SystemStatus {
  Completed = 'Completed',
  Failed = 'Failed',
}

export enum FulfillmentStatusType {
  PurchaseEsim = 'purchaseStatus',
  PurchaseEsimComplete = 'purchaseCompleteStatus',
  RedeemCoupon = 'redeemCouponStatus',
  RedeemCouponComplete = 'redeemCouponCompleteStatus',
  SentEmail = 'sentEmailStatus',
}

// Serial import
export enum SerialStatus {
  Available = 'AVAILABLE',
  UnAvailable = 'UNAVAILABLE',
}

export enum SerialImportType {
  Standard = 'STANDARD',
  Recycled = 'RECYCLED',
}

// Serial export
export enum SerialExportType {
  FULL = 'FULL',
  OPS = 'OPS',
}

// Website
export enum Website {
  Global = 'esimgohub.com',
  VietNam = 'esim.gohub.vn',
  GohubCloud = 'gohub.cloud',
}

// Sku
