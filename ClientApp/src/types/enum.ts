// todo instead of duplicating this enums between client/server maybe we should implmenet something like this
// http://continuousdeveloper.com/2017/10/16/keeping-your-c-and-typescript-models-in-sync/

export enum DirectionTypes {
    ASC = 0,
    DESC = 1,
}

export enum SelectionsDynamicGridColumnTypes {
    Title = 0,
    Choices = 1,
    Category = 2,
    Location = 3,
    Allowance = 4,
    Price = 5,
    Difference = 6,
    Deadline = 7,
    Status = 8,
    Files = 9,
    Vendors = 10,
    Installers = 11,
    Jobsite = 12,
    Requests = 13,
    SelectedChoice = 14,
    SelectedDate = 15,
    Remaining = 16,
    Comments = 17,
    AllowanceId = 18,
    IsRequired = 19,
    RemainingAllowance = 20,
    AllowanceTotal = 21,
    AllowanceTitle = 22,
    JobId = 23,
    SelectionId = 24,
}

export enum DiscussionsLinkedTypes {
    All = 0,
    Selections = 1,
    ChangeOrders = 2,
    PurchaseOrders = 3,
    Warranty = 4,
    Bids = 5,
    DailyLogs = 6,
    ScheduleItems = 7,
    ToDos = 8,
    OwnerPayments = 9,
    Documents = 11,
    Videos = 12,
    Bills = 13,
    PhotoDocs = 14,
    BidPackages = 15,
}

export enum DocumentInstanceType {
    StandaloneDocument = 0,
    ChangeOrder = 1,
    Option = 2,
    SelectionChoice = 3,
    Selection = 4,
    Lead = 5,
    PurchaseOrder = 6,
    LeadEmailAttachment = 7,
    MailAttachment = 10,
    SubInsuranceCert = 11,
    SubTradeAgreement = 12,
    SubsFileCustomField = 13,
    Warranty = 14,
    WarrantyFileCustomField = 15,
    JobsiteFileCustomField = 16,
    LeadsFileCustomField = 17,
    ContactFileCustomField = 18,
    BidPackage = 19,
    Bid = 20,
    MessagesEmailAttachment = 21,
    GlobalDocument = 22,
    ScheduleItems = 23,
    CustomerInvoices = 25,
    LeadProposal = 26,
    DailyLog = 27,
    Estimate = 28,
    ToDo = 29,
    ToDoFileCustomField = 30,
    LienWaiver = 31,
    SignedLienWaiver = 32,
    POPaymentsFileCustomField = 33,
    ChangeOrdersFileCustomField = 34,
    ProposalFormatItem = 35,
    WarrantyService = 36,
    OwnerPaymentsFileCustomField = 37,
    CostCodeItems = 38,
    SelectionChoiceLineItems = 39,
    LoginFileCustomField = 40,
    DailyLogsFileCustomField = 41,
    RFI = 42,
    RFIResponse = 43,
    BulkExport = 44,
    SignedPurchaseOrderWithPayment = 45,
    SignedPurchaseOrderWithoutPayment = 46,
    RiskInsuranceBinder = 47,
    RiskInsuranceProposal = 48,
    RiskInsurancePolicy = 49,
    RiskInsuranceEndorsement = 50,
    TodoChecklistItem = 51,
    SelectionFileCustomField = 52,
    PurchaseOrderFileCustomField = 53,
    OwnerProfile = 54,
}


export enum CustomFieldAssociatedType {
    Lead = 0,
    LeadActivity = 1,
    JobsJobInfo = 2,
    Contacts = 3,
    Warranty = 4,
    Subs = 5,
    ToDos = 6,
    PurchaseOrderPayments = 7,
    ChangeOrders = 8,
    OwnerPayments = 9,
    InternalUsers = 10,
    DailyLogs = 11,
    RFIs = 12,
    Selections = 13,
    PurchaseOrders = 14
}

export enum CustomFieldType {
    Text = 0,
    MultiLineText = 1,
    CheckBox = 2,
    WholeNumber = 3,
    ListOfUsers = 4,
    ListOfSubs = 5,
    Date = 6,
    Currency = 7,
    File = 8,
    DropDownList = 9,
    DropDownCheckList = 10,
    Link = 11,
    MultiSelectUsers = 12,
    MultiSelectSubs = 13,
}

export enum HoSubAck {
    Pending = 1,
    PendingDescription = "PENDING",
    Reschedule = 2,
    RescheduleDescription = "RE-SCHEDULE REQUESTED",
    Approved = 3,
    ApprovedDescription = "APPROVED",
    BuilderApproved = 4,
    BuilderApprovedDescription = "ACCEPTED(ov)",
    InternallyAccepted = 5,
    InternallyAcceptedDescription = "INTERNALLY APPROVED"
}

export enum ApprovalStatusTypes {
    NotSubmitted = 1,
    NotSubmittedDescription = "Not Submitted",
    ServiceCompleted = 2,
    ServiceCompletedDescription = "Service Completed",
    SubReschedule = 3,
    SubRescheduleDescription = "Sub Reschedule",
    HomeownerReschedule = 4,
    HomeownerRescheduleDescription = "Owner Reschedule",
    NeedsReWork = 5,
    NeedsReWorkDescription = "Needs Re-Work",
    MeetsWarrantyStandards = 6,
    MeetsWarrantyStandardsDescription = "Meets Warranty Standards",
    ReadyForNextPhase = 7,
    ReadyForNextPhaseDescription = "Ready For Next Phase",
}

export enum MobileColors {
    None = 0,
    Red = 1,
    Green = 2,
    Black = 3,
    Yellow = 4,
    Gray = 5,
    Orange = 6
}

export enum SurveyQuestionType {
    Stars = 1,
    OneToTen = 2,
    YesNo = 3,
    OpenEnded = 4,
}