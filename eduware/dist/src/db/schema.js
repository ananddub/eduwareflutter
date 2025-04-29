"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tblMiscfee = exports.tblLogin = exports.tblLatefinedate = exports.tblItemreceipt = exports.tblItemmaster = exports.tblItemdetails = exports.tblItembill = exports.tblItem = exports.tblHousemaster = exports.tblHostelfeesetup = exports.tblHostelfeereport = exports.tblHostelfee = exports.tblHolidaysetup = exports.tblFrmname = exports.tblFeereport = exports.tblFeepaymentdetail = exports.tblFeenotes = exports.tblExportdir = exports.tblExamname = exports.tblExamfee = exports.tblEventlog = exports.tblEnttestresult = exports.tblEmprfid = exports.tblEmployeesetting = exports.tblEmpdellog = exports.tblEmpattsetting = exports.tblEmpatt = exports.tblEmailconfig = exports.tblEadmitcardnotes = exports.tblDemandnotes = exports.tblDemandbillstatus = exports.tblDemandbillsetup = exports.tblDayexpense = exports.tblDayboarderfeesetup = exports.tblContactbook = exports.tblClasshouseroll = exports.tblClass = exports.tblCheck = exports.tblCc = exports.tblCategory = exports.tblBook = exports.tblAttreport = exports.tblAttendance = exports.tblAssetinfo = exports.tblAdmitnotes = exports.tblAdmissionfeesetup = exports.tblAdmissionfeepmt = exports.tblAdmission = exports.tblAdmcertinotes = exports.tbl_photo = void 0;
exports.tblUserlog = exports.tblTransportfee = exports.tblTranscompsetup = exports.tblTestdate = exports.tblTc = exports.tblTablereport = exports.tblSwitches = exports.tblStudentreport = exports.tblStuconv = exports.tblStocksetup = exports.tblStockinventorylog = exports.tblStdtransdetail = exports.tblStdscheme = exports.tblStdmonthfeedetail = exports.tblStdmarks = exports.tblStdidcarddata = exports.tblStdhostelfeedetail = exports.tblStdfeemaster = exports.tblStddellog = exports.tblStdconcessionlog = exports.tblStdbackduesdetails = exports.tblStdattsetting = exports.tblStdatt = exports.tblSmstemplate = exports.tblSmsgatewaysetting = exports.tblSettingstatus = exports.tblSessionnotes = exports.tblSessionfeesetup = exports.tblSessionfeehostelsetup = exports.tblSessionfee = exports.tblSessionduedetail = exports.tblSessionclosingstatus = exports.tblSecurityfeesetup = exports.tblSecurityfeedetails = exports.tblSection = exports.tblSchoolsetup = exports.tblSalenotes = exports.tblRoutesetup = exports.tblRoute = exports.tblRfid = exports.tblReportdemandbill = exports.tblReportcard = exports.tblRegnotes = exports.tblRegistration = exports.tblReadmission = exports.tblProspectussale = exports.tblPronotes = exports.tblPrintdaysummary = exports.tblMonthlyfeesetup = exports.tblMonthfee = void 0;
exports.tblVehiclesetup = exports.tblUserroles = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.tbl_photo = (0, mysql_core_1.mysqlTable)('tbl_photo', {
    admno: (0, mysql_core_1.varchar)('admno', { length: 36 }).notNull(),
    name: (0, mysql_core_1.varchar)('name', { length: 255 }).notNull(),
    url: (0, mysql_core_1.varchar)('url', { length: 255 }).notNull(),
    size: (0, mysql_core_1.int)('size').notNull(),
    type: (0, mysql_core_1.varchar)('type', { length: 50 }).notNull(),
    createdAt: (0, mysql_core_1.datetime)('createdAt')
        .default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`)
        .notNull(),
});
exports.tblAdmcertinotes = (0, mysql_core_1.mysqlTable)('tbl_admcertinotes', {
    note1: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note5: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note6: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblAdmission = (0, mysql_core_1.mysqlTable)('tbl_admission', {
    regno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    name: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    roll: (0, mysql_core_1.int)().notNull(),
    house: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    section: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    dob: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    gender: (0, mysql_core_1.varchar)({ length: 6 }).notNull(),
    nationality: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    category: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    religion: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    bloodgroup: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    foccu: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    fannual: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    fmob: (0, mysql_core_1.varchar)({ length: 11 }).notNull(),
    mname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    moccu: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    mannual: (0, mysql_core_1.int)().notNull(),
    mmob: (0, mysql_core_1.varchar)({ length: 11 }).notNull(),
    gname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    goccu: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    gannual: (0, mysql_core_1.int)().notNull(),
    whatsapp: (0, mysql_core_1.varchar)({ length: 11 }),
    ptown: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    pps: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    pdist: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    pstate: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    ppin: (0, mysql_core_1.int)().notNull(),
    ctown: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    cps: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    cdist: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    cstate: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    cpin: (0, mysql_core_1.varchar)({ length: 6 }).notNull(),
    prevschool: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    prevclass: (0, mysql_core_1.varchar)({ length: 6 }).notNull(),
    doa: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    testmarks: (0, mysql_core_1.varchar)({ length: 3 }).notNull(),
    email: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    disability: (0, mysql_core_1.varchar)({ length: 4 }).notNull(),
    disatype: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    schlor: (0, mysql_core_1.int)().notNull(),
    schlorofferedby: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    hostel: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    transport: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    imagepath: (0, mysql_core_1.varchar)({ length: 300 }).notNull(),
    barcode: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    sessiondues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    active: (0, mysql_core_1.int)().notNull(),
    coa: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
});
exports.tblAdmissionfeepmt = (0, mysql_core_1.mysqlTable)('tbl_admissionfeepmt', {
    admsrno: (0, mysql_core_1.int)().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 60 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    paidamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    duesamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    totamount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    pmtmode: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    chno: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    bank: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 300 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    totamt: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    duesstatus: (0, mysql_core_1.varchar)({ length: 2 }).notNull(),
});
exports.tblAdmissionfeesetup = (0, mysql_core_1.mysqlTable)('tbl_admissionfeesetup', {
    class: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblAdmitnotes = (0, mysql_core_1.mysqlTable)('tbl_admitnotes', {
    note1: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblAssetinfo = (0, mysql_core_1.mysqlTable)('tbl_assetinfo', {
    itemId: (0, mysql_core_1.int)('item_id').notNull(),
    itemName: (0, mysql_core_1.varchar)('item_name', { length: 30 }).notNull(),
    itemSize: (0, mysql_core_1.varchar)('item_size', { length: 30 }).notNull(),
    oldQty: (0, mysql_core_1.int)('old_qty').notNull(),
    updatedQty: (0, mysql_core_1.int)('updated_qty').notNull(),
    newQty: (0, mysql_core_1.int)('new_qty').notNull(),
    action: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    dou: (0, mysql_core_1.datetime)({ mode: 'string' }).notNull(),
});
exports.tblAttendance = (0, mysql_core_1.mysqlTable)('tbl_attendance', {
    sr: (0, mysql_core_1.int)().autoincrement().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    sname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 3 }).notNull(),
    section: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    roll: (0, mysql_core_1.varchar)({ length: 2 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 9 }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 1 }).notNull(),
    adate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
}, (table) => [(0, mysql_core_1.unique)('sr').on(table.sr)]);
exports.tblAttreport = (0, mysql_core_1.mysqlTable)('tbl_attreport', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    name: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    sec: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    roll: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    date: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    intime: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    lateby: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    outtime: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    earlyby: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblBook = (0, mysql_core_1.mysqlTable)('tbl_book', {
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    book: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    price: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblCategory = (0, mysql_core_1.mysqlTable)('tbl_category', {
    itemcategory: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
});
exports.tblCc = (0, mysql_core_1.mysqlTable)('tbl_cc', {
    ccno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    sname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    dob: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    dobinwords: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    conduct: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    passclass: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    passyear: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    doi: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    barcodepath: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblCheck = (0, mysql_core_1.mysqlTable)('tbl_check', {
    intime: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    outtime: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
});
exports.tblClass = (0, mysql_core_1.mysqlTable)('tbl_class', {
    class: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    sr: (0, mysql_core_1.int)().notNull(),
});
exports.tblClasshouseroll = (0, mysql_core_1.mysqlTable)('tbl_classhouseroll', {
    class: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    house: (0, mysql_core_1.int)().notNull(),
    section: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    roll: (0, mysql_core_1.int)().notNull(),
});
exports.tblContactbook = (0, mysql_core_1.mysqlTable)('tbl_contactbook', {
    sr: (0, mysql_core_1.int)().autoincrement().notNull(),
    name: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    mobile: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    address: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    email: (0, mysql_core_1.varchar)({ length: 150 }).notNull(),
    description: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
}, (table) => [
    (0, mysql_core_1.primaryKey)({ columns: [table.sr], name: 'tbl_contactbook_sr' }),
]);
exports.tblDayboarderfeesetup = (0, mysql_core_1.mysqlTable)('tbl_dayboarderfeesetup', {
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblDayexpense = (0, mysql_core_1.mysqlTable)('tbl_dayexpense', {
    srno: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    particular: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    expby: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    voucher: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    status: (0, mysql_core_1.int)().notNull(),
});
exports.tblDemandbillsetup = (0, mysql_core_1.mysqlTable)('tbl_demandbillsetup', {
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    month: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblDemandbillstatus = (0, mysql_core_1.mysqlTable)('tbl_demandbillstatus', {
    month: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
});
exports.tblDemandnotes = (0, mysql_core_1.mysqlTable)('tbl_demandnotes', {
    note1: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
});
exports.tblEadmitcardnotes = (0, mysql_core_1.mysqlTable)('tbl_eadmitcardnotes', {
    note1: (0, mysql_core_1.varchar)({ length: 200 }),
});
exports.tblEmailconfig = (0, mysql_core_1.mysqlTable)('tbl_emailconfig', {
    user: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    pass: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    sendto: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
});
exports.tblEmpatt = (0, mysql_core_1.mysqlTable)('tbl_empatt', {
    empid: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 2 }).notNull(),
    intime: (0, mysql_core_1.time)().notNull(),
    lateby: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    outtime: (0, mysql_core_1.time)().notNull(),
    earlyby: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblEmpattsetting = (0, mysql_core_1.mysqlTable)('tbl_empattsetting', {
    intime: (0, mysql_core_1.time)().notNull(),
    lunchtime: (0, mysql_core_1.time)().notNull(),
    outtime: (0, mysql_core_1.time)().notNull(),
});
exports.tblEmpdellog = (0, mysql_core_1.mysqlTable)('tbl_empdellog', {
    admno: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    deldate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    reason: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblEmployeesetting = (0, mysql_core_1.mysqlTable)('tbl_employeesetting', {
    empid: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    name: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    gender: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    mob: (0, mysql_core_1.varchar)({ length: 12 }).notNull(),
    phone: (0, mysql_core_1.varchar)({ length: 12 }).notNull(),
    dob: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    qualification: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    designation: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    doj: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    town: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    po: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    ps: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    dist: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    pin: (0, mysql_core_1.int)().notNull(),
    state: (0, mysql_core_1.varchar)({ length: 40 }).notNull(),
    ppath: (0, mysql_core_1.varchar)({ length: 300 }).notNull(),
    idpath: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    barcode: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    active: (0, mysql_core_1.int)().notNull(),
});
exports.tblEmprfid = (0, mysql_core_1.mysqlTable)('tbl_emprfid', {
    empid: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    rfid: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
});
exports.tblEnttestresult = (0, mysql_core_1.mysqlTable)('tbl_enttestresult', {
    regno: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    marks: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    classfitfor: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    att: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    remarks: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
});
exports.tblEventlog = (0, mysql_core_1.mysqlTable)('tbl_eventlog', {
    sr: (0, mysql_core_1.int)().autoincrement().notNull(),
    uid: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    time: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    event: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
}, (table) => [(0, mysql_core_1.primaryKey)({ columns: [table.sr], name: 'tbl_eventlog_sr' })]);
exports.tblExamfee = (0, mysql_core_1.mysqlTable)('tbl_examfee', {
    class: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    apr: (0, mysql_core_1.int)().notNull(),
    may: (0, mysql_core_1.int)().notNull(),
    jun: (0, mysql_core_1.int)().notNull(),
    jul: (0, mysql_core_1.int)().notNull(),
    aug: (0, mysql_core_1.int)().notNull(),
    sep: (0, mysql_core_1.int)().notNull(),
    oct: (0, mysql_core_1.int)().notNull(),
    nov: (0, mysql_core_1.int)().notNull(),
    dece: (0, mysql_core_1.int)().notNull(),
    jan: (0, mysql_core_1.int)().notNull(),
    feb: (0, mysql_core_1.int)().notNull(),
    mar: (0, mysql_core_1.int)().notNull(),
    session: (0, mysql_core_1.int)().notNull(),
});
exports.tblExamname = (0, mysql_core_1.mysqlTable)('tbl_examname', {
    sr: (0, mysql_core_1.int)().notNull(),
    examname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblExportdir = (0, mysql_core_1.mysqlTable)('tbl_exportdir', {
    path: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblFeenotes = (0, mysql_core_1.mysqlTable)('tbl_feenotes', {
    note1: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
});
exports.tblFeepaymentdetail = (0, mysql_core_1.mysqlTable)('tbl_feepaymentdetail', {
    sl: (0, mysql_core_1.int)().autoincrement().notNull(),
    regno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    apr: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    may: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    jun: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    jul: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    aug: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    sep: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    oct: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    nov: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    dec: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    jan: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    fab: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    mar: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    netDues: (0, mysql_core_1.int)('net_dues').notNull(),
    session: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
}, (table) => [
    (0, mysql_core_1.primaryKey)({ columns: [table.sl], name: 'tbl_feepaymentdetail_sl' }),
]);
exports.tblFeereport = (0, mysql_core_1.mysqlTable)('tbl_feereport', {
    srno: (0, mysql_core_1.int)().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    month: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    monthfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    transport: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    transportfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    examfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    totamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    payment: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    dues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
});
exports.tblFrmname = (0, mysql_core_1.mysqlTable)('tbl_frmname', {
    menuname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    frmname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblHolidaysetup = (0, mysql_core_1.mysqlTable)('tbl_holidaysetup', {
    hname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    hcode: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    totDay: (0, mysql_core_1.int)('tot_day').notNull(),
    startDate: (0, mysql_core_1.date)('start_date', { mode: 'string' }).notNull(),
    endDate: (0, mysql_core_1.date)('end_date', { mode: 'string' }).notNull(),
});
exports.tblHostelfee = (0, mysql_core_1.mysqlTable)('tbl_hostelfee', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    apr: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    may: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    jun: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    jul: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    aug: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    sep: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    oct: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    nov: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    dece: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    jan: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    feb: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    mar: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblHostelfeereport = (0, mysql_core_1.mysqlTable)('tbl_hostelfeereport', {
    srno: (0, mysql_core_1.int)().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    month: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    monthfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    totamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    payment: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    billdues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    dues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
});
exports.tblHostelfeesetup = (0, mysql_core_1.mysqlTable)('tbl_hostelfeesetup', {
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblHousemaster = (0, mysql_core_1.mysqlTable)('tbl_housemaster', {
    house: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    colour: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblItem = (0, mysql_core_1.mysqlTable)('tbl_item', {
    itemname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    itemcategory: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
});
exports.tblItembill = (0, mysql_core_1.mysqlTable)('tbl_itembill', {
    regno: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    rcpt: (0, mysql_core_1.int)().notNull(),
    itemName: (0, mysql_core_1.varchar)('item_name', { length: 20 }).notNull(),
    itemSize: (0, mysql_core_1.varchar)('item_size', { length: 5 }).notNull(),
    quantity: (0, mysql_core_1.int)().notNull(),
    totalAmount: (0, mysql_core_1.int)('total_amount').notNull(),
    payment: (0, mysql_core_1.int)().notNull(),
    dues: (0, mysql_core_1.int)().notNull(),
    purchaseDate: (0, mysql_core_1.date)('purchase_date', { mode: 'string' }).notNull(),
});
exports.tblItemdetails = (0, mysql_core_1.mysqlTable)('tbl_itemdetails', {
    itemname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    price: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
});
exports.tblItemmaster = (0, mysql_core_1.mysqlTable)('tbl_itemmaster', {
    itemid: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    itemname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    itemcat: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    itemsize: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    itemprice: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    itemtqty: (0, mysql_core_1.int)().notNull(),
    qty: (0, mysql_core_1.int)().notNull(),
    remarks: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
});
exports.tblItemreceipt = (0, mysql_core_1.mysqlTable)('tbl_itemreceipt', {
    srno: (0, mysql_core_1.int)().notNull(),
    name: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    particular: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    quantity: (0, mysql_core_1.int)().notNull(),
    price: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    totamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    pament: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    dues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    totalamt: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    saledate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    backdues: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    pmtmode: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    refno: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
});
exports.tblLatefinedate = (0, mysql_core_1.mysqlTable)('tbl_latefinedate', {
    lday: (0, mysql_core_1.int)().notNull(),
});
exports.tblLogin = (0, mysql_core_1.mysqlTable)('tbl_login', {
    uid: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    pwd: (0, mysql_core_1.varchar)({ length: 128 }).notNull(),
    utype: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblMiscfee = (0, mysql_core_1.mysqlTable)('tbl_miscfee', {
    class: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    apr: (0, mysql_core_1.int)().notNull(),
    may: (0, mysql_core_1.int)().notNull(),
    jun: (0, mysql_core_1.int)().notNull(),
    jul: (0, mysql_core_1.int)().notNull(),
    aug: (0, mysql_core_1.int)().notNull(),
    sep: (0, mysql_core_1.int)().notNull(),
    oct: (0, mysql_core_1.int)().notNull(),
    nov: (0, mysql_core_1.int)().notNull(),
    dece: (0, mysql_core_1.int)().notNull(),
    jan: (0, mysql_core_1.int)().notNull(),
    feb: (0, mysql_core_1.int)().notNull(),
    mar: (0, mysql_core_1.int)().notNull(),
});
exports.tblMonthfee = (0, mysql_core_1.mysqlTable)('tbl_monthfee', {
    admno: (0, mysql_core_1.varchar)({ length: 16 }),
    apr: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    may: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    jun: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    jul: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    aug: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    sep: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    oct: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    nov: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    dece: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    jan: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    feb: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    mar: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    billdues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    session: (0, mysql_core_1.varchar)({ length: 9 }),
});
exports.tblMonthlyfeesetup = (0, mysql_core_1.mysqlTable)('tbl_monthlyfeesetup', {
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    tuitionfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    libraryfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    compfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    labfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    sclassfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    examfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    miscfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    fine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    transfine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblPrintdaysummary = (0, mysql_core_1.mysqlTable)('tbl_printdaysummary', {
    fdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    todate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    prospectus: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    newadm: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    itemsale: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    readm: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    tuition: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    transport: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    hostel: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    latefee: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    exam: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    misc: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    backdues: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    total: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    billdues: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    exp: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    bycash: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblPronotes = (0, mysql_core_1.mysqlTable)('tbl_pronotes', {
    note1: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblProspectussale = (0, mysql_core_1.mysqlTable)('tbl_prospectussale', {
    rcptNo: (0, mysql_core_1.int)('rcpt_no').default(0).notNull(),
    formNo: (0, mysql_core_1.int)('form_no').default(0).notNull(),
    name: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    phone: (0, mysql_core_1.varchar)({ length: 12 }).notNull(),
    town: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    po: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    ps: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    dist: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    pin: (0, mysql_core_1.int)().notNull(),
    totValue: (0, mysql_core_1.int)('tot_value').notNull(),
    totQty: (0, mysql_core_1.int)('tot_qty').notNull(),
    totAmount: (0, mysql_core_1.float)('tot_amount', { precision: 7, scale: 2 }).notNull(),
    qty: (0, mysql_core_1.int)().notNull(),
    classes: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    pdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    regStatus: (0, mysql_core_1.varchar)('reg_status', { length: 3 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    pmtmode: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    refno: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
});
exports.tblReadmission = (0, mysql_core_1.mysqlTable)('tbl_readmission', {
    readmsrno: (0, mysql_core_1.int)().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    totamount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    payment: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    advance: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    dues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 300 }).notNull(),
    rdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
});
exports.tblRegistration = (0, mysql_core_1.mysqlTable)('tbl_registration', {
    formNo: (0, mysql_core_1.int)('form_no').notNull(),
    regno: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    sname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    gender: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    dob: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    fqual: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    foccu: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    mname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    mqual: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    moccu: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    gname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    gqual: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    goccu: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    pTown: (0, mysql_core_1.varchar)('p_town', { length: 100 }).notNull(),
    pPo: (0, mysql_core_1.varchar)('p_po', { length: 100 }).notNull(),
    pPs: (0, mysql_core_1.varchar)('p_ps', { length: 50 }).notNull(),
    pDist: (0, mysql_core_1.varchar)('p_dist', { length: 50 }).notNull(),
    pPin: (0, mysql_core_1.int)('p_pin').notNull(),
    pState: (0, mysql_core_1.varchar)('p_state', { length: 50 }).notNull(),
    cTown: (0, mysql_core_1.varchar)('c_town', { length: 100 }).notNull(),
    cPo: (0, mysql_core_1.varchar)('c_po', { length: 100 }).notNull(),
    cPs: (0, mysql_core_1.varchar)('c_ps', { length: 50 }).notNull(),
    cDist: (0, mysql_core_1.varchar)('c_dist', { length: 100 }).notNull(),
    cPin: (0, mysql_core_1.int)('c_pin').notNull(),
    cState: (0, mysql_core_1.varchar)('c_state', { length: 50 }).notNull(),
    contact1: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    contact2: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    prevschool: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    prevclass: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    regdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    regincharge: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    testdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    testtime: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 3 }).notNull(),
    imagePath: (0, mysql_core_1.varchar)('image_path', { length: 400 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblRegnotes = (0, mysql_core_1.mysqlTable)('tbl_regnotes', {
    note1: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblReportcard = (0, mysql_core_1.mysqlTable)('tbl_reportcard', {
    admno: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    name: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    section: (0, mysql_core_1.varchar)({ length: 1 }).notNull(),
    roll: (0, mysql_core_1.varchar)({ length: 2 }).notNull(),
    dob: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    fmob: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    examname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    rdate: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
});
exports.tblReportdemandbill = (0, mysql_core_1.mysqlTable)('tbl_reportdemandbill', {
    r1: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    r2: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    r3: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    r4: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    r5: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r6: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r7: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r8: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r9: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    r10: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r11: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    r12: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r13: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    r14: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r15: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r16: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    r17: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblRfid = (0, mysql_core_1.mysqlTable)('tbl_rfid', {
    admno: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    srfid: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    prfid: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
});
exports.tblRoute = (0, mysql_core_1.mysqlTable)('tbl_route', {
    route: (0, mysql_core_1.varchar)({ length: 50 }),
});
exports.tblRoutesetup = (0, mysql_core_1.mysqlTable)('tbl_routesetup', {
    rtid: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    vno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    toDes: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    fair: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblSalenotes = (0, mysql_core_1.mysqlTable)('tbl_salenotes', {
    note1: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 400 }).notNull(),
});
exports.tblSchoolsetup = (0, mysql_core_1.mysqlTable)('tbl_schoolsetup', {
    regno: (0, mysql_core_1.varchar)({ length: 50 }),
    session: (0, mysql_core_1.varchar)({ length: 10 }),
    title: (0, mysql_core_1.varchar)({ length: 50 }),
    branch: (0, mysql_core_1.varchar)({ length: 50 }),
    address: (0, mysql_core_1.text)(),
    city: (0, mysql_core_1.varchar)({ length: 20 }),
    state: (0, mysql_core_1.varchar)({ length: 20 }),
    country: (0, mysql_core_1.varchar)({ length: 20 }),
    pincode: (0, mysql_core_1.varchar)({ length: 10 }),
    contact1: (0, mysql_core_1.varchar)({ length: 15 }),
    contact2: (0, mysql_core_1.varchar)({ length: 15 }),
    email: (0, mysql_core_1.varchar)({ length: 30 }),
    website: (0, mysql_core_1.varchar)({ length: 30 }),
    setupDate: (0, mysql_core_1.date)('setup_date', { mode: 'string' }).notNull(),
    shortcode: (0, mysql_core_1.varchar)({ length: 3 }).notNull(),
    punchline: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblSection = (0, mysql_core_1.mysqlTable)('tbl_section', {
    section: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
}, (table) => [
    (0, mysql_core_1.primaryKey)({ columns: [table.section], name: 'tbl_section_section' }),
    (0, mysql_core_1.unique)('section').on(table.section),
    (0, mysql_core_1.unique)('section_2').on(table.section),
]);
exports.tblSecurityfeedetails = (0, mysql_core_1.mysqlTable)('tbl_securityfeedetails', {
    rcptno: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 13 }).notNull(),
    securityfee: (0, mysql_core_1.int)().notNull(),
    paidinclass: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    paidvia: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    paiddate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 9 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
});
exports.tblSecurityfeesetup = (0, mysql_core_1.mysqlTable)('tbl_securityfeesetup', {
    class: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    fee: (0, mysql_core_1.int)().notNull(),
});
exports.tblSessionclosingstatus = (0, mysql_core_1.mysqlTable)('tbl_sessionclosingstatus', {
    sr: (0, mysql_core_1.int)().autoincrement().notNull(),
    session: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    cdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
}, (table) => [
    (0, mysql_core_1.primaryKey)({
        columns: [table.sr],
        name: 'tbl_sessionclosingstatus_sr',
    }),
]);
exports.tblSessionduedetail = (0, mysql_core_1.mysqlTable)('tbl_sessionduedetail', {
    sr: (0, mysql_core_1.int)().autoincrement().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    mmonth: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    mamt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    mfine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    tmonth: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    tamt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    tfine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    hmonth: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    hamt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    hfine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    backdues: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    totamt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    clossingdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
}, (table) => [
    (0, mysql_core_1.primaryKey)({ columns: [table.sr], name: 'tbl_sessionduedetail_sr' }),
]);
exports.tblSessionfee = (0, mysql_core_1.mysqlTable)('tbl_sessionfee', {
    sr: (0, mysql_core_1.int)().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    amt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    pmttype: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    totamt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    payment: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    dues: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    duesstatus: (0, mysql_core_1.varchar)({ length: 2 }).notNull(),
    pmtmode: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    refno: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
});
exports.tblSessionfeehostelsetup = (0, mysql_core_1.mysqlTable)('tbl_sessionfeehostelsetup', {
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 40 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblSessionfeesetup = (0, mysql_core_1.mysqlTable)('tbl_sessionfeesetup', {
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    feetype: (0, mysql_core_1.varchar)({ length: 40 }).notNull(),
    amount: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
});
exports.tblSessionnotes = (0, mysql_core_1.mysqlTable)('tbl_sessionnotes', {
    note1: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    note2: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    note3: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    note4: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblSettingstatus = (0, mysql_core_1.mysqlTable)('tbl_settingstatus', {
    frmname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    status: (0, mysql_core_1.int)().notNull(),
});
exports.tblSmsgatewaysetting = (0, mysql_core_1.mysqlTable)('tbl_smsgatewaysetting', {
    uid: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    pwd: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    sid: (0, mysql_core_1.varchar)({ length: 6 }).notNull(),
    adminno: (0, mysql_core_1.bigint)({ mode: 'number' }).notNull(),
    testmob: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblSmstemplate = (0, mysql_core_1.mysqlTable)('tbl_smstemplate', {
    eid: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    tid: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    tname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    tsms: (0, mysql_core_1.varchar)({ length: 160 }).notNull(),
});
exports.tblStdatt = (0, mysql_core_1.mysqlTable)('tbl_stdatt', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 2 }).notNull(),
    intime: (0, mysql_core_1.time)().notNull(),
    lateby: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    outtime: (0, mysql_core_1.time)().notNull(),
    earlyby: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblStdattsetting = (0, mysql_core_1.mysqlTable)('tbl_stdattsetting', {
    intime: (0, mysql_core_1.time)().notNull(),
    outtime: (0, mysql_core_1.time)().notNull(),
    lunchtime: (0, mysql_core_1.time)().notNull(),
});
exports.tblStdbackduesdetails = (0, mysql_core_1.mysqlTable)('tbl_stdbackduesdetails', {
    admno: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    monthfeesr: (0, mysql_core_1.int)().notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    backduesdetails: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblStdconcessionlog = (0, mysql_core_1.mysqlTable)('tbl_stdconcessionlog', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    monthfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    transportfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    hostelfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    concby: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblStddellog = (0, mysql_core_1.mysqlTable)('tbl_stddellog', {
    admno: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    deldate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    reason: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
});
exports.tblStdfeemaster = (0, mysql_core_1.mysqlTable)('tbl_stdfeemaster', {
    admno: (0, mysql_core_1.varchar)({ length: 16 }),
    monthfee: (0, mysql_core_1.int)(),
    transportfee: (0, mysql_core_1.int)(),
    hostelfee: (0, mysql_core_1.int)(),
    session: (0, mysql_core_1.varchar)({ length: 9 }),
});
exports.tblStdhostelfeedetail = (0, mysql_core_1.mysqlTable)('tbl_stdhostelfeedetail', {
    sr: (0, mysql_core_1.int)().autoincrement().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    pdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    hmonth: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    hostelfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    backdues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    fine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    total: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    paidamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    dues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
}, (table) => [
    (0, mysql_core_1.primaryKey)({ columns: [table.sr], name: 'tbl_stdhostelfeedetail_sr' }),
]);
exports.tblStdidcarddata = (0, mysql_core_1.mysqlTable)('tbl_stdidcarddata', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    name: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    mname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    sec: (0, mysql_core_1.varchar)({ length: 5 }).notNull(),
    roll: (0, mysql_core_1.int)().notNull(),
    dob: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    type: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    bgroup: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    route: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    destination: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    vill: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    ps: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    dist: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    pin: (0, mysql_core_1.int)().notNull(),
    state: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    mob: (0, mysql_core_1.varchar)({ length: 11 }).notNull(),
    photo: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    barcode: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
});
exports.tblStdmarks = (0, mysql_core_1.mysqlTable)('tbl_stdmarks', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    examtype: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    english: (0, mysql_core_1.int)().notNull(),
    hindi: (0, mysql_core_1.int)().notNull(),
    maths: (0, mysql_core_1.int)().notNull(),
    science: (0, mysql_core_1.int)().notNull(),
    sst: (0, mysql_core_1.int)().notNull(),
    gk: (0, mysql_core_1.int)().notNull(),
    compscience: (0, mysql_core_1.int)().notNull(),
    maxmarks: (0, mysql_core_1.int)().notNull(),
    passmarks: (0, mysql_core_1.int)().notNull(),
    tmo: (0, mysql_core_1.int)().notNull(),
    percentage: (0, mysql_core_1.float)({ precision: 3, scale: 1 }).notNull(),
    grade: (0, mysql_core_1.varchar)({ length: 2 }).notNull(),
    rank: (0, mysql_core_1.int)().notNull(),
    att: (0, mysql_core_1.int)().notNull(),
});
exports.tblStdmonthfeedetail = (0, mysql_core_1.mysqlTable)('tbl_stdmonthfeedetail', {
    sr: (0, mysql_core_1.int)().autoincrement().notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    pdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    tuitionfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    libraryfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    compfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    labfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    sclassfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    examfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    miscfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    sessionfee: (0, mysql_core_1.float)({ precision: 10, scale: 2 }).notNull(),
    fmonth: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    monthfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    tmonth: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    transfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    hmonth: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    hostelfee: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    backdues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    fine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    tfine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    hfine: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    total: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    concession: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    netamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    paidamt: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    dues: (0, mysql_core_1.float)({ precision: 7, scale: 2 }).notNull(),
    amtinword: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    incharge: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    pmtmode: (0, mysql_core_1.varchar)({ length: 20 }),
    pmtrefno: (0, mysql_core_1.varchar)({ length: 30 }),
}, (table) => [
    (0, mysql_core_1.primaryKey)({ columns: [table.sr], name: 'tbl_stdmonthfeedetail_sr' }),
]);
exports.tblStdscheme = (0, mysql_core_1.mysqlTable)('tbl_stdscheme', {
    admno: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    mscheme: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    mfee: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    tscheme: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    tfee: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    hscheme: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    hfee: (0, mysql_core_1.float)({ precision: 9, scale: 2 }).notNull(),
    session: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
});
exports.tblStdtransdetail = (0, mysql_core_1.mysqlTable)('tbl_stdtransdetail', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    route: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    destination: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
});
exports.tblStockinventorylog = (0, mysql_core_1.mysqlTable)('tbl_stockinventorylog', {
    itemcategory: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    itemname: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    itemsize: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    oldQty: (0, mysql_core_1.int)('old_qty').notNull(),
    updatedQty: (0, mysql_core_1.int)('updated_qty').notNull(),
    newQty: (0, mysql_core_1.int)('new_qty').notNull(),
    action: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    dou: (0, mysql_core_1.datetime)({ mode: 'string' }).notNull(),
});
exports.tblStocksetup = (0, mysql_core_1.mysqlTable)('tbl_stocksetup', {
    itemId: (0, mysql_core_1.int)('item_id').notNull(),
    itemName: (0, mysql_core_1.varchar)('item_name', { length: 50 }).notNull(),
    itemSize: (0, mysql_core_1.varchar)('item_size', { length: 50 }).notNull(),
    itemPrice: (0, mysql_core_1.float)('item_price', { precision: 7, scale: 2 }).notNull(),
    itemCount: (0, mysql_core_1.int)('item_count').notNull(),
    itemStatus: (0, mysql_core_1.varchar)('item_status', { length: 20 }),
    thresholdQuantity: (0, mysql_core_1.int)('threshold_quantity').notNull(),
});
exports.tblStuconv = (0, mysql_core_1.mysqlTable)('tbl_stuconv', {
    regno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    routeid: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
});
exports.tblStudentreport = (0, mysql_core_1.mysqlTable)('tbl_studentreport', {
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    name: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    class: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    sec: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    roll: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    gender: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    address: (0, mysql_core_1.varchar)({ length: 200 }).notNull(),
    mobile: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    date: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    r1: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
});
exports.tblSwitches = (0, mysql_core_1.mysqlTable)('tbl_switches', {
    frmmod: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    opt: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    status: (0, mysql_core_1.int)().notNull(),
});
exports.tblTablereport = (0, mysql_core_1.mysqlTable)('tbl_tablereport', {
    sl: (0, mysql_core_1.int)().notNull(),
    r1: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r2: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r3: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r4: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r5: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r6: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r7: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r8: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r9: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r10: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r11: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r12: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r13: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r14: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r15: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r16: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r17: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r18: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r19: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r20: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r21: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r22: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r23: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r24: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r25: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r26: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r27: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r28: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r30: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r31: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r32: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r33: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r34: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    r35: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblTc = (0, mysql_core_1.mysqlTable)('tbl_tc', {
    tcno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    admno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    sname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    fname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    mname: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    nationality: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    scst: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    dofa: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    dofaclass: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    dob: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    dobinwords: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    lastclass: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    lastclassinwords: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    lastschbrd: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    failed: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    subjectstudied: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    qualiforpromo: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    promoclass: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    promoclassinwords: (0, mysql_core_1.varchar)({ length: 25 }).notNull(),
    monthuptopaid: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    feeconcession: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    totworkdays: (0, mysql_core_1.int)().notNull(),
    totworkdayspresent: (0, mysql_core_1.int)().notNull(),
    ncc: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    games: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    genconduct: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    doacerti: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    doicerti: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    reason: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    remarks: (0, mysql_core_1.varchar)({ length: 70 }).notNull(),
    prepby: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    checkby: (0, mysql_core_1.varchar)({ length: 50 }).notNull(),
    barcodepath: (0, mysql_core_1.varchar)({ length: 300 }).notNull(),
});
exports.tblTestdate = (0, mysql_core_1.mysqlTable)('tbl_testdate', {
    etid: (0, mysql_core_1.int)().notNull(),
    class: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    testdate: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    testtime: (0, mysql_core_1.varchar)({ length: 15 }).notNull(),
    subject: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    venue: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
    status: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
});
exports.tblTranscompsetup = (0, mysql_core_1.mysqlTable)('tbl_transcompsetup', {
    compname: (0, mysql_core_1.varchar)({ length: 100 }),
    owner: (0, mysql_core_1.varchar)({ length: 100 }),
    address: (0, mysql_core_1.varchar)({ length: 200 }),
    contact1: (0, mysql_core_1.varchar)({ length: 12 }),
    contact2: (0, mysql_core_1.varchar)({ length: 12 }),
    email: (0, mysql_core_1.varchar)({ length: 100 }),
    website: (0, mysql_core_1.varchar)({ length: 100 }),
    setupDate: (0, mysql_core_1.date)('setup_date', { mode: 'string' }),
});
exports.tblTransportfee = (0, mysql_core_1.mysqlTable)('tbl_transportfee', {
    admno: (0, mysql_core_1.varchar)({ length: 16 }),
    apr: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    may: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    jun: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    jul: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    aug: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    sep: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    oct: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    nov: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    dece: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    jan: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    feb: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    mar: (0, mysql_core_1.float)({ precision: 7, scale: 2 }),
    session: (0, mysql_core_1.varchar)({ length: 9 }),
});
exports.tblUserlog = (0, mysql_core_1.mysqlTable)('tbl_userlog', {
    sr: (0, mysql_core_1.int)().notNull(),
    uid: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    date: (0, mysql_core_1.date)({ mode: 'string' }).notNull(),
    logintime: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    logouttime: (0, mysql_core_1.varchar)({ length: 10 }).notNull(),
    duration: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
}, (table) => [(0, mysql_core_1.primaryKey)({ columns: [table.sr], name: 'tbl_userlog_sr' })]);
exports.tblUserroles = (0, mysql_core_1.mysqlTable)('tbl_userroles', {
    user: (0, mysql_core_1.varchar)({ length: 40 }).notNull(),
    menuname: (0, mysql_core_1.varchar)({ length: 100 }).notNull(),
});
exports.tblVehiclesetup = (0, mysql_core_1.mysqlTable)('tbl_vehiclesetup', {
    vid: (0, mysql_core_1.int)().notNull(),
    vno: (0, mysql_core_1.varchar)({ length: 20 }).notNull(),
    vtitle: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    vdriver: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    vconductor: (0, mysql_core_1.varchar)({ length: 30 }).notNull(),
    mob: (0, mysql_core_1.varchar)({ length: 11 }).notNull(),
});
//# sourceMappingURL=schema.js.map