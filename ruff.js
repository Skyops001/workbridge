{
  _id: ObjectId('6a73177ab7c4070b6f1ab75f'),
  type: 'ALERT_CONFIGURATION',
  active: true,
  metadata: [
    {
      key: 'PAYMENT_REMINDER',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      users: [
        'Dealer'
      ],
      metadata: [
        {
          key: 'PAYMENT_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: false
        },
        {
          key: 'DEALER_INSURANCE_EXPIRY_SCHEDULER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: false
        },
        {
          key: 'CHANGE_PAYMENT_ALERT',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'CHARGE_PAYMENTS_ALERT_CREATION',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'LOAN_FUNDING_COMPLETED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'PAYMENTS_AUTOMATED_EMAILS',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        }
      ],
      label: 'Payment Reminders'
    },
    {
      key: 'TITLE_NOTIFICATION',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      metadata: [
        {
          key: 'TITLE_SHIPPED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'AUTOMATED_TITLE_ALERTS',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: '  TITLE_RELEASE_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Title Release',
          status: 'approved'
        },
        {
          key: '  TITLE_RELEASE_REJECTED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Title Release',
          status: 'rejected'
        },
        {
          key: 'ASSET_EXTENSION_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Asset Extension',
          status: 'approved'
        },
        {
          key: 'ASSET_EXTENSION_REJECTED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Asset Extension',
          status: 'rejected'
        },
        {
          key: 'RESCHEDULE_PAYMENT_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Reschedule Payment',
          status: 'approved'
        },
        {
          key: 'RESCHEDULE_PAYMENT_REJECTED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Reschedule Payment',
          status: 'rejected'
        },
        {
          key: 'CANCEL_PAYMENT_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Cancel Payment',
          status: 'approved'
        },
        {
          key: 'CANCEL_PAYMENT_REJECTED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Cancel Payment',
          status: 'rejected'
        }
      ],
      label: 'Title Notifications',
      users: [
        'Dealer'
      ]
    },
    {
      key: 'DEALER_REQUESTS',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      users: [
        'Dealer'
      ],
      metadata: [
        {
          key: 'SEND_CUSTOMER_EMAIL',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'REJECT_VEHICLE_BY_VIN',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'FUNDING_REQUEST_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'NEW_BANK_ADDED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'NEW_SUPPLIER_ADDED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'LOAN_FUNDING_ALERT',
          active: true,
          triggerEmails: true,
          triggerTextMessages: false
        },
        {
          key: 'ASSET_FUNDING_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'FUNDING_REQUEST_APPROVED_REJECTED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: false
        },
        {
          key: 'CREDIT_HOLDER_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SUBMITED_FOR_FUNDING',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'REJECT_ASSET',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        }
      ],
      label: 'Dealer Requests'
    },
    {
      key: 'TASK_NOTIFICATION',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      users: [
        'Dealer',
        'Supplier'
      ],
      metadata: [
        {
          key: 'NEW_TASK_BY_VIN',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SEND_TASK_TO_SUPPLIER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'TASK_REJECT',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'RESCINDED_PAYMENT',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'Cancel Payment',
          status: 'rejected'
        },
        {
          key: 'SEND_TASK_REMINDER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        }
      ],
      label: 'Tasks'
    },
    {
      key: 'FUNDING_REQUEST',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      metadata: [
        {
          key: 'FUNDING_REQUEST_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
          {
          key: 'FUNDING_REQUEST_DELETE',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        }
      ],
      label: 'Funding Requests',
      users: [
        'Supplier'
      ]
    },
    {
      key: 'PAYMENTS',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      metadata: [],
      label: 'Payments',
      users: [
        'Supplier'
      ]
    },
    {
      key: 'LENDER_To_DEALER_ALERTS',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      metadata: [
        {
          key: 'WELL_COME_EMAIL',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'ADD_DEALER_PRINCIPAL',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SEND_MESSAGE_AND_EMAIL_TO_DEALER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: false
        },
        {
          key: 'USER_AUCTION_REJECTED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true,
          taskType: 'approve user action',
          status: 'rejected'
        },
        {
          key: 'SUPPLIER_CREATION',
          active: true,
          triggerEmails: false,
          triggerTextMessages: true
        },
        {
          key: 'SUPPLIER_User_REGISTATION',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'LOGIN',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SEND_OTP_FOR__PRINCIPLA_DEALER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'VERIFY_LOGIN_OTP',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SEND_OTP_TO_EMAIL',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'DEALER_ONBOARDING',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SAVE_DOCUMENT',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'CREATE_RELEASE_PAYMENT_TASK',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'ASSET_SOLD',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SENDEMAIL_TO_LENDER',
          active: true,
          triggerEmails: false,
          triggerTextMessages: true
        },
        {
          key: 'DEALER_STATUS_UPDATE',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'ADD_RSM',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'CREATE_RELEASE_PAYMENT',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SEND_BULK_EMAILS_TO_RSM',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SUBMIT_PAYMENTS',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'RESCHEDILED_PAYMENTS',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SAVE_DEALER_IN_LEVER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'RESEND_EMAIL',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'APPROVE_PROSPECT_DEALER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'FAILED_PAYMENT_TASK_CREATION',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'CHECK_RELEASE_PAYMENT_FOR_SUPPLIER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'CREATE_SUPPLIER_IN_LEVER',
          active: true,
          triggerEmails: false,
          triggerTextMessages: true
        },
        {
          key: 'CSV_FILE_PARSE_SYNC_DATA',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'SYNC_TKS_VEHICLE_BY_METHOD',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'NEW_LOAN_REQUEST',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'FORGOT_CREDENTIALS',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'CREATE_TASK_WITH_EMAIL',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'DEALER_APPROVAL',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        }
      ],
      label: 'Payments',
      users: []
    },
    {
      key: 'PAl_REMINDER',
      active: true,
      triggerEmails: true,
      triggerTextMessages: true,
      users: [
        'Dealer'
      ],
      metadata: [
        {
          key: 'PAYMENT_APPROVED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: false
        },
        {
          key: 'DEALER_INSURANCE_EXPIRY_SCHEDULER',
          active: true,
          triggerEmails: true,
          triggerTextMessages: false
        },
        {
          key: 'CHANGE_PAYMENT_ALERT',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'CHARGE_PAYMENTS_ALERT_CREATION',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'LOAN_FUNDING_COMPLETED',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        },
        {
          key: 'PAYMENTS_AUTOMATED_EMAILS',
          active: true,
          triggerEmails: true,
          triggerTextMessages: true
        }
      ],
      label: 'Pay Reminders'
    }
  ]
}